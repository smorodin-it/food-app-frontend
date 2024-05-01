import { IngredientAddEditModel } from '../models';

export const getIngredientAddEditFormDefaultValues =
  (): IngredientAddEditModel => ({
    barcode: '',
    calories: 0,
    carbs: 0,
    fats: 0,
    manufacturer: '',
    name: '',
    proteins: 0,
  });
