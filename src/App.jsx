import { useState } from "react"
import { FaSpotify } from "react-icons/fa"
import { LuHeadphones } from "react-icons/lu"
import { MdExplicit } from "react-icons/md"
import { TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb"

const songs = [
  {
    name: "Luka Chippi",
    artist: "Bandzo3rd, Seedhe Maut",
    img: "LukaChippi.jpg",
    explicit: true,
    color: "175, 56, 56"
  },
  {
    name: "Money Tree",
    artist: "Bandzo3rd, Seedhe Maut",
    img: "moneytree.jpg",
    explicit: true,
    color: "75, 86, 59"
  },
  {
    name: "redrum",
    artist: "21 Savage",
    img: "redrum.jpg",
    explicit: true,
    color: "37, 66, 86"
  },
  {
    name: "Beautiful Things",
    artist: "Benson Boone",
    img: "beautifulThings.jpg",
    explicit: false,
    color: "198, 86, 45"
  }
]

export default function App() {
  const [play, setPlay] = useState(false)
  const [songNum, setSongNum] = useState(0)

  function handlePrevSong() {
    if (songNum === 0) {
      setSongNum(songs.length - 1)
    } else {
      setSongNum(songNum - 1)
    }
  }

  function handleNextSong() {
    if (songNum === songs.length - 1) {
      setSongNum(0)
    }
    else {
      setSongNum(songNum + 1)
    }
  }

  return (
    <section style={{ background: `rgba(${songs[songNum].color}, 0.5)` }} className="flex justify-center items-center min-h-screen select-none">
      <div style={{ background: `rgb(${songs[songNum].color})` }} className="flex w-[500px] gap-5 p-5 rounded-3xl drop-shadow-lg">
        <div>
          <img className="w-44 h-44 rounded-xl object-center object-cover" src={songs[songNum].img} alt="" />
        </div>
        <div className="text-white flex flex-col flex-grow justify-center">
          <div className="flex gap-1 items-center">
            <LuHeadphones />
            <span>Joe's Airpods Pro</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <h1 className="text-2xl font-medium">{songs[songNum].name}</h1>
            {songs[songNum].explicit ? <MdExplicit fontSize={24} className="mt-px" /> : ""}
          </div>
          <div className="mb-2">
            <p>{songs[songNum].artist}</p>
          </div>
          <div className="flex justify-between items-center">
            <TbPlayerTrackPrevFilled onClick={handlePrevSong} fontSize={32} className="cursor-pointer" />
            {play ? <TbPlayerPlayFilled fontSize={32} className="cursor-pointer" onClick={() => setPlay(!play)} /> : <TbPlayerPauseFilled fontSize={32} className="cursor-pointer" onClick={() => setPlay(!play)} />}
            <TbPlayerTrackNextFilled onClick={handleNextSong} fontSize={32} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 justify-end items-start">
          <FaSpotify className="fill-white" fontSize={32} />
        </div>
      </div>
    </section>
  )
}
