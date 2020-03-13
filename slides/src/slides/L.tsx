import * as React from 'react'
import { Slide, Heading, Image, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="secondary">
        <Heading size={3} textColor={'tertiary'}>
            State Of The Art
        </Heading>
        <Link href={'https://coronavirus.app/'}>Corona Virus App</Link>
        <Image width={'60vw'} src={'https://i.ibb.co/ZT3hjpP/coronavirusapp.png'}></Image>
    </Slide>
)
