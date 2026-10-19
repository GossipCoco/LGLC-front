const Config = {};

if (typeof window !== 'undefined') {
  const hostname = 'http://192.168.1.14';
  const port = '4047';
  Config.Url = `${hostname}:${port}`;
} else {
  Config.Url = 'http://192.168.1.14:4047';
}

Config.secret = 'gossip-coco-key';
module.exports = Config;