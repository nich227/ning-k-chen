import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Ning Chen.
        </BigTitle>
        <Subtitle>I'm  a junior studying Software Engineering at the University of Texas at Dallas.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Ninja Minkey Returns"
            link="https://github.com/stratx21/NinjaMinkeyReturns"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            The game's focus is on the main character, the minkey, who has been oppressed by sloths and the sloths' minions for years. Just recently the Sloths have "accidently" crashed an international satellite station on which the minkeys and sloths worked together for years. The crash destroyed the main character's farm and forced him to take up a magical banana he found from the wreckage and two swords that he acquired when he was just a young minkey to fight off his enemies!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Shoot me an <a href="mailto:ningchen227@gmail.com">email</a> or find me on:{' '}
            <a href="https://github.com/nich227">GitHub</a> &{' '}
            <a href="https://linkedin.com/in/nich227">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Ning Chen. Design by LekoArts.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
