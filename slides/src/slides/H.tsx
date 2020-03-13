import * as React from 'react'
import { Slide, Text, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Text>A curated list of automated machine learning papers, articles, tutorials, slides and projects</Text>
        <Link href={'https://github.com/hibayesian/awesome-automl-papers'}>Awesome AutoML Papers</Link>

        <Text margin={'30px 0 0 0'}>A curated list of resources dedicated to reinforcement learning</Text>
        <Link href={'https://github.com/aikorea/awesome-rl'}>Awesome Reinforcement Learning</Link>

        <Text margin={'30px 0 0 0'}>"For deep RL and the future of AI"</Text>
        <Link href={'https://github.com/tigerneil/awesome-deep-rl'}>Awesome Deep Reinforcement Learning</Link>

        <Text margin={'30px 0 0 0'}>A curated list of Meta-Learning resources/papers</Text>
        <Link href={'https://github.com/dragen1860/awesome-meta-learning'}>Awesome Meta-Learning</Link>
    </Slide>
)
