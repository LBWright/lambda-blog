import React from 'react';

const CommentForm = props => {
    return (
        <div><form onSubmit={props.addComment}>
        <CommentForm type='text'
            className='form'
            placeholder='Add a comment...'
            value={props.comment}
            onChange={props.handleComment}
            />
        </form>
</div>
    )
}

export default CommentForm;