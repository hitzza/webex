const book = {
    item : {title : 'JavaScript'}
}
//deep copy for
/*
let forCopy = {};
for (let key in book){
    let value = book[key];
    forCopy[key]={}
    for (let name in value){
        forCopy[key][name]= value[name];
    }
} 
*/
//deep copy JSON
const copy = JSON.parse(JSON.stringify(book));
book.item.title = 'book';
console.log(copy);