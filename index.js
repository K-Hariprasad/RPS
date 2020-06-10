var userPoints=0
var comPoints=0

function start(){
    document.getElementById("start").hidden=true;
    document.getElementById("game").hidden=false;
    document.getElementById("user").innerHTML= userPoints;
    document.getElementById("com").innerHTML=comPoints;

}

function play(user){
  var com = Math.floor(Math.random() * 3) + 1;
  document.getElementById("res").innerHTML=""
  document.getElementById("user").innerHTML=userPoints;
  document.getElementById("com").innerHTML=comPoints

  if(com==user){
      document.getElementById("res").innerHTML="It's a draw .....!"
  }
  else if(
     (user==1&&com==3) || (user==2 && com==1) || (user==3&&com==2) 
  ){
    document.getElementById("res").innerHTML="You got it .....!"
    userPoints+=1
    document.getElementById("user").innerHTML=userPoints

    if(userPoints==10){
    over();
    }

  }
  else{
    document.getElementById("res").innerHTML="Ohh sorry .....!"
    comPoints+=1
    document.getElementById("com").innerHTML=comPoints;

    if(comPoints==10){
        over();
        }

  }

}

function over(){
    document.getElementById("game").hidden=true;
    document.getElementById("result").hidden=false;
    document.getElementById("resultmsg").innerHTML="You won the game .....!"
    document.getElementById("resultmsg").innerHTML="Computer won the game .....!"
}