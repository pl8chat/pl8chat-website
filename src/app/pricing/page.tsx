'use client'

import PricingComponent from '../../components/pricingComponent'
import PricingFeature from '../../components/pricingFeature'
import localFont from 'next/font/local'

const switzer = localFont({
  src: "../fonts/Switzer-Variable.woff",
  variable: "--font-Switzer",
  weight: "100 900",
})

export default function Pricing() {
  return (
    <div className={``}>
      <PricingComponent />
      <PricingFeature />
    </div>
  )
}