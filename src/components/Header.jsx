import { Link } from "react-router-dom";
import Button from "./Button";
import "./header.css";
const Header = () => {
	return (
		<nav>
			<div className="navbar">
				<div className="wrapper">
					<div className="logo">
						<Link className="link" to="/">
							CoMpAnY LoGo
						</Link>
					</div>

					<div className="navbar-right">
						<div className="items">
							<Link className="link" to="/">
								Home
							</Link>
							<Link className="link" to="/products">
								Products
							</Link>
							<Link className="link" to="/about">
								About
							</Link>
							<Link className="link" to="/contact">
								Contact Us
							</Link>
							<Button name="Login" btnClass="login__btn" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
