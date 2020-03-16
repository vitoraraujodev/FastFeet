import * as Yup from 'yup';
import Delivery from '../models/Delivery';

class ArrivalController {
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

    const newDelivery = await delivery.update({
      end_date: new Date(),
    });

    return res.json(newDelivery);
  }
}

export default new ArrivalController();
