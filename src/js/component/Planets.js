import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [fav, setFav] = React.useState(false);

	const params = useParams();

	return (
		<div>
			<div className="flex-container p-5">
				<h1>Planets</h1>
				<div className="row flex-row flex-nowrap p-3">
					{store.planets.map((item, index) => {
						return (
							<div key={index} className="card col-2 p-3">
								<img
									src="https://i.pinimg.com/originals/8f/49/3f/8f493f4bf579b12b0d1da0d217326a2d.jpg"
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
											to={"/DetailsPlanets/" + item.uid}>
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
