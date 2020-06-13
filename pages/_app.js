import '../styles/global.scss';
import { AnimatePresence } from 'framer-motion'
export default function MyApp({ Component, pageProps, router }) {
    return (
        <Component {...pageProps} key={router.route} />        
    )
}