import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Stack } from '@mui/material';
import { TextFieldFormComponent } from '@food-frontend/ui';

// import './styles/IngredientAddEditFormFields.scss';

const cnIngredientAddEditFormFields = cn('IngredientAddEditFormFields');

interface IngredientAddEditFormFieldsProps {
  className?: string;
}

export const IngredientAddEditFormFields: FC<
  IngredientAddEditFormFieldsProps
> = (props) => {
  return (
    <Stack
      className={cnIngredientAddEditFormFields(undefined, [props.className])}
    >
      <TextFieldFormComponent label={'Наименование'} name={'name'} />
      <TextFieldFormComponent label={'Производитель'} name={'manufacturer'} />
      <TextFieldFormComponent label={'Штрихкод'} name={'barcode'} />
      <TextFieldFormComponent label={'Калории'} name={'calories'} />
      <TextFieldFormComponent label={'Белки'} name={'proteins'} />
      <TextFieldFormComponent label={'Жиры'} name={'fats'} />
      <TextFieldFormComponent label={'Углеводы'} name={'carbs'} />
    </Stack>
  );
};
