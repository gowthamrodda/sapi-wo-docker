/* SakuraApi configuration */
import {sapi} from './sakuraapi';
/* Simply importing the APIs bootstraps them for use */
import './api';

/**
 * Entry point for the API server.
 *
 * See `./sakuraapi.ts` for configuration of SakuraApi.
 */
class Server {

  start() {
    sapi
      .listen()
      .then(() => {
        console.log('By your command |<'.red);
      })
      .catch(err => console.log(err));
  }
}

new Server().start();
