import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default (
  videos,
  index,
  cachedVideos,
  handleSetCachedVideos,
  setIsLoading,
) => {
  const handleDownload = async () => {
    // const reg = new RegExp(/(?<=Application\/).*(?=\/Documents)/); ios does not support lookaheads and lookbehinds (not sure of android)
    const reg = new RegExp(/Application\/.*\/Documents/);
    const newPath = RNFetchBlob.fs.dirs.DocumentDir.replace(
      reg,
      'Application/myVideos/Documents',
    );
    setIsLoading(true);
    await RNFetchBlob.config({
      path: newPath + `/${videos[index].id}.mp4`,
      fileCache: true,
    })
      .fetch(
        'GET',
        `https://ytdownloadrapp.herokuapp.com/download?URL=https://www.youtube.com/watch?v=${videos[index].id}`,
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
