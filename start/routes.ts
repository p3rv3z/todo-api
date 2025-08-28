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
