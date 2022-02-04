function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    const num1Array = [...num1.toString()];
    const num2Array = [...num2.toString()];
    
    if (num1Array.length !== num2Array.length) return false;
    
    const num1Obj = {};
    
    for (let i = 0; i < num1Array.length; i++) {
        num1Obj[num2Array[i]] = (num1Obj[num1Array[i]] || 0) + 1;
    }
    
    for (let i = 0; i < num2Array.length; i++) {
        if (!num1Obj[num1Array[i]]) return false;
        
        num1Obj[num1Array[i]] = num1Obj[num1Array[i]] - 1;
    }
    
    return true;
}