export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { label: 'Upload', path: '/upload', icon: 'upload' },
  { label: 'Inventory', path: '/inventory', icon: 'inventory' },
  { label: 'Login', path: '/login', icon: 'login' },
  { label: 'Login Copy', path: '/login-duplicate', icon: 'login' },
];

const PAGE_META = {
  '/dashboard': {
    title: 'Dashboard Overview',
    description: 'Track trends, revenue signals, and inventory health at a glance.',
  },
  '/upload': {
    title: 'Upload Center',
    description: 'Prepare a clean file handoff for future product or catalog ingestion.',
  },
  '/inventory': {
    title: 'Inventory View',
    description: 'Inspect mock product records and stock status in a structured table.',
  },
  '/login': {
    title: 'Welcome Back',
    description: 'Use the placeholder sign-in screen to simulate entry into the platform.',
  },
  '/login-duplicate': {
    title: 'Login Copy',
    description: 'A second static login screen with the same no-backend structure and a distinct visual badge.',
  },
};

export function getPageMeta(pathname) {
  return PAGE_META[pathname] ?? {
    title: 'MarketMind AI',
    description: 'Frontend scaffold for the Infosys Springboard Internship project.',
  };
}