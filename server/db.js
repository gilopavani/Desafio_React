
async function deleteCustomer(id){
    const conn = await connect();
    await conn.query('DELETE FROM usuarios WHERE idusuarios=?',[id])
}

module.exports = {}