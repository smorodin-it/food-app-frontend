import { FC } from 'react';
import { cn } from '@bem-react/classname';

// import './styles/IngredientsList.scss';

const cnIngredientsList = cn('IngredientsList');

interface IngredientsListProps {
  className?: string;
}

export const IngredientsList: FC<IngredientsListProps> = (props) => {
  return (
    <div className={cnIngredientsList(undefined, [props.className])}>
      IngredientsList
    </div>
  );
};
