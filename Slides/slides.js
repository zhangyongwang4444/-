class Slide {
    constructor(options) {
        this.options = options
        this.$element = $(this.options.element)
        this.$element.addClass('zywSlides')
        this.timer = undefined
        let width = this.$element.children('ol').children('li').width()
        this.$element.width(width)
        this.$prev = $('<button class="zywSlides-prev">上一张</button>')
            .on('click', () => { this.prev() })
        this.$element.append(this.$prev)
        this.$next = $('<button class="zywSlides-next">下一张</button>')
            .on('click', () => { this.next() })
        this.$element.append(this.$next)
        this.go(0)
        if (this.options.autoPlay) {
            this.play()
        }
        this.$element.on('mouseenter', () => {
            this.stop()
        }).on('mouseleave', () => {
            this.play()
        })

    }
    go(index) {
        let $ol = this.$element.children('ol')
        let $items = $ol.children('li')
        if (index >= $items.length) {
            index = 0
        } else if (index < 0) {
            index = $items.length - 1
        }
        $ol.css({
            transform: `translateX(${-index * 400}px)`
        })
        this.current = index
    }
    next() {
        this.go(this.current + 1)
    }
    prev() {
        this.go(this.current - 1)
    }
    play() {
        this.timer = setInterval(() => {
            this.go(this.current + 1)
        }, 2000)
    }
    stop() {
        window.clearInterval(this.timer)
    }
}

var slide = new Slide({
    element: '.slides',
    autoPlay: true,
    controls: false,
    pager: false
})

