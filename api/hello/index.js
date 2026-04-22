
module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: {
            mensaje: "Hola desde el backend 🚀",
            hora: new Date().toISOString()
        }
    };
};
