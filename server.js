const Config = {};

// Config.Url = "http://192.168.1.10:4047";
// Config.Url = "http://192.168.1.14:4047"
// Config.Url = "http://192.168.1.23:4047";


// Config.Url = "http://10.117.60.52:4047"
// Config.Url = "http://10.117.60.73:4047"
// Config.Url = "https://192.168.189.223:4047"
// Config.Url = "http://192.168.168.153:4047"
// Config.Url = "http://192.168.1.23:4047"
if (typeof window !== 'undefined') {
  const hostname = 'http://192.168.1.11';
  const port = '4047'; // Assurez-vous que c'est le port sur lequel votre back-end écoute
  Config.Url = `${hostname}:${port}`;
} else {
  // Si vous exécutez du code côté serveur (Node.js), vous pouvez définir une URL par défaut ou utiliser l'adresse IP du serveur
  Config.Url = 'http://192.168.1.11:4047';
}

Config.secret = 'gossip-coco-key';
module.exports = Config;