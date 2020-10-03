import React from 'react';
import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Box,
	Badge,
} from '@chakra-ui/core';

export default function StatBlock({ statType, statNumber, statDate }) {
	return (
		<>
			<Box rounded='lg' borderWidth='1px' p={5} overflow='hidden'>
				<StatGroup>
					<Stat>
						<StatLabel pb={2}>{statType}</StatLabel>
						<StatNumber pb={2}>{statNumber.toLocaleString('en')}</StatNumber>
						<Badge rounded='full' px='2' variantColor='blue' variant='subtle'>
							Updated on - {statDate}
						</Badge>
					</Stat>
				</StatGroup>
			</Box>
		</>
	);
}
