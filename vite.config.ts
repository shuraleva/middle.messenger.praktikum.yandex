import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
    "index.html": {text: "Messenger" }
};

const defineConfig = ({
    plugins: [handlebars({ 
        partialDirectory: resolve(__dirname, 'src/partials'), 
        context(pagePath: string) {
            return pageData[pagePath];
        }
    })],
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.html'),
                signin: resolve(__dirname, './src/pages/signin/signin.html'),
                signup: resolve(__dirname, './src/pages/signup/signup.html'),
                notFound: resolve(__dirname, './src/pages/errors/notFound.html'),
                serverError: resolve(__dirname, './src/pages/errors/serverError.html'),
                userProfile: resolve(__dirname, './src/pages/userProfile/userProfile.html'),
                userProfileEdit: resolve(__dirname, './src/pages/userProfile/userProfileEdit.html'),
                userAvatarEdit: resolve(__dirname, './src/pages/userProfile/userAvatarEdit.html'),
                userPasswordEdit: resolve(__dirname, './src/pages/userProfile/userPasswordEdit.html'),
                chat: resolve(__dirname, './src/pages/chats/chats.html'),
            },
        },
    },
    server: {port: 3000}
});

export default defineConfig;