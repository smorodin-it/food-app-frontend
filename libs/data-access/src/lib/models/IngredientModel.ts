import { z } from 'zod';

export const IngredientSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    manufacturer: z.string(),
    barcode: z.string(),
    proteins: z.coerce.number(),
    carbs: z.coerce.number(),
    fats: z.coerce.number(),
    calories: z.coerce.number(),
  })
  .strict();

export type IngredientModel = z.infer<typeof IngredientSchema>;

export const IngredientListItemSchema = IngredientSchema;

export type IngredientListItemModel = z.infer<typeof IngredientListItemSchema>;

export const IngredientListSchema = z.array(IngredientListItemSchema);

export type IngredientListModel = z.infer<typeof IngredientListSchema>;

export const IngredientAddEditSchema = IngredientSchema.omit({
  id: true,
});

export type IngredientAddEditModel = z.infer<typeof IngredientAddEditSchema>;
