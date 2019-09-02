import $ from 'jquery'


function escurecerConteudo(){
    if($('#collapsibleNavId').hasClass('show')){
        $('main').addClass('s-dark-filter')
    } else {
        $('main').removeClass('s-dark-filter')
    }
}

setInterval(()=>{
    escurecerConteudo()
}, 1)