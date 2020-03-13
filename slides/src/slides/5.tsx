import * as React from 'react'
import { Slide, Heading, Text, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={3} caps>
            Data Scraping
        </Heading>
        <Text margin={'30px 0'}>
            Is a technique in which a computer program extracts data for human redable output coming from another
            computer.
        </Text>
        <List>
            <ListItem textSize={'32px'}>Screen Scraping</ListItem>
            <ListItem textSize={'32px'}>Report Mining</ListItem>
            <ListItem textSize={'32px'}>Web Scraping</ListItem>
            <ListItem textSize={'32px'}>Computer Vision</ListItem>
            <ListItem textSize={'32px'}>Vertical Aggregation</ListItem>
        </List>
    </Slide>
)
