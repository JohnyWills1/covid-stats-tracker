import { Flex, Box, Heading } from '@chakra-ui/core';
import SearchByCountry from '../components/SearchByCountry';
import react, { useState, useEffect } from 'react';
import StatGroup from '../components/StatGroup';
import axios from 'axios';

export default function Home() {
	const [data, setData] = useState();
	const [wData, setWData] = useState();
	const [country, setCountry] = useState();

	// API address
	// 'https://covid2019-api.herokuapp.com/v2/current'

	function onSearchByCountry(searchString) {
		setCountry(searchString);
		axios
			.get('https://covid2019-api.herokuapp.com/v2/country/' + searchString)
			.then((response) => {
				setData(response.data);
				console.log(data);
			})
			.catch((error) => {
				console.log('error -', error);
			});
	}

	useEffect(() => {
		axios
			.get('https://covid2019-api.herokuapp.com/v2/total')
			.then((response) => {
				setWData(response.data);
				console.log(wData);
			})
			.catch((error) => {
				console.log('error - ', error);
			});
	}, []);

	return (
		<>
			<Flex justify='center' align='center' height='100vh' flexDirection='column'>
				{wData && (
					<Box p={10}>
						<Heading pb={2}>World Statistics: </Heading>
						<StatGroup data={wData} />
					</Box>
				)}

				<SearchByCountry onSubmit={onSearchByCountry} />

				{data && (
					<Box pr={10} pl={10} pb={10} pt={2}>
						<Heading pt={2} pb={2}>
							{data.data.location}:
						</Heading>
						<StatGroup data={data} />
					</Box>
				)}
			</Flex>
		</>
	);
}
