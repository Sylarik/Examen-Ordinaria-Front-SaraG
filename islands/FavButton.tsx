import { FunctionComponent } from "preact";
import { userApi, VideoType } from "../types.ts";
import { useState } from "preact/hooks";

export const FavButton: FunctionComponent<{ video: VideoType, user: userApi }> =
  ({ video, user }) => {
    const [fav, setFav] = useState<boolean>(video.fav);

    const cambiarFav = async (video: VideoType, user: userApi) => {
      const data = await fetch(
        `https://videoapp-api.deno.dev/fav/${user.id}/${video.id}`,
        {
          method: "POST",
          
        },
      );
      if (data.status === 200) {
        setFav(!fav);
        return;
      }
      return
    }
    return (
        <button class="fav-button" onClick={() => cambiarFav(video, user)}>
            { fav === true ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        </button>
    )
  };
