$(window).on("load", function(){  


// INICIALIZAÇÕES   
    $('.carrinho').hide()
    var localStorag = []
    let open = false
    var qntd = 0
    var itens = {pos0: [], pos1: [], pos2: []}
    var posi0 = 0,posi1 = 0,posi2 = 0

// FUNÇÕES

    const closeModal = () => {
        $('.carrinho').hide(function (){
            $('.carrinho').slideUp(1000)
        })
        open = false
        $('section').css("filter", "")
        $('footer').css("filter", "")
        $('section').css("user-select", "auto")
    }

    const setLocalStorage = (produto) => localStorage.setItem("ID", JSON.stringify(produto));
    const getLocalStorage = () => JSON.parse(localStorage.getItem('ID')) ?? []; 

//EVENTOS

    ({pos0,pos1,pos2} = getLocalStorage())
    qntd = pos0 + pos1 + pos2
    if(qntd > 0){
        $('.carrinho-geral span').html(`${qntd}`)
        $('.carrinho-geral').show(function (){
            $('.carrinho-geral').slideDown(1000)
        })
    }

    var key

    $('.buttons-sexta-section').click(function(){

        key = $(this).attr('data-id')

        if(open == false){
            $('.carrinho').show(function (){
                $('.carrinho').slideDown(1000)
            })
            open = true
            $('section').css("filter", "blur(4px)")
            $('section').css("user-select", "none")
            $('footer').css("filter", "blur(4px)")
            $('.carrinho img').attr('src', planos[key].img)
            $('.carrinho h2').html(planos[key].name)
            $('.carrinho h3').html(`R$: ${planos[key].price.toFixed(2)}`)
            $('.carrinho h4').html(planos[key].desc)
        }
    })

    $('.close--carrinho').click(function(){
        closeModal()
    })

    $('.concluir-compra').click(function(){
        qntd++
        $('.carrinho-geral span').html(`${qntd}`)
        $('.carrinho-geral').show(function (){
            $('.carrinho-geral').slideDown(1000)
        })
        
        switch(key){

            case "0":
                posi0++
                itens.pos0.push(posi0)
                break
            case "1":
                posi1++
                itens.pos1.push(posi1)
                break
            case "2":
                posi2++
                itens.pos2.push(posi2)
                break
            default:
                break

        }

        closeModal()
    })

    $('.carrinho-geral').click(function(){
        setLocalStorage(itens)
    })
        

})
