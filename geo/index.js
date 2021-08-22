const headerMenuBtn = document.querySelector('.header-menu_btn'),
     headerModal = document.querySelector('.header-modal-menu');

headerMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerModal.classList.toggle('active');
})

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

    selector.append(a);
    a.append(wrapper);
    a.append(title);
    wrapper.append(img);
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

menuItems('.header-modal-menu','./avatar.svg', 'Account');
menuItems('.header-modal-menu','./avatar.svg', 'Account');
menuItems('.header-modal-menu','./avatar.svg', 'Account');
menuItems('.header-modal-menu','./avatar.svg', 'Account');


navLinks('.navLinks', '#', './3686457.jpg', 'Анонсы новых статей');
navLinks('.navLinks', '#', './3686457.jpg', 'Мироздание: теория и практика');
navLinks('.navLinks', '#', './3686457.jpg', 'Практическая магия');
navLinks('.navLinks', '#', './3686457.jpg', 'Авторский блог о кулинарии');
navLinks('.navLinks', '#', './3686457.jpg', 'События, теории, конспирология');
navLinks('.navLinks', '#', './3686457.jpg', 'Градозащита: теория и практика');
navLinks('.navLinks', '#', './3686457.jpg', 'Теория, методики, лайфхаки');
navLinks('.navLinks', '#', './3686457.jpg', 'Авторскийе блоги на любые темы');
navLinks('.navLinks', '#', './3686457.jpg', 'Путешествия');

newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './3686457.jpg');
newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './3686457.jpg');
newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './3686457.jpg');
newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './3686457.jpg');
newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './3686457.jpg');
newsItem('.news-wrapper', '#', 'Najnowszy sondaż. Polacy o przyszłości parlamentu', 'Onet', '1 hour', './3686457.jpg');