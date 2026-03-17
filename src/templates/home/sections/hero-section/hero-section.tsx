export function HeroSection() {
  return (
    <section className="relative h-[80vh] sm:min-h-[90vh] flex items-center justify-center bg-black">
      <video
        src="/pmh-site-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      ></video>
    </section>
  );
}
