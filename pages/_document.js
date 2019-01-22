import Document, { Head, Main, NextScript } from 'next/document';
import Footer from "../components/Footer";
import { ServerStyleSheet } from 'styled-components';

const mailChimpCode = `
!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f6a8b65cd28d281b2c0856998/d2f432533f696e16ca3a7c3b9.js");
`;

const fbCode = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https:mailChimpCode//connect.facebook.net/en_US/fbevents.js');
    fbq('init', '<PixelID>', {}, {agent: 'plsquarespace'});
    fbq('track', 'PageView');
`

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const sheet = new ServerStyleSheet()
    
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () => originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
    
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                    <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
                    <script id="mcjs" dangerouslySetInnerHTML={{ __html: mailChimpCode }} />
                </Head>
                <body>
                    <script dangerouslySetInnerHTML={{ __html: fbCode }} />
                    <noscript><img height="1" width="1" style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=<PixelID>&ev=PageView&noscript=1"/>
                    </noscript>
                    <Main />
                    <NextScript />
                    <Footer />
                </body>
            </html>
        )
    }
}

//<meta name="viewport" content="width=device-width, initial-scale=1" />

/*
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130772779-1"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-130772779-1');
                    </script>
*/