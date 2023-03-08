function getFibonacci(n) {
    if (typeof n === "undefined" || typeof n !== "number" || n < 1 || n > 10) return "not allowed";
    else {
        //return n fibo numbers
        sirFibo = [];
        sirFibo[0] = 1;
        if (n >= 2) {
            sirFibo[1] = 1;
        }
        for (i = 2; i < n; ++i) {
            sirFibo[i] = Number(sirFibo[(i - 2)] + sirFibo[(i - 1)]);
        }
        return sirFibo;
    }

}
console.log(getFibonacci(2));
console.log(getFibonacci(5));
console.log(getFibonacci(8));
console.log(getFibonacci(1));
console.log(getFibonacci(-1));
console.log(getFibonacci('aaa'));
console.log(getFibonacci(11));
console.log(getFibonacci());