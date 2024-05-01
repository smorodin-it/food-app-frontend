import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useForm } from 'react-hook-form';
import {
  getIngredientAddEditFormDefaultValues,
  IngredientAddEditModel,
  IngredientAddEditSchema,
  useAddIngredientMutation,
} from '@food-frontend/data-access';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormComponent } from '@food-frontend/ui';
import { useNavigate } from '@tanstack/react-router';
import { IngredientAddEditFormFields } from './IngredientAddEditFormFields';

// import './styles/IngredientAddForm.scss';

const cnIngredientAddForm = cn('IngredientAddForm');

interface IngredientAddFormProps {
  className?: string;
}

export const IngredientAddForm: FC<IngredientAddFormProps> = (props) => {
  const methods = useForm<IngredientAddEditModel>({
    defaultValues: getIngredientAddEditFormDefaultValues(),
    resolver: zodResolver(IngredientAddEditSchema),
  });

  const [addIngredient] = useAddIngredientMutation();

  const navigate = useNavigate();

  const handleSubmit = async (data: IngredientAddEditModel): Promise<void> => {
    const resp = await addIngredient(data).unwrap();

    if (resp) {
      await navigate({
        to: '/ingredients/add',
      });
    }
  };

  return (
    <FormComponent
      className={cnIngredientAddForm(undefined, [props.className])}
      methods={methods}
      onSubmit={handleSubmit}
      withFormButtons
    >
      <IngredientAddEditFormFields />
    </FormComponent>
  );
};
