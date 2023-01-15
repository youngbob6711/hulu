import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

const Home: NextPage = () => {
  return (
    <div className=" ">
     

     {/* Header */}

     <Header />

     {/* Nav */}
     <Nav />

     {/* Results */}
     <Results />




    </div>
  )
}

export default Home
