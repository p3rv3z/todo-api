import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Task from 'App/Models/Task'

export default class TasksController {
  public async index({ response }: HttpContextContract) {
    const tasks = await Task.all() 
    response.status(200)
    return tasks
  }

  public async store({ request, response }: HttpContextContract) {
    const taskSchema = schema.create({
      title: schema.string({}, [rules.maxLength(100)]),

      description: schema.string({}, [rules.maxLength(250)]),
    })

    const payload = await request.validate({ schema: taskSchema })

    response.status(201)
    return Task.create(payload)
  }

  public async show({ params, response }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)
    response.status(200)
    return task
  }

  public async update({ params, request, response }: HttpContextContract) {
    const taskSchema = schema.create({
      title: schema.string({}, [rules.maxLength(100)]),
      description: schema.string({}, [rules.maxLength(250)]),
    })
    const payload = await request.validate({ schema: taskSchema })

    const task = await (await Task.findOrFail(params.id)).merge(payload).save()

    response.status(201)
    return task
  }

  public async destroy({ params, response }: HttpContextContract) {
    await (await Task.findOrFail(params.id)).delete()

    response.status(201)
    return { message: "Task deleted Successfully."}
  }
}
