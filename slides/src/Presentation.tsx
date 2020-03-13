import * as React from 'react'
import { useState, useEffect, FC } from 'react'
import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import './images'

require('normalize.css')

const theme = createTheme(
    {
        primary: '#ffdf53',
        secondary: '#1b1b1b',
        tertiary: '#fffcf0',
        quarternary: '#f0f0f0'
    },
    {
        primary: 'Rubik',
        secondary: 'Karla'
    }
)

export const Presentation: FC = () => {
    const [slides, setSlides] = useState<React.ReactElement[]>([] as React.ReactElement[])

    useEffect(() => {
        const slidesContext = require.context('./slides', true, /(.*\/.*.tsx)$/)
        const loadedSlides = slidesContext
            .keys()
            // tslint:disable-next-line:no-any
            .reduce<React.ReactElement<any>[]>((acc, id) => {
                const slideModule = slidesContext(id).default
                // I want to allow a folder which holds slides so I can group parts of the preso
                // making it easier to re-organise.
                if (slideModule instanceof Array) {
                    slideModule.forEach(sm => acc.push(sm))
                } else {
                    acc.push(slideModule)
                }
                return acc
            }, [])

        setSlides(loadedSlides)
    }, [])

    return (
        <Deck transition={['zoom', 'slide']} theme={theme} progress={'none'}>
            {slides.map((slide, index) => {
                return React.cloneElement(slide, { key: index })
            })}
        </Deck>
    )
}
