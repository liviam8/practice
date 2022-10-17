// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//      "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end
const animals = ["koal", "pand", "zebr"];

animals.map((e, i, arr) => arr[i] = e+"a");
console.log(animals);

animals.forEach(element => {
    element = element + "a";
});

console.log(animals);

for(let i =0; i<animals.length; i++) {
    animals[i] = animals[i]+"a";
}

console.log(animals);

animals.push("");
console.log(animals);
const animals2 = animals.join("a ");

console.log(animals2);