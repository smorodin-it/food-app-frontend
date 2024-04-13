/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './__root';
import { Route as MainImport } from './main';
import { Route as AppAppImport } from './app/app';
import { Route as AppRouterIngredientsImport } from './app/router/ingredients';
import { Route as AppRouterHomeImport } from './app/router/index.lazy';
import { Route as AppRouterAppRouterImport } from './app/router/AppRouter';
import { Route as AppModelsEnvModelImport } from './app/models/EnvModel';
import { Route as AppConstantsConstantsImport } from './app/constants/constants';

// Create/Update Routes

const MainRoute = MainImport.update({
  path: '/main',
  getParentRoute: () => rootRoute,
} as any);

const AppAppRoute = AppAppImport.update({
  path: '/app/app',
  getParentRoute: () => rootRoute,
} as any);

const AppRouterIngredientsRoute = AppRouterIngredientsImport.update({
  path: '/app/router/ingredients',
  getParentRoute: () => rootRoute,
} as any);

const AppRouterHomeRoute = AppRouterHomeImport.update({
  path: '/app/router/home',
  getParentRoute: () => rootRoute,
} as any);

const AppRouterAppRouterRoute = AppRouterAppRouterImport.update({
  path: '/app/router/AppRouter',
  getParentRoute: () => rootRoute,
} as any);

const AppModelsEnvModelRoute = AppModelsEnvModelImport.update({
  path: '/app/models/EnvModel',
  getParentRoute: () => rootRoute,
} as any);

const AppConstantsConstantsRoute = AppConstantsConstantsImport.update({
  path: '/app/constants/constants',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/main': {
      preLoaderRoute: typeof MainImport;
      parentRoute: typeof rootRoute;
    };
    '/app/app': {
      preLoaderRoute: typeof AppAppImport;
      parentRoute: typeof rootRoute;
    };
    '/app/constants/constants': {
      preLoaderRoute: typeof AppConstantsConstantsImport;
      parentRoute: typeof rootRoute;
    };
    '/app/models/EnvModel': {
      preLoaderRoute: typeof AppModelsEnvModelImport;
      parentRoute: typeof rootRoute;
    };
    '/app/router/AppRouter': {
      preLoaderRoute: typeof AppRouterAppRouterImport;
      parentRoute: typeof rootRoute;
    };
    '/app/router/home': {
      preLoaderRoute: typeof AppRouterHomeImport;
      parentRoute: typeof rootRoute;
    };
    '/app/router/ingredients': {
      preLoaderRoute: typeof AppRouterIngredientsImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  MainRoute,
  AppAppRoute,
  AppConstantsConstantsRoute,
  AppModelsEnvModelRoute,
  AppRouterAppRouterRoute,
  AppRouterHomeRoute,
  AppRouterIngredientsRoute,
]);

/* prettier-ignore-end */
