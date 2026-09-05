'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

interface GameOfLifeProps
  extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  size?: number;
  interval?: number;
  backgroundColor?: string;
  cellColor?: string;
  density?: number; // Value between 0 and 1, default 0.1 (10% cells alive)
}

const GameOfLife = React.forwardRef<HTMLCanvasElement, GameOfLifeProps>(
  (
    {
      className,
      size = 12,
      interval = 150,
      backgroundColor = '#000000',
      cellColor = '#1e1e1e',
      density = 0.1,
      ...props
    },
    ref
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const frameRef = React.useRef<number>(0);
    const gridRef = React.useRef<boolean[][]>([]);
    const lastUpdateRef = React.useRef<number>(0);
    const transitionRef = React.useRef<{
      from: boolean[][];
      to: boolean[][];
      progress: number;
    } | null>(null);
    const [isReady, setIsReady] = React.useState(false);
    const isInitialRender = React.useRef(true);

    React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const parent = canvas.parentElement;
      if (!parent) return;

      const cellSize = size;

      const measure = () => {
        const host = canvas.parentElement ?? parent;
        const nextWidth = host.clientWidth;
        const nextHeight = host.clientHeight;
        return {
          width: nextWidth,
          height: nextHeight,
          cols: Math.max(0, Math.floor(nextWidth / cellSize)),
          rows: Math.max(0, Math.floor(nextHeight / cellSize)),
        };
      };

      const sameSize = (grid: boolean[][], cols: number, rows: number) =>
        grid.length === cols && (grid[0]?.length ?? 0) === rows;

      const createGrid = (): boolean[][] => {
        const { width, height, cols, rows } = measure();
        canvas.width = width;
        canvas.height = height;

        if (cols === 0 || rows === 0) return [];

        return Array.from({ length: cols }, () =>
          Array.from({ length: rows }, () => Math.random() < density)
        );
      };

      const updateGrid = (grid: boolean[][]): boolean[][] => {
        const cols = grid.length;
        const rows = grid[0]?.length ?? 0;
        if (cols === 0 || rows === 0) return grid;

        const next: boolean[][] = Array.from({ length: cols }, () =>
          new Array(rows).fill(false)
        );

        for (let i = 0; i < cols; i++) {
          const col = grid[i];
          if (!col) continue;

          for (let j = 0; j < rows; j++) {
            let neighbors = 0;

            for (let dx = -1; dx <= 1; dx++) {
              for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;
                const nx = (i + dx + cols) % cols;
                const ny = (j + dy + rows) % rows;
                neighbors += grid[nx]?.[ny] ? 1 : 0;
              }
            }

            next[i][j] = neighbors === 3 || (col[j] && neighbors === 2);
          }
        }

        return next;
      };

      const interpolateGrids = (fromGrid: boolean[][], toGrid: boolean[][]) => {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cols = Math.min(fromGrid.length, toGrid.length);
        ctx.fillStyle = cellColor;

        for (let i = 0; i < cols; i++) {
          const fromCol = fromGrid[i];
          const toCol = toGrid[i];
          if (!fromCol || !toCol) continue;

          const rows = Math.min(fromCol.length, toCol.length);
          for (let j = 0; j < rows; j++) {
            if (fromCol[j] || toCol[j]) {
              ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
          }
        }
      };

      const render = (grid: boolean[][]) => {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = cellColor;

        for (let i = 0; i < grid.length; i++) {
          const col = grid[i];
          if (!col) continue;
          for (let j = 0; j < col.length; j++) {
            if (col[j]) {
              ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
          }
        }
      };

      const startTransition = (fromGrid: boolean[][], toGrid: boolean[][]) => {
        if (!sameSize(fromGrid, toGrid.length, toGrid[0]?.length ?? 0)) {
          transitionRef.current = null;
          render(toGrid);
          return;
        }

        transitionRef.current = {
          from: fromGrid.map((row) => [...row]),
          to: toGrid.map((row) => [...row]),
          progress: 0,
        };
      };

      const animate = (timestamp: number) => {
        if (timestamp - lastUpdateRef.current >= interval) {
          if (gridRef.current.length > 0) {
            const nextGrid = updateGrid(gridRef.current);
            startTransition(gridRef.current, nextGrid);
            gridRef.current = nextGrid;
          }
          lastUpdateRef.current = timestamp;
        }

        if (transitionRef.current) {
          const { from, to } = transitionRef.current;
          interpolateGrids(from, to);

          transitionRef.current.progress += 0.1;
          if (transitionRef.current.progress >= 1) {
            transitionRef.current = null;
            render(gridRef.current);
          }
        }

        frameRef.current = requestAnimationFrame(animate);
      };

      let resizeTimeout: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (!canvasRef.current?.parentElement) return;

          const { cols, rows } = measure();
          if (sameSize(gridRef.current, cols, rows)) return;

          setIsReady(false);
          transitionRef.current = null;
          gridRef.current = createGrid();
          render(gridRef.current);
          setTimeout(() => setIsReady(true), 50);
        }, 250);
      };

      gridRef.current = createGrid();
      transitionRef.current = null;
      lastUpdateRef.current = performance.now();
      frameRef.current = requestAnimationFrame(animate);
      window.addEventListener('resize', handleResize);
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(parent);
      setIsReady(true);
      isInitialRender.current = false;

      return () => {
        cancelAnimationFrame(frameRef.current);
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
        clearTimeout(resizeTimeout);
        transitionRef.current = null;
      };
    }, [size, interval, backgroundColor, cellColor, density]);

    return (
      <canvas
        ref={React.useMemo(
          () => (node: HTMLCanvasElement | null) => {
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
            canvasRef.current = node;
          },
          [ref]
        )}
        className={cn(
          'absolute inset-0 h-full w-full transition-opacity duration-500',
          isReady ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    );
  }
);

GameOfLife.displayName = 'GameOfLife';

export { GameOfLife };
export type { GameOfLifeProps };
