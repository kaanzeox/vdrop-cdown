"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60))
        const displayHours = Math.min(totalHours, 99) // Max 99 hours

        setTimeLeft({
          hours: displayHours,
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex justify-center gap-8 md:gap-12">
        <TimeUnit value={timeLeft.hours} label="Saat / Hours" />
        <TimeUnit value={timeLeft.minutes} label="Dakika / Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Saniye / Seconds" />
      </div>

      <div className="text-center space-y-1">
        <p className="text-sm text-gray-400 font-light">Açılma Tarihi</p>
        <p className="text-[#C2F055] font-medium">{formatDate(targetDate)}</p>
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    if (value !== displayValue) {
      setIsChanging(true)

      const timeout = setTimeout(() => {
        setDisplayValue(value)
        setIsChanging(false)
      }, 150)

      return () => clearTimeout(timeout)
    }
  }, [value, displayValue])

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="w-16 h-16 md:w-20 md:h-20 border border-white/20 flex items-center justify-center relative overflow-hidden">
        <span
          className={`text-2xl md:text-3xl font-medium text-[#C2F055] tabular-nums transition-all duration-150 ease-out ${
            isChanging ? "transform -translate-y-2 opacity-0" : "transform translate-y-0 opacity-100"
          }`}
        >
          {displayValue.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-gray-500 font-light text-center leading-tight">{label}</span>
    </div>
  )
}
