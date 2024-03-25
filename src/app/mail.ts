'use server';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sendMail = (info: {
    nome: string;
    email: string;
    empresa: string;
    departamento: string;
    mensagem: string;
}) => {
    return new Promise(async (resolve, reject) => {
        const msg = {
            to: 'envio.email.solid@gmail.com',
            from: 'envio.email.solid@gmail.com',
            subject: 'Contato do Site Solid',
            text: `Nome: ${info.nome}\nEmail: ${info.email}\nEmpresa: ${info.empresa}\nDepartamento: ${info.departamento}\nMensagem: ${info.mensagem}`
        };

        try {
            await sgMail.send(msg);

            resolve(true);
        } catch (err) {
            console.log('Erro ao enviar email', err);

            reject(false);
        }
    });
};
