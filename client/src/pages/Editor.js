import React from 'react';
import './Editor.css'
const axios = require('axios');

class Posting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      content: '',
      // board : [{author : null, title : null, content : null}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.postingArticle = this.postingArticle.bind(this);
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  postingArticle() {
    return axios
      .post('http://codeflights.xyz/post/write', {
        author: this.state.author + 1,
        title: this.state.title,
        content: this.state.content,
      })
    
  }

  render() {
    return (
      <div className="editor">
        <video muted play="true" autoPlay loop>
          <source src="/Videos/background.mp4" type="video/mp4"></source>
        </video>
        <div className="article-container">
        <form className="article"
          onSubmit={(e) => {
            e.preventDefault();
            this.postingArticle();
          }}
        >
          
            <input type="text"
              className='title'
              placeholder='제목을 입력하세요'
              onChange={this.handleChange('title')}
            ></input>
          
          
            <textarea className='contents'
              rows={20}
              onChange={this.handleChange('content')}
            ></textarea>
          
          <button
            type='submit'
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    );
  }
}

export default Posting;
