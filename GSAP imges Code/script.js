// const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func.apply(this, args);
      lastCall = now;
    }
  };
}

document.querySelector(".center").addEventListener("mousemove" ,throttleFunction((details)=> {
  let div = document.createElement("div");
  div.classList.add("imagediv");
  div.style.left = details.clientX + "px";
  div.style.top = details.clientY + "px";


  let img = document.createElement("img");
  img.setAttribute("src", "https://images.unsplash.com/photo-1745179276969-d9db2e682b5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  div.appendChild(img);

  document.body.appendChild(div);
  gsap.to(img, {
    y :0,
    ease: Power1,
    duration: .6
  });

   gsap.to(img, {
    y :"100%",
    delay: 0.6,
    ease:Power2
  });

  setTimeout(() => {
    div.remove();

  },2000)



},500)); 