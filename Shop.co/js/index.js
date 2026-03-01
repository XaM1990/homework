import BurgerMenu from './burger.js';

  const promoBanner = document.getElementById("promo-banner");

  if (promoBanner) {
    const closeBtn = promoBanner.querySelector(".promo-banner__close");

    closeBtn?.addEventListener("click", () => {
      promoBanner.style.display = "none";
    });
  }

	new BurgerMenu(
		{
			BURGER: 'burger',
			BURGER_OPEN: 'burger--open',
			HEADER_MENU: 'header__menu',
			HEADER_MENU_OPEN: 'header__menu--open',
			lABEL: {
				OPEN: 'Открыть меню',
				CLOSE: 'Закрыть меню',
			},
			PAGE_BODY: 'page__body',
			PAGE_BODY_NO_SCROLL: 'page__body--no-scroll',
			MENU_LINK: 'menu__link',
			BREAKPOINT: 768,
			MAIN: 'main',
		},
	);