class Suggestion {
    constructor(options) {
        this.options = options
        this.$input = $(options.input)
        this.bindEvents()
    }
    bindEvents() {
        this.$input.on('input', (e) => {
            this.options.search(e.currentTarget.value, (array) => {
                let $ol = $('<ol></ol>')
                array.forEach((text) => {
                    $ol.append($('<li></li>').text(text))
                })
                this.$input.after($ol)
            })
        })
    }
}


////////////////////////////////////////////////////////////////

var s = new Suggestion({
    input: 'input',
    search: function (text, callback) {
        let array = []
        for (let i = 0; i < 5; i++) {
            var n = parseInt(Math.random() * 100, 10)
            array.push(text + n)
        }
        setTimeout(() => {
            callback(array)
        }, 2000)

    }
})

