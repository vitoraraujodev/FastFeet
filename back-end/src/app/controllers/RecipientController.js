import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const search = req.query.search || '';

    const recipients = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
    });

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      rua: Yup.string(),
      numero: Yup.number(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    const {
      name,
      rua,
      numero,
      complemento,
      estadom,
      cidade,
      cep,
    } = await recipient.update(req.body);

    return res.json({ name, rua, numero, complemento, estadom, cidade, cep });
  }
}

export default new RecipientController();
