document.querySelector('a[href="#page16"]').addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#page16").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
document.querySelector('a[href="#page15"]').addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#page15").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
document.querySelector('a[href="#page5"]').addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#page5").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});



function loco(){
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
loco()
var loader= document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none";
})
function canvas() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
  });

  function files(index) {
      var data = `
     
pubg 2/manish 2_00108028.jpg
pubg 2/manish 2_00108029.jpg
pubg 2/manish 2_00108030.jpg
pubg 2/manish 2_00108031.jpg
pubg 2/manish 2_00108032.jpg
pubg 2/manish 2_00108033.jpg
pubg 2/manish 2_00108034.jpg
pubg 2/manish 2_00108035.jpg
pubg 2/manish 2_00108036.jpg
pubg 2/manish 2_00108037.jpg
pubg 2/manish 2_00108038.jpg
pubg 2/manish 2_00108039.jpg
pubg 2/manish 2_00108040.jpg
pubg 2/manish 2_00108041.jpg
pubg 2/manish 2_00108042.jpg
pubg 2/manish 2_00108043.jpg
pubg 2/manish 2_00108044.jpg
pubg 2/manish 2_00108045.jpg
pubg 2/manish 2_00108046.jpg
pubg 2/manish 2_00108047.jpg
pubg 2/manish 2_00108048.jpg
pubg 2/manish 2_00108049.jpg
pubg 2/manish 2_00108050.jpg
pubg 2/manish 2_00108051.jpg
pubg 2/manish 2_00108052.jpg
pubg 2/manish 2_00108053.jpg
pubg 2/manish 2_00108054.jpg
pubg 2/manish 2_00108055.jpg
pubg 2/manish 2_00108056.jpg
pubg 2/manish 2_00108057.jpg
pubg 2/manish 2_00108058.jpg
pubg 2/manish 2_00108059.jpg
pubg 2/manish 2_00108060.jpg
pubg 2/manish 2_00108061.jpg
pubg 2/manish 2_00108062.jpg
pubg 2/manish 2_00108063.jpg
pubg 2/manish 2_00108064.jpg
pubg 2/manish 2_00108065.jpg
pubg 2/manish 2_00108066.jpg
pubg 2/manish 2_00108067.jpg
pubg 2/manish 2_00108068.jpg
pubg 2/manish 2_00108069.jpg
pubg 2/manish 2_00108070.jpg
pubg 2/manish 2_00108071.jpg
pubg 2/manish 2_00108072.jpg
pubg 2/manish 2_00108073.jpg
pubg 2/manish 2_00108074.jpg
pubg 2/manish 2_00108075.jpg
pubg 2/manish 2_00108076.jpg
pubg 2/manish 2_00108077.jpg
pubg 2/manish 2_00108078.jpg
pubg 2/manish 2_00108079.jpg
pubg 2/manish 2_00108080.jpg
pubg 2/manish 2_00108081.jpg
pubg 2/manish 2_00108082.jpg
pubg 2/manish 2_00108083.jpg
pubg 2/manish 2_00108084.jpg
pubg 2/manish 2_00108085.jpg
pubg 2/manish 2_00108086.jpg
pubg 2/manish 2_00108087.jpg
pubg 2/manish 2_00108088.jpg
pubg 2/manish 2_00108089.jpg
pubg 2/manish 2_00108090.jpg
pubg 2/manish 2_00108091.jpg
pubg 2/manish 2_00108092.jpg
pubg 2/manish 2_00108093.jpg
pubg 2/manish 2_00108094.jpg
pubg 2/manish 2_00108095.jpg
pubg 2/manish 2_00108096.jpg
pubg 2/manish 2_00108097.jpg
pubg 2/manish 2_00108098.jpg
pubg 2/manish 2_00108099.jpg
pubg 2/manish 2_00108100.jpg
pubg 2/manish 2_00108101.jpg
pubg 2/manish 2_00108102.jpg
pubg 2/manish 2_00108103.jpg
pubg 2/manish 2_00108104.jpg
pubg 2/manish 2_00108105.jpg
pubg 2/manish 2_00108106.jpg
pubg 2/manish 2_00108107.jpg
pubg 2/manish 2_00108108.jpg
pubg 2/manish 2_00108109.jpg
pubg 2/manish 2_00108110.jpg
pubg 2/manish 2_00108111.jpg
pubg 2/manish 2_00108112.jpg
pubg 2/manish 2_00108113.jpg
pubg 2/manish 2_00108114.jpg
pubg 2/manish 2_00108115.jpg
pubg 2/manish 2_00108116.jpg
pubg 2/manish 2_00108117.jpg
pubg 2/manish 2_00108118.jpg
pubg 2/manish 2_00108119.jpg
pubg 2/manish 2_00108120.jpg
pubg 2/manish 2_00108121.jpg
pubg 2/manish 2_00108122.jpg
pubg 2/manish 2_00108123.jpg
pubg 2/manish 2_00108124.jpg
pubg 2/manish 2_00108125.jpg
pubg 2/manish 2_00108126.jpg
pubg 2/manish 2_00108127.jpg

      `;
      return data.split("\n")[index].trim();
  }

  const frameCount = 77;

  const images = [];
  const imageSeq = {
      frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      img.onload = () => console.log(`Loaded: ${img.src}`);
      img.onerror = () => console.error(`Failed to load: ${img.src}`);
      images.push(img);
  }

  gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
          scrub: 0.15,
          trigger: `#page7>canvas`,
          start: `top top`,
          end: `350% top`,
          scroller: `#main`,
      },
      onUpdate: render,
  });

  images[1].onload = render;

  function render() {
      scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
      );
  }

  ScrollTrigger.create({
      trigger: "#page7>canvas",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `400% top`,
  });
}
canvas();















// Custom Cursor
var crsr = document.querySelector(".cursor");
var main = document.querySelector("#main");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "330px";
    crsr.style.height = "200px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});














function updateFooterTime() {
  // Get the UTC time
  const now = new Date();
  const utcHours = String(now.getUTCHours()).padStart(2, '0');
  const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
  const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
  const utcTime = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${utcHours}:${utcMinutes}:${utcSeconds}`;

  // Get the IST time (UTC + 5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);
  const istHours = String(istDate.getUTCHours()).padStart(2, '0');
  const istMinutes = String(istDate.getUTCMinutes()).padStart(2, '0');
  const istSeconds = String(istDate.getUTCSeconds()).padStart(2, '0');
  const istTime = `${istDate.getFullYear()}.${String(istDate.getMonth() + 1).padStart(2, '0')}.${String(istDate.getDate()).padStart(2, '0')} ${istHours}:${istMinutes}:${istSeconds}`;

  // Update the HTML elements
  document.getElementById('utc-time').textContent = utcTime;
  document.getElementById('ist-time').textContent = istTime;
}

// Update the time every second
setInterval(updateFooterTime, 1000);
updateFooterTime();



