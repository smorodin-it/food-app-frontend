import { FC } from 'react';
import { AppLayout, BarcodeScanner } from '@food-frontend/ui';

export const AppRouter: FC = () => {
  return (
    <AppLayout>
      <BarcodeScanner />
    </AppLayout>
  );
};
