let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, weight: 6.9, type: ["grass", "poison"] },
    { name: "Charmander", height: 0.6, weight: 8.5, type: "fire" },
    { name: "Squirtle", height: 0.5, weight: 9, type: "water" },
    { name: "Caterpie", height: 0.3, weight: 2.9, type: "bug" },
    { name: "Pidgey", height: 0.3, weight: 1.8, type: ["flying", "normal"] },
    { name: "Pikachu", height: 0.4, weight: 6, type: "eletric" },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
  if (pokemon.height > 0.5) {
    document.write("<p>" + pokemon.name + " " + "(height: " + pokemon.height + ") " + "- Wow, that's big! " + "</p>");
  } else {
    document.write(
      "<p>" + pokemon.name + " " + "(height: " + pokemon.height + ") " + "</p>"
    );
  }
});

// "for loop" reference: 
// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 0.5){
//     document.write(pokemonList[i].name + " ");
//     document.write("(height: " + pokemonList[i].height + ") ")
//     document.write("- Wow, that’s big! ");
//     document.write("</br>")
//     // added br to brak the line
//     } else {
//       document.write(pokemonList[i].name + " ");
//       document.write("(height: " + pokemonList[i].height + ") ")
//       document.write("</br>")
//     }
//   }

