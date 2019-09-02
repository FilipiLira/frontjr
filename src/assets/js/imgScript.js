import $ from 'jquery'

function imgScript(img){
   $(img).fadeOut(5).fadeIn(1000)
}

imgScript($('.card-row'))