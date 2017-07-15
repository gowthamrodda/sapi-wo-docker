/**
 * This is a barrel (https://angular.io/docs/ts/latest/guide/glossary.html#!#Barrel).
 * If you include each of your `@Routable` classes here, you'll be able to bootstrap your routes by simply including
 * `import './api';` in your `index.ts` file where you start your server.
 */
export * from './user.api';
