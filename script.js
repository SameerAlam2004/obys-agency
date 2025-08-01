function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


function loadingAnimation() {

  var tl = gsap.timeline()

  tl.from(".line h1", {
    y: 150,
    stagger: 0.1
  })

  tl.from("#line1part1 , .line h2", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1part1 h5")
      var grow = 0
      setInterval(function () {

        if (grow < 100) {

          h5timer.innerHTML = grow++
          grow++
        }
        else {
          h5timer.innerHTML = grow
        }
      }, 55)
    }
  })

  tl.to("#loader", {
    opacity: 0,
    duration: 1,
    delay: 1,
    onComplete: function () {
      document.querySelector("#loader").style.display = "none";
    }
  })
  


  tl.from("#page1", {
    y: 1200,
    opacity: 0
  })

  // tl.to("#loader",{
  //   display:none
  // })

  tl.to(".line h2", {

    animationName: "anime",
    opacity: 1
  })

  
tl.from(".hero h1",{
  y:100,
  stagger:.1,

})

tl.from("#nav",{
  opacity:0,
  
})

}

loadingAnimation()


function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      x: dets.x,
      y: dets.y,

    })


  })

  Shery.makeMagnet("#navpart2 h4")


}

// cursorAnimation()
locomotiveanimation()
