//control flow- for loop

for(let i=0;i<5;i++){
    console.log(i);
}

const names = ['laxman','mohan','rajat'];
for(let i=0; i <names.length; i++){
    console.log(i);
}

const Name = ['laxman','mohan','rajat'];
for(let i=0; i <Name.length; i++){
    console.log(Name[i]);
}

//while loop

let i=0;
while(i<5){
    console.log(i);
    i++;
}

const people = ['karan','rishab','sivam','gary'];
let i = 0;
while(i< people.length){
    console.log(people[i]);
    i++;
}

//do while loop

let i = 7;
do{
    console.log(i);
    i++;
} while(i<7);

//if statements

const age = 25;
if(age>20){
    console.log('you are over 20 years');
}

const ninjas = ['tom','harry','thomas','dick'];
if (ninjas.length>2){
    console.log("there's a lot of ninjas");
}

const password = 'coolboi';
if (password.length>5){
    console.log('it is a strong password');
}
