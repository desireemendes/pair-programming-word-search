
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    if (word === []) return false;

    let returnValue = false
    for (let l of horizontalJoin) {
        
        if (l.includes(word)) returnValue = true; 
    } 
    
    let verticalJoin = ''
    for (let i = 0; i < letters[0].length; i++) {
        for (let j = 0; j < letters.length; j++) {
         verticalJoin = verticalJoin + letters[j][i];
        }
        if (verticalJoin.includes(word)) returnValue = true;
    }

    return returnValue;
    

}

module.exports = wordSearch