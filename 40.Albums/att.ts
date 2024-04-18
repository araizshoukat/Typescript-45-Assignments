function make_album (artist: string, title: string, track?:number) {
   const album: {artist: string, title: string, track?:number} = {
      artist : artist,
      title : title
    }

    if(track !== undefined){
        album.track = track;
    }
    return album;
}

const album1 = make_album(`Artist 1`, `Album Title 1`);
console.log(album1);

const album2 = make_album(`Artist 2`, `Album Title 2`);
console.log(album2);

const album3 = make_album(`Artist 3`, `Album Title 3`, 12);
console.log(album3);