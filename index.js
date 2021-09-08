// Code your solution here
function findMatching(array, str){
    return array.filter(item => item.toUpperCase() === str.toUpperCase())

}

function fuzzyMatch(array, str){
    return array.filter(item => item[0] === str[0])
}

function matchName(array, str){
    return array.filter(item => item.name === str)
}
