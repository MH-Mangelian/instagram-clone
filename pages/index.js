import Head from 'next/head'
import Navbar from '@/components/Navbar'




export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>instagram</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}
