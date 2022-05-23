import { useSelector } from 'react-redux'
import { selectAlbum } from './features/album/albumSlice'

export const AlbumResult = () => {
  const album = useSelector(selectAlbum)
  return (
    <div>{album}</div>
  )
}
