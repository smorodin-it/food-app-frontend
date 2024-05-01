import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useForm } from 'react-hook-form';
import {
  foodAppApi,
  IngredientEditModel,
  IngredientEditSchema,
  IngredientModel,
  useUpdateIngredientMutation,
} from '@food-frontend/data-access';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormComponent } from '@food-frontend/ui';
import { IngredientAddEditFormFields } from './IngredientAddEditFormFields';

// import './styles/IngredientAddForm.scss';

const cnIngredientUpdateForm = cn('IngredientUpdateForm');

interface IngredientUpdateFormProps {
  defaultFormData: IngredientModel;
  className?: string;
}

export const IngredientUpdateForm: FC<IngredientUpdateFormProps> = (props) => {
  const methods = useForm<IngredientEditModel>({
    defaultValues: props.defaultFormData,
    resolver: zodResolver(IngredientEditSchema),
  });

  const [updateIngredient] = useUpdateIngredientMutation();

  const handleSubmit = async (data: IngredientEditModel): Promise<void> => {
    await updateIngredient(data);
  };

  return (
    <FormComponent
      className={cnIngredientUpdateForm(undefined, [props.className])}
      methods={methods}
      onSubmit={handleSubmit}
      withFormButtons
    >
      <IngredientAddEditFormFields />
    </FormComponent>
  );
};
