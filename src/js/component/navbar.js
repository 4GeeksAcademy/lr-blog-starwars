import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" style={{width: "100px", height: "100px", marginLeft: "250px"}}></img>
			</Link>
			<div className="ml-auto" style={{marginRight: "60px"}}>
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.personajesfavoritos.length + store.planetasfavoritos.length}
					</button>
					<ul className="dropdown-menu">
						{store.personajesfavoritos.map((element, index) => {
							return (	
								
									<li className="dropdown-item" key={index} style={{color: "blue", padding: "3px"}}>
										<Link to="/demo">	
											{element}
										</Link>
										<button onClick={()=> actions.eliminarpersonajeFavorito(element)} style={{border:"none" , backgroundColor: "white"}}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
												<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
											</svg>
										</button>

									</li>
								
							)
						}	
						)}
						{store.planetasfavoritos.map((element, index) => {
							return (	
								
									<li className="dropdown-item" key={index} style={{color: "blue", padding: "3px"}}>
										<Link to="/planeta">	
											{element}
										</Link>
										<button onClick={()=> actions.eliminarplanetaFavorito(element)} style={{border:"none" , backgroundColor: "white"}}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
												<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
											</svg>
										</button>

									</li>
								
							)
						}	
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};