// locomotive

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



// CURSUR Function/

var crsr = document.querySelector(".cursur")
var xdiff = 0;
var ydiff = 0;
var xpv = 0;
var ypv = 0;
var xscale = 0;
var yscale = 0;
window.addEventListener("mousemove",(dets)=>{
crsr.style.left = dets.x + 20 + "px";
crsr.style.top = dets.y + 20 +  "px";
xdiff = dets.x - xpv
xpv = dets.x;
ydiff = dets.y - xpv
ypv = dets.y;
 xscale = gsap.utils.clamp(.8, 1.2, xdiff);
  yscale = gsap.utils.clamp(.8 , 1.2 , ydiff);
crsr.style.transform= `scale(${xscale} , ${yscale})`

})

// Cursur hover function/

let mhov = document.querySelectorAll("#navbar h1, #navbar .menu a , #navbar button");
console.log(mhov)

mhov.forEach(element => {
element.addEventListener("mouseenter",()=>{
    gsap.to(".cursur",{
        scale:3,
        duration: 1,
        backgroundColor:"transparent",
        border: "1px solid white",
    })
})    
element.addEventListener("mouseout",()=>{
    gsap.to(".cursur",{
        scale:1,
        duration: 1,
        backgroundColor:"black",
        border: "none",
    })
})    
});


// Services slider Page 4

var voice = document.querySelector(".voice");
var digi = document.querySelector(".digi");
var pymt = document.querySelector(".pymt");


voice.addEventListener("click",()=>{
    gsap.to(".one-side, .second-side",{
        scale:1,
        duration:1,
        scrub:2,
    })
    gsap.to(".one-side1, .second-side1",{
            scale:0,
    })
    gsap.to(".one-side2, .second-side2",{
            scale:0,
    })
    
})
digi.addEventListener("click",()=>{
    gsap.to(".one-side1, .second-side1",{
        scale:1,
        duration:1,
        // stagger:1,
    })
    gsap.to(".one-side, .second-side",{
        scale:0,
    })
    gsap.to(".one-side2, .second-side2",{
        scale:0,
    })
})
pymt.addEventListener("click",()=>{
    gsap.to(".one-side2, .second-side2",{
        scale:1,
        duration:1,
        // stagger:1,
    })
    gsap.to(".one-side, .second-side",{
        scale:0,
    })
    gsap.to(".one-side1, .second-side1",{
        scale:0,
    })
})

// GSAP PAGE 1

gsap.from("#section img , #section .divsvg",{
    scale:0,
    opacity:0,
    duration:2,
    stagger:1.3,
    delay:0.2,
})
gsap.from("#section .half1 h1, #section .half1 p, #section .half1 h2",{
    scale:0,
    // x:"-100vw",
    opacity:0,
    duration:0.5,
    stagger:0.2,
    delay:0.2,
    
})
gsap.from(".logo h1 , .logo  h1 img",{
    scale:0,
    opacity:0,
    duration:0.5,
    stagger:0.2,
})


// GSAP FOR PAGE 2
gsap.from("#page2 .head h2, #page2 .head img",{
    scale:0,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        trigger: "#page2",
        scroller:"#main",
        // markers:true,
        start :"top 100%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".section-p2 .part1 .img1 , .section-p2 .part1 .img3 , .section-p2 .part1 .img2 , .section-p2 .part2 h1 , .section-p2 .part2 h2 , .section-p2 .part2 p",{
    scale:0,
    opacity:0,
    duration:5,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#page2",
        scroller:"#main",
        // markers:true,
        start :"top 8%",
        end:"top -20%",
        scrub:2,
    }
})


// page 5
swag = gsap.timeline()
swag.to(".scrollerin",{
    transform : "translateX(-300vw)",
    // duration : 500, 
    scrollTrigger:{
trigger:"#page5",
scroller :"#main",
start : "top 10%",
end : "top -350%",
pin:true,
// markers : true,
scrub:5,
    }
})



gsap.from(".head3 , .section3 .div",{
    scale :0,
    opacity:0,
    stagger:1,
    duration:3,
    scrollTrigger:{
        trigger:"#page3",
        scroller :"#main",
        start : "top 28%",
        scrub:5,
        end : "top 35%",
        // pin:true,
        // markers : true,
            }
})
gsap.from("#page4>h1 , #page4 .list, #page4 .section4",{
    scale:0,
    opacity:0,
    stagger:1,
    duration:3,
    scrollTrigger:{
        trigger:"#page4",
        scroller :"#main",
        start : "top 28%",
        scrub:5,
        end : "top 35%",
        // pin:true,
        // markers : true,
            }
})
gsap.from("#page5>h1 ",{
    scale:0,
    opacity:0,
    stagger:1,
    duration:3,
    scrollTrigger:{
        trigger:"#page5",
        scroller :"#main",
        start : "top 28%",
        scrub:5,
        end : "top 35%",
        // pin:true,
        // markers : true,
            }
})