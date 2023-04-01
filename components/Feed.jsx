import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import RightMiniProfile from './RightMiniProfile'
import SuggestionProfile from './SuggestionProfile'



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
        <section className='hidden xl:inline-grid md:col-span-1'>
            {/* -----------------Mini Profile---------------------- */}
            <div className='fixed top-20'>
              <RightMiniProfile/>
              <SuggestionProfile/>
            </div>
            {/* -----------------Suggest Lions---------------------- */}

        </section>
        {/* ------------ Section two End------------------ */}

    </main>
  )
}

export default feed