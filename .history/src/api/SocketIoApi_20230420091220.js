const { io } = require("socket.io-client");

8; //import UserLocalData from '../services/UserLocalData'
const IOController = {};
IOController.SocketIOInstance = undefined;

//console.log(UserLocalData)
const LocalData = {
  socket: {
    emitter: undefined,
    subscriber: undefined,
  },
};
console.log(LocalData);
IOController.initSocket = () => {
  // socket.on("connect", () => {
  //     console.log('socketIOClient', socket.id)
  //     console.log(LocalData)
  // })
  socket.on("disconnect", () => {
    console.log("Disconnect Client");
  });
};
export default IOController;
