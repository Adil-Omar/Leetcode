/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let set=new Map()
    for(let num of s){
        set.set(num,(set.get(num)||0)+1)
}    
    for(let [key,val] of set){
        if(val===1){
            let index=s.indexOf(key)
            return index
        }
    }
    return -1
};