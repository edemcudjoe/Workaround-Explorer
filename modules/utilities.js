const formatNumber = number => {
    let numToString = String(number);
    let numArray = numToString.split('');
    console.log(numArray)
    if (numArray.includes('.')) {
        numArray.splice(numArray.length - 6, 0, ',');
    } else {
        numArray.splice(numArray.length - 3, 0, ',');
    }
    
    return numArray.join('');
}

export { formatNumber }