function videoReducer(videos, action) {
  //videos is the (previous) state

  switch (action.type) {
    case "ADD":
      return [...videos, { ...action.payload, id: videos.length + 1 }];

    case "DELETE":
      return videos.filter((video) => video.id !== action.payload);

    case "UPDATE": {
      let index = videos.findIndex((v) => v.id === action.payload.id);
      let newVids = [...videos];
      newVids.splice(index, 1, action.payload);
    //   setEditingVideo(null);
      return newVids;
    }

    default:
      return videos;
  }
}

export default videoReducer;