/*
    Writes a program that prints the numbers from 1 to 100,
    but for multiples of 3, prints "is divisible by 3" along
    with the number, and for multiples of 5, prints them with
    "can be divided by 5". For numbers which are multiples of
    both 3 and 5, it prints "is divisible by 3 and 5".
*/

let x = 1;

for (var i = x; i <= 100; i++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x + " is divisible by 3 and 5");
    }
    else if (x % 3 === 0) {
        console.log(x + " is divisible by 3");
    }
    else if (x % 5 === 0) {
        console.log(x + " can be divided by 5");
    }
    else {
        console.log(x);
    }
    x++;
}
