const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [

			],
			planetas: [

			],
			personajesfavoritos: [

			],
			planetasfavoritos: [

			],
			propiedadurl: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const store = getStore();
				console.log("se cargo la pagina")
				fetch("https://swapi.dev/api/people")
					.then((response) => response.json())
					.then((data) => {
						console.log(data.results)
						setStore({personajes: data.results})

					}
				)	
			},
			getPlanetas: () => {
				console.log("cargar planetas")
				fetch("https://swapi.dev/api/planets")
					.then((response) => response.json())
					.then((data) => {
						console.log(data.results)
						setStore({planetas: data.results})

					})
			},
			añadirpersonajefavorito: (nombre) => {
				console.log("Se añadirá a favoritos: " + nombre);
				const store = getStore();
				if (store.personajesfavoritos.includes(nombre)){
					setStore({...store,
						personajesfavoritos: store.personajesfavoritos.filter(favorito => favorito !== nombre) 
					});
				} else {
					setStore({
						...getStore(),
						personajesfavoritos: [...(getStore().personajesfavoritos || []), nombre]
					});
					console.log(getStore().personajesfavoritos);
					
				}
				
			},
			eliminarpersonajeFavorito: (nombre) => {
				const store = getStore();
				setStore({...store,
					personajesfavoritos: store.personajesfavoritos.filter(favorito => favorito !== nombre) 
				});
			
				console.log("Favorito eliminado:", nombre);
			},
			añadirplanetafavorito: (nombre) => {
				const store = getStore();
				console.log("Se añadirá a favoritos: " + nombre);
				if(store.planetasfavoritos.includes(nombre)) {
					setStore({...store,
						planetasfavoritos: store.planetasfavoritos.filter(favorito => favorito !== nombre) 
					});
				} else {

					setStore({
						...getStore(),
						planetasfavoritos: [...(getStore().planetasfavoritos || []), nombre]
					});
				}
				console.log(getStore().planetasfavoritos);
			}
			,
			eliminarplanetaFavorito: (nombre) => {
				const store = getStore();
				setStore({...store,
					planetasfavoritos: store.planetasfavoritos.filter(favorito => favorito !== nombre) 
				});
			
				console.log("Favorito eliminado:", nombre);
			},
			traerLeerMas: (urlitem) => {
				const store = getStore();
				var url = urlitem;
				const arr = url.split('/')
				const idfinal = arr[arr.length-2]
				setStore({propiedadurl: idfinal})
				console.log(store.propiedadurl)
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
		}
	};


export default getState;