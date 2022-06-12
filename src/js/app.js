const testimonySlider = {
    next: null,
    prev: null,
    slider: null,
    items: [],
    progression: 0,
    progressionStep: 100,
    gap: 0,
    step: 0,

    init() {
        this.next = document.querySelector('#next');
        this.prev = document.querySelector('#prev');
        this.slider = document.querySelector('#testimonySlider');
        this.items = document.querySelectorAll('#testimonySlider .oneTestimony');
        this.gap = getComputedStyle(this.slider).gap.replace('px', '');

        this.event();
    },

    event() {
        this.next.addEventListener('click', () => this.translate('plus'))
        this.prev.addEventListener('click', () => this.translate('minus'))
    },

    translate(absolute) {
        if (absolute === 'plus') {
            if (this.step < this.items.length - 1) {
                this.step++;
            } else {
                //
            }
        } else if (absolute === 'minus') {
            if (this.step > 0) {
                this.step--;
            } else {
                //
            }
        }
        this.progression = this.step * -this.progressionStep;
        this.items.forEach(testimony => {
            testimony.style.transform = 'translateX(calc(' + this.progression + '% - ' + this.step * this.gap + 'px))';
        })
    }
}
if (document.querySelector('#testimonySlider')){
    testimonySlider.init();
}

const burgerMenu = {
    btn: null,
    nav: null,
    class: "show",

    init() {
        this.btn = document.querySelector('#burgerMenu');
        this.nav = document.querySelector('#burgerMenuNav');

        this.event();
    },

    event() {
        this.btn.addEventListener('click', () => {
            this.nav.classList.toggle(this.class);
        });
    }
};
if(document.querySelector('#burgerMenu')){
    burgerMenu.init();
}

