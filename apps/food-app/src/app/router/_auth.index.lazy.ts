import { createFileRoute } from '@tanstack/react-router';
import { BarcodeScanner } from '@food-frontend/ui';

export const Route = createFileRoute('/_auth/')({
  component: BarcodeScanner,
});
