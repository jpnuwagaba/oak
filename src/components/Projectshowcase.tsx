import React from 'react'
import Link from 'next/link'

const Projectshowcase = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-cultured">
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[4fr_6fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-davysGrey sm:text-4xl md:text-5xl archivo-black">Featured Projects</h2>
          <p className="max-w-[400px] text-davysGrey md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of our latest and greatest projects for our clients.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-carrotOrange px-8 text-sm font-medium text-white shadow transition-colors hover:bg-mellowApricot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapisLazuli disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href={''} className="md:col-span-2 relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            
            <img src="/assets/hero-img.jpg" alt="Project 1" width={400} height={300} className="object-cover w-full h-64" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-davysGrey">Project 1</h3>
              <p className="text-sm text-davysGrey">A brief description of the project.</p>
            </div>
          </Link>
          <Link href={''} className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            
            <img src="/assets/hero-img.jpg" alt="Project 2" width={400} height={300} className="object-cover w-full h-64" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-davysGrey">Project 2</h3>
              <p className="text-sm text-davysGrey">A brief description of the project.</p>
            </div>
          </Link>
          <Link href={''} className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            
            <img src="/assets/hero-img.jpg" alt="Project 3" width={400} height={300} className="object-cover w-full h-64" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-davysGrey">Project 3</h3>
              <p className="text-sm text-davysGrey">A brief description of the project.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projectshowcase
