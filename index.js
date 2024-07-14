let resultHome = 0; 
let resultGuest = 0; 
let period = 0;
let homefoul = 0;
let guestfoul = 0;
let homeScore = document.getElementById("home_p");
let guestScore = document.getElementById("guest_p");
let period_add = document.getElementById("period_score")
let homeFoul = document.getElementById("home_f")
let guestFoul = document.getElementById("guest_f")

function hadd1(){
    // console.log("This Button Clicked");
    resultHome += 1;
    homeScore.innerText = resultHome; 
}
function hadd2(){
    resultHome += 2;
    homeScore.innerText = resultHome; 
}
function hadd3(){
    resultHome += 3;
    homeScore.innerText = resultHome; 
}
function gadd1(){
    // console.log("This Button Clicked");
    resultGuest += 1;
    guestScore.innerText = resultGuest; 
}
function gadd2(){
    resultGuest += 2;
    guestScore.innerText = resultGuest; 
}
function gadd3(){
    resultGuest += 3;
    guestScore.innerText = resultGuest; 
}
function padd1(){
    period += 1;
    period_add.innerText = period; 
}
function hfoul(){
    homefoul += 1;
    homeFoul.textContent = homefoul;
}
function gfoul(){
    guestfoul += 1;
    guestFoul.textContent = guestfoul;
}

function reset(){
    homeScore.innerText = 0;
    guestScore.innerText = 0;
    period_add.innerText = 0; 
    homeFoul.textContent = 0;
    guestFoul.textContent = 0;

}