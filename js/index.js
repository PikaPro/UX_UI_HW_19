console.log("your index.js file is loaded correctly!");

/*
$(".about").hover(function() {
    $(this).replaceWith("Image/feather.png").toggle();
});*/


/* nav about */

$(".about").mouseover(function(){
    $(this).css("background-color", "#FDF8E3");
});
$(".about").mouseout(function(){
    $(this).css("background-color", "");
}); 


/* nav Projects */

$(".projects").mouseover(function(){
    $(this).css("background-color", "#FDF8E3");
});
$(".projects").mouseout(function(){
    $(this).css("background-color", "");
}); 


/* nav Skills*/

$(".skills").mouseover(function(){
    $(this).css("background-color", "#FDF8E3");
});
$(".skills").mouseout(function(){
    $(this).css("background-color", "");
}); 


/* nav Resume*/

$(".resumeli").mouseover(function(){
    $(this).css("background-color", "#FDF8E3");
});
$(".resumeli").mouseout(function(){
    $(this).css("background-color", "");
}); 

/* resume button */

$(".resume").mouseover(function(){
    $(this).css("box-shadow", "5px 5px #C9C5C0");
});
$(".resume").mouseout(function(){
    $(this).css("box-shadow", "");
}); 


/* project button */

$(".viewall").mouseover(function(){
    $(this).css("box-shadow", "5px 5px #C9C5C0");
});
$(".viewall").mouseout(function(){
    $(this).css("box-shadow", "");
}); 