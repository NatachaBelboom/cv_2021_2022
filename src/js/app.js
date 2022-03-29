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

testimonySlider.init();

const skillSlider = {
    slider: null,
    items: [],
    progression: 0,
    gap: 0,
    time: 0,

    init() {
        this.slider = document.querySelector('#skillSlider');
        this.items = document.querySelectorAll('#skillSlider .item');
        this.gap = getComputedStyle(this.slider).gap.replace('px', '');

        this.animate();
    },

    animate() {
        setInterval(() => {
            this.translate()
        }, this.time)
    },

    stopAnimate() {
        clearTimeout()
    },

    translate() {
        this.progression--
        this.items.forEach(item => {
            item.style.transform = 'translateX(' + this.progression / 100 + 'px)';
        })

        this.animate()
    }
}

skillSlider.init();

