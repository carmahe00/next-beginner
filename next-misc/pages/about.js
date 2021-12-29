import Head from 'next/head'
import Footer from "@/layout/Footer"

function About() {
    return (
    <>
        <Head>
            <title  >About Codeevolution</title>
            <meta name="description" content="Free tutorial and Web development" />
        </Head>
        <h1 className="content" >About</h1>
    </>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
