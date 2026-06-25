let names=["shubra","drishti","rahul","jatin","harsh"];
for(let name in names)
{
    console.log(name);
}
for(let name of names)
{
    console.log(name);
}
let sname="Drishti";
for(let n of sname)
{
    console.log(n);
}
for(let n in sname)
{
    console.log(sname[n])
}
//length of string
let name="Anupam";
let count=0;
for(let n in name)
{
    console.log(sname[n]);
    count++;
}
console.log(sname,":",count);
//object 
let product={
    id:1,
    pname:"Tea",
    price:10,
    qty:50
};
console.log(product);
for(let p in product)
{
    console.log(p);
}
