"use client"

import { useEffect, useState } from "react"

export function Animated3DPrinter() {
  const [printProgress, setPrintProgress] = useState(0)
  const [headPosition, setHeadPosition] = useState(0)

  useEffect(() => {
    // Animate the print head moving back and forth
    const headInterval = setInterval(() => {
      setHeadPosition((prev) => {
        const newPos = prev + 2
        return newPos > 100 ? 0 : newPos
      })
    }, 50)

    // Animate the print progress (layers building up)
    const progressInterval = setInterval(() => {
      setPrintProgress((prev) => {
        const newProgress = prev + 0.5
        return newProgress > 100 ? 0 : newProgress
      })
    }, 150)

    return () => {
      clearInterval(headInterval)
      clearInterval(progressInterval)
    }
  }, [])

  // Calculate head X position with back-and-forth motion
  const headX = headPosition <= 50 ? headPosition * 2 : (100 - headPosition) * 2

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {/* Printer Frame */}
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Background glow */}
        <defs>
          <linearGradient id="printerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.2 255)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.65 0.15 220)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="filamentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.7 0.2 255)" />
            <stop offset="100%" stopColor="oklch(0.55 0.2 255)" />
          </linearGradient>
        </defs>

        {/* Outer frame */}
        <rect
          x="30"
          y="30"
          width="240"
          height="240"
          rx="8"
          fill="none"
          stroke="oklch(0.4 0.05 250)"
          strokeWidth="4"
        />

        {/* Inner frame / build area */}
        <rect
          x="50"
          y="50"
          width="200"
          height="200"
          rx="4"
          fill="url(#printerGlow)"
          stroke="oklch(0.5 0.1 250)"
          strokeWidth="2"
        />

        {/* Build plate */}
        <rect
          x="60"
          y="220"
          width="180"
          height="20"
          rx="2"
          fill="oklch(0.25 0.02 250)"
          stroke="oklch(0.4 0.05 250)"
          strokeWidth="1"
        />

        {/* Grid lines on build plate */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`vline-${i}`}
            x1={60 + i * 36}
            y1="220"
            x2={60 + i * 36}
            y2="240"
            stroke="oklch(0.35 0.03 250)"
            strokeWidth="0.5"
          />
        ))}

        {/* Printed object (growing based on progress) */}
        <rect
          x="100"
          y={220 - (printProgress / 100) * 100}
          width="100"
          height={(printProgress / 100) * 100}
          rx="2"
          fill="url(#filamentGradient)"
          className="transition-all duration-100"
          filter="url(#glow)"
        />

        {/* Layer lines on printed object */}
        {Array.from({ length: Math.floor(printProgress / 5) }).map((_, i) => (
          <line
            key={`layer-${i}`}
            x1="100"
            y1={220 - i * 5}
            x2="200"
            y2={220 - i * 5}
            stroke="oklch(0.45 0.15 255)"
            strokeWidth="0.5"
            opacity="0.5"
          />
        ))}

        {/* Z-axis rails */}
        <rect x="45" y="50" width="6" height="180" rx="1" fill="oklch(0.35 0.03 250)" />
        <rect x="249" y="50" width="6" height="180" rx="1" fill="oklch(0.35 0.03 250)" />

        {/* X-axis gantry (moves up as print progresses) */}
        <g transform={`translate(0, ${-printProgress})`}>
          <rect
            x="48"
            y="200"
            width="204"
            height="8"
            rx="2"
            fill="oklch(0.4 0.05 250)"
            stroke="oklch(0.5 0.08 250)"
            strokeWidth="1"
          />

          {/* Print head */}
          <g transform={`translate(${60 + headX * 1.6}, 185)`}>
            {/* Head body */}
            <rect
              x="0"
              y="0"
              width="20"
              height="25"
              rx="2"
              fill="oklch(0.5 0.1 250)"
              stroke="oklch(0.6 0.12 255)"
              strokeWidth="1"
            />
            
            {/* Nozzle */}
            <polygon
              points="8,25 12,25 11,32 9,32"
              fill="oklch(0.6 0.15 255)"
            />
            
            {/* Heat indicator (glowing) */}
            <circle
              cx="10"
              cy="30"
              r="3"
              fill="oklch(0.7 0.25 30)"
              filter="url(#glow)"
              className="animate-pulse"
            />

            {/* Filament extrusion line */}
            <line
              x1="10"
              y1="32"
              x2="10"
              y2={32 + (220 - 185 - (printProgress))}
              stroke="url(#filamentGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
          </g>
        </g>

        {/* Spool holder */}
        <rect x="255" y="40" width="15" height="60" rx="2" fill="oklch(0.3 0.03 250)" />
        
        {/* Filament spool */}
        <circle
          cx="262"
          cy="70"
          r="20"
          fill="none"
          stroke="oklch(0.55 0.2 255)"
          strokeWidth="8"
        />
        <circle cx="262" cy="70" r="8" fill="oklch(0.3 0.03 250)" />

        {/* Filament from spool to head */}
        <path
          d={`M 262 50 Q 200 30, ${130 + headX * 1.6} ${90 - printProgress}`}
          fill="none"
          stroke="oklch(0.55 0.2 255)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Control panel */}
        <rect x="30" y="260" width="60" height="20" rx="2" fill="oklch(0.25 0.02 250)" />
        <circle cx="45" cy="270" r="4" fill="oklch(0.6 0.2 140)" className="animate-pulse" />
        <rect x="55" y="266" width="25" height="8" rx="1" fill="oklch(0.4 0.15 220)" />

        {/* Status text */}
        <text x="150" y="285" textAnchor="middle" fill="oklch(0.7 0.1 255)" fontSize="10" fontFamily="monospace">
          PRINTING: {Math.round(printProgress)}%
        </text>
      </svg>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-br from-primary to-accent rounded-full scale-75" />
    </div>
  )
}
