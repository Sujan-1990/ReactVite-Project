import React from "react";
import ReactDOM from "react-dom/client";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
//import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import SingleProduct from "./components/pages/SingleProduct";
import ErrorPage from "./components/pages/ErrorPage";
// -----------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/singleproduct/:id" element={<SingleProduct />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</>
	</React.StrictMode>
);
