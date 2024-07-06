import React, { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <section className="w-full py-8 lg:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <h2 className="archivo-black text-davysGrey text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col gap-4">
              <div className="bg-persianGreen rounded-md p-3 w-fit">
                <HandIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Great Skills</h3>
              <p className="text-muted-foreground">
                Our team is composed of highly skilled professionals who are dedicated to delivering exceptional
                results.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col gap-4">
              <div className="bg-persianGreen rounded-md p-3 w-fit">
                <WorkflowIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Hard Work</h3>
              <p className="text-muted-foreground">
                We believe in the power of hard work and dedication to achieve our goals.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col gap-4">
              <div className="bg-persianGreen rounded-md p-3 w-fit">
                <ComputerIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Advanced Technology</h3>
              <p className="text-muted-foreground">
                We leverage the latest technologies to deliver innovative solutions and stay ahead of the curve.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col gap-4">
              <div className="bg-persianGreen rounded-md p-3 w-fit">
                <FastForwardIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Speed</h3>
              <p className="text-muted-foreground">
                We believe in the importance of speed and agility to respond quickly to our clients&apos; needs.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col gap-4">
              <div className="bg-persianGreen rounded-md p-3 w-fit">
                <QrCodeIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-muted-foreground">
                We are committed to delivering high-quality work that exceeds our clients&apos; expectations.
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


function FastForwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  )
}


function HandIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
}


function QrCodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}


function WorkflowIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  )
}