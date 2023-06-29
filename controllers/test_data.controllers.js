const db = require('/home/project/db')
class dataController {
    async createData(req, res) {
        const {data_name, data_value} = req.body
        const insertData = await db.query('insert into project.test_data (data_name, data_value) values ($1, $2) returning *', [data_name, data_value])

        res.json(insertData.rows[0])
    }
    async getData(req, res) {
        const Data = await db.query('select * from project.test_data')
        res.json(Data.rows)
    }
    async getOneData(req, res) {
        const id = req.params.id
        const oneData = await db.query('select * from project.test_data where id = $1', [id])
        res.json(oneData.rows[0])
    }
    async updateData(req, res) {
        const {id, data_name, data_value} = req.body
        const updData = await db.query('update project.test_data set data_name = $1, data_value = $2 where id = $3 returning *', [data_name, data_value, id])
        res.json(updData.rows[0])
    }
    async deleteData(req, res) {
        const id = req.params.id
        const delData = await db.query('delete from project.test_data where id = $1', [id])
        res.json(delData.rows[0])
    }
} //полный цикл CRUD

module.exports = new dataController()