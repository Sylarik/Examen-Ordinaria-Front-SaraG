import { FreshContext, Handlers, LayoutConfig, PageProps } from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";
import { RegisterForm } from "../components/RegisterForm.tsx";

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const form = await req.formData();
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    const name = form.get("name")?.toString();

    const response = await fetch(`https://videoapp-api.deno.dev/register`, {
      method: "POST",
      headers: {
        "Contente-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
    if (response.status !== 200) {
        return ctx.render({
            message: "Email ya utilizado"
        })
    }

    const data = await response.json();
    const JWT_SECRET = Deno.env.get("JWT_SECRET")
    if (!JWT_SECRET) {
      throw new Error("No se ha encontrado la clave secreta");
    }
    const token = jwt.sign(
      { email, name: data.name, id: data.id },
      JWT_SECRET,
      {
        expiresIn: "24h",
      },
    );

    const headers = new Headers();

    setCookie(headers, {
      name: "auth",
      value: token,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
      secure: true,
    });

    headers.set("location", "/videos");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Page(props: PageProps) {
  return (
    <>
      <RegisterForm message={props.data?.message}/>
    </>
  );
}
