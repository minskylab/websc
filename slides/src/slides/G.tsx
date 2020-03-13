import * as React from 'react'
import { Slide, Text, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Text>A curated list of resources dedicated to Natural Language Processing</Text>
        <Link href={'https://github.com/keon/awesome-nlp'}>Awesome NLP</Link>

        <Text margin={'30px 0 0 0'}>The guide to tackle with the Text Summarization</Text>
        <Link href={'https://github.com/icoxfog417/awesome-text-summarization'}>Awesome Text Summarization</Link>

        <Text margin={'30px 0 0 0'}>A curated list of awesome mathematics resources</Text>
        <Link href={'https://github.com/rossant/awesome-math'}>Awesome Math</Link>

        <Text margin={'30px 0 0 0'}>A curated list of the most cited deep learning papers (2012-2016)</Text>
        <Link href={'https://github.com/terryum/awesome-deep-learning-papers'}>Awesome Deep Learning Papers</Link>
    </Slide>
)
