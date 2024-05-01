import { FC } from 'react';
import { cn } from '@bem-react/classname';
import {
  IngredientListItemModel,
  useListIngredientsQuery,
} from '@food-frontend/data-access';
import {
  BaseCrudTable,
  CrudTableActions,
  CrudTableSettings,
} from '@food-frontend/ui';

// import './styles/IngredientsList.scss';

const cnIngredientsList = cn('IngredientsList');

interface IngredientsListProps {
  className?: string;
}

export const IngredientsList: FC<IngredientsListProps> = (props) => {
  const { data, isLoading, isError } = useListIngredientsQuery();

  const tableSettings: CrudTableSettings<IngredientListItemModel> = {
    actions: [
      {
        type: CrudTableActions.Top,
        renderComponent: () => <button>Добавить</button>,
      },
    ],
    fields: [
      {
        header: 'Наименование',
        render: (object) => object.name,
      },
      {
        header: 'Производитель',
        render: (object) => object.manufacturer,
      },
      {
        header: 'Калорийность',
        render: (object) => object.calories,
      },
    ],
  };

  if (isError) {
    return <div>Error occurred</div>;
  }

  return !isLoading && data ? (
    <div className={cnIngredientsList(undefined, [props.className])}>
      <BaseCrudTable
        settings={tableSettings}
        data={{ list: data, count: data.length }}
        currentPage={1}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
