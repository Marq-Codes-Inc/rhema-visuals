/* components/VideoCarousel.tsx */
'use client';
import VideoEmbed from './VideoEmbed';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Wedding Highlight' },
  { id: '9bZkp7q19f0', title: 'Corporate Event' },
  { id: 'kJQP7kiw5Fk', title: 'Music Video' },
  { id: 'CevxZvSJLk8', title: 'Brand Story' },
];

export default function VideoCarousel() {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-black/20 dark:scrollbar-thumb-white/20">
      <div className="flex gap-4 md:gap-6" style={{ minWidth: 'max-content' }}>
        {videos.map((video, idx) => (
          <div key={idx} className="w-70 md:w-100 shrink-0">
            <div className="overflow-hidden shadow-lg">
              <VideoEmbed videoId={video.id} />
            </div>
            <p className="text-center text-secondary text-sm mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
