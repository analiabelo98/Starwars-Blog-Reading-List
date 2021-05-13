import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";
import { Vehicles } from "../component/Vehicles";
import { Planets } from "../component/Planets";
import Loading from "../component/loader";

export const Home = () => (
	<div className="text-center mt-5">
		<Loading />
	</div>
);
