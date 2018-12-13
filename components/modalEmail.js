import { connect } from "react-redux";

import { closeModalEmail } from '../actions';

import Loading from '../components/styles/elements/Loading';
import Error from '../components/styles/elements/Error';

const ModalEmail = ({ emailContato, dispatch }) =>
    <div onClick={() => dispatch(closeModalEmail())} className="overlay">
        <div onClick={e => e.stopPropagation()} className="overlay__content">
            {
                emailContato.loading ?
                    <Loading src="/static/img/loading.svg" /> :
                    !emailContato.error ?
                        <p>Seu email foi enviado com sucesso.</p> :
                        <Error>Ocorreu um erro. Tente novamente.</Error>       
            }
        </div>
    </div>

export default connect(state => state)(ModalEmail);