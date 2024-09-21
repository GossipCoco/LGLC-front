// Config.Url = "http://192.168.1.10:4047";
// Config.Url = "http://192.168.1.14:4047"
// Config.Url = "http://192.168.1.23:4047";


// Config.Url = "http://10.117.60.52:4047"
// Config.Url = "http://10.117.60.73:   4047"
// Config.Url = "https://192.168.189.223:4047"
// Config.Url = "http://192.168.168.153:4047"
// Config.Url = "http://192.168.1.23:4047"

const os = require('os');
const Config = {};

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
      const { family, internal, address } = iface;
      if (family === 'IPv4' && !internal) {
        return address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIPAddress();
Config.Url = `http://${localIP}:4047`;
Config.secret = 'gossip-coco-key';

module.exports = Config;