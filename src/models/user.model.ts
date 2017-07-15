import {
  Db,
  Json,
  Model,
  SakuraApiModel
} from '@sakuraapi/api';
import {sapi} from '../sakuraapi';

export class Contact {
  @Db('addr') @Json()
  address: string;

  @Db('cty') @Json()
  city: string;

  @Db('st') @Json()
  state: string;

  @Db('z') @Json()
  zip: string;
}

/**
 * An `@Model` decorated class is the fundamental data structure that is persisted and retrieved
 * from the database and which is marshalled/unmarshalled from Json when interacting with the client.
 * It supports embedded documents, which are classes that have their properties' decorated with `@Db`
 * and `@Json` so as to inform SakurApi how the data should be persisted.
 */
@Model({
  /**
   * Database configuration for the model
   */
  dbConfig: {
    /**
     * Key for the database configuration found in the name property of the `dbConnections` array found in
     * `../config/environment.ts`.
     */
    db: 'user',
    /**
     * The database collection in which documents for this model are stored and retrieved
     */
    collection: 'users'
  }
})
export class User extends SakuraApiModel {

  /**
   * `@Db` decorates a property in a model. It can either take just the field name as a string, which tells SakuraApi
   * what field to map this property to and from when persisting and retrieving a document, or it can take a number of
   * optional properties as an `IDbOptions` parameter object:
   * {
   *    field: string,   // the name of the field in the database
   *    model: any,      // the constructor function / class that represents a sub-document
   *    private: boolean // true prevents this field from being marshalled to Json
   * }
   *
   * `@Db()` can also decorate a property with no parameters, which indicates that the property name should be retained
   * when persisting documents to and retrieving documents from the db.
   */
  /**
   * `@Json` decorates a property in a model. It can either take just the field name as a string, which tells SakuraApi
   * what field to map this property to and from when marshalling and unmarshalling a document, or it can take a number
   * of optional properties as an IJsonOptions parameter object:
   * {
   *    field: string,   // the name of the property in Json form
   *    model: any       // the constructor function / class that represents a sub-document
   *                     //     Note: if  `model` is already defined on `@Db` for this property, it does not need to be
   *                     //           redefined here.
   * }
   *
   * `@Json()` can also decorate a property with no parameters, which indicates that the property name should be
   * retained when persisting documents to and retrieving documents from the db.
   */
  @Db({field: 'fn'})
  @Json('fname')
  firstName: string;

  @Db('ln')
  @Json('lname')
  lastName: string;

  @Db({field: 'ctac', model: Contact})
  @Json()
  contact = new Contact();

  @Db({field: 'pw', private: true})
  password: string = '';

  constructor(init?: User | any) {
    super();

    if (init) {
      this.firstName = init.firstName || this.firstName;
      this.lastName = init.lastName || this.lastName;
    }
  }
}
