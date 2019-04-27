import Koa from 'koa';

const port = 8080;
const app = new Koa();

app.use(context => {
  context.response.status = 200;
  context.response.body = 'Hello world!';
});

app.listen(port, () => console.log(`Listening on port ${port}`));
