class Mobile{
    buyProduct(){                       // method named buyProduct
        console.log(`I am buying a product`);
    }
}
class Apple extends Mobile{
    buyProduct(){                       // overriding buyProduct method of Mobile class
        console.log(`I am buying an Apple product`);
    }
}
class Samsung extends Mobile{  
    buyProduct(){                       // overriding buyProduct method of Mobile class
        console.log(`I am buying a Samsung product`);  
    }
}
let value = new Mobile();
value.buyProduct();
let value1 = new Apple();
value1.buyProduct();


