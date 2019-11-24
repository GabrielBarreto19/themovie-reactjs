import React, { Component } from 'react';
import api from '../../services/api';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import { Input, Pagination, Page } from './styles';
import ListMovie from './ListMovie';

class Main extends Component {
  state = {
    movie: [],
    todosPerPage: 5,
    totalPages: 0, 
    movieStart: 0, 
    movieEnd: 5
  };

  async handleFindMovie (e) {
    let text = e.target.value;

    const response = await api.get(
      `/3/search/movie?api_key=cc586edfff730870f0169b310acda186&query=${text}`
    );
    
   this.setState({movie: response.data.results, page: response.data.total_pages})
  }

  handleClick(e, page) {
    const movieEnd = page * this.state.todosPerPage;
    this.setState({
      movieEnd: movieEnd
    });
    const movieStart = movieEnd - this.state.todosPerPage;
     this.setState({
      movieStart: movieStart
    });
  }

  render(){
    const { movie, todosPerPage,movieStart, movieEnd } = this.state;
    const { dispatch } = this.props;

    let currentTodos = movie.slice(movieStart, movieEnd);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movie.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <>
      <Page>
        <Header />
          <Input>
            <input type="text" onChange={e => this.handleFindMovie(e)} placeholder="Busque um filme por nome, ano ou gênero..." />
          </Input>
            {currentTodos.map(post => <ListMovie key={post.id} data={post} dispatch={dispatch} />)}
          <Pagination>
          {pageNumbers.map(number => (
             <span onClick={e => this.handleClick(e,number)} key={number}>{number}</span>
            ))}
          </Pagination>
        </Page>
      </>
    );
  }
}

export default connect()(Main)