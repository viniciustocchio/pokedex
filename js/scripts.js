let pokemonList = [
  { name: "Bulbasaur", height: 0.7, weight: 6.9, type: ["grass", "poison"] },
  { name: "Charmander", height: 0.6, weight: 8.5, type: "fire" },
  { name: "Squirtle", height: 0.5, weight: 9, type: "water" },
  { name: "Caterpie", height: 0.3, weight: 2.9, type: "bug" },
  { name: "Pidgey", height: 0.3, weight: 1.8, type: ["flying", "normal"] },
  { name: "Pikachu", height: 0.4, weight: 6, type: "eletric" },
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " ");
    document.write("(height: " + pokemonList[i].height + ") ")
  }
  // document.write(pokemonList[i].name || pokemonList[i].height)
  // if (person[i].age <19 && person[i].age >13){
  //   console.log(person[i].name + " is a teenager");
  // }else if (person[i].age <13){
  //   console.log(person[i].name + " is a child");
  // }else {
  //   console.log(person[i].name + " is an adult");
  // }

