import RNFetchBlob from 'rn-fetch-blob';

export default (videos, index, cachedVideos, handleSetCachedVideos) => {
  const handleDownload = () => {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp4',
    })
      .fetch(
        'GET',
        `http://localhost:4000/download?URL=https://www.youtube.com/watch?v=${videos[index].id.videoId}`,
      )
      .then((res) => {
        const newCachedVideos = {
          path: [...cachedVideos.path],
          videoDetails: [...cachedVideos.videoDetails],
        };
        newCachedVideos.path.push(res.path());
        newCachedVideos.videoDetails.push(videos[index]);
        handleSetCachedVideos(newCachedVideos);
      });
  };

  return {handleDownload};
};
