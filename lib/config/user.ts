export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  location: string;
  domain: string;
  website?: string;
  description: string;
  jobTitle: string;
  twitterHandle: string;
  namePronunciationUrl: string;
  username: string;
  tagline: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  image: {
    profile: string;
  };
  flipSentences: string[];
};

const USER: User = {
  firstName: 'Mukhammad Sodik',
  lastName: 'Ismoilov',
  name: 'Mukhammad Sodik Ismoilov',
  email: 'mukhammadsodik.uz@gmail.com',
  domain: 'curious.uz',
  jobTitle: 'Software Engineer',
  username: 'curious-33',
  tagline: 'Design meets engineering.',
  twitterHandle: '@curi0us_33',
  location: 'Tashkent, Uzbekistan',
  description:
    "My journey of building products, solving problems, and growing as an engineer.",
  namePronunciationUrl: '/assets/audio/name-pronunciation.mp3',
  social: {
    twitter: 'https://twitter.com/curi0us_33',
    github: 'https://github.com/curious-33',
    linkedin: 'https://www.linkedin.com/in/curious/'
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
};

USER.website = `https://${USER.domain}`;

export { USER };
