class Slide {
    constructor(options) {
        this.options = options
        this.$element = $(this.options.element)
        this.$element.addClass('zywSlides')
    }
}

var slide = new Slide({
    element: '.slides',
    autoPlay: false,
    controls: false,
    pager: false
})
