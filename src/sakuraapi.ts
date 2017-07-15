/**
 * The instance of SakuraApi is instantiated in its own module to prevent dependency problems. It also serves as a
 * nice central place to have all of your middleware additions for SakuraAPI, etc.
 */
import {SakuraApi} from '@sakuraapi/api';

import bodyParser = require('body-parser');
import helmet = require('helmet');
import {
  UserApi
} from './api';
import {User} from './models';

/**
 * Instantiate the instance of SakuraApi that will be used throughout the server
 */
export const sapi = new SakuraApi({
    baseUrl: '/api',
    models: [User],
    routables: [UserApi]
});

/**
 * Define global middleware
 */
sapi.addMiddleware(helmet());
sapi.addMiddleware(bodyParser.json());


