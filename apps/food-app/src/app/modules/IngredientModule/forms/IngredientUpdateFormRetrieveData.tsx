import { FC } from 'react';
import { useRetrieveIngredientQuery } from '@food-frontend/data-access';
import { Route } from '../../../router/_auth.ingredients_.$ingredientId.lazy';
import { IngredientUpdateForm } from './IngredientUpdateForm';

interface IngredientUpdateFormRetrieveDataProps {
  className?: string;
}

export const IngredientUpdateFormRetrieveData: FC<
  IngredientUpdateFormRetrieveDataProps
> = (props) => {
  const { ingredientId } = Route.useParams();

  const { data, isLoading } = useRetrieveIngredientQuery(ingredientId);

  return !isLoading && data ? (
    <IngredientUpdateForm className={props.className} defaultFormData={data} />
  ) : (
    <div>Loading...</div>
  );
};
