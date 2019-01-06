class Suggestion {
    constructor(options) {
        this.options = options
        this.$input = $(options.input)
        this.bindEvents()
    }
    bindEvents() {
        this.$input.on('input', function (e) {
            console.log(e.currentTarget.value)
        })
    }
}


////////////////////////////////////////////////////////////////

var s = new Suggestion({
    input: 'input'
})