import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Li, List } from './styles';
import Moment from 'moment';

let redirect = false;

function ListMovie ({ data,dispatch }) {

   function handleMovieList (data,dispatch) {

      dispatch({
        type: 'ADD_MOVIE',
        data,
       })

       redirect = true;
       
    }

    if(redirect)
    return <Redirect to='/movie' />  

    return (
        <List onClick={() => handleMovieList(data,dispatch)} key={data.title}>
            <Li> 
                <img src={'https://image.tmdb.org/t/p/w500'+data.poster_path} alt="screen" />
                <div>
                      <strong>{data.title}</strong>
                </div>
                <p>{Moment(data.release_date, "YYYY-MM-DD").format('DD/MM/YYYY')}</p>
                <span>{data.overview}</span>
                < br />
                < br />
                <button type="button">Ação</button>
                <button type="button">Aventura</button>
                <button type="button">Fantasia</button>
            </Li>
        </List>
    );
  }

export default connect(state => ({
  movie: state.movie,
}))(ListMovie)