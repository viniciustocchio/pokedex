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

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener("click",() => showDetails(pokemon));
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem,
    showDetails,
  };
})();

pokemonList = pokemonRepository.getAll();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)

});

