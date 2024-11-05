
var counter=0; 

function getNumber(){
    counter++;
    document.getElementById("demo").innerHTML=counter;  
}

function decNumber(){
    counter--;
    document.getElementById("demo").innerHTML=counter;  
}


function amountDollar(){
    var dollar =document.getElementById("dollar").value;
    var result =document.getElementById("result");



    if(isNaN(dollar)){
        result.innerHTML="Enter Number No text";
        result.style.color="yellow";
    }else if(dollar<0){
        result.innerHTML="Enter postive Number";
        result.style.color="red";
    }else if (dollar==0){
        result.innerHTML= "Enter Number rather than zero";
        result.style.color="green";
    }else{
     result.innerHTML = dollar *50
    }
        

    return false;
    

}