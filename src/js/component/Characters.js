import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const [fav, setFav] = React.useState(false);
	const [icon, seticon] = useState(false);

	const params = useParams();

	return (
		<div>
			<br />
			<br />
			<div className="flex-container p-5">
				<h1>Characters</h1>
				<div className="row flex-row flex-nowrap p-3">
					{store.characters.map((item, index) => {
						return (
							<div key={index} className="card col-2 p-3">
								<img
									src="https://i.pinimg.com/originals/e1/b7/59/e1b75944d113a74d7f8b1b7898e1c97f.png"
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
											to={"/DetailsCharacter/" + item.uid}>
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
