const mravel_heroes = ["ironman", "thor"]
const dc_heroes = ["flash"]
// console.log(typeof mravel_heroes);

// console.log(`marvel heroes are ${mravel_heroes}`)
// console.log(`dc heroes are ${dc_heroes}`)

// this method is used to join two arrays (this is the most preferred type)
const all_heroes = [...mravel_heroes, ...dc_heroes]
// console.log(`all heroes combined are ${all_heroes}`)
// console.log(typeof all_heroes)

// concat can also be used to merge but it can only merge 2 arrays
const all_new_heroes = mravel_heroes.concat(dc_heroes)
// console.log(all_new_heroes)


//suppose we have array ion array in array and array in array in array in array this all can be solved using flat method

const anothera_array = [1,2,3,[4,5,6],7,[8,[9,[10]]]]

// will sort it in another array using flat method

const new_another_aarray = anothera_array.flat(Infinity)

console.log(new_another_aarray)

console.log(Array.isArray("Wahid"))
console.log(Array.from("Wahid"))

