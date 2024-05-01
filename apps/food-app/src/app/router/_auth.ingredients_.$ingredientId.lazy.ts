import { createLazyFileRoute } from '@tanstack/react-router';
import { IngredientUpdateFormRetrieveData } from '../modules/IngredientModule/forms/IngredientUpdateFormRetrieveData';

export const Route = createLazyFileRoute('/_auth/ingredients/$ingredientId')({
  component: IngredientUpdateFormRetrieveData,
});
