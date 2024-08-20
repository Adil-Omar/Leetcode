/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let longest=0;
    let found=false;
    for(let i=0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++){
            if(s[i]==s[j]){
                let current=j-i-1;
                found =true;
                if(current>longest){
                    longest=current;
                }
            }
        }
    }
    if(found){
        return longest;
    }else{
        return -1
    }
};