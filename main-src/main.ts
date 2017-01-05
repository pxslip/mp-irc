import * as electron from 'electron';
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;

// Global reference to the main window, so the garbage collector doesn't close it.
let mainWindow : Electron.BrowserWindow;

// Opens the main window, with a native menu bar.
let createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        width: 1024,
        height: 768,
        frame: true
    });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// Call 'createWindow()' on startup.
app.on("ready", () => {
    createWindow();
});

// On OS X it is common for applications and their menu bar to stay active until the user quits explicitly
// with Cmd + Q.
//TODO consider if I want to change this behaviour or not?
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
});

// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other
// windows open.
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});