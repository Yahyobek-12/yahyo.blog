import Link from "next/link"

const About = () => {
  return (
    <div>
        <h1>About</h1>      
        <p className='text-xl text-center mt-4'>This is the about page where you can learn more about me and my work.</p>
        <p className='text-xl text-center mt-4'>I am a passionate frontend web developer with a focus on creating beautiful and functional user interfaces.</p>
        <p className='text-xl text-center mt-4'>Feel free to reach out if you have any questions or want to collaborate!</p>
        <p className='text-xl text-center mt-4'>You can contact me via email at <Link href="mailto:ahyoyo@gmail.com" className='text-blue-500'>ahyoyo@gmail.com</Link></p>
        <p className='text-xl text-center mt-4'>Or you can connect with me on social media:</p>
        <ul className='list-disc list-inside text-xl text-center mt-4'>
            <li><Link href="https://twitter.com/ahyoyo" className='text-blue-500'>Twitter</Link></li>
            <li><Link href="https://www.linkedin.com/in/ahyoyo/" className='text-blue-500'>LinkedIn</Link></li>
            <li><Link href="https://github.com/ahyoyo" className='text-blue-500'>GitHub</Link></li>
        </ul>
    </div>
  )
}

export default About