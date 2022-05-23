import React from 'react'
import SectionBody from './SectionBody'
import SectionHeader from './SectionHeader'

function Section(props) {
  return (
    <section>
      <SectionHeader title={props.title}></SectionHeader>
      <SectionBody>{ props.children }</SectionBody>
    </section>
  )
}

export default Section