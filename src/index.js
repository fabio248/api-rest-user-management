import '#Config/env.js';
import httpServer from '#Config/http.js';
import connectDB from '#Config/bd.js';

const PORT = parseInt(process.env.PORT);

const boostrap = async () => {
    await connectDB(process.env.MONGODB_URL);

    httpServer.listen(PORT, () => {
        console.log(`Servidor escuchabdo en el puerto ${PORT}`);
    });
};

boostrap();
