import * as React from 'react'
import { Slide, Heading, Text, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={5}>Twitter Scraper</Heading>
        <Text margin={'10px 0'} textFont={'secondary'} fit>
            Scrape the Twitter Frontend API without authentication in Go.
        </Text>
        <Link href={'https://github.com/n0madic/twitter-scraper'}>Go to Repo</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            Ferret
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} fit>
            A web scraping system aiming to simplify data extraction from the web.
        </Text>
        <Link href={'https://www.montferret.dev'}>Go to Repo</Link>
    </Slide>
)
