import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable'
import SearchBar from './SearchBar';

function App() {
  const[songs,setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  function newSearch(search){   {/*this takes in the search as a string*/}
    let newSongs= songs.filter(function(el){
    if(el.title.includes(search) || el.artist.includes(search) || el.album.includes(search) || el.release_date.includes(search) || el.genre.includes(search)){
        return true;
      }
    })
    setSongs(newSongs);
  }


return(
  <div>
    <SearchBar newSearch = {newSearch}/>
    <MusicTable parentSongs = {songs}/>
  </div>
)

}
export default App;

