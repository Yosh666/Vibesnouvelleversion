$('#burger').on('click',function(){
    console.log ("toto");
    $("nav").toggleClass("open close");
    $('#burger').toggleClass("dispclose");
})