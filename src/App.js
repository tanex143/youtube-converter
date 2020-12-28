import { useState, useEffect } from 'react';
import DownloadButton from './components/downloadButton';
import Footer from './components/footer';
import YtGIF from './components/ytGIF';
import Invalid from './components/invalid';

const App = () => {
  const [ytURL, setYtURL] = useState('');
  const [ytID, setYtID] = useState('');

  useEffect(() => {
    const id = ytURL.replace('https://www.youtube.com/watch?v=', '');
    setYtID(id);
  }, [ytURL]);

  return (
    <>
      <div className='py-14 px-10 shadow-xl text-center text-white bg-gradient-to-tr from-indigo-400 to-blue-500'>
        <h1 className='sm:text-5xl text-3xl'>Youtube Converter</h1>
        <p className='italic p-2'>
          An easiest way and unlimited converting from youtube to mp3 and mp4
          for free.
        </p>
      </div>
      <div className='my-8'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='w-full text-center pb-5'>
            <input
              type='text'
              placeholder='Paste youtube url here. . .'
              className='py-1 w-4/5 border-2 border-black rounded text-lg'
              value={ytURL}
              onChange={(e) => setYtURL(e.target.value)}
            />
          </div>
          {ytURL === '' ? (
            <YtGIF />
          ) : (
            <div>
              {ytURL.startsWith('https://www.youtube.com/watch?v=') ? (
                <div className='flex justify-evenly flex-wrap'>
                  <DownloadButton ytID={ytID} type='mp3' />
                  <DownloadButton ytID={ytID} type='videos' />
                </div>
              ) : (
                <Invalid />
              )}
            </div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default App;
