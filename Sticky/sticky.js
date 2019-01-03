// class Sticky {
//     constructor(selector, n) {
//         this.elements = $(selector)
//         this.offset = n
//     }
// }

// var sticky = new Sticky(selector, n)


$(window).on('scroll', function () {
    var scrollY = window.scrollY
    if (scrollY > 0) {
        $('#topbar').addClass('sticky')
    } else {
        $('#topbar').removeClass('sticky')
    }
})