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
	Text,
} from '@chakra-ui/core';

export default function StatBlock({ statType, statNumber, statDate }) {
	return (
		<>
			<Box rounded='lg' borderWidth='1px' p={5} overflow='hidden'>
				<StatGroup>
					<Stat>
						<StatLabel pb={2}>{statType}</StatLabel>
						<StatNumber pb={2}>{statNumber.toLocaleString('en')}</StatNumber>
						<Text>Updated on:{' '}
						<Badge rounded='full' variantColor='blue' variant='subtle'>{statDate}</Badge>
						</Text>
					</Stat>
				</StatGroup>
			</Box>
		</>
	);
}
