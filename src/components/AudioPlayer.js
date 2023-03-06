export default function AudioPlayer(props) {
  const playAudio = function () {
    const audio = new Audio(props.wordData.audio);
    audio.play();
  };

  return (
    <button className="audio-btn" onClick={playAudio}>
      <span className="sr-only">Play audio</span>
    </button>
  );
}
