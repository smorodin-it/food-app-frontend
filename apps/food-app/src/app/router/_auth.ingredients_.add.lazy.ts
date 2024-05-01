import { createLazyFileRoute } from '@tanstack/react-router';
import { IngredientAddForm } from '../modules/IngredientModule/forms/IngredientAddForm';

export const Route = createLazyFileRoute('/_auth/ingredients/add')({
  component: IngredientAddForm,
});
