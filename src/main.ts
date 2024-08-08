import "./css/styles.css";
import { renderChatsComponent } from "./pages/chats/chats";
import { renderErrorComponent } from "./pages/errors/error";
import { renderSignInForm } from "./pages/signin/signIn";
import { renderSignUpForm } from "./pages/signup/signUp";
import { renderEditPasswordForm } from "./pages/userProfile/userPasswordEdit";
import { renderUserProfile } from "./pages/userProfile/userProfile";
import { renderUserEditProfile } from "./pages/userProfile/userProfileEdit";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app");
    const url = window.location.pathname;

    if (url === "/") {
        return;
    }

    if (root) {
        switch (url) {
            case "/signIn":
                root.replaceChildren(renderSignInForm()!);
                break;
            case "/signUp":
                root.replaceChildren(renderSignUpForm()!);
                break;
            case "/404":
                root.replaceChildren(renderErrorComponent("404")!);
                break;
            case "/500":
                root.replaceChildren(renderErrorComponent("500")!);
                break;
            case "/profile":
                root.replaceChildren(renderUserProfile()!);
                break;
            case "/editProfile":
                root.replaceChildren(renderUserEditProfile()!);
                break;
            case "/editPassword":
                root.replaceChildren(renderEditPasswordForm()!);
                break;
            case "/chats": 
                root.replaceChildren(renderChatsComponent() as Node)
                break;
        };
    }
});
