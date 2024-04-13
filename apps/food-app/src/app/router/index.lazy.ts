import { createLazyFileRoute } from '@tanstack/react-router';
import { BarcodeScanner } from '@food-frontend/ui';

export const Route = createLazyFileRoute('/')({
  component: BarcodeScanner,
});
