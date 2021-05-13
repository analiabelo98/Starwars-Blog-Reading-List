import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav
			className="navbar fixed-top navbar-light mb-3 d-flex justify-content-between"
			style={{ backgroundColor: "#000000", height: "100px" }}>
			<div />
			<Link to="/">
				<img className="" src={starwars} height="90px" width="100px" />
			</Link>
			<div className="">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle mr-5"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.fav.map((item, index) => {
							return (
								<a key={index} className="dropdown-item" href="#">
									{item}{" "}
									<i
										type="button"
										className="fas fa-trash ml-2"
										onClick={() => actions.removeFav(item)}
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
