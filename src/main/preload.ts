import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  message: (message: string) => ipcRenderer.send("message", message),
  setWindowTitle: (title: string) => ipcRenderer.send("set-window-title", title),
});
