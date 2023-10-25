var timer = 25;
var score=0;
var hitnum=0;

function increaseScore()
{
score+=10;
document.querySelector("#scoreval").textContent = score;
}
function makeBuble()
{
    var temp = "";
for(var i =1; i<163 ;i++)
{
    var a = Math.floor(Math.random()*10);
   temp+= `<div class="buble">${a}</div>`;
}

document.querySelector(".pbotom").innerHTML = temp;
}

function runTimer()
{
    var innterval = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(innterval);
            document.querySelector(".pbotom").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}

function getHit()
{
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitnum;
}

document.querySelector(".pbotom").addEventListener("click",function (aemnam)
{
  var clicknumber = Number(aemnam.target.textContent);
  if(clicknumber === hitnum)
  {
    increaseScore();
    makeBuble();
    getHit();
}
});

makeBuble();
runTimer();
getHit();
