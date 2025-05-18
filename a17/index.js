function add(...values){
    let x=values.reduce((sum,values)=>sum+values)
    console.log(x)
}
add(5,6,7,8,9,5)

