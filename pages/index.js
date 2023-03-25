import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Feed from '@/components/feed'



export default function Home() {
  return (
    <div className='bg-black/2 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>instagram</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Navbar/>
      <Feed/>
    </div>
  )
}
