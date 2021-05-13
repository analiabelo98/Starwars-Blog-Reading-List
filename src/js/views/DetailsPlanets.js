import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailsPlanets = () => {
	//const [planets, setPlanets] = useState({});
	//const [details, setDetails] = useState({});
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanet(params.id);
	}, []);

	return (
		<div className="container pt-5 mt-5 ">
			<div className="row p-3 details">
				<div className="col-6">
					<img
						className="card-img-top"
						src="https://i.pinimg.com/originals/8a/a9/2c/8aa92c5ba570f0c8d50a97e6bce0a8ea.jpg"
						height="500px"
					/>
				</div>
				<div className="col-6 text-white text-center">
					<h1>{store.planetDetail.name}</h1>
					<p>{store.planet.description}</p>
				</div>
			</div>
			<div className="row border-top text-danger text-center details">
				<div className="col-2">
					<p>Climate</p>
					<p>{store.planetDetail.climate}</p>
				</div>
				<div className="col-2">
					<p>Population</p>
					<p>{store.planetDetail.population}</p>
				</div>
				<div className="col-2">
					<p>Orbital period</p>
					<p>{store.planetDetail.orbital_period}</p>
				</div>
				<div className="col-2">
					<p>Rotation period</p>
					<p>{store.planetDetail.rotation_period}</p>
				</div>
				<div className="col-2">
					<p>Diameter</p>
					<p>{store.planetDetail.diameter}</p>
				</div>
				<div className="col-2">
					<p>Created</p>
					<p>{store.planetDetail.created}</p>
				</div>
			</div>

			<Link to="/">
				<button className="btn ">Back home</button>
			</Link>
		</div>
	);
};

export default DetailsPlanets;
