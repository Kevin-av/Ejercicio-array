let array = [0,2,4,5];
let i = 0;
let j = 0;

while(array [i]!=null){
    while(array [j]!= null){
        console.log(array [i].toString() + array [j].toString());
        j++;
    }
    i++;
    j = i+1;
}