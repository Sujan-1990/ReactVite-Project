import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
} from "@mui/material";
import React from "react";

const Form = () => {
	return (
		<>
			<h1>Sample Form</h1>

			<FormControl>
				<InputLabel htmlFor="my-input">Email address</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" />
				<Button variant="contained">Submit</Button>
				<FormHelperText id="my-helper-text">
					We'll never share your email.
				</FormHelperText>

				<Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
					This Box renders as an HTML section element.
				</Box>
			</FormControl>
		</>
	);
};

export default Form;
