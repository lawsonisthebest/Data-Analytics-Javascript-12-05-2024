const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const electron = require('electron')

function createWindow () {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({width: width/1.5, height: height /1.25, icon: __dirname + "LogoWithName.png"});
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow()
})