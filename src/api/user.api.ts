/**
 * This is an example `@Routable` classes. Classes decorated with `@Routable` are how SakuraApi defines routes for the
 * Express router. Each of these files should be exported by the `api/index.ts` file. The files need to be imported
 * before you tell the SakuraApi to start listening for connections. See `../index.ts`.
 */
import {Routable} from '@sakuraapi/api';

import {User} from '../models/user.model';
import {ObjectID} from 'mongodb';
import {sapi} from '../sakuraapi';

@Routable({
  baseUrl: 'users',
  model: User,
  suppressApi: true
})
export class UserApi {

  /**
   * In virtue of having included the `model` property in the `@Routable` decorator, this API call automatically has
   * several routes setup for it:
   *
   * + POST http://localhost:8001/api/user
   *   - takes a user JSON object and persists it to the database
   *
   * + PUT http://localhost:8001/api/user/:id
   *   - takes a user JSON object and updates it in the database
   *
   * + GET http://localhost:8001/api/user
   *   - retrieves an array of User JSON objects
   *   - supports `where={"field":"value"}` as a query string parameter. `where` must be a valid JSON object.
   *     o  `{"field": { "inner":"value" } }` will be translated to MongoDB 'dot notation' by SakuraApi:
   *        `{ "field.inner": value }`.
   *     o  Field names for the `where` clause are provided in their json mappings, and are automatically translated to
   *        their database field name equivalents by SakuraAPI. I.e., if your model defines the property `firstName` as
   *        `fn` in the database and `fName` in JSON, then `where={"fName":"George"}` will automatically become
   *        `where={"fn":"George"}` when querying the database.
   *   - supports `fields={"field": 1, "_id":0}` MongoDB style field projection. The fields object provided on the query
   *     string follows the same rules as the `where` query parameter above.
   *
   * + GET http://localhost:8001/api/user/:id
   *   - retrieves a specific User JSON object
   *   - supports `fields` as a query string parameter that controls projection.
   *
   * + DELETE http://localhost:8001/api/user/:id
   *   - removes the object matching the ID from the database.
   */

}
