import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

import { COLORS } from "./constants";

// Layouts
import Routers from "./Routers";

import { Header, Footer } from "./components/layouts";

// Data
const profileImg = "/assets/profile.jpg";

function App() {
	const navigate = useNavigate();

	const [isLogined, setIsLogined] = useState(localStorage.getItem("login"));

	function loginHandler() {
		if (isLogined) {
			setIsLogined(false);
			localStorage.removeItem("login");
		} else {
			setIsLogined(true);
			localStorage.setItem("login", "Chilli");

			navigate("/");
		}
	}

	return (
		<>
			<GlobalStyle />
			<Header profileImg={profileImg} isLogined={isLogined} loginHandler={loginHandler} />
			<Routers isLogined={isLogined} loginHandler={loginHandler} />
			<Footer />
		</>
	);
}

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Global */
h1,
a,
div,
p,
section,
article,
input,
textarea {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

html {
	font-size: 10px;
}

body {
	font-size: 1.6rem;
	line-height: 1.4;
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button {
	cursor: pointer;
}

a {
	border-radius: 0.8rem;
	overflow: hidden;
}
img {
	vertical-align: bottom;
}

a:focus,
input:focus,
button:focus,
textarea:focus {
	outline: 3px solid rgba(${COLORS.mainRgb}, 0.2);
	box-shadow: 0 0 0 1px ${COLORS.outline};
}

#root {
	background: ${COLORS.grayBackgroundLight};
}

.a11y-hidden {
	overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
}

.max-width {
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
}

`;

export default App;
