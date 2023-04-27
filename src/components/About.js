import React from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          <div className="flex-1">
            <h2 className="h2 text-gradient">About Me.</h2>
            <h3 className="h3 mb-4">I'm a Developer with over 6 years of experience</h3>
            <p className="mb-6">
              Nulla ipsum nostrud cupidatat sint cillum ipsum incididunt deserunt ut non. Elit non culpa adipisicing
              excepteur laborum voluptate tempor dolore minim. Veniam magna fugiat non veniam. Fugiat aute sit Lorem
              laborum ea laboris et ut eiusmod minim Lorem nostrud id. Tempor ut reprehenderit dolore tempor non enim.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Years of experience</div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Projects completed</div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
