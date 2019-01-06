class Suggestion {
    constructor(options) {
        this.options = options
        this.$input = $(options.input)
        this.$ol = $('<ol></ol>')
        this.$input.after(this.$ol)
        this.bindEvents()
    }
    bindEvents() {
        this.$input.on('input', (e) => {
            this.options.search(e.currentTarget.value, (array) => {
                this.$ol.empty()
                array.forEach((text) => {
                    this.$ol.append($('<li></li>').text(text))
                })
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

