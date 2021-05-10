let palindrome = (str) => {
    var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr === lowRegStr);
}

palindrome("RaCe CaR")