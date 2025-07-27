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

cursorAnimation()