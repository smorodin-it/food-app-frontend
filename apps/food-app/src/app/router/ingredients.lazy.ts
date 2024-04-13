import { createLazyFileRoute } from '@tanstack/react-router';
import { IngredientsList } from '../modules';

export const Route = createLazyFileRoute('/ingredients')({
  component: IngredientsList,
});
