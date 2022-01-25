import React from "react";
import { TrafficLight } from "./traffic.jsx";

const Home = () => {
	return (
		<div className="text">
			<h3>Traffic Light</h3>
			<TrafficLight />
			<p className="footer">Camilo Feria</p>
		</div>
	);
};

export default Home;
