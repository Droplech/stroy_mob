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





    


    const counter = (selector, action) => {
        let price = selector.parents('.count_price').find($('.count_info'));
      
        switch (action) {
          case 'increment': 
            price.val(parseInt(price.val()) + 1); break;
          case 'decrement': 
            if (price.val() < 2) { price.val(1) } else { price.val(parseInt(price.val()) - 1);} break;  
        }
        
        let priceContainer = selector.parents('.product_item').find($('.price_now'));
        let priceValue = $(priceContainer).data('value')
        priceContainer.text((priceValue * price.val()).toFixed(2))
    } 

    $('.count_plus').click(function() {
        counter($(this), 'increment')
    })
    $('.count_minus').click(function() {
        counter($(this), 'decrement')
    })


    $('.like').click(function(){
        if( !$(this).hasClass('like-active') ){
            $(this).addClass('like-active')

        }else{
            $(this).removeClass('like-active')
        }
    })






    $('.open_filter').click(function(){
        $('.filter_modal').hasClass('filter_modal-active')  
        $('.filter_modal').addClass('filter_modal-active')
        $('html').css("overflow","hidden")
        
    })

    $('.close_filter_modal').click(function(){
        $('.filter_modal').removeClass('filter_modal-active')
        $('html').css("overflow","auto")
    })





    $(".item_filter .title").click(function(){
        if( !$(this).hasClass('active')){
            $(this).addClass('active')
            $(this).next().slideDown()
            $(this).find('.icon').css({
                'transform':'rotate(90deg)',
                'transition':'.3s'
            })
            
            
        }else{
            $(this).removeClass('active')
            $(this).next().slideUp()
            $(this).find('.icon').css({
                'transform':'rotate(-90deg)',
                'transition':'.3s'
            })
            
        }
    })
    
    $('.label .txt').click(function(){
        if( !$(this).hasClass('label-active') ){
            $(this).addClass('label-active')
            
        }else{
            $(this).removeClass('label-active')
            
    
        }
    
        
    })
    $('.btn_moreBrands').click(function(e){
        e.preventDefault()
        if( !$('.btn_moreBrands').hasClass('active') ){
            $('.btn_moreBrands').addClass('active')
            $('.more_brands').slideDown()
            $('.btn_moreBrands').html('Скрыть')
        }else{
            $('.btn_moreBrands').removeClass('active')
            $('.more_brands').slideUp()
            $('.btn_moreBrands').html('Показать еще')
        }
        
    })


    $('.btn_more_description').click(function(){
        if( !$('.description_block').hasClass('description_block-active') ){
            $('.description_block').addClass('description_block-active')
            $('.btn_more_description').addClass('btn_more_description-active')
        }else{
            $('.description_block').removeClass('description_block-active')
        }
        
    })



    $('.characteristics_title').click(function(){
        if( !$('.characteristics_title').next().hasClass('active')){
            $('.characteristics_title').addClass('active')
            $('.characteristics_title').next().addClass('active')
            
            $('.characteristics_title').next().slideDown()
        }else{
            $('.characteristics_title').removeClass('active')
            $('.characteristics_title').next().removeClass('active')
            $('.characteristics_title').next().slideUp()
        }
    })





    new Swiper('.slider_block',{
        navigation: {
            nextEl: '#instrum_arrow_next',
            prevEl: '#instrum_arrow_prev',
          },
    })


    new Swiper('.product_slider',{
        pagination: {
            el: '#prod_pagination',
          },
    })










})