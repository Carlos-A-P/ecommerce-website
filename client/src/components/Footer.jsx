import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterAtt = styled.footer`
	margin-top: 2rem;
	background: black;
	padding: 1.1rem 0 5.6rem;

	@media (min-width: 1100px) {
		margin-top: 6rem;
	}
`;

const Attribution = styled.div`
	font-size: 11px;
	text-align: center;
	color: hsl(219, 9%, 45%);
`;

const FooterLogo = styled.p`
	margin-bottom: 1.7rem;

	a {
		font-size: 1.3rem;
		color: white;
		font-weight: 900;
		font-family: "Kumbh Sans", sans-serif;
		text-decoration: none;
	}
`;

const FooterLinks = styled.ul`
	display: flex;
	gap: 30px;
	justify-content: center;
	list-style: none;

	a {
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bolder;
	}

	a:hover {
		color: #ffa560;
	}

	@media (max-width: 520px) {
		flex-direction: column;
		gap: 15px;

		a {
			font-size: 1rem;
		}
	}
`;

export default function Footer() {
	return (
		<FooterAtt>
			<Attribution>
				<FooterLogo>
					<Link to="/">WebDev Apparel</Link>
				</FooterLogo>
				<FooterLinks>
					<li>
						<Link to="collections">Collections</Link>
					</li>
					<li>
						<Link to="men">Men</Link>
					</li>
					<li>
						<Link to="women">Women</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</FooterLinks>
			</Attribution>
		</FooterAtt>
	);
}
