import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    console.log(params)
	const [planetData, setPlanetData] = useState ([])
	function traerPlaneta () {
		fetch("https://swapi.dev/api/planets/" + params.planeta_id)
			.then((response) => response.json())
			.then((data) => setPlanetData(data))
	}
	useEffect(()=> 
		traerPlaneta()
		
		,[])
	return (
		<div className="container">
			<div className="d-flex">
				<img style={{width: "600px", height: "400px"}} src="https://starwars-visualguide.com/assets/img/characters/46.jpg"/>
				<div className="d-flex flex-column w-100">
				<h1 className="mx-auto">{planetData.name}</h1>
				<p className="mx-auto p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<div className="d-flex justify-content-between border-top border-danger mt-3" style={{padding: "30px"}}>
				<p style={{color: "red", width: "40px"}}>Name {planetData.name}</p>
				<p style={{color: "red", width: "40px"}}>Climate {planetData.climate}</p>
				<p style={{color: "red", width: "40px"}}>Population {planetData.population}</p>
				<p style={{color: "red", width: "40px"}}>Orbital period {planetData.orbital_period}</p>
				<p style={{color: "red", width: "40px"}}>Rotation Period {planetData.rotation_period}</p>
				<p style={{color: "red", width: "40px"}}>Diameter {planetData.diameter}</p>
				
			</div>
		</div>
	);
};

Planeta.propTypes = {
	match: PropTypes.object
};