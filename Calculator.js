let x=' ';
function display(){
    if(x==0) x=` `;
    document.getElementById("text").innerText= x;
    

}


display();
document.getElementById("1").onclick = function(){ 
    x +="1";
    display();
}

document.getElementById("2").onclick = function(){ 
    x +="2";
    display();
}

document.getElementById("3").onclick = function(){ 
    x +=`3`;
    display();
}

document.getElementById("4").onclick = function(){ 
    x +=`4`;
    display();
}

document.getElementById("5").onclick = function(){ 
    x +=`5`;
    display();
}

document.getElementById("6").onclick = function(){ 
    x +=`6`;
    display();
}

document.getElementById("7").onclick = function(){ 
    x +=`7`;
    display();
}

document.getElementById("8").onclick = function(){ 
    x +=`8`;
    display();
}

document.getElementById("9").onclick = function(){ 
    x +=`9`;
    display();
}

document.getElementById("0").onclick = function(){ 
    x +=`0`;
    display();
}

document.getElementById("/").onclick = function(){ 
    x +="/";
    display();
}

document.getElementById("*").onclick = function(){ 
    x +="*";
    display();
}

document.getElementById("-").onclick = function(){ 
    x +="-";
    display();
}

document.getElementById("+").onclick = function(){ 
    x +="+";
    display();
}


document.getElementById("=").onclick = function(){ 
   
   try{

    x = (eval(x));
   } 
   catch (err)
   {

   }
    display();
}


document.getElementById("dot").onclick = function(){ 
    x +=".";
    display();
}


document.getElementById("c").onclick = function(){ 
    x = 0;
    display();
}


document.getElementById("⌫").onclick = function(){ 
    let y = x;
    x=" ";
    for (let i = 0; i <y.length-1 ; i++) {
        x+=y.charAt(i);
       

    }
    display();
}



document.getElementById("%").onclick = function(){ 

    if (x.includes("/")) { 

        x= (eval(x));
        x*=100;
        x+="%";
    display();
       
    } 




    /*else if (x.includes(".")) { 
        let up ='1';
        let down= '2';


        for (let i = 0 ; i<x.length ; i++){
            if (x.charAt(i) == `.`) {

                for (j=i+1; j<x.length ; j++ ) {
                    down += x.charAt(j);
                    if (j==x) {
                        i+=x.length*2;
                        x = (up / down) * 100;
                        break;
    
                    }
              
            }
        }
            else{
                up += x.charAt(i);
                
            }

    display();
    }
}*/


    else if(x.includes(".")) {
        let multiplier = 1;
        for (let i = 0 ; i<x.length ; i++){

            if ( x.charAt(i) === "."){
                for (let j=i+1 ; j<x.length ; j++){
                    multiplier++;
                }
                
            }
        }




    }






    else {
        x=x/100;
        display();
    }
}







