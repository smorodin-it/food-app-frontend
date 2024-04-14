import { createLazyFileRoute } from '@tanstack/react-router';
import { IngredientsList } from '../modules';

export const Route = createLazyFileRoute('/_auth/ingredients')({
  component: IngredientsList,
});
