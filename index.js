    while (true){

    let heroi = 'Elfa36'
    let  XP = 10000
    let nivel = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal", "radiante"]
    
    if(XP < 1000){
        console.log("O herói " + heroi + " está no nível " + nivel[0] )
    }
    
     else if((XP >= 1001) && (XP <= 2000)){
        console.log("O herói " + heroi + " está no nível " + nivel[1])
    }
    
    else if((XP >= 2001) && (XP <= 5000)){
        console.log("O herói " + heroi + " está no nível " + nivel[2])
    }
    
    else if((XP >= 5001) && (XP <= 7000)){
        console.log("O herói " + heroi + " está no nível " + nivel[3])
    }
    
    else if((XP >= 7001) && (XP <= 8000)){
        console.log("O herói " + heroi + " está no nível " + nivel[4])
    }
    else if((XP >= 8001) && (XP <= 9000)){
        console.log("O herói " + heroi + " está no nível " + nivel[5])
    }
    else if((XP >= 9001) && (XP <= 10000)){
        console.log("O herói " + heroi + " está no nível " + nivel[6])
    }
    else{
        console.log("O herói " + heroi + " está no nível de" + nivel[7])
    }
 
break

}