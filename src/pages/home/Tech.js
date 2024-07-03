import React from 'react'
import { DiAngularSimple, DiAppstore, DiCss3Full, DiHtml5, DiJava, DiJavascript, DiReact, DiTravis } from "react-icons/di";

const Tech = () => {
  return (
    <div className='space-y-12'>
      <h1 className='text-3xl font-semibold text-center'>Technologies I use</h1>

      <div className="dev-icons grid grid-cols-4 justify-items-center gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DiJava size={200} className='animate-pulse'/>
        <DiHtml5 size={200} className='hover:scale-125 hover:text-red-700 transition-all '/>
        <DiCss3Full size={200} />
        <DiJavascript className='hover:text-green-100'  size={200} />
        <DiAngularSimple size={200} className='hover:scale-110 hover:text-pink-700 transition-all ' />
        <DiTravis size={200} className='hover:translate-x-1'/>
        <DiAppstore size={200} className='hover:skew-y-12' />
        <DiReact size={200} className='animate-bounce' />
      </div>

    </div>
  )
}

export default Tech