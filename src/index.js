import server, { router, reply } from 'server';
import routes from './routes';

const options = {
  port: process.env.PORT || 3001,
  security: {
    csrf: false,
  }
};

const handleUser = router.error(ctx => {
  const errorMessage = `Error: ${ctx.error.message} - Method: ${ctx.method} - URL: ${ctx.url}`;
  console.error(errorMessage);
  return reply.status(500).send(errorMessage);
});

server(options, routes, handleUser).then((ctx) => {
  console.warn(`Server launched on http://localhost:${ctx.options.port}/`);
}).catch((err) => {
  console.error(err.message);
});
