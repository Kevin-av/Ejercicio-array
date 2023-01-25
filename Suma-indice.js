let array = [4,5,7,2];
let num = 9;
let i = 0;
let j = 0;

while(array [i]!=null){
    j = i+1;
    while(array [j]!= null){

        if(array [i] + array [j] === num){
            console.log("indices: "+ i.toString() + " " + j.toString());
            break;
        }
        j++;
    }
    i++;
}