// @ts-ignore
import { configure as configureElectronSettings } from 'electron-settings';

// run before anything else
configureElectronSettings({
  fileName: 'Settings', // backward compatible with electron-settings@3
});
