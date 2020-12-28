const App = () => {
  return (
    <div>
      <div className='py-14 px-10 bg-indigo-600 text-center text-white'>
        <h1 className='sm:text-5xl text-4xl'>Youtube Converter</h1>
        <p className='italic p-2'>
          An easiest way and unlimited converting from youtube to mp3 and mp4
          for free.
        </p>
      </div>
      <div className='my-8'>
        <form>
          <div className='w-full text-center pb-5'>
            <input
              type='text'
              placeholder='Paste youtube url here. . .'
              className='py-1 w-4/5 border-2 border-black rounded text-xl'
            />
          </div>

          <div className='flex gap-5 justify-center'>
            <button className='bg-indigo-500 text-white py-2 px-3 rounded'>
              Convert to MP3
            </button>
            <button className='bg-blue-500 text-white py-2 px-3 rounded'>
              Convert to MP4
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
