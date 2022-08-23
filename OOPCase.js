class Car {
    constructor(type){
        this.type = type;
    }
}

let firstClass = new Car("otomobil");
let secondClass = new Car("minibüs");
let thirdClass = new Car("otobüs");
let customers = [];
let sum = 0;

class Customer {
    constructor(cartype, hgsNo, name, surname, date, balance){
        this.cartype = cartype;
        this.hgsNo = hgsNo;
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.balance = balance;
    }
}

let customer1 = new Customer(firstClass, Math.floor(Math.random()*100), "Barış", "Koçyiğit", new Date().getDate(), 250);
let customer2 = new Customer(firstClass, Math.floor(Math.random()*100), "Çağdaş", "Çetin", new Date(), 375);
let customer3 = new Customer(thirdClass, Math.floor(Math.random()*100), "Emre", "Urcu", new Date(), 110);
let customer4 = new Customer(secondClass, Math.floor(Math.random()*100), "Enes", "Altıngemi", new Date(), 400);
let customer5 = new Customer(thirdClass, Math.floor(Math.random()*100), "Kübra", "Tunç", new Date(), 390);
let customer6 = new Customer(thirdClass, Math.floor(Math.random()*100), "Buse", "Erdem", new Date(), 225);



function hgsFee(customer){
    let fee = 100;
    if(customer.cartype == firstClass){
        customer.balance = customer.balance - ((fee*20)/100);
        sum = sum + ((fee*20)/100);
    }else if(customer.cartype == secondClass){
        customer.balance = customer.balance - ((fee*35)/100);
        sum = sum + ((fee*35)/100);
    }else{
        customer.balance = customer.balance - ((fee*50)/100);
        sum = sum + ((fee*50)/100);
    }

    customers.push(customer);
}

function Profit(){
    console.log(sum);
}

hgsFee(customer1);
hgsFee(customer2);
hgsFee(customer3);
hgsFee(customer4);
hgsFee(customer5);
hgsFee(customer6);

console.log(customers);
Profit();







