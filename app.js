let rolno = document.getElementById("ipp");
let name1 = document.getElementById("nn");
let name2 = document.getElementById("ap"); 
let name3 = document.getElementById("er"); 
let name4 = document.getElementById("rt");

function validation(){
    if(rolno.value == ""){
        document.getElementById('username').innerHTML ="* This is a required question"
    }
    if(name1.value == ""){
        document.getElementById('name1').innerHTML ="* This is a required question"
    }
    if(name2.value == ""){
        document.getElementById('name2').innerHTML ="* This is a required question"
    }
    if(name3.value == ""){
        document.getElementById('name3').innerHTML ="* This is a required question"
    }
    if(name4.value == ""){
        document.getElementById('name4').innerHTML ="* This is a required question"
    }
    return false;
}
var a = document.getElementById("username").style.color ="red"
var a = document.getElementById("name1").style.color ="red"
var a = document.getElementById("name2").style.color ="red"
var a = document.getElementById("name3").style.color ="red"
var a = document.getElementById("name4").style.color ="red"
