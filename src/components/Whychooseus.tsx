import React from 'react'

const Whychooseus = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-cultured">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/assets/hero-img.jpg"
            width={600}
            height={400}
            alt="Why Choose Us"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-davysGrey archivo-black">
              Why Choose Us?
            </h2>
            <p className="max-w-[600px] text-davysGrey md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experienced consultants is dedicated to helping businesses like yours achieve their goals.
              With our proven track record and innovative approach, we&apos;re confident we can make a real difference.
            </p>
          </div>
          <ul className="grid gap-2 py-4 text-davysGrey">
            <li className="flex items-center">
              <span className="mr-2 inline-block h-4 w-4 bg-carrotOrange rounded-full"></span>
              Tailored solutions for your unique business needs
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-4 w-4 bg-carrotOrange rounded-full"></span>
              Collaborative approach to drive meaningful change
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-4 w-4 bg-carrotOrange rounded-full"></span>
              Proven track record of success across industries
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-4 w-4 bg-carrotOrange rounded-full"></span>
              Commitment to your long-term growth and success
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Whychooseus
