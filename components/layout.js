import Head from 'next/head'
import Header from "./header";
import Footer from "./footer";

function Layout ({children}){
    return(
        <div>
            <Head>
                <title>Emirkan Test</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="robots" content="noindex, nofollow, nodp"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
           {/* <Header/> */}
           <main>
               {children}
           </main>
           <Footer/>
        </div>
    )
}

export default Layout