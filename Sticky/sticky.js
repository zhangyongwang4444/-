// class Sticky {
//     constructor(selector, n) {
//         this.elements = $(selector)
//         this.offset = n
//     }
// }

// var sticky = new Sticky(selector, n)

// setTimeout(function () {
//     console.log($('button').offset())
// }, 3000)


var buttonOffset = $('button').offset()

$(window).on('scroll', function () {

    var scrollY = window.scrollY

    if (scrollY > 0) {
        $('#topbar').addClass('sticky')
    } else {
        $('#topbar').removeClass('sticky')
    }

    if (scrollY + 60 > buttonOffset.top) {
        $('button').addClass('sticky')
    } else {
        $('button').removeClass('sticky')
    }
})

