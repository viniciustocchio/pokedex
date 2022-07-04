let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  let modalContainer = document.querySelector('#modal-container');
    function showModal(pokemon) {
      modalContainer.classList.add('is-visible');
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
  
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let name=document.createElement("h1")
      name.append(pokemon.name)
       
      let height=document.createElement("p")
      name.append(pokemon.height)

      let image=document.createElement("img")
      image.src=pokemon.imageUrlFront
  
      modal.appendChild(name);
      modal.appendChild(height);
      modal.appendChild(image);
      modal.appendChild(closeButtonElement)
      modalContainer.appendChild(modal);
    }

    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

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

    button.setAttribute("data-target", "group-list-item");
    button.setAttribute("data-toggle", "modal");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    eventListener(button, pokemon);
  }

  function eventListener (button, pokemon){
    button.addEventListener("click", function(){
        showDetails(pokemon);
    });
}

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
    return response.json();
    }).then(function (details) {
      item.imageUrlFront = details.sprites.front_default;
      item.height = details.height;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});