import * as React from 'react'
import { Slide, Heading, Text, Link } from 'spectacle'

export default (
    <Slide transition={['slide']} bgColor="tertiary">
        <Heading size={5}>Docker</Heading>
        <Text margin={'10px 0'} textFont={'secondary'} textSize={'32px'}>
            Docker is a set of platform as a service products that uses OS-level virtualization to deliver software in
            packages called containers.
        </Text>
        <Link href={'https://www.docker.com'}>Go to Page</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            Kubernetes
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} textSize={'32px'}>
            An open-source system for automating deployment, scaling, and management of containerized applications.
        </Text>
        <Link href={'https://kubernetes.io'}>Go to Repo</Link>

        <Heading size={5} margin={'30px 0 0 0'}>
            Kubeflow
        </Heading>
        <Text margin={'10px 0'} textFont={'secondary'} textSize={'32px'}>
            The Kubeflow project is dedicated to making deployments of machine learning (ML) workflows on Kubernetes
            simple, portable and scalable.
        </Text>
        <Link href={'https://www.kubeflow.org'}>Go to Page</Link>
    </Slide>
)
