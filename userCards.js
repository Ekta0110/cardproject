import React, { Component } from "react";
import Records from './Records.json';

class UserCards extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null
  };

  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="clearfix">
        <div className="row">
          {this.state.data.map((data) => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                  <div className="posts">
                    { Records.map(post => {
                      return(
                        <div key={ post.id } className="post">
                          <h4>{ post.userId }</h4>
                        <h3>{ post.title }</h3>
                        <p>{ post.body }</p>
                        </div>
                      )
                      
                    }) }
                  </div>
                  </h5>
                
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}



export default UserCards;
