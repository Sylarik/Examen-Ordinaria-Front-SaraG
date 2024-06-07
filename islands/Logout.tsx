import { FunctionComponent } from "preact";
import { VideoType } from "../types.ts";

export const Logout: FunctionComponent = () => {
    const borrarCookie = () => {
        document.cookie = "auth=; path=/";
        return
    }
    return (
        <a href="/login" class="logout-button" onClick={ e => borrarCookie()}>Logout</a>
  );
};
