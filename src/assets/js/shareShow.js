import $ from 'jquery'

function shareShow() {
    $('#btn-share').click(function (e) {
        if ($('.share').css('display') !== 'none') {
            $('.share').fadeOut(300)
        } else {
            $('.share').fadeIn(300).css('position', 'relative')
        }
    })

    $(document).on('click', function (e) {
        const botao = document.querySelector('#btn-share')
        const iconeShare = document.querySelector('.fa-share')
        if (e.target !== botao && e.target !== iconeShare) {
            $('.share').fadeOut(300)
        }
    })
}

shareShow()

