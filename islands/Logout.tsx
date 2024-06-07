import { FunctionComponent } from "preact";


export const Logout: FunctionComponent = () => {
    const borrarCookie = () => {
        document.cookie = "auth=; path=/";
        return
    }
    return (
        <a href="/login" class="logout-button" onClick={ e => borrarCookie()}>Logout</a>
  );
};
