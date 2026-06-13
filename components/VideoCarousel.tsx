/* components/VideoCarousel.tsx */
'use client';
import VideoEmbed from './VideoEmbed';

const videos = [
  { id: '5OQSzduEdFM', title: 'Kukyala Highlight' }, 
  { id: 'Xf7VrPq1YcQ', title: 'Thanks Giving Event' },
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