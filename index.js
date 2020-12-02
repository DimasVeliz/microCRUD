const server = require ( './config/server');


//setting up Ports
const PORT= process.env.PORT || 3000

server.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)