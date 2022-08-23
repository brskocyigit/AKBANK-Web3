function oddishOrEvenish(n){
    var arr = [],
        sNumber = n.toString(),
        sum=0;
    
    for(var i=0;i<sNumber.length;i++){
        arr.push(+sNumber.charAt(i));
        sum = sum + arr[i];
    }

    return (sum % 2 == 1) ? console.log("Odd") : console.log("Even");

}

oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);