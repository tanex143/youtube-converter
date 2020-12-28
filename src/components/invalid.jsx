import YtGIF from './ytGIF';

const Invalid = () => {
  return (
    <>
      <div className='pt-5 text-2xl text-red-500 italic text-center'>
        Invalid youtube URL. Please try again.
      </div>
      <YtGIF />
    </>
  );
};

export default Invalid;
