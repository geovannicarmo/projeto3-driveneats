let cont1=0; 
let cont2=0;
let cont3=0;
let total=0;

let price1;
let pratoprincipal;

let price2;
let bebida;


function prato (element){

    console.log(element)
   console.log (element.querySelector(".options .price"))

        a= element.querySelector(".options .price").innerHTML
        b = (a.replace('R$ ',''))
        price1=Number(b.replace(',','.'))
        console.log(price1)

        pratoprincipal = element.querySelector(".options h3").innerHTML

       
    
    const selected = document.querySelector(".menu .bordaverde")

    
    if(selected!==null){
        selected.classList.remove("bordaverde")
    }

    element.classList.add("bordaverde");

    
    let teste = element.querySelector(".check1")

    const outraCoisa = document.querySelector(".menu .check")

    if(outraCoisa!==null){
        outraCoisa.classList.remove("check")

    }

    teste.classList.toggle("check");    
    
   
    cont1=1;
    confirmar()
}

function prato2 (element, price){

    console.log(element)
    console.log (element.querySelector(".options .price"))
 
         a= element.querySelector(".options .price").innerHTML
         c = (a.replace('R$ ',''))
         price2 = Number(c.replace(',','.'))
         
         console.log(a)
 
         bebida = element.querySelector(".options h3").innerHTML
    
    
    const selected = document.querySelector(".menu2 .bordaverde")
    
    if(selected!==null){
        selected.classList.remove("bordaverde")
    }

    element.classList.add("bordaverde");

    
    let teste = element.querySelector(".check1")

    const outraCoisa = document.querySelector(".menu2 .check")

    if(outraCoisa!==null){
        outraCoisa.classList.remove("check")

    }

    teste.classList.toggle("check");    
    
  
    cont2=1
    confirmar()
}

function prato3 (element, price){
    
    console.log(element)
    console.log (element.querySelector(".options .price"))
 
         a= element.querySelector(".options .price").innerHTML
         c = (a.replace('R$ ',''))
         price3 = Number(c.replace(',','.'))
         
         console.log(a)
 
         sobremesa = element.querySelector(".options h3").innerHTML
    
    const selected = document.querySelector(".menu3 .bordaverde")
    
    if(selected!==null){
        selected.classList.remove("bordaverde")
    }

    element.classList.add("bordaverde");

    
    let teste = element.querySelector(".check1")

    const outraCoisa = document.querySelector(".menu3 .check")

    if(outraCoisa!==null){
        outraCoisa.classList.remove("check")

    }

    teste.classList.toggle("check");    
    
  
    cont3=1;
    confirmar()
}


function confirmar(){

if(cont1!==0 && cont2!==0 && cont3!==0)
{
 
const fecha = document.querySelector(".selecione")
fecha.innerHTML = "Fechar pedido";


fecha.classList.add("fechar");



}

}

function selecionado(element){


if(cont1!==0 && cont2!==0 && cont3!==0)
{
    
   total= (price1+price2+price3).toFixed(2)

    let msg=encodeURIComponent(`Olá, gostaria de fazer o pedido:\n-Prato: ${pratoprincipal}\n-Bebida: ${bebida}\n-Sobremesa: ${sobremesa}\nTotal: R$ ${total}`)

   mgmg=
    
    mensagem= `https://wa.me/5531992733328?text=${msg}`


    window.open(mensagem);
}
}