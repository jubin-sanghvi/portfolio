export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume/Jubin_Sanghvi_Senior_Engineering_Manager.pdf', external: true },
];

