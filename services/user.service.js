const { response } = require('express');
const db = require('../db')

module.exports.getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM employees')
        .catch(err => console.log(err))
    return rows;
}

module.exports.getAllUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM employees WHERE id=' + id)
        .catch(err => console.log(err))
    return rows;
}

module.exports.deleteUserById = async (id) => {
try {
    await db.query('DELETE FROM employees WHERE id=' + id)
       
} catch (err) {
    err => console.log(err)
    }  
 console.log('Employee successfully deleted');
    
}

module.exports.addOrEditUser = async (obj, id=0) => {
    const [[[{ affectedRows}]]] = await db.query('CALL usp_employee_add_or_edit(?,?,?,?)',
        [id, obj.name, obj.employee_code, obj.salary])
    return affectedRows;
}