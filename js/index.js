const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

///////////////////    NAV   /////////////////
///////////////////    IMAGE   /////////////////
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
///////////////////    ANCHORS   /////////////////
let anchor = document.querySelectorAll('a');
anchor[0].textContent = siteContent['nav']['nav-item-1'];
anchor[1].textContent = siteContent['nav']['nav-item-2'];
anchor[2].textContent = siteContent['nav']['nav-item-3'];
anchor[3].textContent = siteContent['nav']['nav-item-4'];
anchor[4].textContent = siteContent['nav']['nav-item-5'];
anchor[5].textContent = siteContent['nav']['nav-item-6'];


 ///////////////////    HEADER/CTA   /////////////////
///////////////////    TITLE   /////////////////
let title = document.querySelector('h1');
title.textContent = siteContent['cta']['h1'];
///////////////////    BUTTON   /////////////////
let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];
///////////////////    IMAGE   /////////////////
let logoCircle = document.getElementById("cta-img");
logoCircle.setAttribute('src', siteContent.cta["img-src"])


///////////////////    MAIN-CONTENT   /////////////////
///////////////////    IMAGE   /////////////////
let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent['main-content']["middle-img-src"]);
///////////////////    BODY-TITLES   /////////////////
let bodyT = document.querySelectorAll('h4');
bodyT[0].textContent = siteContent['main-content']['features-h4'];
bodyT[1].textContent = siteContent['main-content']['about-h4'];
bodyT[2].textContent = siteContent['main-content']['services-h4'];
bodyT[3].textContent = siteContent['main-content']['product-h4'];
bodyT[4].textContent = siteContent['main-content']['vision-h4'];
///////////////////    BODY-PARAGRAPHS   /////////////////
let bodyP = document.querySelectorAll('p');
bodyP[0].textContent = siteContent['main-content']['features-content'];
bodyP[1].textContent = siteContent['main-content']['about-content'];
bodyP[2].textContent = siteContent['main-content']['services-content'];
bodyP[3].textContent = siteContent['main-content']['product-content'];
bodyP[4].textContent = siteContent['main-content']['vision-content'];


///////////////////    CONTACT   /////////////////
bodyT[5].textContent = siteContent['contact']['contact-h4'];
bodyP[5].textContent = siteContent['contact']['address'];
bodyP[6].textContent = siteContent['contact']['phone'];
bodyP[7].textContent = siteContent['contact']['email'];

///////////////////    FOOTER   /////////////////
bodyP[8].textContent = siteContent['footer']['copyright'];




