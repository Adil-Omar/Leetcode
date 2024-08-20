/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    counta=0;
    countb=0;
    countc=0;
    for(let i=0; i<words.length; i++){
        let word=words[i];
        for(let j=0; j<word.length; j++){
            if(word[j]=="a"){
                counta++
            }else if(word[j]=="b"){
                countb++
            }else{
                countc++
            }
        }
    }
    let word=words.length
    if(counta%word==0 && countb%word==0 && countc%word==0){
        return true;
    }else{
        return false
    }
};