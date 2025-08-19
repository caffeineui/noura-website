import React from 'react';
import RevealImage from '@/components/reveal-image';
import AdvancedRevealImage from '@/components/advanced-reveal-image';
import CssRevealImage from '@/components/css-reveal-image';

export default function ImageRevealDemo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Image Reveal Animation Techniques</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">1. Simple GSAP Reveal Animations</h2>
        <p className="mb-6">These animations use our custom useImageReveal hook with GSAP.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Left to Right</h3>
            <RevealImage 
              src="/public/colorful-tech-design.png"
              alt="Left to Right reveal"
              className="h-64 w-full"
              direction="leftToRight"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Right to Left</h3>
            <RevealImage 
              src="/public/modern-web-design.png" 
              alt="Right to Left reveal"
              className="h-64 w-full"
              direction="rightToLeft"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Top to Bottom</h3>
            <RevealImage 
              src="/public/branding-project.png" 
              alt="Top to Bottom reveal"
              className="h-64 w-full"
              direction="topToBottom"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">2. Advanced GSAP Effects</h2>
        <p className="mb-6">These use the AdvancedRevealImage component with multiple animation types.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Clip Reveal</h3>
            <AdvancedRevealImage 
              src="/public/creative-design-portfolio.png" 
              alt="Clip Reveal"
              className="h-64 w-full"
              effect="clip"
              direction="leftToRight"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Mask Reveal</h3>
            <AdvancedRevealImage 
              src="/public/branding-brain-food.png" 
              alt="Mask Reveal"
              className="h-64 w-full"
              effect="mask"
              direction="center"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Overlay Reveal</h3>
            <AdvancedRevealImage 
              src="/public/presentation-hall.png" 
              alt="Overlay Reveal"
              className="h-64 w-full"
              effect="overlay"
              direction="leftToRight"
              overlayColor="#1a1a1a"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Scale Reveal</h3>
            <AdvancedRevealImage 
              src="/public/sustainable-phone-outdoor.png" 
              alt="Scale Reveal"
              className="h-64 w-full"
              effect="scale"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Fade Reveal</h3>
            <AdvancedRevealImage 
              src="/public/woman-running-gear.png" 
              alt="Fade Reveal"
              className="h-64 w-full"
              effect="fade"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">3. CSS-Only Animations</h2>
        <p className="mb-6">These animations use pure CSS with Intersection Observer.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">CSS Left to Right</h3>
            <CssRevealImage 
              src="/public/knitwear-couple.png" 
              alt="CSS Left to Right"
              className="h-64 w-full"
              effect="left-to-right"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">CSS Circle</h3>
            <CssRevealImage 
              src="/public/knitwear-duo.png" 
              alt="CSS Circle Reveal"
              className="h-64 w-full"
              effect="circle"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">CSS Overlay</h3>
            <CssRevealImage 
              src="/public/motion-blur-runner.png" 
              alt="CSS Overlay Reveal"
              className="h-64 w-full"
              effect="overlay"
            />
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Implementation Guide</h2>
        <div className="prose max-w-none">
          <h3>Key Animation Techniques</h3>
          <ol>
            <li><strong>Clip Path Reveal:</strong> Uses CSS clip-path or GSAP's clipPath to gradually reveal the image.</li>
            <li><strong>Mask Reveal:</strong> Uses CSS masks to create custom reveal patterns.</li>
            <li><strong>Overlay Reveal:</strong> A colored overlay slides over the image to reveal it.</li>
            <li><strong>Scale Reveal:</strong> Image scales from larger size to normal while fading in.</li>
            <li><strong>Fade Reveal:</strong> Simple opacity animation to fade in the image.</li>
          </ol>
          
          <h3>Technologies Used</h3>
          <ul>
            <li><strong>GSAP:</strong> For smooth, cross-browser animations with ScrollTrigger.</li>
            <li><strong>CSS Animations:</strong> For simpler, performance-optimized animations.</li>
            <li><strong>Intersection Observer:</strong> For triggering animations when elements come into view.</li>
          </ul>
          
          <h3>Browser Compatibility</h3>
          <p>
            These techniques work in all modern browsers, with the following considerations:
          </p>
          <ul>
            <li>Use both <code>clip-path</code> and <code>-webkit-clip-path</code> for Safari support</li>
            <li>For CSS masks, include both <code>mask</code> and <code>-webkit-mask</code> properties</li>
            <li>For older browsers, include a fallback (like a simple fade) using feature detection</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
