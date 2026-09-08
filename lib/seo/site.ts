import { USER } from '@/lib/config/user'

export const defaultTitle = `${USER.nickname} — ${USER.jobTitle}`

export function getSiteUrl(): string {
	return USER.website ?? `https://${USER.domain}`
}

export function absoluteUrl(path = '/'): string {
	const base = getSiteUrl()
	if (!path || path === '/') {
		return base
	}

	const normalized = path.startsWith('/') ? path : `/${path}`
	return `${base}${normalized}`
}
