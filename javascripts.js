const orders = [
{item:"sugar",quantity:2,price:400},
{item:"rice",quantity:5,price:200},
{item:"posho",quantity:10,price:100},
];
const total = function(orders){
   var totalcost = 0
   for(i=0;i<=orders.length;i++){
       totalcost += orders[i].quantity * orders[i].price
} 
    return totalcost
}


console.log(total)