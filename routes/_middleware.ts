import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { userApi } from "../types.ts";
import jwt from "jsonwebtoken";

export const handler = async (req: Request, ctx: FreshContext<userApi>) => {
  if (ctx.destination !== "route") {
    const resp = await ctx.next();
    return resp;
  }

  if (ctx.route === "/login" || ctx.route === "/register") {
    const resp = await ctx.next();
    return resp;
  }

  const { auth } = getCookies(req.headers);
  if (!auth) {
    return new Response("", {
      status: 307,
      headers: { location: "/login" },
    });
  }

  const payload = jwt.verify(auth, Deno.env.get("JWT_SECRET"));
  if (!payload) {
    return new Response("", {
      status: 307,
      headers: { location: "/login" },
    });
  }

  ctx.state = payload;
  const resp = await ctx.next();
  return resp;
};
