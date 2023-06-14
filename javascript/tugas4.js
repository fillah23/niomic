var fillah = 180;
var salsa =160;
var atthar = 155;

function tinggiBadan(a,b,c){
    if(a>b){
        if(a>c){
            console.log("tinggi badan fillah tertinggi")
        }else{
            console.log("tinggi badan fillah tertinggi ke 2")
        }
    } else if(a<b){
        if(a<c){
            console.log("tinggi badan fillah terpendek")
        }else{
            console.log("tinggi badan fillah tertinggi ke 2")
        }
    }
    if(b>a){
        if(b>c){
            console.log("tinggi badan salsa tertinggi")
        }else{
            console.log("tinggi badan salsa tertinggi ke 2")
        }
    } else if(b<a){
        if(b<c){
            console.log("tinggi badan salsa terpendek")
        }else{
            console.log("tinggi badan salsa tertinggi ke 2")
        }
    }
     if(c>b){
        if(c>a){
            console.log("tinggi badan atthar tertinggi")
        }else{
            console.log("tinggi badan atthar tertinggi ke 2")
        }
    } else if(c<b){
        if(c<a){
            console.log("tinggi badan atthar terpendek")
        }else{
            console.log("tinggi badan atthar tertinggi ke 2")
        }
    }
}

tinggiBadan(fillah,salsa,atthar);