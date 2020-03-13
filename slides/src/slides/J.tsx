import * as React from 'react'
import { Slide, Heading, Text } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="secondary">
        <Heading size={2} textColor={'tertiary'}>
            SHORT TERM
        </Heading>
        <Text textColor={'tertiary'}>&</Text>
        <Heading size={2} textColor={'tertiary'}>
            LONG TERM
        </Heading>
        <br />
        <Heading size={1} textColor={'primary'}>
            SOLUTIONS
        </Heading>
    </Slide>
)
