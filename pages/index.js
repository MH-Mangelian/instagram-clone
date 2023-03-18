import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>instagram</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <main className=''>
        <div className='text-9xl text-red-600'>Hello instagram</div>
      </main>
    </div>
  )
}
