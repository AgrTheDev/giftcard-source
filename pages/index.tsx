import Head from "next/head"
import Navbar from "../components/navbar"
import Image from "next/image"

export default function Index() {
  return (
    <>
      <Head>
        <html data-theme="forest"></html>
      </Head>
      {/*<Navbar />*/}
      <div className="container mx-auto">
        {/* DESCRIPTION */}
        <div className="hero bg-base-300 py-14 mt-10">
          <div className="hero-content text-left">
            <div className="">
              <h1 className="text-5xl font-bold">Welcome to Giftcard Source!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* CARDS */}
        <div className="md:flex mt-10 space-y-8 md:justify-center md:space-x-8 md:space-y-0 ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src="/apple_banner.png" width={400} height={225} alt="" />
            </figure>
            <div className="card-body bg-base-300">
              <h2 className="card-title">Apple Giftcards!</h2>
              <p>The all-new Apple Gift Card for everything Apple: products, accessories, services and more. Replaces the Apple Store and App Store & iTunes gift cards.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src="/steam_banner.png" width={400} height={225} alt="" />
            </figure>
            <div className="card-body bg-base-300">
              <h2 className="card-title">Steam Giftcards!</h2>
              <p>Steam Gift Cards work just like gift certificates, which can be redeemed on Steam for the purchase of games, software, hardware, and any other item you can purchase on Steam.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src="/googleplay_banner.png" width={400} height={225} alt="" />
            </figure>
            <div className="card-body bg-base-300">
              <h2 className="card-title">Google Play Giftcards!</h2>
              <p>With millions of apps, games and more to discover, there&apos;s something for everyone on Google Play. Use a Google Play gift code to explore a world of endless play, from your go-to games to the apps that you can’t live without.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
