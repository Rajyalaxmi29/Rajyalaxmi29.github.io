const product = [
    {id:1,name:"apple",price:23,status:"pending"},
     {id:2,name:"orange",price:13,status:"pending"},
      {id:3,name:"banana",price:29,status:"pending"}

];
//change status to complete
let updatedProducts = product.map((product) => ({
  ...product,price:product.price+5,status:"complete"
}));
console.log(updatedProducts)