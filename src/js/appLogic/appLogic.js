const KEY = 'AIzaSyCNTTTFbPIMG9d93MLDIzknuRQ6bq0jZuI';

const checkSearchValues = (query, count) => {
  query = query.replace(/^\s+|\s+$/g, '');
  if (query === '' || parseInt(query) === 'number' || count < 0) {
    count = 0;
  } else if(count > 50) {
    count = 50;
  }
  return [query, count];
};

const selectRequiredData = videosInfo => {
  const requiredData = videosInfo.map(video => {
    const info = {};
    info.url = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    info.title = video.snippet.title;
    info.date = video.snippet.publishedAt.slice(0, 10);
    info.channelTitle = video.snippet.channelTitle;
    info.img = video.snippet.thumbnails.default.url;
    return info;
  });

  return requiredData;
};

export const searchVideos = async (query, count, setInfo) => {
  const [correctQuery, correctCount] = checkSearchValues(query, count);

  if (correctCount) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${correctCount}&type=video&q=${correctQuery}&key=${KEY}`
    );
    const allInfo = await response.json();
    const info = selectRequiredData(allInfo.items);
    setInfo(info);
  } else {
    setInfo([]);
  }
};
