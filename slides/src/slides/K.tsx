import * as React from 'react'
import { Slide, Heading, Image, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="secondary">
        <Heading size={3} textColor={'tertiary'}>
            State Of The Art
        </Heading>
        <Link href={'https://www.coronatracker.com/'}>Corona Traker</Link>
        <Image width={'60vw'} src={'https://i.ibb.co/y5MqBMR/coronatracker.png'}></Image>
    </Slide>
)
