function solve(arr){
let products=[];
for(el of arr){
    let[town,product,price]=el.split(' | ');
    price=Number(price);
    if(products.filter(x=>x.product===product).length>0){
        let obj=products.find(x=>x.product===product);
        if(obj.price>price){
            obj.price=price;
            obj.town=town;
        }
    }else{
        let obj={product,town,price};
        products.push(obj);
    }

   
} for(let product of products){
    console.log(`${product.product} -> ${product.price} (${product.town})`);
        }

};

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);