/*
Array of routes  that are accessible through the public
This routes do not require authentication
@type {string[]}
*/
export const publicRoutes = ['/'];

/*
Array of routes  that are used for authentication
This routes will redirect logged in users to /settings
@type {string[]}
*/
export const authRoutes = ['/auth/login', '/auth/register'];

/*
 * The prefix for the API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/*
The default redirect path if user login
@type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = '/settings';
