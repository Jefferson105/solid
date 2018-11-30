import App, { Container } from "next/app";
import { connect, Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Head from 'next/head'
import withNProgress from "next-nprogress";

import createStore from "../store";

import '../scss/style.scss';

class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000)
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const { loading } = this.state;
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