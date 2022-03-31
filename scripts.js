let valorPrato=0;

let borda1 =  document.getElementById("prato1");

let check1 = document.getElementById("check1");

let borda2 =  document.getElementById("prato2");

let check2 = document.getElementById("check2");

let borda3 =  document.getElementById("prato3");

let check3 = document.getElementById("check3");


function removeSelecao(){

    check1.style.display= "none"
    borda1.style.borderColor= "#FFFFFF"
    
    check2.style.display= "none"
    borda2.style.borderColor= "#FFFFFF"

    check3.style.display= "none"
    borda3.style.borderColor= "#FFFFFF"

}

function framgoveg()
{
 
 
 removeSelecao()

    borda1.style.borderColor= "#32B72F"
    check1.style.display= "block"
    valorPrato=14.9
    
   

}

   

function macarronese()
{
 
   
    removeSelecao()

    borda2.style.borderColor= "#32B72F"
    check2.style.display= "block"
    valorPrato=7.90  



}

function vatapa()
{
 
   
    removeSelecao()

    borda3.style.borderColor= "#32B72F"
    check3.style.display= "block"
    valorPrato=11.90  



}
