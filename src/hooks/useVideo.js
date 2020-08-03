import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default (
  videos,
  index,
  cachedVideos,
  handleSetCachedVideos,
  setIsLoading,
) => {
  const handleDownload = () => {
    setIsLoading(true);
    RNFetchBlob.config({
      path:
        RNFetchBlob.fs.dirs.DocumentDir + `/${videos[index].id.videoId}.mp4`,
      fileCache: true,
    })
      .fetch(
        'GET',
        `https://ytdownloadrapp.herokuapp.com/download?URL=https://www.youtube.com/watch?v=${videos[index].id.videoId}`,
      )
      .then((res) => {
        setIsLoading(false);
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
