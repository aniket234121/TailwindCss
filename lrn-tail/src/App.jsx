import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
const App = () => {
  return (
    <main className='relative'>
      <Nav></Nav>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero></Hero>
      </section>
      {/* <section className='padding'>
      popular products
      </section>
      <section className='padding'>
      Super quality
      </section>
      <section className='padding-x py-10'>
      services
      </section>
      <section className='padding'>
      special offer
      </section>
      <section className='padding bg-pale-blue'>
      customer reviews
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
      subscribe
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
      Footer
      </section> */}
    </main>
  )
}

export default App