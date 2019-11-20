import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Header from '../Components/Header';
import { Container, Input, Box, Side, Bar, Title, Text, Date, Details, Button, Pagination } from './styles';

export default function Main({}) {

  async function handleFindMovie(event) {
    console.log("OOITI")
    let text = event.targe.value;

    const response = await api.get(
      `/3/search/movie?api_key=cc586edfff730870f0169b310acda186&query=${text}`
    );

   console.log(response.data)

  }

  return (
    <>
    <Container>
      <Header />
        <Input>
          <input type="text" onChange={() => handleFindMovie} placeholder="Busque um filme por nome, ano ou gênero..." />
        </Input>
        <Box>
          <Side>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbvuIR5-_JG_AvbxtplOA5fS88vvmog-0PBaSzvUf-xFtN6eDc" alt="screen" />
          </Side>
          <Bar>
            <Title>
              <strong>Thor Ragnarok</strong>
            </Title>
            <Details>
              <Date>
                <span>25/10/2018</span>
              </Date>
              <Text>
                <span>A Imagem Filmes é uma empresa nacional que atua no mercado de entretenimento do país como uma distribuidora de filmes independentes, oferece grande variedade e produções com qualidade, vindas dos quatro cantos do mundo, atuando nos segmentos de cinema, tv e home vídeo</span>
              </Text>
              <Button>
                <button onClick={() => handleFindMovie} type="button">Ação</button>
                <button type="button">Aventura</button>
                <button type="button">Fantasia</button>
              </Button>
            </Details>
          </Bar>
        </Box>
        <Pagination>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </Pagination>
      </Container>
    </>
  );
}
