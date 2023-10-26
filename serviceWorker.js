const staticStratForge = "Strat-Forge-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/01.png",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
  "/images/07.png",
  "/images/08.jpg",
  "/images/09.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/msc.mp3"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticStratForge).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  