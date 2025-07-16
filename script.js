
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
  delay: 2,
})

tl.from("#page1",{
  y:1200,
  opacity:0
})

tl.to("#loader",{
  display:none
})

tl.to(".line h2",{
  
  animationName:"anime",
  opacity:1
})