// Define variables

let sideNav = document.getElementById("side-nav");
let isNavOpen = false;
let userAgent = navigator.userAgent;
let isMobile = false;

// Define constants

const header = document.getElementById("header");
const devices = ["iPhone", "iPad", "Android"];

// Check if device is a listed mobile device

for (i = 0; i < devices.length; i++) {
  if (userAgent.includes(devices[i])) {
    isMobile = true;
  } else {
    continue;
  }
}

//////////////////////////////////////////////////////////////
//Side bar nav shows on scroll using intersection observer API

// Call back function for observer
const obsCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting && isNavOpen === false && isMobile === false) {
    sideNav.classList.add("open");
    sideNav.classList.remove("close");
    isNavOpen = true;
  } else if (entry.isIntersecting && isNavOpen === true && isMobile === false) {
    sideNav.classList.remove("open");
    sideNav.classList.add("close");
    isNavOpen = false;
  } else {
    return;
  }
};

// Observer options object
const obsOptions = {
  root: null,
  threshold: 0,
};

// Define observer
const headerObserver = new IntersectionObserver(obsCallback, obsOptions);

// tell observer which section to observe
headerObserver.observe(header);
