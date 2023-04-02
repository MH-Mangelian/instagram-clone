import Navbar from "@/components/Navbar";
import { getProviders, signIn as signInProvider } from "next-auth/react";
import Head from "next/head";

// ---------------Browser----------------
const signIn = ({ providers }) => {
  return (
    <>
      <Head>
        <title>instagram-signIn</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>

      <Navbar/>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-52 px-12 text-center">
        <img className="w-80" src="/instagram-text-logo.svg" alt="instagram" />
        <p className="text-sm italic font-medium mt-5">This is <span className="font-bold underline">Not a REAL app</span> , it is just built for Training</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="p-3 rounded-lg text-white bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:from-red-500 via-purple-400 to-blue-500 transition-all hover:scale-110 ease-out" onClick={() => signInProvider(provider.id, {callbackUrl:"/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

//-----------------Server----------------
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
