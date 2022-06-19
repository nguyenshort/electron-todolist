import { BrowserWindow } from "@electron/remote"

type  BrowserInstance = Electron.BrowserWindow;

export const useWindow = (): BrowserInstance => {
    return BrowserWindow.getFocusedWindow()!
}
