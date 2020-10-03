import React from 'react';
import StatBlock from './StatBlock';
import { SimpleGrid } from '@chakra-ui/core';

export default function StatGroup({ data }) {
	return (
		<>
			<SimpleGrid columns={2} spacing={4}>
				<StatBlock
					statType='Confirmed Cases'
					statNumber={data.data.confirmed}
					statDate={data.dt}
				/>
				<StatBlock
					statType='Deaths'
					statNumber={data.data.deaths}
					statDate={data.dt}
				/>
				<StatBlock
					statType='Recovered'
					statNumber={data.data.recovered}
					statDate={data.dt}
				/>
				<StatBlock
					statType='Active'
					statNumber={data.data.active}
					statDate={data.dt}
				/>
			</SimpleGrid>
		</>
	);
}
