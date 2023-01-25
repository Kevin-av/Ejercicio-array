let array = [1,2,3,4,5,6,7,7];
let cont = 0;
let i = 0;

while(array [i]!= null){
    if(array [i] % 2 == 1){
        cont++;
    }
    i++;
}
console.log("numero de impares: "+cont);