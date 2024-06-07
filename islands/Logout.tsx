import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { VideoType } from "../types.ts";

export const Logout: FunctionComponent = () => {
    const borrarCookie = () => {
        document.cookie = "/auth;"
        return
    }
    return (
        <a href="/login" class="logout-button" onClick={ e => borrarCookie()}>Logout</a>
  );
};
