import * as React from 'react'
import { Slide, Heading, Text } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
            What's Data Science?
        </Heading>

        <Text textColor="secondary" margin={'30px 0'}>
            Inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract
            knowledge and insights from many structural and unstructured data.
        </Text>
    </Slide>
)
