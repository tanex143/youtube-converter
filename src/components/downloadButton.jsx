const DownloadButton = ({ ytID, type }) => {
  return (
    <div className='pt-8'>
      {type === 'mp3' ? (
        <h1 className='text-lg text-center pb-2 font-bold'>
          Choose to download MP3
        </h1>
      ) : (
        <h1 className='text-lg text-center pb-2 font-bold'>
          Choose to download MP4
        </h1>
      )}

      {/* ///////Built-in iframe code from yt-download.org and to make dynamic //////////// */}
      <iframe
        title={type}
        className='border-none text-white rounded shadow-lg'
        src={`https://www.yt-download.org/api/button/${type}/${ytID}`}
        width='100%'
        height='210px'
        scrolling='no'
      ></iframe>
    </div>
  );
};

export default DownloadButton;
