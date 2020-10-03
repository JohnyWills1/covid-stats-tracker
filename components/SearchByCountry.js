import React from 'react';
import {
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	Button,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';

const SearchByCountry = ({ onSubmit }) => {
	function handleSubmit({ searchString }) {
		onSubmit(searchString);
	}

	return (
		<>
			<Formik
				initialValues={{ searchString: '' }}
				validate={(values) => {
					const errors = {};
					if (!values.searchString) {
						errors.searchString = 'Please enter a country name!';
					}
					return errors;
				}}
				onSubmit={handleSubmit}
			>
				{({ errors, values, handleSubmit, setFieldValue, touched }) => (
					<Form onSubmit={handleSubmit}>
						<Flex align='center'>
							<FormControl isInvalid={errors.searchString && touched.searchString}>
								<Input
									placeholder='Search by country'
									name='searchString'
									id='searchString'
									onChange={(e) => setFieldValue('searchString', e.target.value)}
									value={values.searchString}
								/>
								<FormErrorMessage>{errors.searchString}</FormErrorMessage>
							</FormControl>
							<Button ml={5} type='submit' variantColor='green' leftIcon='search'>
								Search
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SearchByCountry;
