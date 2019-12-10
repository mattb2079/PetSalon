//object literal

const salon = {
    name: "The Fashion Pets",
    phone: "5567893",
    address:{
        street: "Av University",
        number: "262-G"
    },
    workingHours:{
        days: "Mon-Fri",
        open: "9:00 am",
        close: "5:00 pm"
    },
    pets:[],
    count: function(){
        alert("We have " + salon.pets.length + " pets registered");
    }
}

// object destructuring

let {name, phone, address:{street,number},workingHours:{days, open, close}} = salon;

console.log(name, phone, street);

document.getElementById("col1").innerHTML=`<h2 class="h2"> ${name} </h2> <p class="lead"> Phone number: ${phone}`;
document.getElementById("col2").innerHTML=`<h2 class="lead"> ${name} </h2> Address Information <p class="lead"> Phone number: ${phone}`;
document.getElementById("col3").innerHTML=`<p class="lead"> It is open ${days} from ${open} to ${close}`;

// object constructor

class Pet {
    constructor(name, age, breed, gender, service, ownerName, phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.hunger = 10;
        this.happiness = 5;
    }
    ownerInfo = function(){
        console.log("Owner name: " + this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding...");
    }

    status = function(){
        console.log ("Hunger " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
}

const pet1 = new Pet ("Shaggy", 2, "Boxer", "Male", "Shower", "Samantha", "80679");
const pet2 = new Pet ("Scooby", 3, "Great Dane", "Male", "Nail Clipping", "Wilma", "96089");
const pet3 = new Pet ("Scrappy", 1, "Pug", "Male", "Delousing", "Daphne", "80679");

console.log(salon);

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
console.table(salon.pets);

// display in alert the number of pets

salon.count();
/*
pet1.feed();
pet1.status();
pet1.feed();
pet1.status();*/

//print in a division the information of the pets (use a loop for)
var text="";
for(var i=0; i<salon.pets.length;i++){
    text += `<p> Name:  ${salon.pets[i].name} <br> 
    Age: ${salon.pets[i].age} <br>
    Gender: ${salon.pets[i].gender} <br>
    Service: ${salon.pets[i].service} <br>
    Owner: ${salon.pets[i].ownerName} <br><br> `
}
document.getElementById("info").innerHTML=`<p>${text}</P`;

//submit this exercise