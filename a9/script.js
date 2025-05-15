
/*const fruits=["apple","banana","orange","grape"];

function search(){
   const fruit=document.getElementById("fruit").value;
   const result=document.getElementById("result");
    
const newfruit=fruits.filter(value => value===fruit);

if(newfruit.length>0){

result.textContent=newfruit[0];
}
else{
    result.textContent="not availabe";
}
}*/

const cities = ["London", "New York", "Tokyo", "Mumbai", "Paris"];

function city(){
    const cityname=document.getElementById("cityname").value;
    const result=document.getElementById("result");

    const check=cities.filter(value => value.toLowerCase()===cityname.toLowerCase());

    if(check.length>0){
        result.textContent=check[0];
    }
    
    else{
    result.textContent="not availabe";
}
}