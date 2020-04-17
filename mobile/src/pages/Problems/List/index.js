import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { format, parseISO } from 'date-fns';

import {
  Container,
  ProblemsContainer,
  Title,
  Problems,
  Problem,
  Description,
  ProblemDate,
  Empty,
  EmptyText,
  Loading,
} from './styles';

import Header from '~/components/Header';

import api from '~/services/api';

export default function List({ route, navigation }) {
  const { delivery } = route.params;
  const [loading, setLoading] = useState(false);

  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    setLoading(true);
    try {
      const response = await api.get(`delivery/${delivery.id}/problems`);
      setProblems(response.data);
    } catch (err) {
      Alert.alert(
        'Erro!',
        'Não foi possível carregar os problemas dessa encomenda. Tente mais tarde.'
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <Header navigation={navigation}>Visualizar problemas</Header>

      <ProblemsContainer>
        <Title>Encomenda {delivery.id}</Title>

        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color="#ddd" />
          </Loading>
        ) : (
          <>
            {problems.length !== 0 ? (
              <Problems
                showsVerticalScrollIndicator={false}
                data={problems}
                keyExtractor={(problem) => String(problem.id)}
                renderItem={({ item: problem }) => (
                  <Problem>
                    <ProblemDate>
                      {format(parseISO(problem.created_at), 'dd/MM/yyyy')}
                    </ProblemDate>
                    <Description>{problem.description}</Description>
                  </Problem>
                )}
              />
            ) : (
              <Empty>
                <EmptyText>Não há problemas aqui por enquanto..</EmptyText>
              </Empty>
            )}
          </>
        )}
      </ProblemsContainer>
    </Container>
  );
}
