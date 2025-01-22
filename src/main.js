import { app, BrowserWindow } from 'electron';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let window;
const __dirname = dirname(fileURLToPath(import.meta.url));

function createWindow() {
  window = new BrowserWindow({
    width: 340,
    height: 420,
    resizable: false,
    alwaysOnTop: true,
  });

  window.setMenuBarVisibility(false);
  window.loadFile(join(__dirname, 'index.html'));

  window.on('closed', () => {
    window = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
