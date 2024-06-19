import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
//import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
// -----------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<>
			<Router>
				<Header />
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
