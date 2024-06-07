import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
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
