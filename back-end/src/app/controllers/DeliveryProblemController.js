import * as Yup from 'yup';
import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class DeliveryProblemController {
  async index(req, res) {
    const { id } = req.params;

    const delivery_problems = await DeliveryProblem.findAll({ //eslint-disable-line
      where: { delivery_id: id },
      attributes: ['id', 'description', 'created_at'],
      order: [['id', 'DESC']],
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

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { description } = req.body;
    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    if (delivery.canceled_at) {
      return res.status(401).json({ error: 'Delivery already canceled.' });
    }

    const delivery_problem = await DeliveryProblem.create({ //eslint-disable-line
      description,
      delivery_id: id,
    });

    return res.json(delivery_problem);
  }
}

export default new DeliveryProblemController();
