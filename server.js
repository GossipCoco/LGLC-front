const Config = {};

if (typeof window !== 'undefined') {
  const hostname = 'http://localhost';
  const port = '4047';
  Config.Url = `${hostname}:${port}`;
} else {
  Config.Url = 'http://localhost:4047';
}

Config.secret = 'gossip-coco-key';
module.exports = Config;