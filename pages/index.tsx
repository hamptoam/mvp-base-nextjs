import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-red-900 via-white-500 to-black">
      <Head>
        <title>Basic Site</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
  <div className="p-6 bg-white">
	<p className="text-center">
	  <svg className="inline text-green-400 w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12,18c2.28,0,4.22-1.66,5-4H7C7.78,16.34,9.72,18,12,18z"/><path d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M12,20 c-4.42,0-8-3.58-8-8c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"/></g></g></svg>
	</p>

	<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
	  Your Feature Here
	</h2>

	<p className="mt-2 text-gray-800 text-center">
	  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias nesciunt tempore.
	</p>
  </div>
  <div className="p-6 bg-white">
	<p className="text-center">
	  <svg className="inline text-blue-400 w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
	</p>

	<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
	  Your Feature Here
	</h2>

	<p className="mt-2 text-gray-800 text-center">
	  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias nesciunt tempore.
	</p>
  </div>
  <div className="p-6 bg-white">
	<p className="text-center">
	  <svg className="inline text-indigo-400 w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
	</p>

	<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
	  Your Feature Here
	</h2>

	<p className="mt-2 text-gray-800 text-center">
	  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias nesciunt tempore.
	</p>
  </div>
  <div className="p-6 bg-white">
	<p className="text-center">
	  <svg className="inline text-red-400 w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 2.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/></svg>
	</p>

	<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
	  Your Feature Here
	</h2>

	<p className="mt-2 text-gray-800 text-center">
	  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias nesciunt tempore.
	</p>
  </div>
</div>
      </main>

      <footer className="flex flex-wrap text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
       
      </footer>
    </div>
  )
}
