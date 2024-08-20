var minOperations = function(s) {
    let count1 = 0;
    let count2 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {  // Even index
            if (s[i] !== '0') {
                count1++;
            } else {
                count2++;
            }
        } else {  // Odd index
            if (s[i] !== '1') {
                count1++;
            } else {
                count2++;
            }
        }
    }
    
    return Math.min(count1, count2);
};
