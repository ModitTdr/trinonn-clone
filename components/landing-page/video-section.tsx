
const VideoSection = () => {
  return (
    <section className="px-[6vw] lg:px-[9vw] py-20 flex items-center justify-center w-full">
      <div className="w-full h-auto">
        <video autoPlay muted loop playsInline src="/video/intro-video.mp4" className='rounded-[3rem] w-full h-auto' />
      </div>
    </section>
  )
}

export default VideoSection