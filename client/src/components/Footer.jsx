import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterAtt = styled.footer`
	margin: 2rem 0 1rem;

	.attribution {
		font-size: 11px;
		text-align: center;
		color: hsl(219, 9%, 45%);
	}

	.attribution a {
		color: hsl(26, 100%, 55%);
	}

	@media (min-width: 1100px) {
		margin: 6rem 0 1rem;
	}
`;

export default function Footer() {
	return (
		<FooterAtt>
			<div className="attribution">
				Coded by{" "}
				<Link
					to={{ pathname: "https://carlospwd.netlify.app/" }}
					target="_blank"
				>
					Carlos Perez
				</Link>{" "}
				and{" "}
				<Link to={{ pathname: "/" }} target="_blank">
					Pedro Angeles Flores
				</Link>
				.
			</div>
		</FooterAtt>
	);
}
