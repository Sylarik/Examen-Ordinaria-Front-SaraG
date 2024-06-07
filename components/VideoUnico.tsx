import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { VideoType } from "../types.ts";
import { FavButton } from "../islands/FavButton.tsx";
import { userApi } from "../types.ts";

export const VideoUnico: FunctionComponent<{ video: VideoType, user: userApi }> = (
  { video, user },
) => {
  return (
    <div class="video-detail-container">
      <a href="/videos" class="back-button">← Go Back to List</a>
      <div class="video-frame">
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${video.youtubeid}`}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
      <h2 class="video-detail-title">{video.title}</h2>
      <p class="video-detail-description">{video.description}</p>

      <FavButton video={video} user={user}/>
    </div>
  );
};
