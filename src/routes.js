import { get } from 'server/router';
import ctrl from './controller';
import pkg from '../package';

export default [
  get('/builder/:app', ctrl.getVersion),
  get('/builder/:app/next', ctrl.nextVersion),
  get('*', (ctx) => `Version Builder - ${pkg.version}`),
];
