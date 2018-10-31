import { connect } from "react-redux";

import Header from "../components/Header";

const Home = () =>
    <section className="container">
        <Header />
    </section>

export default connect(state => state)(Home);