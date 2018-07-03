import React from 'react';
import CommentForm from './CommentForm';


const Comment = Styled.p`
display: block;
text-align: left;
align-items: center;
margin: 5px 16px;
font-size: 14px;
`;

const User = Styled.span`
font-weight: bold;
`;

const CommentText = Styled.span`
margin-top: 10px;
`;


class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ''
        }
    }

    handleComment = event => {
        this.setState({newComment: event.target.value})
      }
    
      addComment = (event) => {
        event.preventDefault();
        const newComment = { text: this.state.newComment, username: window.localStorage.getItem('username') };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, newComment: '' });
      }

    render() {
        return (
            <div>
            <div>
           {this.state.comments.map(comment => {
              return (<Comment><User key={item.id}>{/*logged-in user*/}</User> 
              <CommentText key={item.id}>{item.text} </CommentText></Comment>)
          })}
          <CommentForm  handleComment={this.handleComment} addComment={this.addComment} comment={this.state.newComment} />
          </div>
          </div>
        
        )
    }
}

export default Comments;