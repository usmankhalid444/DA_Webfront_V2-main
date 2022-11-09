//division function，used to get exact division results
//explanation：javascript division result will have errors, it will be more obvious when dividing two floating-point numbers.This function returns a more accurate division result.
//transfer：accDiv(arg1,arg2)
//return value：arg1 divided by arg2 of exact result
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    // with (Math) {
    //     r1 = Number(arg1.toString().replace(".", ""))
    //     r2 = Number(arg2.toString().replace(".", ""))
    //     return (r1 / r2) * pow(10, t2 - t1);
    // }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1);
}

//give Number type add a div method，It's easier to call.
Number.prototype.div = function (arg) {
    return accDiv(this, arg);
}
String.prototype.div = function (arg) {
    return accDiv(this, arg);
}

//multiplication function，used to get the exact multiplication result
//explanation：javascript multiplication result will be in error，it will be more obvious when multiplying two floating point numbers.this function returns a more accurate multiplication result.
//transfer：accMul(arg1,arg2)
//return value：arg1 multiplied by arg2 of exact result
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

// give Number type add a mul method，it's easier to call.
Number.prototype.mul = function (arg) {
    return accMul(arg, this);
}
String.prototype.mul = function (arg) {
    return accMul(arg, this);
}

export default {
    accDiv,
    accMul
}