let a, b, c;

a = 10;
b = 15;
c = 20;

console.log(`o valor de a é: ${a}, b é: ${b}, c é: ${c}`);

let x; // variavel auxiliar;

x = a;
a = b;
b = c;
c = x;

console.log(`o valor de a é: ${a}, b é: ${b}, c é: ${c}`);