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

import App, { Container } from "next/app";
import { connect, Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Head from 'next/head'
import withNProgress from "next-nprogress";

import createStore from "../store";

import '../scss/style.scss';

import { getPosts } from '../actions';

class MyApp extends App {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <React.Fragment>
                        <Head>
                            <title>Solid</title>
                        </Head>
                        <Component {...pageProps} />
                    </React.Fragment>
                </Provider>
            </Container>
        );
    }
}

export default withNProgress()(withRedux(createStore)(connect(state => state)(MyApp)));

// jessica.paraguassu@solidsolucoes.com.br
// solid@admin