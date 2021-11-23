const ipcRenderer = require('electron').ipcRenderer
const contextBridge = require('electron').contextBridge


contextBridge.exposeInMainWorld(
  "api", {
    close: () => {
      ipcRenderer.send('close')
    },
    minimize: () => {
      ipcRenderer.send('minimize')
    }
  }
)
