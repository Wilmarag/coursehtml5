
const sql = require('mssql');

module.exports = async function (context, req) {

    const { nombre, email } = req.body;

    try {

        await sql.connect(process.env.SQL_CONNECTION_STRING);

        await sql.query`
            INSERT INTO Usuarios (Nombre, Email)
            VALUES (${nombre}, ${email})
        `;

        context.res = {
            status: 200,
            body: "Usuario guardado"
        };

    } catch (err) {

        context.res = {
            status: 500,
            body: err.message
        };
    }
};
