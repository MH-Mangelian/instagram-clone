import React from 'react'
import Stories from './Stories'
import Posts from './Posts'



const feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        {/* ------------ Section one------------------ */}
        <section className='col-span-2'>
            {/* -----------------Stories---------------------- */}
            <Stories/>
            
            {/* -----------------Posts---------------------- */}
            <Posts/>


        </section>
        {/* ------------ Section one End------------------ */}

        {/* ------------ Section two------------------ */}
        <section>
            {/* -----------------Mini Profile---------------------- */}

            {/* -----------------Suggest Lions---------------------- */}

        </section>
        {/* ------------ Section two End------------------ */}

    </main>
  )
}

export default feed