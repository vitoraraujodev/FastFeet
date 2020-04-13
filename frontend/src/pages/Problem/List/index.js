import React, { useState, useEffect } from 'react';

import { Container, Table, ProblemDescription } from './styles';

import Action from '~/components/Action';
import Modal from '~/components/Modal';

import api from '~/services/api';

export default function List() {
  const [problems, setProblems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState({
    id: 0,
    description: '',
    delivery: null,
  });

  async function loadProblems() {
    const response = await api.get('delivery/problems');
    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <p style={{ marginTop: 0, paddingTop: 0 }}>VISUALIZAR PROBLEMA</p>
        <span>{selectedProblem.description}</span>
      </Modal>
      <Container>
        <strong>Problemas na entrega</strong>

        <Table>
          <thead>
            <tr>
              <th width="10%" align="left">
                Encomenda
              </th>
              <th width="50%" align="left">
                Problema
              </th>
              <th width="5%" align="center">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr>
                <td>#{problem.id}</td>
                <ProblemDescription>
                  <span>{problem.description}</span>
                </ProblemDescription>
                <td align="center">
                <div onClick={() => setSelectedProblem(problem)}> {/*eslint-disable-line*/}
                    <Action
                      type="problems"
                      content={problem}
                      view
                      cancel
                      onView={() => setVisible(true)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
