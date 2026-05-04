import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Metrics Snapshot — Weekly Investor-Ready Dashboard',
  description: 'Automated weekly metrics snapshots in investor-friendly format. Connect Stripe, Google Analytics, and more. Built for early-stage founders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="986f67d8-f75a-4d96-9084-ca492f5c2427"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
