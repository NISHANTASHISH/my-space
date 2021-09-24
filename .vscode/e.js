//arrays

let ninjas = ['shaun','ken','bob'];
console.log(ninjas);
console.log(ninjas[1]);
console.log(ninjas.length);

ninjas[1] = 'jack';
console.log(ninjas);
 
let ages = [21, 58,69,47,38,15];
console.log(ages);
console.log(ages[4]);

let result = ninjas.join(',');
console.log(result);

let Result = ninjas.indexOf('bob');
console.log(Result);

let output = ninjas.concat(['john','matt']);
console.log(output);

let Output = ninjas.push('sam');
console.log(ninjas);
