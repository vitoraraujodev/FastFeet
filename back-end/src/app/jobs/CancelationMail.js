import Mail from '../../lib/Mail';

class CancelationMail {
  get key() {
    return 'CancelationMail';
  }

  async handle({ data }) {
    const { deliveryman, delivery, recipient } = data;
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Cancelamento de entrega',
      template: 'cancelation',
      context: {
        deliveryman: deliveryman.name,
        product: delivery.product,
        rua: recipient.rua,
        numero: recipient.numero,
        complemento: recipient.complemento,
        cidade: recipient.cidade,
        estado: recipient.estado,
        cep: recipient.cep,
        name: recipient.name,
      },
    });
  }
}

export default new CancelationMail();
