import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import Moment from 'moment';
import { Container, Title, Box, Side, Button, Sinopse } from './styles';

function Movie ({ movie }) {
    if(movie.length === 0)
      return <Redirect to='/' /> 
    
    return (
      <div>
        <Header />
        <Container>
          <Title>
            <span>{movie.data.title}</span>
            <strong>{Moment(movie.data.release_date, "YYYY-MM-DD").format('DD/MM/YYYY')}</strong>
          </Title>
          <Box>
            <Sinopse>
              <span>Sinopse</span>
              <hr />
              <strong>{movie.data.overview}</strong>
              <span>Informações</span>
              <hr />
              <ul>
                    <li className="active">
                        <span>Situação</span>
                        <p>Lançado</p>
                    </li>
                    <li>
                        <span>Idioma</span>
                        <p>{movie.data.original_language}</p>
                    </li>
                    <li>
                        <span>Duração</span>
                        <p>2h 10min</p>
                    </li>
                    <li>
                        <span>Orçamento</span>
                        <p>$180.000.000.00</p>
                    </li>
                    <li>
                        <span>Receita</span>
                        <p>$853.9777.000,00</p>
                    </li>
                    <li>
                        <span>Lucro</span>
                        <p>$673.977.000,00</p>
                    </li>
                </ul>
                <Button>
                    <button type="button">Ação</button>
                    <button type="button">Aventura</button>
                    <button type="button">Fantasia</button>
                </Button>
            </Sinopse>
            <Side><img src={'https://image.tmdb.org/t/p/w500'+movie.data.poster_path} alt="screen" /></Side>
          </Box>
        </Container>
      </div>
    );
  }

export default connect(state => ({
  movie: state.movie,
}))(Movie)