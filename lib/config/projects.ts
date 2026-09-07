export type Project = {
	/** Stable unique identifier (used as list key/anchor). */
	id: string
	title: string
	/**
	 * Project period for display and sorting.
	 * Use 'MM.YYYY' format. Omit `end` for ongoing projects.
	 */
	period?: {
		/** Start date (e.g., '05.2025'). */
		start: string
		/** End date; leave undefined for 'Present'. */
		end?: string
	}
	/** Public URL (site, repository, demo, or video). */
	link: string
	/** Github repository URL. */
	github?: string
	/** Tags/technologies for chips or filtering. */
	skills: string[]
	/** Optional rich description; Markdown and line breaks supported. */
	description?: string
	/** Short callout for personal contribution/role on the project. */
	highlight?: string
	/** Logo image URL (absolute or path under /public). */
	logo?: string
	/** Whether the project card is expanded by default in the UI. */
	isExpanded?: boolean
}

export const PERSONAL_PROJECTS: Project[] = [
	{
		id: 'hesitation-detector',
		title: 'Hesitation Detector',
		link: 'https://github.com/curious-33/hesitation-detector/blob/main/packages/react/README.md',
		github: 'https://github.com/curious-33/hesitation-detector',
		skills: [
			'TypeScript',
			'JavaScript',
			'React',
			'Vue',
			'Next.js',
			'Monorepo',
			'Web Performance',
		],
		logo: '',
		description: `A lightweight library that detects user hesitation and enables websites to respond with contextual UI hints or offers.

Built as a framework-agnostic core with dedicated React hooks and Vue 3 composables.

Features include:
- Behavioral tracking for hover, refocus, cursor movement, and scrolling
- Rule-based hesitation scoring
- React and Vue 3 integrations
- Configurable detection thresholds and triggers
- Performance optimizations for high-traffic websites
- Interactive Next.js demo`,
		isExpanded: true,
	},
	{
		id: 'docusign-sandbox',
		title: 'Docusign Sandbox',
		link: 'https://github.com/curious-33/docusign',
		github: 'https://github.com/curious-33/docusign',
		skills: [
			'Next.js',
			'React',
			'TypeScript',
			'DocuSign',
			'TanStack Query',
			'SQLite',
			'Tailwind CSS',
			'Docker',
		],
		logo: '',
		description: `A sandbox application demonstrating embedded DocuSign signing for flight booking confirmations.

Built an end-to-end workflow for creating flight quotes, generating PDFs, signing documents directly within the application, and storing signed documents with audit history.

Features include:
- Embedded DocuSign signing with real-time status
- PDF and Certificate of Completion generation
- Passenger and company document vaults
- QR-based document sharing and public document viewer
- Flight quote management and admin dashboard
- Email notifications and Docker support`,
	},
	{
		id: 'env-generator',
		title: 'Env Generator',
		link: 'https://github.com/curious-33/env-generator',
		github: 'https://github.com/curious-33/env-generator',
		skills: [
			'Node.js',
			'JavaScript',
			'Plop.js',
			'Handlebars',
			'CLI',
			'React',
			'Storybook',
		],
		logo: '',
		description: `A development environment generator for scaffolding React components.

Built on top of Plop.js and Handlebars, it automates repetitive component setup and keeps project structure consistent.

Features include:
- React component generation with JavaScript or TypeScript
- Automatic index and barrel exports
- Test, Storybook, and style file generation
- Configurable templates and project paths
- Persistent project configuration`,
	},
]

