import React, { JSX, SVGProps } from "react"

export default function Equipandtech() {
  return (
    <section className="w-full py-8 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="archivo-black text-persianGreen text-3xl font-bold tracking-tighter sm:text-5xl">Our Equipment and Technology</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We utilize the latest equipment and technology to deliver high-quality construction projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <MapIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Surveying</h3>
              <p className="text-muted-foreground">
                Our advanced surveying equipment ensures accurate site measurements and planning.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <ConstructionIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Construction</h3>
              <p className="text-muted-foreground">
                Our construction equipment is designed for efficient and safe project execution.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <ComputerIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Software</h3>
              <p className="text-muted-foreground">
                We utilize advanced software for project design, planning, and management.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <SignalIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Safety</h3>
              <p className="text-muted-foreground">
                Our safety equipment and protocols ensure the well-being of our workers and the public.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <TestTubesIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Testing & Inspection</h3>
              <p className="text-muted-foreground">
                Our advanced testing and inspection equipment guarantees the quality of our work.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <EarthIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Environmental Monitoring</h3>
              <p className="text-muted-foreground">
                Our environmental monitoring systems ensure we operate in an eco-friendly manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ComputerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function ConstructionIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  )
}


function EarthIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function MapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function SignalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function TestTubesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2" />
      <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2" />
      <path d="M3 2h7" />
      <path d="M14 2h7" />
      <path d="M9 16H4" />
      <path d="M20 16h-5" />
    </svg>
  )
}