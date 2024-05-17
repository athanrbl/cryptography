import { app, BrowserWindow } from 'electron';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow; // Keep a global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.

const createWindow = () => { // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 920,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`); // and load the index.html of the app.

  mainWindow.webContents.openDevTools(); // Open the DevTools.

  mainWindow.on('closed', () => { // Emitted when the window is closed.
    mainWindow = null;
  });
};

app.on('ready', createWindow); // This method will be called when Electron has finished

app.on('window-all-closed', () => { // Quit when all windows are closed.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});