/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('tasks', 'TasksController').apiOnly()


Route.get('/test', async () => {
  const a = 1;
  console.log('test')
  return ['hello', 'world'].map(item => item.toUpperCase())
})

Route.get('/test2', async () => {
  const b = 2;
  console.log('test2')
  return ['hello2', 'world2'].map(item => item.toUpperCase())
})
