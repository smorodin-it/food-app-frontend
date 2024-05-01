import { HeaderLinkList } from '@food-frontend/ui';

import { Route as IngredientsRoute } from '../router/_auth.ingredients.lazy';
import { Route as IngredientsAddRoute } from '../router/_auth.ingredients_.add.lazy';

export const HEADER_MENU_CONST: HeaderLinkList = [
  { title: 'Ингридиенты', to: IngredientsRoute.options.id },
  { title: 'Добавить ингридиент', to: IngredientsAddRoute.options.id },
];
