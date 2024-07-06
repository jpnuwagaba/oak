import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="container grid grid-cols-1 gap-8 py-8 md:grid-cols-2 md:py-24">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-davysGrey archivo-black">
            Elevate Your Business with Our Expertise
          </h2>
          <p className="text-davysGrey md:text-xl/relaxed">
            At our consulting firm, we are dedicated to helping businesses like yours reach new heights. Our team of
            experienced professionals provides tailored solutions to unlock your full potential.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-carrotOrange px-8 text-sm font-medium text-white shadow transition-colors hover:bg-mellowApricot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapisLazuli disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get in Touch
        </Link>
      </div>
      <div className="">
        <Image
          src="/assets/hero-img.jpg"
          alt="Consulting Team"
          width={800}
          height={600}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

export default Intro
