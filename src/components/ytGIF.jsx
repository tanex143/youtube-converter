import gif from '../images/gif.gif';

const YtGIF = () => {
  return (
    <div className='py-8 text-center'>
      <p className='pb-1 text-xl font-semibold'>
        Paste the youtube URL to get started
      </p>
      <img src={gif} alt='gif' className='mx-auto rounded shadow-xl' />
      <p className='pt-1 text-xl font-semibold'>Copy youtube URL like this.</p>
    </div>
  );
};

export default YtGIF;
