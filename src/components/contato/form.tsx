'use client';

import { FormEvent, useCallback, useReducer } from 'react';

import Modal from '@/components/modal';

import styles from '@/styles/contato.module.css';
import shared from '@/styles/shared.module.css';

import { genericReducer } from '@/lib/reducer';
import { multiCssClass } from '@/utils';
import { sendMail } from '@/app/mail';

const Form = () => {
    const [data, dispatch] = useReducer(genericReducer, {
        nome: '',
        empresa: '',
        email: '',
        departamento: '',
        mensagem: '',
        error: null,
        loading: false,
        sent: false
    });

    const checkForm = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            dispatch({ error: null, loading: true, sent: false });

            if (
                ['nome', 'empresa', 'email', 'departamento', 'mensagem'].every(
                    (key) => !!data[key]
                )
            ) {
                try {
                    await sendMail(data);

                    dispatch({ sent: true, loading: false });
                } catch {
                    dispatch({
                        error: 'Não foi possível enviar o email.',
                        loading: false
                    });
                }
            } else {
                dispatch({
                    error: 'Preencha todos os campos.',
                    loading: false
                });
            }
        },
        [data]
    );

    return (
        <div className={styles.formContainer}>
            <form onSubmit={checkForm} className={styles.form}>
                <input
                    onChange={(e) => dispatch({ nome: e.target.value })}
                    type="text"
                    className={styles.input}
                    placeholder="Seu nome"
                />
                <input
                    onChange={(e) =>
                        dispatch({
                            empresa: e.target.value
                        })
                    }
                    type="text"
                    className={styles.input}
                    placeholder="Empresa"
                />
                <input
                    onChange={(e) => dispatch({ email: e.target.value })}
                    type="text"
                    className={styles.inputFull}
                    placeholder="Seu e-mail"
                />
                <input
                    onChange={(e) =>
                        dispatch({
                            departamento: e.target.value
                        })
                    }
                    type="text"
                    className={styles.inputFull}
                    placeholder="Departamento desejado"
                />
                <input
                    onChange={(e) =>
                        dispatch({
                            mensagem: e.target.value
                        })
                    }
                    type="text"
                    className={styles.message}
                    placeholder="Mensagem"
                />
                <button className={multiCssClass(styles.button, shared.link)}>
                    Enviar
                </button>
            </form>
            {!!(data.error || data.loading || data.sent) && (
                <Modal
                    onClose={() =>
                        dispatch({ error: null, loading: false, sent: false })
                    }
                    error={data.error}
                    loading={data.loading}
                />
            )}
        </div>
    );
};

export default Form;
