function getElementWidth (content, padding, border){
    const contentN = parseFloat(content);
    const paddingN = parseFloat(padding);
    const borderN = parseFloat(border);

 const elementWidth = contentN + ((paddingN + borderN) * 2);
return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

