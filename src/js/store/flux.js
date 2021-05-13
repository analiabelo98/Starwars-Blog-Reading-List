import { useState } from "react";
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
			//cards
			characters: [],
			planets: [],
			vehicles: [],
			//fav
			fav: [],
			// details
			person: [],
			vehicle: [],
			planet: [],
			// detail properties
			personDetail: [],
			vehicleDetail: [],
			planetDetail: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))    
                */

				//vehicles
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));

				//characters
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err));

				//planets
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
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
			},
			getCharacter: id => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => setStore({ person: data.result, personDetail: data.result.properties }))
					.catch(err => console.error(err));
			},
			getPlanet: id => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(res => res.json())
					.then(data => setStore({ planet: data.result, planetDetail: data.result.properties }))
					.catch(err => console.error(err));
			},

			getVehicle: id => {
				fetch("https://www.swapi.tech/api/vehicles/" + id)
					.then(res => res.json())
					.then(data => setStore({ vehicle: data.result, vehicleDetail: data.result.properties }))
					.catch(err => console.error(err));
			},
			//Agregar y quitar favs
			addFav: item => {
				const store = getStore();
				let favCopy = [...store.fav];
				favCopy.push(item);
				setStore({ fav: favCopy });
			},
			removeFav: elem => {
				const store = getStore();
				let favCopy = [...store.fav];
				setStore({ fav: favCopy.filter(item => item !== elem) });
			}
		}
	};
};

export default getState;
