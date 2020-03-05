//$(".music").hide()
$("#show_picture").on("click", function(){
    event.preventDefault();//enleve la fonciton par defaut du "a"
    $("#tri a").removeClass('text-rose').addClass("text-blanc");
    $(this).addClass("text-rose").removeClass("text-blanc");
    $(".music").hide()
    $(".video").hide()
    $(".picture").show()

})

$("#show_audio").on("click", function(){
    event.preventDefault();
    $("#tri a").removeClass('text-rose').addClass("text-blanc");
    $(this).addClass("text-rose").removeClass("text-blanc");
    $(".picture, .video").hide();
    $(".music").show();

})

$("#show_video").on("click", function(){
    event.preventDefault();
    $("#tri a").removeClass('text-rose').addClass("text-blanc");
    $(this).addClass("text-rose").removeClass("text-blanc");
    $(".picture, .music").hide();
    $(".video").show();

})

$("#all").on("click", function(){
    event.preventDefault();
    $("#tri a").removeClass('text-rose').addClass("text-blanc");
    $(this).addClass("text-rose").removeClass("text-blanc");
    
    $(".music, .picture, .video").show();

})
