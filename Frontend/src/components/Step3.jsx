import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from './Card3';
import { useScroll } from 'framer-motion';

const projects = [
  {
    index: 0,
    title: 'Low Target',
    description: 'Hit 5% in your evaluation to get funded',
    image: '/rocket.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 1,
    title: 'Upto 90% Performance Split',
    description: 'Choose Account sizes up to $100k and earn up to 90% performance split.',
    image: '/dollar.svg',
    backgroundColor: '#F0FDF4',
    textColor: '#16A34A'
  },
  {
    index: 2,
    title: 'Faster Process Evaluation',
    description: 'Prove your skills just once by meeting all the trading objective in 7 days.',
    image: '/timer.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 3,
    title: 'Tailored Accounts',
    description: 'Customize your account for the best experience with your unique add-ons at checkout.',
    image: '/users.png',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 4,
    title: 'Platform 5',
    description: 'Trade on the most popular platform in the industry. Stick to what you are comfortable with.',
    image: '/badge.svg',
    backgroundColor: 'rgba(229, 242, 255, 1)',
    textColor: '#C026D3'
  },
]

export default function Step3() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  // Calculate dynamic height based on number of cards
  const cardHeight = 300; // Minimum height per card in mobile
  const dynamicHeight = `${(projects.length * cardHeight) + 100}px`; // Extra 100px for spacing

  return (
    <div 
      ref={container}
      style={{
        position: "relative",
        marginTop: "2vh",
        width: "100%",
        height: dynamicHeight,
      }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            range={[i * .25, 1]} 
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}