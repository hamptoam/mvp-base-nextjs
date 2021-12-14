import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>Pipe Dreams</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <card className="bg-grey shadow-lg shadow-indigo-500/50 flex flex-col items-center justify-center font-bold py-2 px-4 rounded">
          <h1 className="text-6xl font-bold text-white">
          Welcome to{' '}
          <a className="text-red-600" href="https://nextjs.org">
            Pipe Dreams!
          </a>
        </h1>
       
        <p className="mt-3 text-2xl text-red-500">
          Must be 18 years of age or older to enter
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <button className="bg-grey shadow-lg shadow-indigo-500/50 text-white font-bold py-2 px-4 rounded">Confirm Age</button>
        </div>
        </card>
      </main>

      <footer className="flex flex-wrap text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
       
      </footer>
    </div>
  )
}
