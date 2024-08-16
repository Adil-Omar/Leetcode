/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    let count1=0;
    let result=0;
    let count0=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==1){
            count1++;
        }
    }
    for(let i=0; i<s.length-1; i++){
        if(s[i]==0){
            count0++;
        }else if(s[i]==1){
            count1--;
        }
        let current=count1+count0;
        if(current>result){
            result=current
        }
    }
    return result;
};