$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function Nova()
{
    location.href="assistir.html"
}

function Voltar()
{
    location.href="index.html"
}

function Detalhes()
{
    location.href="detalhes.html"
}