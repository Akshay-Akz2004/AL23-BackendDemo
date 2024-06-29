
var tl=gsap.timeline();

tl.from("#top-left,#top-right",{
  y:-200,
  duration:1,
  opscity:0,
  stagger:0.6
})


tl.from("#midhero h1",{
  y:200,
  duration:1,
  stagger:0.6
})

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
})



Shery.makeMagnet("#top-left,#top-right", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



// Shery.textAnimate("#textmid", {
//   style: 2,
//   y: 10,
//   delay: 0.1,
//   duration: 1,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });


const confirmfile=document.getElementById('confirmfile').addEventListener('click',()=>{
  Papa.parse(document.getElementById('uploadfile').files[0],{
    download:true,
    header:true,
    skipEmptyLines:true,
    complete:function(results){
      console.log(results);
    }
  });
})