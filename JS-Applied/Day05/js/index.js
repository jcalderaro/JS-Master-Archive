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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = "img/logo.png"

let codeSnippet = document.getElementById("cta-img");
codeSnippet.src = "img/header-img.png"

let jumboImg = document.getElementById("middle-img");
jumboImg.src = "img/mid-page-accent.jpg"

const navItem1 = document.querySelector("nav a");
navItem1.textContent = (siteContent["nav"]["nav-item-1"]);
navItem1.style.color = "green";
const navItem2 = document.querySelectorAll("nav a")[1];
navItem2.textContent = (siteContent["nav"]["nav-item-2"]);
navItem2.style.color = "green";
const navItem3 = document.querySelectorAll("nav a")[2];
navItem3.textContent = (siteContent["nav"]["nav-item-3"]);
navItem3.style.color = "green";
const navItem4 = document.querySelectorAll("nav a")[3];
navItem4.textContent = (siteContent["nav"]["nav-item-4"]);
navItem4.style.color = "green";
const navItem5 = document.querySelectorAll("nav a")[4];
navItem5.textContent = (siteContent["nav"]["nav-item-5"]);
navItem5.style.color = "green";
const navItem6 = document.querySelectorAll("nav a")[5];
navItem6.textContent = (siteContent["nav"]["nav-item-6"]);
navItem6.style.color = "green";

const sales = document.createElement('a');
sales.textContent = "Sales";
sales.style.color = "green";
const history = document.createElement('a');
history.textContent = "History";
history.style.color = "green";
const newNavItem = document.querySelector('nav');
newNavItem.appendChild(sales);
newNavItem.prepend(history);

let domIsAwesome = document.querySelector('.cta h1');
domIsAwesome.textContent = (siteContent["cta"]["h1"]);
domIsAwesome.style.color = "cyan";
let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = (siteContent["cta"]["button"]);
ctaButton.style.color = "cyan";
ctaButton.style.fontFamily = "bangers";


let featuresH4 = document.querySelector('.main-content .top-content:first-child h4');
featuresH4.textContent = (siteContent["main-content"]["features-h4"]);
featuresH4.style.color = "cyan";
let featuresPara = document.querySelector('.main-content .top-content:first-child p');
featuresPara.textContent = (siteContent["main-content"]["features-content"]);

let aboutH4 = document.querySelector('.main-content .top-content .text-content:last-child h4');
aboutH4.textContent = (siteContent["main-content"]["about-h4"]);
aboutH4.style.color = "cyan";
let aboutPara = document.querySelector('.main-content .top-content .text-content:last-child p');
aboutPara.textContent = (siteContent["main-content"]["about-content"]);

let servicesH4 = document.querySelector('.main-content .bottom-content h4');
servicesH4.textContent = (siteContent["main-content"]["services-h4"]);
servicesH4.style.color = "cyan";
let servicesPara = document.querySelector('.main-content .bottom-content p');
servicesPara.textContent = (siteContent["main-content"]["services-content"]);

let productH4 = document.querySelectorAll('.main-content .bottom-content h4')[1];
productH4.textContent = (siteContent["main-content"]["product-h4"]);
productH4.style.color = "cyan";
let productPara = document.querySelectorAll('.main-content .bottom-content p')[1];
productPara.textContent = (siteContent["main-content"]["product-content"]);

let visionH4 = document.querySelectorAll('.main-content .bottom-content h4')[2];
visionH4.textContent = (siteContent["main-content"]["vision-h4"]);
visionH4.style.color = "cyan";
let visionPara = document.querySelectorAll('.main-content .bottom-content p')[2];
visionPara.textContent = (siteContent["main-content"]["vision-content"]);

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = (siteContent["contact"]["contact-h4"]);
contactH4.style.color = "cyan";
let contactPara1 = document.querySelectorAll('.contact p')[0];
contactPara1.textContent = (siteContent["contact"]['address']);
let contactPara2 = document.querySelectorAll('.contact p')[1];
contactPara2.textContent = (siteContent["contact"]['phone']);
let contactPara3 = document.querySelectorAll('.contact p')[2];
contactPara3.textContent = (siteContent["contact"]['email']);

let footer1 = document.querySelector('footer p');
footer1.textContent = (siteContent["footer"]["copyright"]);
footer1.style.color = "green";