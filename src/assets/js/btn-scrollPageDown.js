import $ from 'jquery'


function btnScrollPage() {
    $('.btn-down').on('click', function () {
        let a = 0
        if (a === 0) {
            $('html').animate({
                scrollTop: 910
            }, 1000)
        }
    })
}

btnScrollPage()

