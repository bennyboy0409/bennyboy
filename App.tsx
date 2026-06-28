import React from 'react';
import { SectionHeader } from './components/SectionHeader';
import { SpotlightReveal } from './components/tiles/SpotlightReveal';
import { RevealGlass } from './components/tiles/RevealGlass';
import { MagneticGrid } from './components/tiles/MagneticGrid';
import { ScanLines } from './components/tiles/ScanLines';
import { StandardTile } from './components/tiles/StandardTile';
import { UnderlineHoverText } from './components/tiles/UnderlineHoverText';
import { SkewHoverImage } from './components/tiles/SkewHoverImage';
import { TextTrailEffect } from './components/tiles/TextTrailEffect';
import { BorderGlowEffect } from './components/tiles/BorderGlowEffect';
import { ImageZoomRipple } from './components/tiles/ImageZoomRipple';
import { DistortedLinkHover } from './components/tiles/DistortedLinkHover';
import { FollowCursorBlur } from './components/tiles/FollowCursorBlur';
import { CircularReveal } from './components/tiles/CircularReveal';
import { MagneticFollowButton } from './components/tiles/MagneticFollowButton';
import { RippleClickEffect } from './components/tiles/RippleClickEffect';
import { GlareHoverEffect } from './components/tiles/GlareHoverEffect';
import { InteractiveGridMorph } from './components/tiles/InteractiveGridMorph';
import { ParallaxTextReveal } from './components/tiles/ParallaxTextReveal';
import { BlobCursorFollow } from './components/tiles/BlobCursorFollow';
import { CopyToClipboard } from './components/tiles/CopyToClipboard';
import { CharacterShuffleHover } from './components/tiles/CharacterShuffleHover';
import { Card3DTilt } from './components/tiles/Card3DTilt';
import { GradientFollow } from './components/tiles/GradientFollow';
import { ImageDissolveEffect } from './components/tiles/ImageDissolveEffect';
import { TextScrambleEffect } from './components/tiles/TextScrambleEffect';
import { BackgroundParticleSwarm } from './components/tiles/BackgroundParticleSwarm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-vantage-bg text-vantage-text selection:bg-vantage-gold selection:text-black">
      
      {/* Navigation - Cleaned up: Only Logo */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="text-sm tracking-[0.2em] font-bold uppercase text-white pointer-events-auto cursor-pointer">
          Vantage Studio
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-6 md:px-12 lg:px-24 pb-24 max-w-[1800px] mx-auto">
        
        {/* SECTION 1: INTERACTIVE UX */}
        <section className="mb-40">
          <SectionHeader title="Core Capability 01: Interactive UX" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightReveal 
              index={0}
              client="Apex Design Group"
              category="Commerce System"
              title="Flagship Storefront"
              description="High-conversion product grid with cinematic hover states and a motion-driven checkout journey."
              stats="Conversion Rate ↑ 32%"
              footer="Apex / Retail"
            />
            <StandardTile 
              index={1}
              title="Showcase Reel"
              category="Brand"
              description="Refractive liquid glass typography that distorts background noise based on real-time cursor proximity."
            />
             <MagneticGrid 
              index={2}
              client="Noir Collective"
              category="Commerce Experience"
              title="Weighted Grid Layout"
              description="Product cards magnetically respond to cursor position, emphasizing featured collections with a physics-based pull."
              footer="Cursor-weighted layout engine"
            />
            <ScanLines 
              index={3}
              client="Velocity Labs"
              category="Realtime Metrics"
              title="System Monitor"
              description="Diagnostic interface utilizing coordinate-driven crosshairs to scan and pinpoint active data nodes."
              stats="Live sessions: 1,294"
              footer="Uptime 99.98%"
            />
          </div>
        </section>

        <div className="w-full h-px bg-white/5 mb-32 relative"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-vantage-bg px-4 text-vantage-gold/20 text-[10px] tracking-widest">///</div></div>

        {/* SECTION 2: GSAP & MOTION */}
        <section className="mb-32">
          <SectionHeader title="Core Capability 02: GSAP & Performance Motion" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UnderlineHoverText 
                index={0} 
                title="Kinetic Typography" 
                category="Typography" 
                footer="View Style Guide"
                description="Staggered timeline animation for typography underlining, creating a sense of accelerated motion."
            />
             <SkewHoverImage 
                index={1} 
                title="Spatial Depth" 
                category="Perspective"
                description="Perspective-distorted viewport that reacts to hover state with 3D planar shifts and chromatic sheen."
             />
             <TextTrailEffect 
                index={2} 
                title="Motion Trail" 
                category="Interaction"
                description="Cursor-following typographic echo effect simulating high-speed motion blur trails."
             />
             <BorderGlowEffect 
                index={3} 
                title="Smart Lighting" 
                category="Rendering"
                description="Radial gradient masking creates a localized illumination field along the component boundary."
             />
          </div>
        </section>

         <div className="w-full h-px bg-white/5 mb-32 relative"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-vantage-bg px-4 text-vantage-gold/20 text-[10px] tracking-widest">///</div></div>

        {/* SECTION 3: ARCHITECTURE */}
        <section className="mb-32">
          <SectionHeader title="Core Capability 03: Architectural Design Systems" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageZoomRipple 
              index={0} 
              title="Image Zoom Ripple" 
              category="Texture" 
              description="Reveals high-fidelity details through a fluid, cursor-driven magnification lens."
            />
            <DistortedLinkHover 
              index={1} 
              title="Text Glitch Interaction" 
              category="Feedback"
              description="Algorithmic character displacement creates a digital interference effect on hover."
            />
            <FollowCursorBlur 
              index={2} 
              title="Focus Follows Cursor" 
              category="Attention"
              description="Selective clarity mask that dynamically follows user attention, blurring the periphery."
            />
            <CircularReveal 
              index={3} 
              title="Circular Spotlight" 
              category="Discovery"
              description="A masked aperture revealing architectural layers hidden beneath the dark surface."
            />
          </div>
        </section>

        <div className="w-full h-px bg-white/5 mb-32 relative"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-vantage-bg px-4 text-vantage-gold/20 text-[10px] tracking-widest">///</div></div>

        {/* SECTION 4: MICRO-INTERACTIONS */}
        <section className="mb-32">
          <SectionHeader title="Core Capability 04: Micro-Interactions & Feedback" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <MagneticFollowButton 
                index={0} 
                title="Magnetic Interaction" 
                category="Physics" 
                description="Elements resist and attract based on proximity, creating a tactile elastic feel."
             />
             <RippleClickEffect 
                index={1} 
                title="Dynamic Click Feedback" 
                category="Event" 
                description="Visualizes user input coordinates with expanding, fading kinetic energy rings."
             />
             <GlareHoverEffect 
                index={2} 
                title="Reflective Surface Glare" 
                category="Material" 
                description="Simulates a light source moving across a glass surface relative to cursor position."
             />
             <InteractiveGridMorph 
                index={3} 
                title="Dynamic Grid Morph" 
                category="Structure" 
                description="Grid structure deforms organically as the cursor displaces structural nodes."
             />
             <ParallaxTextReveal 
                index={4} 
                title="Depth Text Interaction" 
                category="Layering" 
                description="Multi-plane z-axis translation creates depth perception during interaction."
             />
             <BlobCursorFollow
                index={5}
                title="Organic Blob Cursor"
                category="Fluidity"
                description="Liquid cursor element that trails movement with calculated physics drag."
             />
             <CopyToClipboard
                index={6}
                title="Copy To Clipboard"
                category="Utility"
                description="One-click snippet copy with an animated checkmark morph and confirmation toast."
             />
          </div>
        </section>

        <div className="w-full h-px bg-white/5 mb-32 relative"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-vantage-bg px-4 text-vantage-gold/20 text-[10px] tracking-widest">///</div></div>

        {/* SECTION 5: KINETIC SURFACES */}
        <section>
          <SectionHeader title="Core Capability 05: Kinetic Surfaces & Particles" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <CharacterShuffleHover 
                index={0} 
                title="Dynamic Text Shuffle" 
                category="Typography" 
                description="Rapid character cycling creates a cryptographic decoding effect on activation."
             />
             <Card3DTilt 
                index={1} 
                title="Interactive 3D Card" 
                category="Spatial" 
                description="Perspective transformation calculated from cursor delta simulates physical tilt."
             />
             <GradientFollow 
                index={2} 
                title="Gradient Cursor Trail" 
                category="Color" 
                description="Radial gradient illumination that tracks input for dynamic lighting effects."
             />
             <ImageDissolveEffect 
                index={3} 
                title="Image Dissolve Interaction" 
                category="Effect" 
                description="SVG displacement map driven by fractal noise creates a liquid disintegration."
             />
             <TextScrambleEffect 
                index={4} 
                title="Dynamic Text Scramble" 
                category="Data" 
                description="Simulates real-time data decryption with random character injection."
             />
             <BackgroundParticleSwarm 
                index={5} 
                title="Interactive Particle Field" 
                category="Simulation" 
                description="Autonomous particle system that reacts to cursor repelling forces."
             />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center">
        <p className="text-white/20 text-xs tracking-[0.3em] uppercase">
          Vantage Studio © 2025 — Defining Digital Space
        </p>
      </footer>
    </div>
  );
};

export default App;