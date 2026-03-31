import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'

// preload.js
const original = Element.prototype.attachShadow

Element.prototype.attachShadow = function (init) {
  return original.call(this, { ...init, mode: 'open' })
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI.ipcRenderer)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI.ipcRenderer
}
