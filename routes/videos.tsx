import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Videos } from "../components/Videos.tsx";
import { userApi } from "../types.ts";
import { VideoType } from "../types.ts";

export const handler: Handlers<VideoType[], userApi> = {
  GET: async (req: Request, ctx: FreshContext<userApi, VideoType[]>) => {
    const response = await fetch(
      `https://videoapp-api.deno.dev/videos/${ctx.state.id}`,
    );
    const data = await response.json();

    return ctx.render(data);
  },
};

export default function Page(props: PageProps<VideoType[], userApi>) {
  return (
    <>
      <Videos videos={props.data} user={props.state}/>
    </>
  );
}
