/**
 * given number in array 1 to 100,
 * print when 1 is odd number
 * print 2 is even number and prime number 
 * print 3 is odd number etc
 * 
 */
//solution
var i, flag = 1, odd = 0, even = 0, prime = 0, num = 1;

while (num <= 100) {
    flag = 1;
    if (num == 1)
        flag = 0;
    for (i = 2; i < num; i++) {
        if ((num % i) == 0) {
            flag = 0;
            break
        }
    }
    if (flag == 1) {
        prime++;
        console.log(`${num} is a prime number`);
    }
    if (num % 2 == 0) {
        even++;
        console.log(`${num} is an even number`);
    }
    else {
        odd++;
        console.log(`${num} is an odd number`);
    }
    num++;
}