import React from "react"
import { BsArrowUpRight } from "react-icons/bs"
import skills from "../skills.json"

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What are my skills!</h2>
            <h3 className="h3 max-w-[455px] mb-16">I'm a Developer with over 6 years of experience</h3>
            <button className="btn btn-sm ">See my work</button>
          </div>

          {/* skills */}
          <div className="flex-1">
            <div>
              {skills.map((skill, index) => {
                const { name, description, link } = skill
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="min-w-[476px]">
                      <h4 className="text-[20px] tracking-wide font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient">
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
