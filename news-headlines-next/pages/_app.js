
import { ThemeProvider } from 'next-themes';
import '../app/globals.css';
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;