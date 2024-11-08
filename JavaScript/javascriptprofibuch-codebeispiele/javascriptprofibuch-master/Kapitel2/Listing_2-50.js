const artists = [
  {
    name: 'Nick Cave',
    albums: [
      {
        title: 'Push the Sky Away'
      },
      {
        title: 'No more shall we part'
      }
    ]
  },
  {
    name: 'Ben Harper',
    albums: [
      {
        title: 'Live from Mars'
      },
      {
        title: 'The Will to Live'
      }
    ]
  }
];
const totalNumberOfAlbums = artists.reduce((result, artist, index, artists) => {
  return result + artist.albums.length;
}, 0);
