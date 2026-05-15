'use client'
import { useEffect, useRef } from 'react'
import ProfileCard from './ProfileCard'

function Snow() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const flakes = []
    for (let i = 0; i < 60; i++) {
      const flake = document.createElement('div')
      const size = Math.random() * 4 + 2
      const left = Math.random() * 100
      const duration = Math.random() * 8 + 6
      const delay = Math.random() * 10
      const opacity = Math.random() * 0.5 + 0.2

      flake.style.cssText = `
        position: absolute;
        left: ${left}%;
        top: -10px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255,255,255,${opacity});
        animation: fall ${duration}s ${delay}s linear infinite;
      `
      container.appendChild(flake)
      flakes.push(flake)
    }

    return () => flakes.forEach(f => f.remove())
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  )
}

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fall {
          0%   { transform: translateY(-10px) translateX(0px); }
          50%  { transform: translateY(50vh) translateX(15px); }
          100% { transform: translateY(105vh) translateX(-5px); }
        }
      `}</style>
      <Snow />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <ProfileCard />
      </div>
    </>
  )
}
