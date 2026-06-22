export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Principles', href: '/principles' },
  { label: 'Experience', href: '/experience' },
  { label: 'Resume', href: '/resume/Jubin_Sanghvi_Senior_Engineering_Manager.pdf', external: true },
];
