import { HeaderLinkList } from '@food-frontend/ui';

import { routeTree } from '../routeTree.gen';

export const HEADER_MENU_CONST: HeaderLinkList<typeof routeTree> = [
  { title: 'Ингридиенты', to: '/ingredients' },
  { title: 'Добавить ингридиент', to: '/ingredients/add' },
  { title: 'Добавить приём пищи', to: '/' },
];
