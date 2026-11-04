'use client';

import { useState } from 'react';
import NetflixNavbar from '@/components/NetflixNavbar';
import HeroSection from '@/components/HeroSection';
import BirthdayTimer from '@/components/BirthdayTimer';
import TheQuietGrind from '@/components/TheQuietGrind';
import VisionaryAction from '@/components/VisionaryAction';
import DestinationGoogle from '@/components/DestinationGoogle';
import HeartBehindBrilliance from '@/components/HeartBehindBrilliance';
import FinaleSection from '@/components/FinaleSection';
import ParticleBackground from '@/components/ParticleBackground';

// Keepsake & Journey components
import ClientEffects from '@/components/ClientEffects';
import WelcomeOverlay from '@/components/WelcomeOverlay';
import BackgroundMusic, { TrackName } from '@/components/BackgroundMusic';
import FallingPetals from '@/components/FallingPetals';
import TodayReminder from '@/components/TodayReminder';
import JourneySection from '@/components/JourneySection';
import DreamsWorthChasing from '@/components/DreamsWorthChasing';
import VisionBook from '@/components/VisionBook';
import ThingsNeverChange from '@/components/ThingsNeverChange';
import MemoryGarden from '@/components/MemoryGarden';
import CinematicReels from '@/components/CinematicReels';
import OpenWhenLetters from '@/components/OpenWhenLetters';
import HeartbeatConfession from '@/components/HeartbeatConfession';
import WhenLifeFeelsHeavy from '@/components/WhenLifeFeelsHeavy';
import BeforeYouLeave from '@/components/BeforeYouLeave';
import FinalScene from '@/components/FinalScene';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [confessionOpen, setConfessionOpen] = useState(false);

  // Background music setup:
  // - "Phoolon Ka Taaron Ka" plays everywhere across the entire experience
  // - "Aankhon Mein Teri" plays specifically when the special birthday letter is opened
  const currentTrack: TrackName = confessionOpen ? 'aankhon-mein-teri' : 'pholon-ka';

  return (
    <>
      {/* Visual micro-details: dynamic custom cursor, scroll indicator bar */}
      <ClientEffects />

      {/* Intro Overlay & Music Loader */}
      <WelcomeOverlay onEnter={() => setStarted(true)} />
      <BackgroundMusic playMusic={started} currentTrack={currentTrack} />
      <FallingPetals active={started} />

      {/* Header bar */}
      <NetflixNavbar />

      <main className="relative min-h-screen">
        <ParticleBackground />

        {/* Story & Keepsake Sections */}
        <HeroSection />
        <BirthdayTimer />
        <CinematicReels />
        <TodayReminder />
        <JourneySection />
        <TheQuietGrind />
        <VisionaryAction />
        <DestinationGoogle />
        <DreamsWorthChasing />
        <VisionBook />
        <HeartBehindBrilliance />
        <ThingsNeverChange />
        <MemoryGarden />
        <OpenWhenLetters onConfessionOpen={() => setConfessionOpen(true)} />
        <WhenLifeFeelsHeavy />
        <BeforeYouLeave />
        <FinaleSection />
        <FinalScene onInViewChange={() => { }} />
      </main>

      {/* Heartfelt Brotherhood Letter Overlay from Bhaiya Aditya */}
      <HeartbeatConfession
        isOpen={confessionOpen}
        onClose={() => setConfessionOpen(false)}
      />
    </>
  );
}
