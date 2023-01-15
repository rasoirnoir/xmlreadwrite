import { app, BrowserWindow } from "electron";

let win;

function createWindow(){
    //create the browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#fff'
    });

    win.loadURL(`file://${__dirname}/dist/index.html`);
    
    win.on('close', function () {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', function (){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
app.on('activate', function(){
    if(win === null){
        createWindow();
    }
});
