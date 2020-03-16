import * as Yup from 'yup';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { description } = req.body;
    const { id } = req.params;

    const delivery_problem = await DeliveryProblem.create({ //eslint-disable-line
      description,
      delivery_id: id,
    });

    return res.json(delivery_problem);
  }
}

export default new DeliveryProblemController();
