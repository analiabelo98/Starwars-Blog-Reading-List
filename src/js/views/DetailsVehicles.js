import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Vehicles } from "../component/Vehicles";

const DetailsPlanets = () => {
	//const [vehicle, setVehicle] = useState({});
	//const [details, setDetails] = useState({});
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getVehicle(params.id);
	}, []);

	return (
		<div className="container pt-5 mt-5 ">
			<div className="row p-3 details">
				<div className="col-6">
					<img
						className="card-img-top"
						src="https://img.gta5-mods.com/q95/images/vehicle-preview-for-star-war-pack-by-kjb33/35d5f4-kjb33_starwarVehiclesPreview.PNG"
						height="500px"
					/>
				</div>
				<div className="col-6 text-white text-center">
					<h1>{store.vehicleDetail.name}</h1>
					<p>{store.vehicle.description}</p>
				</div>
			</div>
			<div className="row border-top text-danger text-center details">
				<div className="col-2">
					<p>Model</p>
					<p>{store.vehicleDetail.model}</p>
				</div>
				<div className="col-2">
					<p>Vehicle class</p>
					<p>{store.vehicleDetail.vehicle_class}</p>
				</div>
				<div className="col-2">
					<p>Manufacturer</p>
					<p>{store.vehicleDetail.manufacturer}</p>
				</div>
				<div className="col-2">
					<p>Cost in credits </p>
					<p>{store.vehicleDetail.cost_in_credits}</p>
				</div>
				<div className="col-2">
					<p>Crew</p>
					<p>{store.vehicleDetail.crew}</p>
				</div>
				<div className="col-2">
					<p>Passengers</p>
					<p>{store.vehicleDetail.passengers}</p>
				</div>
			</div>

			<Link to="/">
				<button className="btn">Back home</button>
			</Link>
		</div>
	);
};

export default DetailsPlanets;
