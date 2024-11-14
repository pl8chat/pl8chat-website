'use client'
import localFont from 'next/font/local'
import IndividualHero from '../../../components/individualHero'
import IndividualFeature from '../../../components/individualFeature'

export default function Individuals() {
  return (
    <div>
      <IndividualHero />
      <IndividualFeature />
    </div>
  )
}