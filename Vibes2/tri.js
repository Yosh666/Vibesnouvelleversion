//$(".music").hide()
$("#show_picture").on("click", function(){
    event.preventDefault();//enleve la fonciton par defaut du "a"
    $("#tri a").removeClass('text-rose').addClass("text-gris");
    $(this).addClass("text-rose").removeClass("text-gris");
    $(".music").hide()
    $(".video").hide()
    $(".picture").show()

})

$("#show_audio").on("click", function(){
    event.preventDefault();
    $("#tri a").removeClass('text-rose').addClass("text-gris");
    $(this).addClass("text-rose").removeClass("text-gris");
    $(".picture, .video").hide();
    $(".music").show();

})

$("#show_video").on("click", function(){
    event.preventDefault();
    $("#tri a").removeClass('text-rose').addClass("text-gris");
    $(this).addClass("text-rose").removeClass("text-gris");
    $(".picture, .music").hide();
    $(".video").show();

})

$("#all").on("click", function(){
    event.preventDefault();
    $("#tri a").removeClass('text-rose').addClass("text-gris");
    $(this).addClass("text-rose").removeClass("text-gris");
    
    $(".music, .picture, .video").show();

})
