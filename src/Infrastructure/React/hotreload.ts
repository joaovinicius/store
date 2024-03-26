import { io } from "socket.io-client";
(() => {
  sessionStorage.setItem('reloaded', 'true')
  const socket = io();
  socket.on("connect", () => {
    console.log(socket.connected, !sessionStorage.getItem('reloaded'))
    if(socket.connected && !sessionStorage.getItem('reloaded')) {
      window.location.reload()
    }
  });
  socket.on("disconnect", () => {
    sessionStorage.removeItem('reloaded')
  });
})()
