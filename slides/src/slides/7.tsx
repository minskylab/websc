import * as React from 'react'
import { Slide, Heading, Text, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={5}>Ultimate Facebook Scraper</Heading>
        <Text margin={'10px 0'} textFont={'secondary'} fit>
            A bot which scrapes almost everything about a Facebook user's profile
        </Text>
        <Link href={'https://github.com/harismuneer/Ultimate-Facebook-Scraper'}>Go to Repo</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            Twint
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} fit>
            An advanced Twitter scraping and OSINT tool written
        </Text>
        <Link href={'https://github.com/twintproject/twint'}>Go to Repo</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            Scrapy
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} fit>
            An open source and collaborative framework for extracting the data you need from websites.
        </Text>
        <Link href={'https://scrapy.org'}>Go to Page</Link>

        {/* <Table>
            <TableHeader>
                <TableHeaderItem textSize={'24px'}>Name</TableHeaderItem>
                <TableHeaderItem textSize={'24px'}>Language</TableHeaderItem>
                <TableHeaderItem textSize={'24px'}>Description</TableHeaderItem>
                <TableHeaderItem textSize={'24px'}>Repository</TableHeaderItem>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableItem textSize={'24px'}>Ultimate Facebook Scraper</TableItem>
                    <TableItem textSize={'24px'}>Python</TableItem>
                    <TableItem textSize={'18px'}>
                        A bot which scrapes almost everything about a Facebook user's profile
                    </TableItem>
                    <TableItem textSize={'24px'}>
                        <Link href={'https://github.com/harismuneer/Ultimate-Facebook-Scraper'}>Go to Repo</Link>
                    </TableItem>
                </TableRow>
                <TableRow>
                    <TableItem textSize={'24px'}>Twint</TableItem>
                    <TableItem textSize={'24px'}>Python</TableItem>
                    <TableItem textSize={'18px'}>An advanced Twitter scraping and OSINT tool written</TableItem>
                    <TableItem textSize={'24px'}>
                        <Link href={'https://github.com/twintproject/twint'}>Go to Repo</Link>
                    </TableItem>
                </TableRow>
                <TableRow>
                    <TableItem textSize={'24px'}>Scrapy</TableItem>
                    <TableItem textSize={'24px'}>Python</TableItem>
                    <TableItem textSize={'18px'}>
                        An open source and collaborative framework for extracting the data you need from websites.
                    </TableItem>
                    <TableItem textSize={'24px'}>
                        <Link href={'https://scrapy.org'}>Go to Repo</Link>
                    </TableItem>
                </TableRow>
                <TableRow>
                    <TableItem textSize={'24px'}>Twitter Scraper</TableItem>
                    <TableItem textSize={'24px'}>Go</TableItem>
                    <TableItem textSize={'18px'}>Scrape the Twitter Frontend API without authentication.</TableItem>
                    <TableItem textSize={'24px'}>
                        <Link href={'https://github.com/n0madic/twitter-scraper'}>Go to Repo</Link>
                    </TableItem>
                </TableRow>
                <TableRow>
                    <TableItem textSize={'24px'}>Ferret</TableItem>
                    <TableItem textSize={'24px'}>Go</TableItem>
                    <TableItem textSize={'18px'}>
                        A web scraping system aiming to simplify data extraction from the web..
                    </TableItem>
                    <TableItem textSize={'24px'}>
                        <Link href={'https://www.montferret.dev'}>Go to Repo</Link>
                    </TableItem>
                </TableRow>
            </TableBody>
        </Table> */}
    </Slide>
)
