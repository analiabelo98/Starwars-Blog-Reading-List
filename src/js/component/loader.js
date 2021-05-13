import React, { useState, useContext } from "react";
import { SolarSystemLoading } from "react-loadingg";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";
import { Vehicles } from "../component/Vehicles";
import { Planets } from "../component/Planets";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Loading = props => {
	const { store, actions } = useContext(Context);
	const [loading, setloading] = useState(true);

	if (loading) {
		const cambiarEstado = () => {
			setTimeout(() => {
				setloading(false);
			}, 3000);
		};
		return (
			<div>
				{cambiarEstado()}
				<SolarSystemLoading color={"yellow"} size={"large"} />
			</div>
		);
	} else {
		return (
			<div>
				<Characters />
				<Planets />
				<Vehicles />
			</div>
		);
	}
};

export default Loading;
