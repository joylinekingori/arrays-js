//find the last element of the array
const arr1 =[3,7,34,90,12]
const find =arr1.at(-1)
console.log({find})
//last element of the array
const arr2=[true,"green","where",12,56]
const find2 =arr2.at(-1)
console.log({find2})

//join the array to string
let myPets=["cow","bird","snake","dog"]
let arrayjoin= myPets.join()
console.log({arrayjoin})

//sort array items
let arr3=[5,9,5,3,2,-3,6,8,4,1]
sort= arr3.sort()
console.log({sort})
//remove duplicates
//(a)without duplicates

let arr=["boy","man","girl","school","girl","woman"]
array = arr.filter((item,index)=>arr.indexOf(item)===index);
console.log({array})
//(a)only duplicates
//search in the array



//sort the string
const word="renniw"
splitword= word.split("")
console.log({splitword})
sortword=splitword.sort()
console.log(sortword.join(" "))

//Insert "tomato" at the 5th index
const fruits=["Mango","Banana","Kiwi","Watermelon","Orange","Grapes","Thornmelon","Peach","Avocado","Srawberry"]
 fruits.splice(5,0,"Tomato")
console.log({fruits})









