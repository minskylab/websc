import * as React from 'react'
import { Slide, Heading, Text, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={3} caps>
            Modern Paradigms
        </Heading>
        <Text margin={'30px 0'}>
            Last years we've seen big emergent technologies related to isolation and more abstraction layers over
            traditional development.
        </Text>
        <List>
            <ListItem textSize={'32px'}>Containers</ListItem>
            <ListItem textSize={'32px'}>Microservices</ListItem>
            <ListItem textSize={'32px'}>Pipelines</ListItem>
            <ListItem textSize={'32px'}>Orchesters</ListItem>
            <ListItem textSize={'32px'}>Cloud Native</ListItem>
            <ListItem textSize={'32px'}>Serverless</ListItem>
            <ListItem textSize={'32px'}>APIfication</ListItem>
        </List>
    </Slide>
)
