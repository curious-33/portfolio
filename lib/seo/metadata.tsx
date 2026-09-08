import { USER } from '@/lib/config/user';
import { absoluteUrl, defaultTitle, getSiteUrl } from '@/lib/seo/site';
import type { Metadata } from 'next';

type MetadataGenerator = {
  title: string;
  description: string;
  path?: string;
  /** Skip the root `%s · Name` template (homepage). */
  absolute?: boolean;
};

const INDEXABLE: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

function verification(): Metadata['verification'] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  if (!google && !yandex && !bing) {
    return undefined;
  }

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(bing ? { other: { 'msvalidate.01': bing } } : {}),
  };
}

export const getRootMetadata = (): Metadata => {
  const url = getSiteUrl();

  return {
		metadataBase: new URL(url),
		title: {
			default: defaultTitle,
			template: `%s · ${USER.nickname}`,
		},
		description: USER.description,
		applicationName: USER.nickname,
		authors: [{ name: USER.nickname, url }],
		creator: USER.nickname,
		publisher: USER.nickname,
		referrer: 'origin-when-cross-origin',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		robots: INDEXABLE,
		alternates: {
			canonical: '/',
		},
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url,
			siteName: USER.nickname,
			title: defaultTitle,
			description: USER.description,
		},
		twitter: {
			card: 'summary_large_image',
			creator: USER.twitterHandle,
			site: USER.twitterHandle,
			title: defaultTitle,
			description: USER.description,
		},
		appleWebApp: {
			capable: true,
			statusBarStyle: 'default',
			title: USER.nickname,
		},
		verification: verification(),
	}
};

/**
 * Page-level fields only. Next.js already deep-merges these onto root metadata.
 * Do not re-declare robots, authors, or metadataBase here.
 */
export const createMetadata = ({
  title,
  description,
  path = '/',
  absolute = false,
}: MetadataGenerator): Metadata => {
  const url = absoluteUrl(path);
  const socialTitle = absolute ? title : `${title} · ${USER.nickname}`

  return {
		title: absolute ? { absolute: title } : title,
		description,
		alternates: {
			canonical: path,
		},
		openGraph: {
			title: socialTitle,
			description,
			url,
			type: 'website',
			locale: 'en_US',
			siteName: USER.nickname,
		},
		twitter: {
			title: socialTitle,
			description,
		},
	}
};
