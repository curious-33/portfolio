import { Icons } from '@/components/icons';
import { USER } from '@/lib/config/user';

export const DockConfig = {
  navbar: [
    { href: '/', icon: Icons.home, label: 'Home' },
    { href: '/cal', icon: Icons.calendar, label: 'Book a Meeting' },
    // { href: "/resume", icon: Icons.resume, label: "Resume" },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: USER.social.github,
        icon: Icons.github,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: USER.social.linkedin,
        icon: Icons.linkedin,
      },
      X: {
        name: 'X',
        url: USER.social.twitter,
        icon: Icons.x,
      },
      email: {
        name: 'Send Email',
        url: `mailto:${USER.email}`,
        icon: Icons.email,
      },
    },
  },
};
