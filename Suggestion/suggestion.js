class Suggestion {
    constructor(options) {
        this.options = options
        this.$input = $(options.input)
        this.$input.wrap('<div class="zywSuggestion"></div>')
        this.$wrapper = this.$input.parent()
        this.$ol = $('<ol></ol>')
        this.$input.after(this.$ol)
        this.$loading = $('<div class="zywSuggestion-loading"></div>')
        this.$loading.html(this.options.loadingTemplate)
        this.$ol.after(this.$loading)
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

    },
    loadingTemplate: '加载中'
})

