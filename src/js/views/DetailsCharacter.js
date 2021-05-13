import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailsCharacter = () => {
	//const [character, setCharacter] = useState({});
	//const [details, setDetails] = useState({});
	const { store, actions } = useContext(Context);
	const params = useParams();

	// const getDetail = async () => {
	// 	try {
	// 		const res = await fetch("https://www.swapi.tech/api/people/" + params.id);
	// 		const data = await res.json();
	// 		setCharacter(data.result);
	// 		setDetails(data.result.properties);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		actions.getCharacter(params.id);
	}, []);

	return (
		<div className="container pt-5 mt-5 ">
			<div className="row p-3 details">
				<div className="col-6">
					<img
						className="card-img-top"
						src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg"
						height="400px"
					/>
				</div>
				<div className="col-6 text-white text-center">
					<h1>{store.personDetail.name}</h1>
					<p>{store.person.description}</p>
				</div>
			</div>
			<div className="row border-top text-danger text-center details">
				<div className="col-2">
					<p>Name</p>
					<p>{store.personDetail.name}</p>
				</div>
				<div className="col-2">
					<p>Birt Year</p>
					<p>{store.personDetail.birth_year}</p>
				</div>
				<div className="col-2">
					<p>Gender</p>
					<p>{store.personDetail.gender}</p>
				</div>
				<div className="col-2">
					<p>Height</p>
					<p>{store.personDetail.height}</p>
				</div>
				<div className="col-2">
					<p>Skin Color</p>
					<p>{store.personDetail.skin_color}</p>
				</div>
				<div className="col-2">
					<p>Eye Color</p>
					<p>{store.personDetail.eye_color}</p>
				</div>
			</div>

			<Link to="/">
				<button className="btn">Back home</button>
			</Link>
		</div>
	);
};

export default DetailsCharacter;
