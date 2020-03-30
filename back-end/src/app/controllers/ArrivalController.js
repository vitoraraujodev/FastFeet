import * as Yup from 'yup';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';

class ArrivalController {
  // Listagem de encomendas que já foram entregues pelo entregador
  async index(req, res) {
    const { id } = req.params; //eslint-disable-line

    const deliveries = await Delivery.findAll({
      where: { end_date: { [Op.ne]: null }, deliveryman_id: id },
    });

    return res.json(deliveries);
  }

  // Registro de conclusão de entrega
  async store(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
      delivery_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    const { delivery_id, deliveryman_id } = req.body; // eslint-disable-line

    const delivery = await Delivery.findByPk(delivery_id);

    if (!(delivery.deliveryman_id === deliveryman_id)) { // eslint-disable-line
      return res
        .status(401)
        .json({ error: 'You have to be the respective deliveryman.' });
    }

    if (!delivery.start_date) {
      return res
        .status(400)
        .json({ error: 'This order was not taken to delivery.' });
    }

    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'This delivery is canceled.' });
    }

    const newDelivery = await delivery.update({
      end_date: new Date(),
    });

    return res.json(newDelivery);
  }
}

export default new ArrivalController();
