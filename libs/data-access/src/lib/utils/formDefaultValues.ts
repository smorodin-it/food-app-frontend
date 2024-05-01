import { IngredientAddModel, IngredientEditModel } from '../models';

export const getIngredientAddFormDefaultValues = (): IngredientAddModel => ({
  barcode: '',
  calories: 0,
  carbs: 0,
  fats: 0,
  manufacturer: '',
  name: '',
  proteins: 0,
});

export const getIngredientEditFormDefaultValues = (): IngredientEditModel => ({
  id: '',
  ...getIngredientAddFormDefaultValues(),
});
