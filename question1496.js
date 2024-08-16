/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let x=0,y=0;
    let pathVisited=new Set();
    pathVisited.add(`${x},${y}`)
    for(let i=0; i<path.length; i++){
        if(path[i]=="N")y++;
        if(path[i]=="S")y--;
        if(path[i]=="E")x++;
        if(path[i]=="W")x--;
         let currentPosition=`${x},${y}`
         if(pathVisited.has(currentPosition)){
            return true;
         }
         pathVisited.add(currentPosition)
    }
    return false
};