import Link from 'next/link';
import { connect } from "react-redux";

const Home = () =>
    <nav>
        <ul>
            <li><img /></li>
            <li>Sobre a Solid</li>
            <li>Nossos Serviços</li>
            <li>Clientes</li>
            <li>Contato</li>
            <li>Blog</li>
            <li>4330-2784</li>
        </ul>
    </nav>

export default connect(state => state)(Home);