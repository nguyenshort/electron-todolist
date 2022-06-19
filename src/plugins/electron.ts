import type { App } from 'vue'
import {BrowserWindow} from "@electron/remote";

const plugin = {
    install(app: App) {
        const browserWindow = BrowserWindow.getFocusedWindow()
        app.provide('$electron', browserWindow)
    }
}

export default plugin
