import React, { useState } from "react";
import "./Cards.css";

const Cards = ({ color }) => {
	return <div className={`card ${color}`}></div>;
};

export default Cards;
