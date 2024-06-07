import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import jwt from "jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";
import re from "https://esm.sh/v135/preact-render-to-string@6.3.1/X-ZS8q/denonext/preact-render-to-string.mjs";
import { VideoType, userApi } from "../../types.ts";
import { VideoUnico } from "../../components/VideoUnico.tsx";


export const handler: Handlers<VideoType, userApi> = {
  GET: async (req: Request, ctx: FreshContext<userApi, VideoType>) => {
    const response = await fetch(
      `https://videoapp-api.deno.dev/video/${ctx.state.id}/${ctx.params.id}`,
    );
    const data = await response.json();

    return ctx.render(data);
  },
};

export default function Page(props: PageProps<VideoType, userApi>) {
  return (
    <>
      <VideoUnico video={props.data} user={props.state}/>
    </>
  );
}
