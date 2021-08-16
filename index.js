// Code your solution here
function findMatching(arrayOfDrivers, string){
       return arrayOfDrivers.filter(name => name.toLowerCase() === string.toLowerCase())
       
}