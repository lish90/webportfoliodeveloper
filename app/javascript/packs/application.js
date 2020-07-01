
import { loadDynamicBannerText } from '../components/banner';
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';
console.log("does this work");


document.addEventListener('turbolinks:load', () => {
  loadDynamicBannerText();
});