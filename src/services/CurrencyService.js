export function toCurrency(value, inCents = true){
    if(inCents){
        value = value/100;
    };
    let output = String(value).split(".");
    if (output.length == 1){
        output[1] = "00";
    } else if (output[1].length == 1){
        output[1] += "0"
    } else if (output[1].length > 2){
        output[1] = output[1].substring(0,2)
    };
    return output.join(".")
}