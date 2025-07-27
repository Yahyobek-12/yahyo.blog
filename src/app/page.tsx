import Image from 'next/image'
import logo from '@/assets/images/itachi.jpg'

const Page = () => {
  return (
    <div className="w-full h-screen py-4 px-4 relative">
      <div className='absolute bottom-[5rem] left-[5rem]'>
        <div className='image-box w-[300px] h-[300px] border-[3px] rounded-full mb-[1.5rem] overflow-hidden'>
          <Image src={logo} alt="Itachi Uchiha" className='object-cover' />
        </div>
        <h1 className='font-bold text-8xl'>Yahyobek</h1>
        <h1 className='font-bold text-9xl'>Ergashboyev</h1>
      </div>
    </div>
  )
}

export default Page
