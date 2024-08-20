let homescore=document.getElementById("home")
let awayscore=document.getElementById("away")
let score=0
let ascore=0

function andone(){
    score+=1
    homescore.textContent=score
    
}

function andtwo(){
    score+=2
    homescore.textContent=score
    
}

function andthree(){
    score+=3
    homescore.textContent=score
 }   
 
 function freethrow(){
    ascore+=1
    awayscore.textContent=ascore
    
}

function field(){
    ascore+=2
    awayscore.textContent=ascore
    
}

function three(){
    ascore+=3
    awayscore.textContent=ascore
 }   