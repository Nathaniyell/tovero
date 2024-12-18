"use client"
import AICCEESHeader from '@/components/layout/AICCEESHeader'
import AICCEESFooter from "@/components/layout/AICCEESFooter"
import { HeroSection } from '@/components/sections/HeroSection'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import AboutUs from '@/components/sections/AboutUs'
import ConferenceThemes from '@/components/sections/ConferenceThemes'
import PublishingPapers from '@/components/sections/PublishingPapers'
import CookingDemonstration from '@/components/sections/CookingDemonstration'
import PresentConference from '@/components/sections/PresentConference'
import Partners from '@/components/sections/Partners'
import Submissions from '@/components/sections/Submissions'
import ConferenceStats from '@/components/sections/ConferenceStats'
import ConferenceGuide from '@/components/conference-guide/conference-guide'


export default function ConferencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* <AICCEESHeader /> */}
      <main className="flex-1">
        <HeroSection />
        <AboutUs />
        <ConferenceThemes />
        <ConferenceGuide />
        <ConferenceStats />
        <SpeakersSection />
        <PublishingPapers />
        <Submissions />
        <CookingDemonstration />
        <PresentConference />
        <Partners />
      </main>
      {/* <AICCEESFooter /> */}
    </div>
  )
}
