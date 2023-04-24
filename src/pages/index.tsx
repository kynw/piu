import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='max-w-[20rem]'>
        <div className='flex justify-between'>
          <h1>类别</h1>
          <a href="">新建类别</a>
        </div>

        <a href="">登录</a>

      </div>
    </div>
  )
}
