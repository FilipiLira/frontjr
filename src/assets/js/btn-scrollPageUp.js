import $ from 'jquery'

function scrollUp(){

    setInterval(()=>{
        (scrollY > 500) ? $('.btn-up').fadeIn(300) : $('.btn-up').fadeOut(300)
    }, 10)
    
    $('.btn-up').on('click', function (){
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })
}

scrollUp()
