import React from 'react'

const posts = [
  {
    title: "How I Started Coding",
    date: "2025-07-01",
    summary: "A short story about my journey into programming and what inspired me.",
    link: "/blog/how-i-started-coding"
  },
  {
    title: "React Tips & Tricks",
    date: "2025-06-20",
    summary: "Useful advice for building scalable React apps with modern best practices.",
    link: "/blog/react-tips"
  },
  {
    title: "Understanding Next.js Routing",
    date: "2025-06-10",
    summary: "A beginner-friendly guide to routing in Next.js and how to use dynamic routes.",
    link: "/blog/nextjs-routing"
  }
];

const Page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center py-10 px-4 '>
      <h1 className='font-bold text-6xl mb-8 text-blue-700'>Yahyobek's Blog</h1>
      <div className='max-w-2xl w-full space-y-8'>
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.link}
            className='block p-6 bg-white rounded-xl shadow hover:shadow-lg transition group'
          >
            <h2 className='text-2xl font-semibold text-gray-900 group-hover:text-blue-600'>{post.title}</h2>
            <p className='text-sm text-gray-500 mb-2'>{post.date}</p>
            <p className='text-gray-700'>{post.summary}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Page