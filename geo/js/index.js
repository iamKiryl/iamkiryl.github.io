const headerMenuBtn = document.querySelector('.header-menu_btn'),
     headerModal = document.querySelector('.header-modal-menu'),
     headerAccountBtn = document.querySelector('.header-menu_account-img'),
     headerModalAccount = document.querySelector('.header-modal-account'),
     logoutBtn = document.querySelector('.header-modal-account-btn-logout'),
     logInDiv = document.querySelector('.header-menu_account-login'),
     logInPage = document.querySelector('.modal-login-page'),
     loginPageBtn = document.querySelector('.login-btn'),
     loginPageEmail = document.querySelector('#email'),
     loginPagePassword = document.querySelector('#password'),
     background = document.querySelector('.background')
     loginPageCloseBtn = document.querySelector('.modal-ligin-page_form-exit');

headerMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerModal.classList.toggle('active');
});

background.addEventListener('click', (e) => {
    e.preventDefault();
    logInPage.classList.add('nodisplay');
    background.classList.add('nodisplay');
    document.body.style.overflow = ''
});

loginPageCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logInPage.classList.add('nodisplay');
    background.classList.add('nodisplay');
    document.body.style.overflow = ''
})

headerAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerModalAccount.classList.toggle('active');
})

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logInDiv.classList.remove('nodisplay');
    headerAccountBtn.classList.add('nodisplay');
    headerMenuBtn.classList.add('nodisplay');
})

logInDiv.addEventListener('click', (e) => {
    e.preventDefault();
    logInPage.classList.remove('nodisplay');
    background.classList.remove('nodisplay');
    document.body.style.overflow = 'hidden';
})

document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && !logInPage.classList.contains('show')) { 
            logInPage.classList.add('nodisplay');
            background.classList.add('nodisplay');
            document.body.style.overflow = ''
        }
});

loginPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(loginPageEmail.value != '' && loginPagePassword.value != '') {
        logInPage.classList.add('nodisplay');
        logInDiv.classList.add('nodisplay');
        headerAccountBtn.classList.remove('nodisplay');
        headerMenuBtn.classList.remove('nodisplay');
        background.classList.add('nodisplay');
        document.body.style.overflow = ''
    }
});

document.body.addEventListener('click', (e) => {
    if (e.target != headerModal  && e.target != headerMenuBtn && headerModal.classList.contains('active')){
        headerModal.classList.toggle('active');
    }

    if (e.target != headerModalAccount && e.target != headerAccountBtn && headerModalAccount.classList.contains('active')){
        headerModalAccount.classList.toggle('active');
    }
});

loginPageEmail.placeholder = 'Имя / email';
loginPagePassword.placeholder = 'Пароль';

//loginPageBtn = document.querySelector('.login-btn'),
    // loginPageEmail = document.querySelector('#email'),
     //loginPagePassword = document.querySelector('#password'),
    /// loginPageCloseBtn

const menuItems = (modalSelector, imgSrc, titleText) => {
    const modal = document.querySelector(modalSelector),
          item = document.createElement('div'),
          wrapper = document.createElement('div'),
          imgDiv = document.createElement('div');
          title = document.createElement('div');
          img = document.createElement('img');

    item.classList.add('header-modal-menu__item');
    wrapper.classList.add('header-modal-menu__item-img-wrapper');
    imgDiv.classList.add('header-modal-menu__item-img');
    title.classList.add('header-modal-menu__item-title');
    title.innerText = titleText;
    img.src = imgSrc;
    imgDiv.append(img);
    wrapper.append(imgDiv);
    item.append(wrapper);
    item.append(title);
    modal.append(item);
}

const navLinks = (navSelector, link, imageLink, titleText) => {
    const selector = document.querySelector(navSelector),
           a = document.createElement('a'),
           wrapper = document.createElement('div'),
           img = document.createElement('img'),
           title = document.createElement('h3');

    a.classList.add('nav-links_link');
    a.href = link;
    wrapper.classList.add('nav-links_link-img-wrapper');
    img.src = imageLink;
    img.alt = titleText;
    title.classList.add('nav-links_link-title');
    title.innerText = titleText;

    if (selector) {
        selector.append(a);
        a.append(wrapper);
        a.append(title);
        wrapper.append(img);
    }
}

const newsItem = (newsSelector, newsLink, newsTitle, author, publication, newsImage) => {
    const selector = document.querySelector(newsSelector),
          a = document.createElement('a'),
          content = document.createElement('div'),
          title = document.createElement('h4'),
          info = document.createElement('div'),
          wrapper = document.createElement('div'),
          img = document.createElement('img');

          a.href = newsLink;
          a.classList.add('news');
          content.classList.add('news-content');
          title.classList.add('news-content-title');
          info.classList.add('news-content-info');
          wrapper.classList.add('news-image');
          img.src = newsImage;

          title.innerText = newsTitle;
          info.innerText = `${author} - ${publication}`;

          selector.append(a);
          a.append(wrapper);
          a.append(content);
          content.append(title);
          content.append(info);
          wrapper.append(img)
}

const advertising = ( advertisingSelector, link, imageLink, title = 'advertising') => {
        const selector = document.querySelector(advertisingSelector),
              a = document.createElement('a'),
              img = document.createElement('img');
    
              a.classList.add('advertising-item');
              a.href = link;
              img.src = imageLink;
              img.alt = title;

              if(selector) {
                  selector.append(a);
                  a.append(img);
              }
}

try {
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
    menuItems('.header-modal-menu','./img/avatar.svg', 'Account');
} catch {}

try {
    navLinks('.navLinks', './blog.html', './img/3686457.jpg', 'Анонсы новых статей');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Мироздание: теория и практика');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Практическая магия');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Авторский блог о кулинарии');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'События, теории, конспирология');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Градозащита: теория и практика');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Теория, методики, лайфхаки');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Авторскийе блоги на любые темы');
    navLinks('.navLinks', '#', './img/3686457.jpg', 'Путешествия');
} catch {}


try {
    newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './img/3686457.jpg');
    newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './img/3686457.jpg');
    newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './img/3686457.jpg');
    newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './img/3686457.jpg');
    newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './img/3686457.jpg');
    newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './img/3686457.jpg');
} catch {}

try {
    advertising('.advertising', '#', './img/image6.jpg');
    advertising('.advertising', '#', './img/image6.jpg');
    advertising('.advertising', '#', './img/image6.jpg');
    advertising('.advertising', '#', './img/image6.jpg');
} catch {}

