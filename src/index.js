const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const started = require('electron-squirrel-startup');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.removeMenu();
  mainWindow.setTitle('LEGO SPIKE Prime');
  mainWindow.setIcon(path.join(__dirname, 'spike.png'));
  mainWindow.on('page-title-updated', (event) => {
    event.preventDefault();
  });
  mainWindow.loadURL('https://spike.legoeducation.com/prime/lobby/');
};

app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
