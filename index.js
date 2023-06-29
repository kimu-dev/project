const express = require('express')
const dataRouter = require('/home/project/routes/test_data.routes')
const PORT = process.env.PORT || 8080

const app = express()

// app.get('/', (req, res) => {
//     res.send('HELLO WORLD!!!')
// })

app.use(express.json())
app.use('/api', dataRouter)


app.listen(PORT, () => console.log(`server started on port ${PORT}`))
