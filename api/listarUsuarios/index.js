
const sql = require('mssql');

module.exports = async function (context, req) {

    try {

        await sql.connect(process.env.SQL_CONNECTION_STRING);

        const resultado = await sql.query`
            SELECT * FROM Usuarios
            ORDER BY FechaRegistro DESC
        `;

        context.res = {
            status: 200,
            body: resultado.recordset
        };

    } catch (err) {

        context.res = {
            status: 500,
            body: err.message
        };
    }
};
