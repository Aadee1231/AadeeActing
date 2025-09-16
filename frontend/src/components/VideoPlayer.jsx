import ReactPlayer from 'react-player/youtube'
import site from '@/content/site.json'

export default function VideoPlayer(){
  return (
    <div className="card overflow-hidden aspect-video">
      <ReactPlayer url={site.reel.youtube} width="100%" height="100%" controls playing={false} />
    </div>
  )
}
