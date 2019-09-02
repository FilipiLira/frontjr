import $ from 'jquery'


function ajustarAlturaCarousel(){
    setInterval(()=>{
    let larguraInicialJanela = $(window).width()
    let alturaCarousel = $('.carousel-inner').height()
    
    let proporcaoInicial = (alturaCarousel /  larguraInicialJanela)
    
    let novaAltura = larguraInicialJanela * 0.2106
    
    if($(window).width() < 750){
        let novaAlturaDispPequenos = novaAltura + 50

        $('.carousel-inner').css('height', `${novaAlturaDispPequenos}`)

        $('.filter').each((i, img) =>{
            $(img).css('height', `${novaAlturaDispPequenos}`, '!important')
        })

    } else{
        $('.carousel-inner').css('height', `${novaAltura}`)

        $('.filter').each((i, img) =>{
            $(img).css('height', `${novaAltura}`, '!important')
        })
    }
    
   

    }, 10)
    
    
    /*setInterval(() =>{
        let larguraAtualJanela = $(window).width()
        if(larguraAtualJanela !== larguraInicialJanela){
           
           let novaAltura = larguraAtualJanela * proporcaoInicial
           $('.carousel-inner').css('height', `${novaAltura}`)
        }
    }, 10)
    */
}

ajustarAlturaCarousel()