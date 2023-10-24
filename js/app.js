  class SildeStories{
    constructor (id) {
      this.slide = document.querySelector('[data-slide=${id}]');
      this.active = 0;
      console.log(this.slide)
      this.activeSlide(2);
    }

    activeSlide(index) {
      this.active = index;
      this.items = this.slide.querySelector('.slide-items > *');
      this.items[index].classList.add('active');
    }
  }

  new SildeStories ('slides');
  
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registrado"))
        .catch(err => console.log("service worker nao registrado", err))
    })
  }