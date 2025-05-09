const { io } = require("socket.io-client");
const Config = require("../../server");
const socket = io(Config.Url);
const IOController = {};
IOController.SocketIOInstance = undefined;


// const LocalData = {
//   socket: {
//     emitter: undefined,
//     subscriber: undefined,
//   },
// };

IOController.initSocket = () => {
  socket.on("connect", () => {
    console.log("socketIOClient");
    // console.log(LocalData);
  });
  socket.on("newMessage", (msg) => {
    console.log("Message reçu du client:", msg);
    // Diffuser à tous sauf l’expéditeur
    socket.broadcast.emit("receiveMessage", msg);
  });
  socket.on("disconnect", () => {
    console.log("Disconnect Client");
  });
};
export default IOController;
