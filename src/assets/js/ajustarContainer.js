import $ from 'jquery'

function ajustarContainer(elem){
    if(screenX > 778){
        elem.addClass('container-fluid')
        elem.removeClass('container')  
    } else {
        elem.addClass('container')
        elem.removeClass('container-fluid')
    }
}

    ajustarContainer($('.cabecalho-artigo'))