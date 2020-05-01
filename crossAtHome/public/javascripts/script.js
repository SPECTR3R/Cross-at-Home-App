document.addEventListener(
  'DOMContentLoaded',
  () => {
    if (window.location.pathname !== '/') {
      const $logOutLi = document.createElement('li');
      $logOutLi.innerHTML = `<a class="nav-link text-info" href="/logout">LogOut</a>`;
      $logOutLi.classList.add('nav-item');
      $logOutLi.classList.add('nav-logOutLi');
      document.querySelector('.navbar-nav').appendChild($logOutLi);
    } else {
      const $logOutLi = document.querySelector('.nav-logOutLi');
      if ($logOutLi) document.querySelector('.navbar-nav').removeChild($logOutLi);
    }
  },
  false
);
