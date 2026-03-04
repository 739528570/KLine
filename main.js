const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 允许在渲染进程中使用 Node.js API (为了兼容性，生产环境建议开启隔离)
      webSecurity: false // 允许加载本地文件资源
    }
  })

  // 隐藏默认菜单，显得更像原生应用
  // Menu.setApplicationMenu(null)

  win.loadFile('index.html')

  // 打开开发者工具 (调试用，发布时可注释)
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
