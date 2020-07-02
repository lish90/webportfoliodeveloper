import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-info', {
    strings: ["Hi, I'm Alisha, Webdeveloper"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };