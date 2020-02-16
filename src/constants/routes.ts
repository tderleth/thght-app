export interface Route {
  name: string;
  link: string;
  type: string;
}

export const routes: Route[] = [
  {
    type: 'bottom',
    name: 'CaptureThought',
    link: '/',
  },
  {
    type: 'bottom',
    name: 'Reflect',
    link: '/reflect',
  },
];
