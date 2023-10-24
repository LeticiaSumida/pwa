  
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registrado"))
        .catch(err => console.log("service worker nao registrado", err))
    })
  }