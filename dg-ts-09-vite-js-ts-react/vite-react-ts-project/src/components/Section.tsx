import React, { ReactNode } from 'react'

type SectionProps = {
  title?: string,
  children: ReactNode,
};

const Section = ({children, title = "My subheading"}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>

      <div>{children}</div>
    </section>
  )
}

export default Section

