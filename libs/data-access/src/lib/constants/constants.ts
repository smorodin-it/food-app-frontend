export const API_CONST = {
  baseUrl: '/api',
  authHeader: 'Authorization',
  authRoute: '/auth',
  refreshRoute: '/auth/refresh',
} as const;

export const API_METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
} as const;

export const HTTP_STATUS_CODES = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
} as const;
