import $ from 'jquery'


function scrollViewMove(){
    const scrollTopo = $(window).scrollTop()
    const scrolllarg = $(document).width()

    const alturaBody = $('body').height()
    const alturaFooter = $('footer').height()
    //const alturaHeader = $('header').height()
    const alturaMain = $('main').height()
    

    // Script para animação do menu em telas maiores que 990px
    //if(scrolllarg > 990){
        const alturaHeader = $('header').height()
        if( scrollY > 1){
            $('.navbar-brand').css('font-size', '1rem')
            $('header').css('height', '40px')
            $('.down-menu').css('top', '20px')
        } else {
            $('header').css('height', '114px')
            $('.navbar-brand').css('font-size', '2rem')
            $('.down-menu').css('top', '73px')
        }
    //}
}

setInterval(()=>{
    scrollViewMove()
}, 1)
    //////////////////////////

    /*if(scrolllarg < 992){
        $('.navbar-brand').css('font-size', '2rem')
    }
    if(scrolllarg > 992){
        $('.navbar').fadeIn(300)
        $('.up-footer').children().removeClass('fixed-bottom').fadeIn(300)
    }

    if(alturaTela > 2476 && alturaTela < 2531){
        const alturaTotal = alturaFooter + alturaHeader + alturaMain
        const a = (alturaTotal - scrollY) - (alturaFooter + alturaTotal * 0.03)
        if(scrolllarg < a){
            if(scrollY > 50){
                $('.navbar').fadeOut(300)
                $('.up-footer').children().addClass('fixed-bottom').fadeIn(300)
            } else {
                $('.navbar').fadeIn(300)
                $('.up-footer').children().fadeOut(300)
            }
            
            if(scrollY > (alturaTotal - alturaFooter)){
                $('.up-footer').children().removeClass('fixed-bottom')
               
            } else{
                $('.up-footer').children().addClass('fixed-bottom')
            }
        } else {
            $('.navbar').fadeIn(300)
            $('.up-footer').children().removeClass('fixed-bottom')
            $('.up-footer').children().fadeIn(300)
        }
    }

    if(alturaTela > 2000 && alturaTela < 2476){
        const alturaTotal = alturaFooter + alturaHeader + alturaMain
        const a = (alturaTotal - scrollY) - (alturaFooter + alturaTotal * 0.03)
        if(scrolllarg < a){
            if(scrollY > 50){
                $('.navbar').fadeOut(300)
                $('.up-footer').children().addClass('fixed-bottom').fadeIn(300)
            } else {
                $('.navbar').fadeIn(300)
                $('.up-footer').children().fadeOut(300)
            }
            console.log(a)
            if(scrollY > (alturaTotal - alturaFooter)){
                $('.up-footer').children().removeClass('fixed-bottom')
               
            } else{
                $('.up-footer').children().addClass('fixed-bottom')
            }
        } else {
            $('.navbar').fadeIn(300)
            $('.up-footer').children().removeClass('fixed-bottom')
            $('.up-footer').children().fadeIn(300)
        }
    }

    if(alturaTela > 2476 && alturaTela < 2700){
        const alturaTotal = alturaFooter + alturaHeader + alturaMain
        const a = (alturaTotal - scrollY) - (alturaFooter + alturaTotal * 0.1)
        if(scrolllarg < a){
            if(scrollY > 50){
                $('.navbar').fadeOut(300)
                $('.up-footer').children().addClass('fixed-bottom').fadeIn(300)
            } else {
                $('.navbar').fadeIn(300)
                $('.up-footer').children().fadeOut(300)
            }
            console.log(a)
            if(scrollY > (alturaTotal - alturaFooter)){
                $('.up-footer').children().removeClass('fixed-bottom')
               
            } else{
                $('.up-footer').children().addClass('fixed-bottom')
            }
        } else {
            $('.navbar').fadeIn(300)
            $('.up-footer').children().removeClass('fixed-bottom')
            $('.up-footer').children().fadeIn(300)
        }
    }

    if(alturaTela > 2700 && alturaTela < 2800){
        const alturaTotal = alturaFooter + alturaHeader + alturaMain
        const a = (alturaTotal - scrollY) - (alturaFooter + alturaTotal * 0.09)
        if(scrolllarg < a){
            if(scrollY > 50){
                $('.navbar').fadeOut(300)
                $('.up-footer').children().addClass('fixed-bottom').fadeIn(300)
            } else {
                $('.navbar').fadeIn(300)
                $('.up-footer').children().fadeOut(300)
            }
            console.log(a)
            if(scrollY > (alturaTotal - alturaFooter)){
                $('.up-footer').children().removeClass('fixed-bottom')
               
            } else{
                $('.up-footer').children().addClass('fixed-bottom')
            }
        } else {
            $('.navbar').fadeIn(300)
            $('.up-footer').children().removeClass('fixed-bottom')
            $('.up-footer').children().fadeIn(300)
        }
    }

    if(alturaTela > 2800 && alturaTela < 2950){
        const alturaTotal = alturaFooter + alturaHeader + alturaMain
        const a = (alturaTotal - scrollY) - (alturaFooter + alturaTotal * 0.08)
        if(scrolllarg < a){
            if(scrollY > 50){
                $('.navbar').fadeOut(300)
                $('.up-footer').children().addClass('fixed-bottom').fadeIn(300)
            } else {
                $('.navbar').fadeIn(300)
                $('.up-footer').children().fadeOut(300)
            }
            console.log(a)
            if(scrollY > (alturaTotal - alturaFooter)){
                $('.up-footer').children().removeClass('fixed-bottom')
               
            } else{
                $('.up-footer').children().addClass('fixed-bottom')
            }
        } else {
            $('.navbar').fadeIn(300)
            $('.up-footer').children().removeClass('fixed-bottom')
            $('.up-footer').children().fadeIn(300)
        }
    }
}

function getData(url){
    const recebe = $('.data-request')
    fetch(url, {mode: 'no-cors'})
       .then(res => console.log(res))
}

$('[data-request]').on('click', function(e){
    e.preventDefault()
    getData(this.href)
})*/

