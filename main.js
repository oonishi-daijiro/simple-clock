const electron = require('electron');
const app = electron.app
const browserWindow = electron.BrowserWindow
let mainWindow = null
const ipcMain = electron.ipcMain

app.once('ready', () => {
  mainWindow = new browserWindow({
    width: 1280,
    height: 720,
    alwaysOnTop: true,
    frame: false,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: `${__dirname}\\preload.js`
    }
  })
  mainWindow.setMenu(null)
  mainWindow.loadFile(__dirname + "/mainWindow/index.html")
  mainWindow.on('close', () => {
    mainWindow = null
  })
})

ipcMain.on('close', () => {
  app.exit()
})

ipcMain.on('minimize', () => {
  mainWindow.minimize()
})
