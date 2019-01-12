class Slide {
    constructor(options) {
        this.options = options
        this.$element = $(this.options.element)
        this.$element.addClass('zywSlides')
        let width = this.$element.children('ol').children('li').width()
        this.$element.width(width)
        this.$prev = $('<button>上一张</button>')
        this.$element.append(this.$prev)
        this.$next = $('<button>下一张</button>')
        this.$element.append(this.$next)
    }
}

var slide = new Slide({
    element: '.slides',
    autoPlay: false,
    controls: false,
    pager: false
})

