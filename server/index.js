const express=requires ('express')
const app=express()
app.use(express.json())
const port=4005
const mc=require('./controllers/messagesController')

const messagesBaseURL="/api/messages"
app.get(messagesBaseURL,mc.read)
app.post(messagesBaseURL,mc.create)
app.put('api/messages/:id',mc.update)
app.delete('/api/messages:id',mc.delete)