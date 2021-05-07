$(document).ready(function(){
    
    $('.li_title').click(function(){
        if( !$(this).hasClass("active") ){
            $(this).addClass('active')
            $(this).next().slideDown()
        }else{
            $(this).removeClass('active')
            $(this).next().slideUp()
        }

        
        
    })

    $('.burger_btn').click(function(){
        $('.burger_menu').addClass('burger_menu-active')
        $('.popup').show()
    })
    $('.close_menu').click(function(){
        $('.burger_menu').removeClass('burger_menu-active')
        $('.popup').hide()
    })
    $('.popup').click(function(){
        $('.burger_menu').removeClass('burger_menu-active')
        $('.popup').hide()
    })
    



})