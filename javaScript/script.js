// Объект с переводами на разные языки
const translations = {
  en: {
    h1: "Example of dynamically changing the page language",
    greeting: "Hello! This is an example page in English.",
    new: "I love coding.",
  },
  de: {
    h1: "Beispiel für das dynamische Ändern der Seitensprache",
    greeting: "Hallo! Dies ist eine Beispiel-Seite auf Deutsch.",
    new: "Ich liebe es zu programmieren.",
  },
  ua: {
    h1: "Приклад динамічної зміни мови сторінки",
    greeting: "Привіт! Це приклад сторінки українською мовою.",
    new: "Я люблю програмувати.",
  },
};
const langs = document.getElementById("lang");

langs.addEventListener("click", getRightLang);

function getRightLang(evt) {
  evt.preventDefault;
  const languageCode = evt.target.id;
  changeLanguage(languageCode);
  // changeLanguage2(languageCode);
}
let translation;
// Функция для изменения языка
function changeLanguage(languageCode) {
  translation = translations[languageCode];
  document.querySelector(".heading").textContent = translation.h1;
  document.querySelector(".new").textContent = translation.new;
  document.querySelectorAll(`.greeting`).forEach(function (element) {
    element.textContent = translation.greeting;
  });
}
// function changeLanguage2(languageCode) {
//   translation = translations[languageCode];
//   document.querySelectorAll(`.heading`).forEach(function (element) {
//     element.textContent = translation.h1;
//   });
// }
const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};
function addDarkmodeWidget(options) {
  new Darkmode(options).showWidget();
}
window.addEventListener("load", addDarkmodeWidget);
