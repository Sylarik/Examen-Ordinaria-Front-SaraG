import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LoginForm } from "../components/LoginForm.tsx";
import jwt from "jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";
import re from "https://esm.sh/v135/preact-render-to-string@6.3.1/X-ZS8q/denonext/preact-render-to-string.mjs";
import { RegisterForm } from "../components/RegisterForm.tsx";
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
