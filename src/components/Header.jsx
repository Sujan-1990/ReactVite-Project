import { Link, NavLink } from "react-router-dom";
// import Button from "./Button";
import "./header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
	return (
		<nav>
			<div className="nav__left">
				<NavLink className="links" to="/">
					<h4>LoGo</h4>
				</NavLink>
			</div>
			<div className="nav__right">
				<NavLink className="links" to="/">
					Home
				</NavLink>
				<NavLink className="links" to="/about">
					About Us
				</NavLink>
				<NavLink className="links" to="/products">
					Products
				</NavLink>
				<NavLink className="links" to="/contact">
					Contact
				</NavLink>
				{/* <Button name="Login" btnClass="login__btn" /> */}
				<NavLink className="links cart-trolley--link" to="/cart">
					<FiShoppingCart className="cart-trolley" />
					<span className="cart_total_item">10</span>
				</NavLink>
			</div>
		</nav>
	);
};

export default Header;
