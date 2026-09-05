export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** Github repository URL. */
  github?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'the-edge',
    title: 'The Edge',
    period: {
      start: '2023.01',
      end: '2026.07'
    },
    link: 'https://www.buildmyedge.com/',
    skills: [
      'Next.js',
      'TypeScript',
      'React',
      'Redux',
      'Nx Monorepo',
      'REST APIs',
    ],
    logo: '',
    description: `A learning platform helping students build career, life, and social-emotional skills.

Worked on:
- Role-based dashboards for students and educators
- Interactive learning modules and assessments
- Authentication and application navigation
- Reusable UI components and shared libraries
- State management and REST API integration`,
    isExpanded: true,
  },
  {
    id: 'gopureplank',
    title: 'GoPurePlank',
    period: {
      start: '',
    },
    link: 'https://gopureplank.com/',
    skills: [
      'React',
      'Redux',
      'Formik',
    ],
    logo: '',
    description: `A smart fitness product focused on improving core training through technology.

Worked with another frontend developer to build the admin panel.

Contributions include:
- Main application layouts
- Business logic
- Form handling
- Core reusable components`,
  },
  {
    id: 'new-era-life',
    title: 'New Era Life',
    period: {
      start: '',
    },
    link: 'https://site.neweralife.com/',
    skills: [
      'Next.js',
      'React',
      'WordPress',
      'Faust.js',
    ],
    logo: '',
    description: `A healthcare platform offering plans for individuals, families, and small businesses.

Built most of the frontend, including:
- Main application layouts
- Core pages and reusable components
- Business logic
- WordPress content integration using Faust.js`,
  },
  {
    id: 'epa-subsidy',
    title: 'EPA Subsidy System',
    period: {
      start: '',
    },
    link: 'https://subsidiya.epauzb.uz/en',
    skills: [
      'React',
      'TypeScript',
      'Redux',
      'REST APIs',
      'Multi-language',
      'Role-based Access',
    ],
    logo: '',
    description: `A government platform for managing business subsidy applications and approval workflows.

Built the frontend architecture from scratch.

Features include:
- Complex multi-step application workflows
- Role-based interfaces for multiple institutions
- Application review and approval lifecycle
- Document upload and validation
- Government API and OneID integration
- Uzbek, Russian, and English support`,
    isExpanded: true,
  },
  {
    id: 'shaffof-yol',
    title: 'Shaffof Yo‘l',
    period: {
      start: '',
    },
    link: 'https://shaffofyul.uz/en',
    skills: [
      'React',
      'Redux',
      'Interactive Maps',
    ],
    logo: '',
    description: `A public platform providing transparent information about roads and infrastructure in Uzbekistan.

Built the interactive map experience for visualizing:
- Updated and repaired roads
- Planned road projects
- Road infrastructure information
- Location-based public data`,
  },
  {
    id: 'tpp',
    title: 'TPP',
    period: {
      start: '',
    },
    link: 'https://tpp.uz/',
    skills: [
      'React',
      'Redux',
      'Formik',
    ],
    logo: '',
    description: `A corporate platform for an organization in Uzbekistan's energy sector.

Contributed to:
- Main layouts and core pages
- Reusable UI components
- Business logic and forms
- Administrative interfaces`,
  },
];
