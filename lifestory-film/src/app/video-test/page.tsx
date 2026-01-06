export default function VideoTest() {
  return (
    <div className="relative w-full h-screen bg-black">
      <h1 className="absolute top-4 left-4 text-white z-50 text-2xl">
        Video Test Page - If you see this text but no video, YouTube embeds may be blocked
      </h1>

      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/YzK1dHhkZTU?autoplay=1&mute=1&loop=1&playlist=YzK1dHhkZTU&controls=1"
          title="Test Video"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="absolute bottom-4 left-4 text-white z-50 bg-black/50 p-4 rounded">
        <p>Video ID: YzK1dHhkZTU</p>
        <p>Navigate to: http://localhost:3000/video-test</p>
      </div>
    </div>
  )
}
