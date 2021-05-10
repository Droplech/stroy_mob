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


    $('.button_tabs_btn').click(function(){
        $('.button_tabs_btn').removeClass('tabs_btn-active')
        $(this).addClass('tabs_btn-active')
    })
    


    $('.button_tabs_btn').click(function(e){
        e.preventDefault()
        $('.button_tabs_btn').removeClass('tabs_btn-active')
        $(this).addClass('tabs_btn-active')
        $('.block_tabs_content').removeClass('block_tabs_content-active')
        $( $(this).attr('data-tab') ).addClass('block_tabs_content-active') 
    })


})