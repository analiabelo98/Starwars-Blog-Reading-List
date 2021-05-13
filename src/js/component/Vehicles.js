import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const [icon, setIcon] = useState(false);
	const [fav, setfav] = useState([]);

	const params = useParams();

	return (
		<div>
			<div className="flex-container p-5">
				<h1>Vehicles</h1>
				<div className="row flex-row flex-nowrap p-3">
					{store.vehicles.map((item, index) => {
						return (
							<div key={index} className="card col-2 p-3">
								<img
									src="https://i.pinimg.com/originals/77/71/f1/7771f164b48c1c3208ac27d85a0c1bac.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									</p>
									<div className=" d-flex pt-5 bd-highlight ">
										<Link
											href={item.url}
											className="btn mr-auto p-2 bd-highlight"
											to={"/DetailsVehicles/" + item.uid}>
											Learn more!
										</Link>
										<button className="btn btn-fav p-2 bd-highlight">
											<i
												className=" fas fa-heart"
												onClick={() => {
													actions.addFav(item.name);
												}}
											/>
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
