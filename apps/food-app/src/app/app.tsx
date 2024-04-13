import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DefaultTheme } from '@food-frontend/ui';
import { Provider } from 'react-redux';
import { store } from '@food-frontend/data-access';

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
