import { USER } from '@/lib/config/user'
import { absoluteUrl, defaultTitle, getSiteUrl } from '@/lib/seo/site'
import type {
	ContactPage,
	Graph,
	Person,
	ProfilePage,
	WebSite,
} from 'schema-dts'

const KNOWS_ABOUT = [
	'React',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Frontend Development',
]

function personId(): string {
	return `${getSiteUrl()}/#person`
}

function websiteId(): string {
	return `${getSiteUrl()}/#website`
}

function personRef() {
	return { '@id': personId() }
}

function websiteRef() {
	return { '@id': websiteId() }
}

export function getPerson(): Person {
	return {
		'@type': 'Person',
		'@id': personId(),
		name: USER.firstName,
		givenName: USER.firstName,
		alternateName: ['Curious', USER.username],
		url: getSiteUrl(),
		image: {
			'@type': 'ImageObject',
			url: USER.image.profile,
			caption: USER.firstName,
		},
		email: USER.email,
		jobTitle: USER.jobTitle,
		hasOccupation: {
			'@type': 'Occupation',
			name: USER.jobTitle,
			occupationLocation: {
				'@type': 'City',
				name: 'Tashkent',
			},
		},
		description: USER.description,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Tashkent',
			addressCountry: 'UZ',
		},
		sameAs: [USER.social.github, USER.social.linkedin, USER.social.twitter],
		knowsAbout: KNOWS_ABOUT,
	}
}

function getWebsite(): WebSite {
	return {
		'@type': 'WebSite',
		'@id': websiteId(),
		url: getSiteUrl(),
		name: USER.firstName,
		alternateName: USER.domain,
		description: USER.description,
		inLanguage: 'en',
		publisher: personRef(),
	}
}

function getProfilePage(): ProfilePage {
	return {
		'@type': 'ProfilePage',
		'@id': `${getSiteUrl()}/#profile`,
		url: getSiteUrl(),
		name: defaultTitle,
		description: USER.description,
		inLanguage: 'en',
		isPartOf: websiteRef(),
		about: personRef(),
		mainEntity: personRef(),
		primaryImageOfPage: {
			'@type': 'ImageObject',
			url: USER.image.profile,
			caption: USER.firstName,
		},
	}
}

export function getHomeGraph(): Graph {
	return {
		'@context': 'https://schema.org',
		'@graph': [getPerson(), getWebsite(), getProfilePage()],
	}
}

export function getContactPageGraph(): Graph {
	const url = absoluteUrl('/cal')
	const page: ContactPage = {
		'@type': 'ContactPage',
		'@id': `${url}#webpage`,
		url,
		name: `Book a Meeting · ${USER.firstName}`,
		description:
			'Schedule a meeting to discuss design, engineering, product, or anything else.',
		inLanguage: 'en',
		isPartOf: websiteRef(),
		about: personRef(),
		mainEntity: personRef(),
	}

	return {
		'@context': 'https://schema.org',
		'@graph': [getPerson(), getWebsite(), page],
	}
}
