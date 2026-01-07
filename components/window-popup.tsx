"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface WindowPopupProps {
  title: string
  children: React.ReactNode
  initialX?: number
  initialY?: number
  onClose: () => void
}

export function WindowPopup({ title, children, initialX = 200, initialY = 150, onClose }: WindowPopupProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  return (
    <div
      ref={windowRef}
      className="window-98 bg-[#C0C0C0] absolute z-50 min-w-[400px] max-w-2xl"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Title Bar */}
      <div className="window-title-bar cursor-move" onMouseDown={handleMouseDown}>
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-sm">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-[#C0C0C0] border border-white flex items-center justify-center text-xs font-bold hover:bg-[#DFDFDF]">
            _
          </button>
          <button className="w-5 h-5 bg-[#C0C0C0] border border-white flex items-center justify-center text-xs font-bold hover:bg-[#DFDFDF]">
            □
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 bg-[#C0C0C0] border border-white flex items-center justify-center text-xs font-bold hover:bg-[#DFDFDF]"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-[#C0C0C0]">{children}</div>
    </div>
  )
}
