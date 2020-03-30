import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

import CancelationMail from '../jobs/CancelationMail';

import Queue from '../../lib/Queue';

class DeliveryProblemController {
  // Listagem de Problemas na Entrega por parte da distribuidora
  async index(req, res) {
    const delivery_problems = await DeliveryProblem.findAll({ //eslint-disable-line
      attributes: ['id', 'description'],
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: [
            'id',
            'product',
            'deliveryman_id',
            'recipient_id',
            'start_date',
            'canceled_at',
          ],
        },
      ],
    });

    return res.json(delivery_problems);
  }

  // Cancelamento de Entrega por parte da Distribuidora
  async delete(req, res) {
    const delivery_problem = await DeliveryProblem.findByPk(req.params.id); //eslint-disable-line

    const delivery = await Delivery.findByPk(delivery_problem.delivery_id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'rua',
            'numero',
            'complemento',
            'estado',
            'cidade',
            'cep',
          ],
        },
      ],
    });

    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled.' });
    }

    const { deliveryman, recipient } = delivery;

    await delivery.update({ canceled_at: new Date() });

    await Queue.add(CancelationMail.key, { delivery, deliveryman, recipient });

    return res.json({ okay: true });
  }
}

export default new DeliveryProblemController();
