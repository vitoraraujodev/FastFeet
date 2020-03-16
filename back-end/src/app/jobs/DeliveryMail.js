import Mail from '../../lib/Mail';

class DeliveryMail {
  get key() {
    return 'DeliveryMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, delivery } = data;
    await Mail.sendMail({
      to: `${delivery.name} <${deliveryman.email}>`,
      subject: 'Nova entrega',
      template: 'delivery',
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

export default new DeliveryMail();
