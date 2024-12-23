import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPersonajes } from "../component/cardpersonajes";
import { CardPlanetas } from "../component/cardplanetas";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<>	
		<div className="container">

			<h1 style={{color: "#ef4545"}}>Characters</h1>
			<div
				style={{
					display: "flex",
					overflowX: "auto", 
					padding: "10px",
					gap: "10px", 
				}}
			>
				
				{store.personajes.map((item, index) => {
					return (
						<CardPersonajes key={index} url={item.url} name= {item.name} gender={item.gender} haircolor={item.hair_color} eyecolor={item.eye_color}/>
					);
				})}
			</div>

			<h1 style={{color: "#ef4545"}}>Planets</h1>
			<div
				style={{
					display: "flex",
					overflowX: "auto", 
					padding: "10px",
					gap: "10px", 
				}}
			>
				
				{store.planetas.map((item, index) => {
					return (
						<CardPlanetas key={index} url={item.url} name={item.name} population={item.population} terrain={item.terrain}/>
					);
				})}
			</div>
		</div>
		</>
	);
};