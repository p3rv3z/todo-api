import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('tasks', 'TasksController').apiOnly()


Route.get('/test', async () => {
  const a = 1;
  console.log('test')
  console.log('haha')
  return ['hello', 'world'].map(item => item.toUpperCase())
})

Route.get('/test2', async () => {
  const b = 2;
  console.log('test2')
  return ['hello2', 'world2'].map(item => item.toUpperCase())
})

Route.get('/test3', async () => {
  const b = 2;
  console.log('test2')
  return ['hello2', 'world2'].map(item => item.toUpperCase())
})
