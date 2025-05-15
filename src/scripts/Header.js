export default class Header {
    selectors = {
        root: "[data-js-header]",
        burgerButton: "[data-js-header-burger-button]",
        cartButton: "[data-js-header-cart-button]",
        menu: "[data-js-header-nav]",
    };

    stateClasses = {
        isActive: "is-active",
        isHidden: "is-hidden",
    };

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.cartButtonElement = this.rootElement.querySelector(this.selectors.cartButton);
        this.menuElement = this.rootElement.querySelector(this.selectors.menu);

        this.init();
    }

    init() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.cartButtonElement.classList.toggle(this.stateClasses.isHidden);
        this.menuElement.classList.toggle(this.stateClasses.isActive);
    }
}