export const COMPANY_PROJECTS: Project[] = [
	{
		id: 'hawksearch',
		title: 'Hawk',
		period: {
			start: '2026.07',
			end: 'Present',
		},
		link: 'https://www.hawksearch.com/',
		skills: [
			'Next.js',
			'TypeScript',
			'React',
			'Sanity CMS',
			'Headless CMS',
			'Component Architecture',
		],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788605986/hawksearch.png',
		description: `A brand and website transformation for Hawk, an AI-powered search and product discovery platform.

Working on the migration from a large Webflow website to a scalable Next.js and Sanity architecture.

The project focuses on:
- Building reusable and scalable page components
- Developing core pages and product experiences
- Creating a flexible headless CMS architecture
- Supporting reusable templates for large-scale content
- Helping reduce hundreds of one-off pages into a clearer website structure`,
	},
	{
		id: 'the-edge',
		title: 'The Edge',
		period: {
			start: '2023.01',
			end: '2026.07',
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
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788342951/the-edge.avif',
		highlight: 'Frontend Lead · 3+ years on the team',
		description: `A learning platform helping students build career, life, and social-emotional skills.

Worked on:
- Role-based dashboards for students and educators
- Interactive learning modules and assessments
- Authentication and application navigation
- Reusable UI components and shared libraries
- State management and REST API integration`,
	},
	{
		id: 'new-era-life',
		title: 'New Era Life',
		period: {
			start: '2024.10',
			end: '2025.06',
		},
		link: 'https://site.neweralife.com/',
		skills: ['Next.js', 'React', 'WordPress', 'Faust.js'],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788342951/new-era-life.png',
		description: `A healthcare platform offering plans for individuals, families, and small businesses.

Built most of the frontend, including:
- Main application layouts
- Core pages and reusable components
- Business logic
- WordPress content integration using Faust.js`,
	},
	{
		id: 'partie',
		title: 'Partie',
		period: {
			start: '03.2023',
			end: '07.2023',
		},
		link: '',
		skills: ['React', 'Redux', 'SignalR', 'Agora', 'Real-time Communication'],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788343197/partie.jpg',
		description: `A social and matchmaking platform for gamers, featuring voice, video, and text communication.

Worked on:
- Matchmaking posts and user interactions
- Real-time voice and video chat
- SignalR integration with the backend
- Migrating the legacy UI to a modern, responsive interface
- Complex application state and real-time updates`,
	},
	{
		id: 'gopureplank',
		title: 'GoPurePlank',
		period: {
			start: '2022.12',
			end: '2023.03',
		},
		link: 'https://gopureplank.com/',
		skills: ['React', 'Redux', 'Formik'],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788342951/pure-plank.avif',
		description: `A smart fitness product focused on improving core training through technology.

Worked with another frontend developer to build the admin panel.

Contributions include:
- Main application layouts
- Business logic
- Form handling
- Core reusable components`,
	},
	{
		id: 'stepone',
		title: 'Stepone',
		period: {
			start: '05.2022',
			end: '10.2022',
		},
		link: 'https://stepone.uz/',
		skills: [
			'React',
			'TypeScript',
			'Redux',
			'React Query',
			'REST APIs',
			'Plyr.io',
		],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788607161/logo.png',
		highlight: 'Owned entire UI · admin + client platforms',
		description: `A subscription-based e-learning platform where students progress through courses by completing lessons, quizzes, and practical tasks.

Built the frontend architecture independently for both student and admin platforms.

Features include:
- Progression-based learning and level unlocking
- Quiz validation and attempt management
- Video lessons, documentation, and interactive tasks
- Student progress tracking and resume functionality
- Subscription-based access control
- Admin tools for managing courses and content`,
	},
	{
		id: 'shaffof-yol',
		title: 'Shaffof Yo‘l',
		period: {
			start: '2022.02',
			end: '2022.06',
		},
		link: 'https://shaffofyul.uz/en',
		skills: ['React', 'Redux', 'Interactive Maps'],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788342951/shaffof.svg',
		highlight: 'Built interactive map · OpenStreetMap',
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
			start: '2022.01',
			end: '2022.06',
		},
		link: 'https://tpp.uz/',
		skills: ['React', 'Redux', 'Formik'],
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788342951/tpp.svg',
		description: `A corporate platform for an organization in Uzbekistan's energy sector.

Contributed to:
- Main layouts and core pages
- Reusable UI components
- Business logic and forms
- Administrative interfaces`,
	},
	{
		id: 'epa-subsidy',
		title: 'EPA Subsidy System',
		period: {
			start: '2021.07',
			end: '2022.04',
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
		logo: 'https://res.cloudinary.com/curious-cloud/image/upload/v1788607785/Frame_14.png',
		highlight: 'Built admin panel core · through to project end',
		description: `A government platform for managing business subsidy applications and approval workflows.

Built the frontend architecture from scratch.

Features include:
- Complex multi-step application workflows
- Role-based interfaces for multiple institutions
- Application review and approval lifecycle
- Document upload and validation
- Government API and OneID integration
- Uzbek, Russian, and English support`,
	},
]
