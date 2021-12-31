import Nav from '../Navbar'
import Footer from '../Footer'

export default function Layout({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}