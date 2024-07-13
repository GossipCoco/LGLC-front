// src/Service/urlFormatter.js
export function formatUrl(name) {
    return name.replace(/\s+/g, '-');
  }