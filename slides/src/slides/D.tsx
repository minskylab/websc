import * as React from 'react'
import { Slide, Heading, Text, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={5}>Metabase</Heading>
        <Text margin={'10px 0'} textFont={'secondary'} textSize={'32px'}>
            Metabase is the easy, open source way for everyone in your company to ask questions and learn from data.
        </Text>
        <Link href={'https://www.metabase.com'}>Go to Page</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            Katib
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} textSize={'32px'}>
            A Kubernetes-based system for Hyperparameter Tuning and Neural Architecture Search.
        </Text>
        <Link href={'https://github.com/kubeflow/katib'}>Go to Repo</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            CubeJS
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} textSize={'32px'}>
            A complete open source analytics solution: visualization agnostic frontend SDKs and API backed by analytical
            server infrastructure.
        </Text>
        <Link href={'https://cube.dev'}>Go to Page</Link>
    </Slide>
)
