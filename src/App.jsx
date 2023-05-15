// import lib
import {lazy,Suspense} from 'react'
// import file
const Navbar = lazy(() => import('./components/Navbar'))
const Layout = lazy(() => import('./components/Layout'))
const LandingPage = lazy(() =>import('./pages/Landing'))
const VisitPlace = lazy(() => import('./pages/VisitPlace'))
const Services = lazy(() => import('./pages/Services')) 
const Team = lazy(() => import('./pages/Team'))
const Testimonie = lazy(() => import('./pages/Testimonie'))
const Contact = lazy(() => import('./pages/Contact'))
const Footer = lazy(() => import('./pages/Footer'))

import './App.css'

function App() {

  return (
    <>
      <Suspense fallback={<div className='text-center mt-20'>Loading...</div>}>
      <Layout>
          <Navbar />
          <LandingPage />
          <VisitPlace />
          <Services />
          <Team />
      </Layout>
      <div className='bg-[#131212]'>
        <Testimonie />
        <Contact />
        <Footer />
      </div>
      </Suspense>
    </>
  )
}

export default App
