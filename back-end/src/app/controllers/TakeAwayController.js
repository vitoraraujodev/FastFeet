import * as Yup from 'yup';
import { format } from 'date-fns';
import Delivery from '../models/Delivery';

class TakeAwayController {
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

    const date = format(new Date(), 'HH');

    if (!(date >= 8 && date <= 18)) {
      return res.status(400).json({
        error: 'You can only take deliveries between 08h and 18h.',
      });
    }

    const newDelivery = await delivery.update({
      start_date: new Date(),
    });

    return res.json(newDelivery);
  }
}

export default new TakeAwayController();
