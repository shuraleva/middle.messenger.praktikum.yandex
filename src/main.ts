import "./css/styles.css";

declare global {
    function goTo(path: string): void;
}

function goTo(path: string) {
    switch (path) {
        case "chats":
            window.location.href = "/src/pages/chats/chats.html";
            break;
        case "signUp":
            window.location.href = "/src/pages/signup/signUp.html";
            break;
        case "userProfileEdit":
            window.location.href = "/src/pages/userProfile/userProfileEdit.html";
            break;
        case "userProfile":
            window.location.href = "/src/pages/userProfile/userProfile.html";
            break;
        case "userAvatarEdit":
            window.location.href = "/src/pages/userProfile/userAvatarEdit.html";
            break;
        case "userPasswordEdit":
            window.location.href = "/src/pages/userProfile/userPasswordEdit.html";
            break;
        default:
            window.location.href = "/src/index.html";
    }
}

globalThis.goTo = goTo;
