import { FunctionComponent } from "preact";
import {userApi} from "../types.ts"
import { Logout } from "../islands/Logout.tsx";

export const Header: FunctionComponent<{user: userApi}> = ({user}) => {
  return (
    <header class="header-container">
      <div class="header-content">
        <span class="user-name">{user.name}</span>
        <Logout/>
      </div>
    </header>
  );
};
