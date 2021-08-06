$(window).on("load", function(){

    // $('a').preventDefault()
    $('.carrinho').hide()
    let open = false;
    

    $('.buttons-sexta-section span').click(function(){

        if(open == false){
            $('.carrinho').show(function (){
                $('.carrinho').slideDown(1000)
            })
            open = true
            $('section').css("filter", "blur(4px)")
            $('footer').css("filter", "blur(4px)")
            // $('.carrinho img').attr('src', planos[atual].img)
            // $('.carrinho h2').html(planos[atual].name)
            // $('.carrinho h3').html(`R$: ${planos[atual].price.toFixed(2)}`)
        }

    $('.close--carrinho').click(function(){
        $('.carrinho').hide(function (){
            $('.carrinho').slideUp(1000)
        })
        open = false
        $('section').css("filter", "")
        $('footer').css("filter", "")
    })

    })
})



