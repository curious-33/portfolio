export type User = {
	firstName: string
	email: string
	location: string
	domain: string
	website?: string
	description: string
	jobTitle: string
	twitterHandle: string
	namePronunciationUrl: string
	username: string
	tagline: string
	social: {
		twitter: string
		github: string
		linkedin: string
	}
	image: {
		profile: string
	}
	flipSentences: string[]
}

const USER: User = {
	firstName: 'Mukhammad Sodik',
	email: 'mukhammadsodik.uz@gmail.com',
	domain: 'curious.uz',
	jobTitle: 'Software Engineer',
	username: 'curious-33',
	tagline: 'Design meets engineering.',
	twitterHandle: '@curi0us_33',
	location: 'Tashkent, Uzbekistan',
	description:
		'Mukhammad Sodik is a software engineer in Tashkent. I build modern web apps with React, Next.js, and TypeScript — turning ideas into products.',
	namePronunciationUrl: '/assets/audio/name-pronunciation.mp3',
	social: {
		twitter: 'https://twitter.com/curi0us_33',
		github: 'https://github.com/curious-33',
		linkedin: 'https://www.linkedin.com/in/curious/',
	},
	flipSentences: [
		'Code is where ideas become real.',
		'Small details. Better experiences.',
		'Software Engineer',
		'Product-minded Developer',
		'Building products, not just interfaces.',
		'Learning. Building. Evolving.',
		'Frontend today. Full stack tomorrow.',
	],
	image: {
		profile:
			'https://res.cloudinary.com/curious-cloud/image/upload/v1788180369/curious.jpg',
	},
}

USER.website = `https://${USER.domain}`

export { USER }
