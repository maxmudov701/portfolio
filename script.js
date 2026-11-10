const translations = {
  uz: {
    navAbout:"Men haqimda",navSkills:"Ko‘nikmalar",navWork:"Ishlarim",navContact:"Aloqa",
    available:"Yangi loyihalar uchun ochiqman",hello:"SALOM, MEN",role:"Dasturchi & kreativ fikrlovchi",
    heroDesc:"G‘oyalarni sodda, tezkor va esda qolarli raqamli tajribalarga aylantiraman. Har bir detal — maqsad sari bir qadam.",
    letsTalk:"Loyiha boshlaymiz",seeWork:"Ishlarimni ko‘rish",portfolio:"PORTFOLIO — 2026",curious:"qiziquvchanlik",scroll:"PASTGA O‘TING",
    aboutLabel:"MEN HAQIMDA",aboutTitle:"Texnologiya.<br><em>Ijodkorlik.</em><br>Natija.",
    aboutText:"Men Ozodbek — zamonaviy texnologiyalar va web dasturlashga qiziqadigan dasturchiman. Men uchun yaxshi sayt shunchaki chiroyli ko‘rinish emas: u qulay, tez va foydalanuvchiga haqiqiy qiymat berishi kerak.",
    statOne:"Yil o‘rganish",statTwo:"Yangi g‘oyalar",statThree:"Qiziqish",
    skillsLabel:"NIMALAR QILA OLAMAN",skillsTitle:"Asboblarim <em>to‘plami.</em>",skillsDesc:"Har bir loyiha uchun mos texnologiyani tanlayman.",
    skill1:"Tuzilma va vizual dizayn",skill2:"Interaktiv va dinamik sahifalar",skill3:"Foydalanuvchiga qulay tajriba",skill4name:"Doimiy o‘rganish",skill4:"Yangi bilim va texnologiyalar",
    workLabel:"TANLANGAN YO‘NALISHLAR",workTitle:"G‘oyadan <em>yechimgacha.</em>",workDesc:"Men yaratishni yoqtiradigan raqamli tajribalar.",
    project1:"Shaxsiy portfolio",project1desc:"Shaxsiyat va mahoratni namoyish qiluvchi web sahifa.",project2:"Raqamli mahsulotlar",project2desc:"Oddiy vazifalarni qulaylashtiradigan interfeyslar.",workNote:"* Bu bo‘lim — kelajakdagi loyihalar uchun konseptual namunalar.",
    contactLabel:"BOG‘LANISH",contactKicker:"BIROR G‘OYANGIZ BORMI?",contactTitle:"Keling, uni<br><em>birga yaratamiz.</em>",contactNote:"Yaxshi g‘oyalar suhbatdan boshlanadi.",rights:"BARCHA HUQUQLAR HIMOYALANGAN.",backTop:"YUQORIGA ↑"
  },
  en: {
    navAbout:"About",navSkills:"Skills",navWork:"Projects",navContact:"Contact",
    available:"Available for new projects",hello:"HELLO, I'M",role:"Developer & creative thinker",
    heroDesc:"I turn ideas into simple, fast and memorable digital experiences. Every detail is one step closer to the goal.",
    letsTalk:"Start a project",seeWork:"Explore my work",portfolio:"PORTFOLIO — 2026",curious:"curiosity",scroll:"SCROLL TO EXPLORE",
    aboutLabel:"ABOUT ME",aboutTitle:"Technology.<br><em>Creativity.</em><br>Impact.",
    aboutText:"I'm Ozodbek — a developer interested in modern technology and web development. A great website is more than a beautiful look: it should be useful, fast and deliver real value to people.",
    statOne:"Year learning",statTwo:"New ideas",statThree:"Curiosity",
    skillsLabel:"WHAT I DO",skillsTitle:"My <em>toolkit.</em>",skillsDesc:"I choose the right technology for every project.",
    skill1:"Structure and visual design",skill2:"Interactive and dynamic pages",skill3:"User-friendly experiences",skill4name:"Always learning",skill4:"New knowledge and technologies",
    workLabel:"SELECTED DIRECTIONS",workTitle:"From idea <em>to impact.</em>",workDesc:"Digital experiences I enjoy creating.",
    project1:"Personal portfolio",project1desc:"A website that presents personality and skills.",project2:"Digital products",project2desc:"Interfaces that make everyday tasks easier.",workNote:"* These are conceptual examples for future projects.",
    contactLabel:"GET IN TOUCH",contactKicker:"HAVE AN IDEA?",contactTitle:"Let's make it<br><em>happen together.</em>",contactNote:"Great ideas start with a conversation.",rights:"ALL RIGHTS RESERVED.",backTop:"BACK TO TOP ↑"
  }
};
let lang = "uz";
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[next][key]) el.innerHTML = translations[next][key];
  });
  langToggle.innerHTML = next === "uz" ? "UZ <span>↗</span>" : "EN <span>↗</span>";
}
langToggle.addEventListener("click", () => setLanguage(lang === "uz" ? "en" : "uz"));
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("ozodbek-theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("ozodbek-theme") === "dark") document.body.classList.add("dark");
menuToggle.addEventListener("click", () => {
  document.querySelector(".topbar").classList.toggle("menu-open");
  menuToggle.textContent = document.querySelector(".topbar").classList.contains("menu-open") ? "✕" : "☰";
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".topbar").classList.remove("menu-open");
  menuToggle.textContent = "☰";
}));
