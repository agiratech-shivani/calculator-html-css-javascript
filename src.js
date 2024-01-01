let first=0;
let sec = 0;
let ope=0;
let operation;
document.getElementById('display').innerHTML=first;

function keys(x){
    console.log(x);
    switch (x){
        case 1:
            {
                if(ope==0 && first===0){
                    first=1;
                document.getElementById('display').innerHTML=first;
                console.log(x);

                }
                else if(ope==0 && first!=0){
                    first=first+"1";
                document.getElementById('display').innerHTML=first;
                console.log(x);

                }
                else if(ope!=0 && first===0 && sec!=0){
                    first=1;
                    document.getElementById('display').innerHTML=sec +" "+operation+" "+first;
                    console.log(x);
                }
                else if(ope!=0 && first!==0 && sec!=0){
                    first=1;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                }
                
                break;

            }
        case 2:
            { 
                if(ope==0 && first===0){
                first=2;
                document.getElementById('display').innerHTML=first;
                console.log(x);
            
                }else if(ope==0 && first!=0){
                    first=first+"2";
                document.getElementById('display').innerHTML=first;
                console.log(x);

                }
                else if(ope!=0 && sec!=0){
                    sec=sec+"2";
                    document.getElementById('display').innerHTML=sec;
                }
                break;
            }
            
        
        case 3:
            { 
                if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }else if(ope==0 && first!=0){
                        first=first+"3";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"3";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;
            }
        
        case 4:
            {
                if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }else if(ope==0 && first!=0){
                        first=first+"4";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"4";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;
            }
        case 5:
            {

                if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }else if(ope==0 && first!=0){
                        first=first+"5";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"5";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;
            }
        case 6:
                {if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }else if(ope==0 && first!=0){
                        first=first+"6";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"6";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;

                }
        case 7:
            {
                if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }
                    else if(ope==0 && first!=0){
                        first=first+"7";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"7";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;
            }
        case 8:
            {
                if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }else if(ope==0 && first!=0){
                        first=first+"8";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"8";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;
            }
        case 9:
            {
                if(ope==0 && first===0){
                    first=2;
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
                
                    }else if(ope==0 && first!=0){
                        first=first+"9";
                    document.getElementById('display').innerHTML=first;
                    console.log(x);
    
                    }
                    else if(ope!=0 && sec!=0){
                        sec=sec+"9";
                        document.getElementById('display').innerHTML=sec;
                    }
                    break;
            }
    }

}
function add(){
    ope=1;
    operation="+"
    document.getElementById('display').innerHTML=first + "+";
    sec = first;
    first=0;
    console.log(first);
    console.log(sec);

}
function sub(){
    ope=2;
    document.getElementById('display').innerHTML=first + "-";
}
function div(){
    ope=3;
    document.getElementById('display').innerHTML=first + "/";
}
function mul(){
    ope=4;
    document.getElementById('display').innerHTML=first + "*";
}
function dot(){
    ope=1;
    document.getElementById('display').innerHTML=first + ".";
}
function dot(){
    ope=1;
    document.getElementById('display').innerHTML=first + "=";
}
function modiv(){
    ope=1;
    document.getElementById('display').innerHTML=first + "%";
}

