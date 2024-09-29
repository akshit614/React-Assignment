// Assignment to fetch data from API and show the Unique albums (collection of various photos) on first render
// and then by click on a specific album all the photos of that album should render

import { useCallback, useEffect, useMemo, useState } from "react"


export default function AlbumRenderer() {

  const [albums,setAlbums] = useState([])
  const [selectedAlbumId, setSelectedAlbumId] = useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await res.json();
        setAlbums(data)
      } catch (err) {
        setError("Failed to fetch data. Try again !")
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  },[])


  const uniqueAlbums = useMemo(() => {
    return [...new Set(albums.map(item => item.albumId))];
  },[albums]);


  const handleAlbumClick = useCallback((value) =>{
    setSelectedAlbumId(value)
  },[])
  

  const selectedAlbumPhotos = useMemo(() =>{
    return albums.filter((item) => item.albumId === selectedAlbumId)
  },[albums,selectedAlbumId])
  

  const handleBackClick = useCallback(() =>{
    setSelectedAlbumId(null);
  },[])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>


  return (
    <>
    {selectedAlbumId  === null ? (
      <AlbumList albums={uniqueAlbums} onAlbumClick={handleAlbumClick}></AlbumList>
      ) : (
      <PhotosList photos={selectedAlbumPhotos} onBack={handleBackClick}></PhotosList>
    )}
    </>
  )

}

function AlbumList({albums,onAlbumClick}) {

  return (
    <div>
      <h2>Select Album </h2>
      { albums.map((albumId) => (
        <div 
        key={albumId}
        onClick={() => onAlbumClick(albumId)}
        style={{ cursor:"pointer", border: "1px solid black", padding:"10px", margin:"5px"}}>
          Album {albumId}
        </div>
      ))}
    </div>
  )
}

function PhotosList({photos,onBack}){
  return (
    <div>
      <button onClick={onBack}>Go back</button>
      <h2>Photos from album {photos[0].albumId}</h2>
      {photos.map((item) => (
        <div key={item.id} style={{margin:"10px 0"}}>
          <img src={item.thumbnailUrl} alt={item.title} />
          <p><b>Caption: </b> {item.title}</p>
        </div>
      ))}
    </div>
  )
}