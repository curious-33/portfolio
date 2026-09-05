import Info from '@/features/home/components/info';
import { GameOfLife } from '@/components/game-of-life';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-8 overflow-hidden">
      <GameOfLife
        size={20}
        interval={200}
        backgroundColor="#000000"
        cellColor="#1e1e1e"
        className="pointer-events-none z-0"
      />
      <div className="relative z-10 flex flex-col items-center gap-8 text-white">
        <p className="font-bold text-4xl">Oops!</p>
        <Info show={['time', 'screen']} />
        <Button
          variant="outline"
          asChild
          className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
