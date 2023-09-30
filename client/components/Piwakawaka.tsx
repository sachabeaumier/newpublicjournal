import AudioPlayer, {
  ProgressUI,
  VolumeSliderPlacement,
  ActiveUI,
} from 'react-modern-audio-player'
import { useState } from 'react'
// import { playList } from './Playlist'

const playList = [
  {
    name: 'name',
    writer: 'writer',
    img: 'image.jpg',
    src: 'audio.mp3',
    id: 1,
  },
]

const piwakanames = [
  'hīrairaka',
  'hītakataka',
  'hīwai',
  'hīwaiwaka',
  'hīwakawaka',
  'kōtiutiu',
  'kōtiutiu',
  'pīrairaka',
  'pīrakaraka',
  'pīrangirangi',
  'pītakataka',
  'pīwaiwaka',
  'pīwakawaka',
  'tīaiaka',
  'tīaka',
  'tīakaaka',
  'tieaka',
  'tīrairaka',
  'tīrakaraka',
  'tītaiwaka',
  'tītakataka',
  'tītakataka',
  'tītīrairaka',
  'tīwaiwaka',
  'tīwakawaka',
  'wakawaka',
]

export function Player1() {
  const [progressType, setProgressType] = useState<ProgressUI>('waveform')
  const [volumeSliderPlacement, setVolumeSliderPlacement] =
    useState<VolumeSliderPlacement>()
  const [activeUI, setActiveUI] = useState<ActiveUI>({ all: true })

  return (
    <div className="masteraudioplayer">
      <AudioPlayer
        playList={playList}
        activeUI={{
          ...activeUI,
          progress: progressType,
        }}
      />
    </div>
  )
}

export function Piwakawaka() {
  return (
    <>
      <section>
        <div className="section">
          In Māori mythology, the Pīwakawaka is a messenger, bringing news of
          death from the gods to the people. Although this doesnt mean it should
          be feared as its meant as an opportunity to prepare for the event.
        </div>
        <div>
          It is said that the Fantails bulbous eyes and fast flitting flying
          style have come from being squeezed by Māui for not revealing where
          his ancestress Mahuika, the fire deity was.
        </div>
      </section>
    </>
  )
}
