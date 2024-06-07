import { FunctionComponent } from "preact";
import { VideoType } from "../types.ts";
import { FavButton } from "../islands/FavButton.tsx";
import {userApi} from "../types.ts"

export const Videos: FunctionComponent<{ videos: VideoType[], user:userApi }> = (
  { videos, user },
) => {
  return (
    <div class="video-page-container">
      <h1 class="video-list-title">Curso Deno Fresh</h1>
      <div class="video-list-container">
        {videos.map((video) => {
          return (
            <div class="video-item" key={video.id}>
              <a href={`/video/${video.id}`} class="video-link">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  class="video-thumbnail"
                />
                <div class="video-info">
                  <h3 class="video-title">{video.title}</h3>
                  <p class="video-description">{video.description}</p>
                  <p class="video-release-date">{video.date}</p>
                </div>
              </a>

              <FavButton video={video} user={user}/>

            </div>
          );
        })}
      </div>
    </div>
  );
};
