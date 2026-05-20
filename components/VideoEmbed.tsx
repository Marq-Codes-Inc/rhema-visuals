/* components/VideoEmbed.tsx */
export default function VideoEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 h-full w-full border-0"
        title="YouTube video player"
      />
    </div>
  );
}
