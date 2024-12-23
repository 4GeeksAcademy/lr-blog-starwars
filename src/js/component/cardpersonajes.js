import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersonajes = (props) => {
    const { store, actions } = useContext(Context);
    const  [uid, setUid] = useState("")
    function traeruid () {
        
            var url = props.url
                        const arr = url.split('/')
                        const idfinal = arr[arr.length-2]
                        setUid(idfinal)

    }

    useEffect(() => traeruid()  ,[])
    return (
        <>
            <div
                key={props.index}
                className="card"
                style={{
                    flex: "0 0 auto",
                    width: "18rem",
                }}
            >
                <img
                    style={{ height: "230px", width: "18rem" }}
                    src="https://starwars-visualguide.com/assets/img/characters/11.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="card-text">
                        <p style={{ marginBottom: "2px" }}>
                            Gender: {props.gender}
                        </p>
                        <p style={{ marginBottom: "2px" }}>
                            Hair-Color: {props.hair_color}
                        </p>
                        <p style={{ marginBottom: "2px" }}>
                            Eye-Color: {props.eye_color}
                        </p>
                    </div>
                    <Link to={"/personaje/" + uid }>
                        <button onClick={()=> actions.traerLeerMas(props.url)} type="button" className="btn btn-outline-primary">
                            Read more
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        style={{ float: "right" }}
                        onClick={() => {
                            actions.añadirpersonajefavorito(props.name);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                        >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};