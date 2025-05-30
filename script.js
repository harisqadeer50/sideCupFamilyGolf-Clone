let cursor = document.querySelector(".cursor");
let cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (details) => {
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
    cursorBlur.style.left = details.x - 170 + "px";
    cursorBlur.style.top = details.y - 170 + "px";
    
    
})

let h4 = document.querySelectorAll(".nav h4");
h4.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor="transparent";
  })

  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor="#95c11e";
  })
})



gsap.to(".nav", {
    backgroundColor:"#000",
   height:"100px",
    duration:0.5,
    scrollTrigger:{
     trigger:".nav",
     scroller:"body",
     start:"top -9%",
     end:"top -10%",
     scrub:1
   }
})

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
    // markers: true
  }
});


gsap.from("#about-us img,#about-us-in", {
  y:90,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1,
    // markers:true


  }
})


gsap.from(".card", {
  scale:0.8,
  opacity:0,
  duration:1,
  // stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1,
    // markers:true


  }
})

gsap.from("#col1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#col1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:3

  }
})
gsap.from("#col2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#col1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:3

  }
})

gsap.from(".page4 h1", {
  y:50,
  scrollTrigger:{
    trigger:".page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3
  }
})




