

/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/javesq10@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

/* --------------------Local Storage--------------------------------------- */

const btnTheme = document.querySelector('.btn_theme');

if(localStorage.getItem('theme') === '') {
    localStorage.setItem('theme', 'light');
}

const themeUsed = localStorage.getItem('theme');

if(themeUsed === 'dark') {

  document.body.style.background = '#19191a';
  document.body.children[0].style.background = '#020202';
  document.body.children[0].children[0].children[3].style.background = '#020202';
  document.body.children[0].children[0].children[3].children[0].style.color = '#0d56df';
  document.body.children[0].children[0].children[3].children[1].style.color = '#0d56df';
  document.body.children[0].children[0].children[3].children[2].style.color = '#0d56df';
  document.body.children[0].children[0].children[0].children[0].style.color = '#058d4d';
  document.body.children[0].children[0].children[2].style.background = '#000';
  document.body.children[1].children[1].children[0].style.color = '#a29607';
  document.body.children[1].children[1].children[0].children[1].style.color = '#c9b977';
  document.body.children[1].children[1].children[1].style.color = '#c9b977';
  document.body.children[1].children[1].children[2].style.color = '#c9b977';
  document.body.children[1].children[1].children[3].style.color = '#c9b977';
  document.body.children[1].children[2].style.color = '#c9b977';
  document.body.children[2].children[0].children[0].style.color = '#a29607';
  document.body.children[3].children[0].children[0].style.color = '#a29607';
  document.body.children[3].children[0].children[2].style.color = '#c9b977';
  document.body.children[3].children[0].children[2].style.background = '#19191a';
 /*  document.body.children[3].children[0].children[2].children[2].style.background = '#666';
  document.body.children[3].children[0].children[2].children[3].style.background = '#666';
  document.body.children[3].children[0].children[2].children[5].style.background = '#666'; */
  /* document.body.children[3].children[0].children[2].children[2].style.color = '#DCF9E4';
  document.body.children[3].children[0].children[2].children[3].style.color = '#DCF9E4';
  document.body.children[3].children[0].children[2].children[5].style.color = '#DCF9E4'; */
  document.body.children[4].style.background = '#020202';
  document.body.children[4].children[0].style.color = '#058d4d';
  document.body.children[3].children[0].children[1].children[0].children[0].children[0].style.background = '#fff';
  document.body.children[3].children[0].children[1].children[0].children[1].children[0].style.color = '#fff';
  document.body.children[3].children[0].children[1].children[1].children[1].children[0].style.color = '#fff';
  document.body.children[3].children[0].children[2].children[0].style.background = '#666';
  document.body.children[3].children[0].children[2].children[1].style.background = '#666';
  document.body.children[3].children[0].children[2].children[2].style.background = '#666';
  document.body.children[3].children[0].children[2].children[0].style.color = '#DCF9E4';
  document.body.children[3].children[0].children[2].children[1].style.color = '#DCF9E4';
  document.body.children[3].children[0].children[2].children[2].style.color = '#DCF9E4';

  

  }else{

  document.body.style.background = '#fff';
  document.body.children[0].style.background = '#666';
  document.body.children[0].children[0].children[3].style.background = '#666';
 /*  document.body.children[0].children[0].children[3].style.color = '#666'; */
  document.body.children[0].children[0].children[3].children[0].style.color = '#DCF9E4';
  document.body.children[0].children[0].children[3].children[1].style.color = '#DCF9E4';
  document.body.children[0].children[0].children[3].children[2].style.color = '#DCF9E4';
  document.body.children[0].children[0].children[0].children[0].style.color = '#75f28c';
  document.body.children[0].children[0].children[2].style.background = '#666';
  document.body.children[1].children[1].children[0].style.color = '#000';
  document.body.children[1].children[1].children[0].children[1].style.color = '#000';
  document.body.children[1].children[1].children[1].style.color = '#000';
  document.body.children[1].children[1].children[2].style.color = '#000';
  document.body.children[1].children[1].children[3].style.color = '#000';
  document.body.children[1].children[2].style.color = '#000';
  document.body.children[2].children[0].children[0].style.color = '#000';
  document.body.children[3].children[0].children[0].style.color = '#000';
  document.body.children[3].children[0].children[2].style.color = '#000';
  document.body.children[3].children[0].children[2].style.background = '#fff';
 /*  document.body.children[3].children[0].children[2].children[2].style.background = '#fff';
  document.body.children[3].children[0].children[2].children[3].style.background = '#fff';
  document.body.children[3].children[0].children[2].children[5].style.background = '#fff'; */
  /* document.body.children[3].children[0].children[2].children[2].style.color = '#000';
  document.body.children[3].children[0].children[2].children[3].style.color = '#000';
  document.body.children[3].children[0].children[2].children[5].style.color = '#000'; */

  document.body.children[4].style.background = '#666';
  document.body.children[4].children[0].style.color = '#75f28c';
  document.body.children[3].children[0].children[1].children[0].children[0].children[0].style.background = '#fff';
  document.body.children[3].children[0].children[1].children[0].children[1].children[0].style.color = '#069';
  document.body.children[3].children[0].children[1].children[1].children[1].children[0].style.color = '#069';
  document.body.children[3].children[0].children[2].children[0].style.background = '#fff';
  document.body.children[3].children[0].children[2].children[1].style.background = '#fff';
  document.body.children[3].children[0].children[2].children[2].style.background = '#fff';
  document.body.children[3].children[0].children[2].children[0].style.color = '#000';
  document.body.children[3].children[0].children[2].children[1].style.color = '#000';
  document.body.children[3].children[0].children[2].children[2].style.color = '#000';
  
  
}

