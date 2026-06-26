//push(val)----> add value to the last of the array
let arr=["Noida","Nanital","Rishikesh"];
console.log(arr);
arr.push("Shimla");
//unshift(val)----> add value to the first of the array
arr.unshift("Manali");
console.log(arr);
//splice(index,deleteCount,"name of the elements to be added")
arr.splice(2,0,"Lucknow","Agra")
console.log(arr);
arr.splice(2,2);
console.log(arr);
//remove elements
//pop()-->deletes elements from last
arr.pop();
console.log(arr);
//shift--->1st index se elements remove
arr.shift();
console.log(arr);
//slice--->creates a new array
let names=["satyam","karan","bhavya","shimpi","sonam","anushka"];
console.log(names);
let snames=names.slice(3,5);
console.log(snames);
//join()
let joinArray=names.join(",");
console.log(joinArray);
//SORT()
console.log(names.sort());
//sorting numbers
let nums=[7,4,8,2,8,9];
console.log(nums.sort());
