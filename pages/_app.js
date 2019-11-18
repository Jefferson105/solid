String.prototype.replaceSpecialChars = function() {
    var str = this.toString();
    str = str.replace(/[ÀÁÃÄÂ]/g,"A");
    str = str.replace(/[àáãâä]/g,"a");
    str = str.replace(/[ÈÉÊË]/g,"E");
    str = str.replace(/[èéêë]/g,"e");
    str = str.replace(/[ÌÍÎÏ]/g,"I");
    str = str.replace(/[ìíîï]/g,"i");
    str = str.replace(/[ÒÓÔÕÖ]/g,"O");
    str = str.replace(/[òóôõö]/g,"o");
    str = str.replace(/[ÙÚÛŨÜ]/g,"U");
    str = str.replace(/[ùúûũü]/g,"u");
    str = str.replace(/[Ç]/g,"C");
    str = str.replace(/[ç]/g,"c");

    return str;
};

import App from "next/app";
import { Provider } from "react-redux";
import { withRouter } from 'next/router';
import withRedux from "next-redux-wrapper";
import Head from 'next/head';
import Router from "next/router";
import ReactGA from "react-ga";

import createStore from "../store";

import { getPosts, getBanners, getEquipe } from '../actions';

class MyApp extends App {
    componentWillMount() {
        ReactGA.initialize('UA-127764897-1');
        ReactGA.pageview('/');

        const { dispatch } = this.props.store;

        dispatch(getPosts());
        dispatch(getBanners());
        dispatch(getEquipe());
    }

    componentDidMount() {
        require('../scss/style.scss');

        Router.onRouteChangeStart = url => {
            ReactGA.pageview(url);
            window.scrollTo(0,0);
        }
    }

    render() {
        const { Component, pageProps, router, store } = this.props;

        return (
            <Provider store={store}>
                <>
                    <Head>
                        <title>Solid</title>
                        <meta property="og:site_name" content="Solid" />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content={`http://www.solidsolucoes.com.br${router.asPath}`} />
                    </Head>
                    <Component {...pageProps} />
                </>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withRouter(MyApp));