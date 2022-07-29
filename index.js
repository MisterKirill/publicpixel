const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    });
    win.menuBarVisible = false;
    win.loadFile('web/index.html');
}

app.whenReady().then(() => {
    createWindow();
});