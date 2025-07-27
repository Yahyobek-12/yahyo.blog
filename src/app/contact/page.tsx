import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
        <p className='text-xl text-center mt-4 mb-4'>Feel free to reach out via email at <Link href="mailto:yahyo.blog@gmail.com" className='text-blue-600'>yahyo.blog@gmail.com</Link> or connect with me on social media.</p>
        <Link href="/" className='text-blue-600 underline'>Go back home</Link>
      </div>
    </div>
  )
}

export default Contact