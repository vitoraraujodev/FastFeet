import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

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

    const delivery = await Delivery.findByPk(delivery_problem.delivery_id);

    await delivery.update({ canceled_at: new Date() });

    return res.json({ okay: true });
  }
}

export default new DeliveryProblemController();
