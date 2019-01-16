import { get } from 'server/router';
import ctrl from './controller';

export default [
  get('/version/:app', ctrl.getVersion),
  get('/version/:app/next', ctrl.nextVersion),
  get('*', (ctx) => 'Version builder'),
];
