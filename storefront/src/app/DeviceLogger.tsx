"use client"

import { useEffect } from "react"

function generateFingerprint(data: Record<string, unknown>): string {
  const str = JSON.stringify(data)
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return Math.abs(hash).toString(16).padStart(8, "0")
}

export default function DeviceLogger() {
  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number
      connection?: { effectiveType?: string; downlink?: number }
      hardwareConcurrency?: number
    }

    const deviceData = {
      userAgent: nav.userAgent,
      language: nav.language,
      languages: nav.languages,
      platform: nav.platform,
      hardwareConcurrency: nav.hardwareConcurrency,
      deviceMemory: nav.deviceMemory,
      screenWidth: screen.width,
      screenHeight: screen.height,
      colorDepth: screen.colorDepth,
      pixelRatio: window.devicePixelRatio,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timezoneOffset: new Date().getTimezoneOffset(),
      cookiesEnabled: nav.cookieEnabled,
      doNotTrack: nav.doNotTrack,
      connection: nav.connection
        ? {
            effectiveType: nav.connection.effectiveType,
            downlink: nav.connection.downlink,
          }
        : null,
      touchPoints: nav.maxTouchPoints,
      referrer: document.referrer || "direct",
      url: window.location.href,
      visitTime: new Date().toISOString(),
    }

    const fingerprint = generateFingerprint({
      userAgent: deviceData.userAgent,
      screenWidth: deviceData.screenWidth,
      screenHeight: deviceData.screenHeight,
      colorDepth: deviceData.colorDepth,
      pixelRatio: deviceData.pixelRatio,
      timezone: deviceData.timezone,
      hardwareConcurrency: deviceData.hardwareConcurrency,
      deviceMemory: deviceData.deviceMemory,
    })

    console.group("%c Device Identity", "color: #6366f1; font-weight: bold; font-size: 14px")
    console.log("%cFingerprint ID:", "color: #10b981; font-weight: bold", fingerprint)
    console.log("%cVisit Time:", "color: #f59e0b", deviceData.visitTime)
    console.log("%cURL:", "color: #3b82f6", deviceData.url)
    console.log("%cReferrer:", "color: #8b5cf6", deviceData.referrer)
    console.groupCollapsed("%c Full Device Data", "color: #64748b")
    console.table({
      "User Agent": deviceData.userAgent,
      Language: deviceData.language,
      Platform: deviceData.platform,
      "CPU Cores": deviceData.hardwareConcurrency,
      "RAM (GB)": deviceData.deviceMemory ?? "N/A",
      "Screen": `${deviceData.screenWidth}x${deviceData.screenHeight}`,
      "Pixel Ratio": deviceData.pixelRatio,
      "Color Depth": deviceData.colorDepth,
      Timezone: deviceData.timezone,
      "Touch Points": deviceData.touchPoints,
      "Cookies Enabled": deviceData.cookiesEnabled,
      "Do Not Track": deviceData.doNotTrack,
    })
    console.groupEnd()
    console.groupEnd()
  }, [])

  return null
}