btnTheme.addEventListener('click', () => {
  const themeUsed = localStorage.getItem('theme');

  if(themeUsed === 'dark') {
    localStorage.setItem('theme', 'light');
    document.body.style.background = '#fff';
    document.body.children[0].style.background = '#666';
    document.body.children[0].children[0].children[3].style.background = '#666';
    /* document.body.children[0].children[0].children[3].style.color = '#666'; */
    document.body.children[0].children[0].children[3].children[0].style.color = '#DCF9E4';
    document.body.children[0].children[0].children[3].children[1].style.color = '#DCF9E4';
    document.body.children[0].children[0].children[3].children[2].style.color = '#DCF9E4';
    document.body.children[0].children[0].children[0].children[0].style.color = '#75f28c';
    document.body.children[0].children[0].children[2].style.background = '#666';
    document.body.children[1].children[1].children[0].style.color = '#000';
    document.body.children[1].children[1].children[0].children[1].style.color = '#000';
    document.body.children[1].children[1].children[1].style.color = '#000';
    document.body.children[1].children[1].children[2].style.color = '#000';
    document.body.children[1].children[1].children[3].style.color = '#000';
    document.body.children[1].children[2].style.color = '#000';
    document.body.children[2].children[0].children[0].style.color = '#000';
    document.body.children[3].children[0].children[0].style.color = '#000';
    document.body.children[3].children[0].children[2].style.color = '#000';
    document.body.children[3].children[0].children[2].style.background = '#fff';
    /* document.body.children[3].children[0].children[2].children[2].style.background = '#fff';
    document.body.children[3].children[0].children[2].children[3].style.background = '#fff';
    document.body.children[3].children[0].children[2].children[5].style.background = '#fff'; */
    /* document.body.children[3].children[0].children[2].children[2].style.color = '#000';
    document.body.children[3].children[0].children[2].children[3].style.color = '#000';
    document.body.children[3].children[0].children[2].children[5].style.color = '#000'; */

    document.body.children[4].style.background = '#666';
    document.body.children[4].children[0].style.color = '#75f28c';
    document.body.children[3].children[0].children[1].children[0].children[0].children[0].style.background = '#fff';
    document.body.children[3].children[0].children[1].children[0].children[1].children[0].style.color = '#069';
    document.body.children[3].children[0].children[1].children[1].children[1].children[0].style.color = '#069';
    document.body.children[3].children[0].children[2].children[0].style.background = '#fff';
    document.body.children[3].children[0].children[2].children[1].style.background = '#fff';
    document.body.children[3].children[0].children[2].children[2].style.background = '#fff';
    document.body.children[3].children[0].children[2].children[0].style.color = '#000';
    document.body.children[3].children[0].children[2].children[1].style.color = '#000';
    document.body.children[3].children[0].children[2].children[2].style.color = '#000';
    
    
    
  } else {
    localStorage.setItem('theme', 'dark');
    document.body.style.background = '#19191a';
    document.body.children[0].style.background = '#020202';
    document.body.children[0].children[0].children[3].style.background = '#020202';
    document.body.children[0].children[0].children[3].children[0].style.color = '#0d56df';
    document.body.children[0].children[0].children[3].children[1].style.color = '#0d56df';
    document.body.children[0].children[0].children[3].children[2].style.color = '#0d56df';
    document.body.children[0].children[0].children[0].children[0].style.color = '#058d4d';
    document.body.children[0].children[0].children[2].style.background = '#000';
    document.body.children[1].children[1].children[0].style.color = '#a29607';
    document.body.children[1].children[1].children[0].children[1].style.color = '#c9b977';
    document.body.children[1].children[1].children[1].style.color = '#c9b977';
    document.body.children[1].children[1].children[2].style.color = '#c9b977';
    document.body.children[1].children[1].children[3].style.color = '#c9b977';
    document.body.children[1].children[2].style.color = '#c9b977';
    document.body.children[2].children[0].children[0].style.color = '#a29607';
    document.body.children[3].children[0].children[0].style.color = '#a29607';
    document.body.children[3].children[0].children[2].style.color = '#c9b977';
    document.body.children[3].children[0].children[2].style.background = '#19191a';
  /*   document.body.children[3].children[0].children[2].children[2].style.background = '#666';
    document.body.children[3].children[0].children[2].children[3].style.background = '#666';
    document.body.children[3].children[0].children[2].children[5].style.background = '#666'; */
    /* document.body.children[3].children[0].children[2].children[2].style.color = '#DCF9E4';
    document.body.children[3].children[0].children[2].children[3].style.color = '#DCF9E4';
    document.body.children[3].children[0].children[2].children[5].style.color = '#DCF9E4'; */

    document.body.children[4].style.background = '#020202';
    document.body.children[4].children[0].style.color = '#058d4d';
    document.body.children[3].children[0].children[1].children[0].children[0].children[0].style.background = '#fff';
    document.body.children[3].children[0].children[1].children[0].children[1].children[0].style.color = '#fff';
    document.body.children[3].children[0].children[1].children[1].children[1].children[0].style.color = '#fff';
    document.body.children[3].children[0].children[2].children[0].style.background = '#666';
    document.body.children[3].children[0].children[2].children[1].style.background = '#666';
    document.body.children[3].children[0].children[2].children[2].style.background = '#666';
    document.body.children[3].children[0].children[2].children[0].style.color = '#DCF9E4';
    document.body.children[3].children[0].children[2].children[1].style.color = '#DCF9E4';
    document.body.children[3].children[0].children[2].children[2].style.color = '#DCF9E4';
    
    
  }
});