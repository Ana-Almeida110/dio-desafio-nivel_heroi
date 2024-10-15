let nome = "Ana";
let pontosXP = 50000;

if (pontosXP < 1000) {
    console.log(nome + " Você está no nível Ferro")
} else if (pontosXP >= 1001 && pontosXP <= 2000) {
    console.log(nome + " Você está no nível Bronze")
} else if (pontosXP >= 2001 && pontosXP <= 5000) {
    console.log(nome + " Você está no nível Prata")
} else if (pontosXP >= 5001 && pontosXP <= 7000) {
    console.log(nome + " Você está no nível Ouro")
} else if (pontosXP >= 7001 && pontosXP <= 8000) {
    console.log(nome + " Você está no nível Platina")
} else if (pontosXP >= 8001 && pontosXP <= 9000) {
    console.log(nome + " Você está no nível Ascendente")
} else if (pontosXP >= 9001 && pontosXP <= 10000) {
    console.log(nome + " Você está no nível Imortal")
} else if (pontosXP > 10001) {
    console.log(nome + " Você está no nível Radiante")
} else {
    console.log("Você precisa começar a jogar para ser classificado")
}            
    
        
