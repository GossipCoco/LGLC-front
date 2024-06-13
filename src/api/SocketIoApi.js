const { io } = require("socket.io-client");
const Config = require("../../server");
const socket = io(Config.Url);
//import UserLocalData from '../services/UserLocalData'
const IOController = {};
IOController.SocketIOInstance = undefined;

//console.log(UserLocalData)
const LocalData = {
  socket: {
    emitter: undefined,
    subscriber: undefined,
  },
};

IOController.initSocket = () => {
  socket.on("connect", () => {
    console.log("socketIOClient", socket.id);
    console.log(LocalData);
  });
  socket.on("disconnect", () => {
    console.log("Disconnect Client");
  });
};
export default IOController;
