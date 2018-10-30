import Link from 'next/link';
import { connect } from "react-redux";

const Home = () =>
    <section>
        <header>
            <h2>Transforme a Gestão da sua emprresa e acelere seu crescimento com a SOLID</h2>
        </header>
    </section>

export default connect(state => state)(Home);