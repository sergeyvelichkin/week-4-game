$(document).ready(function(){

    var obi = {
        image : "assets/images/obi.jpg",
        name  : "Obi-wan Kenobi",
        hp : 120
    }

    var luke = {
        image : "assets/images/luke.jpg",
        name  : "Luke Skywalker",
        hp : 100
    }

    var sidious = {
        image : "assets/images/sidious.jpg",
        name  : "Darth Sidious",
        hp : 150
    }

    var maul = {
        image : "assets/images/darthmaul.jpg",
        name  : "Darth Maul",
        hp : 180
    }

    var charArray = [obi,luke,sidious,maul];

console.log(charArray[0].name);


    for (var i=0; i<charArray.length;i++){
        var newDiv = $("<div></div>");
        $(newDiv).addClass("character action1");
        $(newDiv).append("<p>" + charArray[i].name + "</p>");
        $(newDiv).append("<img src=" + charArray[i].image + ">");
        $(newDiv).append("<p>" + charArray[i].hp + "</p>");
        $("#firstchoice").append(newDiv);
    }

    var ifClicked = false;

    $(".action1").on("click", function(){
        $(this).removeClass("action1");
        var clone = $(this).clone();
        $(this).remove();
        $("#yrchar").append(clone);

        ifClicked = true;

        if (ifClicked){
            $("#firstchoice").children('div').addClass('action3');
            var clone2 = $("#firstchoice").clone();
            $("#firstchoice").remove();
            $(".enemies").append(clone2);
            $(".remove1").remove();
        }

        $(".action3").on("click", function(){
            var clone = $(this).clone();
            $(this).remove();
            $(".fight").append(clone);
    
            // ifClicked = true;
    
            // if (ifClicked){
            //     var clone2 = $("#firstchoice").clone();
            //     $("#firstchoice").remove();
            //     $(".enemies").append(clone2);
            //     $(".remove1").remove();
            // }
        })
        
    })


    



})


