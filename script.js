window.addEventListener("scroll", function () {
  const header = document.getElementById("site-header");

  if (window.pageYOffset > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }
});


// Așteaptă ca întreaga pagină să se încarce
window.addEventListener("load", function () {
  const sections = document.querySelectorAll(".animated-section");
  const logo = document.querySelector(".logo");

  // Definește o animație pentru secțiunile artistice
  const sectionAnimation = gsap.from(sections, {
    duration: 1,
    opacity: 0,
    y: 50, // Deplasare în jos inițial
    stagger: 0.2, // Pentru a anima secțiunile în ordine
    ease: "power3.out", // Poți schimba easing-ul pentru alt efect
    onComplete: function () {
      sections.forEach((section) => {
        section.classList.add("active"); // Adaugă clasa "active" pentru a anula deplasarea în jos
      });
    },
  });

  // Definește o animație pentru logo
  const logoAnimation = gsap.from(logo, {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)", // Poți schimba easing-ul pentru alt efect
  });

  // Rulează ambele animații simultan
  gsap.timeline().add(sectionAnimation, 0).add(logoAnimation, 0);

  // Poți ajusta animația și efectele pe placul tău modificând opțiunile gsap.from()
});



function downloadFile(fileUrl, fileName) {
  var link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



document.getElementById("myButton").addEventListener("click", function(event) {
  event.preventDefault(); // Opresc comportamentul implicit al legăturii
  // Aici poți adăuga orice alte acțiuni sau funcționalități pe care le dorești
  // de exemplu, să deschizi o fereastră modală
});


// Functia pentru verificarea daca un element este vizibil in viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Functia care va fi apelata la scroll pentru a verifica vizibilitatea sectiunilor
function checkSectionsVisibility() {
  var sections = document.querySelectorAll(".artist");

  sections.forEach(function(section) {
    if (isElementInViewport(section)) {
      section.classList.add("visible"); // Adaugam clasa "visible" pentru sectiunile vizibile
    } else {
      section.classList.remove("visible");
    }
  });
}

// Adaugam un eveniment de scroll care apeleaza functia de verificare la scroll
window.addEventListener("scroll", function() {
  checkSectionsVisibility();
});

// Apeleaza initial functia pentru a verifica sectiunile la incarcarea paginii
checkSectionsVisibility();




