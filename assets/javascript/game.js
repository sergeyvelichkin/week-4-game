$(document).ready(function(){

    var obi = {
        image : "assets/images/obi.jpg",
        name  : "Obi-wan Kenobi",
        hp : 120,
        attackPower: 10
    }

    var luke = {
        image : "assets/images/luke.jpg",
        name  : "Luke Skywalker",
        hp : 100,
        attackPower: 10
    }

    var sidious = {
        image : "assets/images/sidious.jpg",
        name  : "Darth Sidious",
        hp : 150,
        attackPower: 10

    }

    var maul = {
        image : "assets/images/darthmaul.jpg",
        name  : "Darth Maul",
        hp : 180,
        attackPower: 10
    }

    var charArray = [obi,luke,sidious,maul];




function findChar(x){
    for(var i =0; i<charArray.length; i++){
        console.log(charArray[i].name.split('') + " is not " + x.split(''));
        if (charArray[i].name === x){
            return charArray[i];
        }else{
            continue;
        }
    }
}
findChar("Darth Maul");
findChar("Luke Skywalker");
findChar("Darth Sidious");
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
    var ifClicked2 = false;
   
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
            ifClicked2 = true;
            


        })

        
        
    })

    $(".container").on("click",".btn", function(){
        if (ifClicked2==false){
            $(".defender").append("<p> You need to chose enemy first</p>");
        }

        // var charAttackPower = charArray[$("#yrchar > div > p:nth-child(1)").text()].attackPower;
        var nameChar = $("#yrchar > div > p:nth-child(1)").text();
        var charAttackPower = findChar(nameChar).attackPower;
        var charHp = $("#yrchar > div > p:nth-child(3)").text();

        var nameCharEnemy = $("body > div:nth-child(4) > div > div > p:nth-child(1)").text();
        var enemyAttackPower = findChar(nameCharEnemy).attackPower;
        var enemyHp = $("body > div:nth-child(4) > div > div > p:nth-child(3)").text();

        charHp = charHp - enemyAttackPower;
        console.log(charHp);
        $("#yrchar > div > p:nth-child(3)").html(charHp);
        
        enemyHp = enemyHp - charAttackPower;
        console.log(enemyHp);
        $("body > div:nth-child(4) > div > div > p:nth-child(3)").html(enemyHp);
        
        $(".defender").prepend("<div> You made " + charAttackPower + " damage to " + nameChar + "</div>" );
        $(".defender").prepend("<div>"+ nameCharEnemy + " made "+ enemyAttackPower + " damage to you </div>" )
        if (charHp<=0){
            alert("Loser!")

        }

        else if (enemyHp<=0){
            $(".fight > .action3").remove();
            $(".defender").empty();
            console.log($('.enemies').children().length);
            if ( $('#firstchoice').children().length >= 1 ) {
                alert("Pick next opponent");
           }else{
               alert("You won!")
               $(".btn").text("Restart");

               $(".btn").on("click", function(){
                window.location.reload(true);
               })
            }
            
        }
        console.log(nameChar);
        console.log(nameCharEnemy);
        
        findChar(nameChar).attackPower = findChar(nameChar).attackPower + 8;
        console.log(charAttackPower); 
        console.log(enemyAttackPower); 
    })



    



})


