$(".accordion-element h4").on("click", function(){

    if($(this).find("span").hasClass("fa-plus")){
        //IF l'élément cliqué a trouvé le <span> et qu'il a la classe fa-plus
        $(".accordion-element h4").find('span.fa-minus').removeClass("fa-minus").addClass("fa-plus");
        //tout les  h4 possédant la classe "accordion-element" trouve la classe faminus dans le span et enleve faminus et ajoute faplus
        $(".accordion-element h4").siblings("p").slideUp(400);
        //tout les h4 possédant la classe "accordion-element" .Leurs voisins direct"p" font un slideup en 400ms
        //sibling c'est tous les voisins  qui sont dans la même div qu'ils soient au dessus ou en desous du h4
        $(this).find("span").addClass("fa-minus").removeClass("fa-plus");
        //l'élément cliqué trouve le span ajoute faminus enleve faplus
        $(this).siblings ("p").slideDown(400)
        //les voisins direct "p" de l'élément cliqué font un slideDown en 400 millisecondes    
    
    }

})
/*Si on veut tout les p suivants le h4 plutot que tout les p contenu dans la meme div que le h4
on utilisera nextAll()en jquery*/