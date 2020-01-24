const io = require("socket.io-client");
const hostOptions = {
	protocol: process.env.SERVER_PROTOCOL,
	host: process.env.SERVER_HOST,
	port: process.env.SERVER_PORT,
	path: process.env.SOCKET_PATH
};

const client = io(`${hostOptions.protocol}://${hostOptions.host}:${hostOptions.port}`, {
	path: hostOptions.path
});

client.on("connect", ClientEvent_Connect);

function ClientEvent_Connect() {
	console.log("Client successfully re/connected");
}