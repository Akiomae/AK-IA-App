//--------------------------------------\\
//-------------- IMPORTS ---------------\\
//--------------------------------------\\

import { app, BrowserWindow, ipcMain, Menu, shell } from "electron";
import { join } from "path";
import { is } from "@electron-toolkit/utils";

//--------------------------------------\\
//-------------- VARIABLES -------------\\
//--------------------------------------\\



//---------- CONTANTS ----------\\



//--------------------------------------\\
//---------- PRIVATE FUNCTIONS ---------\\
//--------------------------------------\\



//--------------------------------------\\
//---------- PUBLIC FUNCTIONS ----------\\
//--------------------------------------\\

class Program {
    public static mainWindow: BrowserWindow;


    public static async StartMainWindow() {
        Menu.setApplicationMenu(null);

        let preload = join(__dirname, '../preload/index.js');
        Program.mainWindow = new BrowserWindow({
            width: 1200,
            minWidth: 1200,
            height: 700,
            minHeight: 700,
            show: true,
            darkTheme: true,
            autoHideMenuBar: true,
            icon: join(__dirname, "../../resources/icon.png"),
            webPreferences: {
                preload: preload,
                sandbox: false,
                contextIsolation: true,
                webviewTag: true,
                devTools: is.dev
            }
        });

        Program.mainWindow.on("close", (_ev) => {
            _ev.preventDefault();

            Program.CloseApp();
        });

        ipcMain.handle("Window:Show", () => {
            console.log("show");
            Program.mainWindow.show();

            return preload;
        });


        Program.mainWindow.webContents.setWindowOpenHandler((details) => {
            shell.openExternal(details.url);
            return { action: 'deny' };
        });

        if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
            Program.mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
        } else {
            Program.mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
        }

        if (is.dev) {
            Program.mainWindow.webContents.openDevTools({ mode: 'undocked' });
        }
    }

    public static async Init() {
        app.on("ready", async () => {
            app.setAppUserModelId('com.electron');

            Program.StartMainWindow();
        });
    }

    public static async CloseApp() {
        Program.mainWindow.close();
        app.exit();
    }
};

//--------------------------------------\\
//--------------- MAIN -----------------\\
//--------------------------------------\\

export default Program;