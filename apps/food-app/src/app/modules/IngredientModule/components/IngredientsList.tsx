import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useListIngredientsQuery } from '@food-frontend/data-access';

// import './styles/IngredientsList.scss';

const cnIngredientsList = cn('IngredientsList');

interface IngredientsListProps {
  className?: string;
}

export const IngredientsList: FC<IngredientsListProps> = (props) => {
  const { data, isLoading, isError } = useListIngredientsQuery();

  if (isError) {
    return <div>Error occurred</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={cnIngredientsList(undefined, [props.className])}>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
};
