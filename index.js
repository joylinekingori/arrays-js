//find the last element of the array
const arr1 = [3, 7, 34, 90, 12];
const find = arr1.at(-1);
console.log({ find });
//last element of the array
const arr2 = [true, "green", "where", 12, 56];
const find2 = arr2.at(-1);
console.log({ find2 });

//join the array to string
let myPets = ["cow", "bird", "snake", "dog"];
let arrayJoin = myPets.join();
console.log({ arrayJoin });

//sort array items
let arr3 = [5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log({ arr3 });
sort = arr3.sort();
console.log({ sort });
//remove duplicates
//(a)without duplicates

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let origArr = [];
let arrDuplicate = [];
arr.forEach((item) => {
    if (!origArr.includes(item)) {
        origArr.push(item);
    } else if (!arrDuplicate.includes(item)) {
        arrDuplicate.push(item);
    }
});
console.log(origArr);
console.log(arrDuplicate);


//search in the array
let arr5 = ["the", "way", "x", 4];
console.log({ arr5 });
let foodSearch = "food";
if (arr5.includes(foodSearch)) { console.log(foodSearch); }
else { console.log("Not found");

}

//sort the string
const word = "renniw";
splitword = word.split("");
console.log({ splitword });
wordArrange = splitword.sort();
console.log(wordArrange.join(" "));

//Insert "tomato" at the 5th index
const newFruits = ["Mango", "Banana", "Kiwi", "Watermelon", "Orange", "Grapes", "Thornmelon", "Peach", "Avocado",];
newFruits.splice(5, 0, "Tomato");
console.log({ newFruits });









