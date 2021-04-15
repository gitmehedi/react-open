// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// Create a react component
function buttonClickMe(){
    return "Please, "
}

const App = () => {
    const buttonText = { text:"Click Me!" };
    const style = { backgroundColor: 'blue', color: 'white' }
    window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
            );

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to pause?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author="Sam"
                timeAgo="Today at 4:00 PM"
                content="This is general blog posts"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author="Alex"
                timeAgo="Yesterday at 5:00 PM"
                content="This is general blog posts"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author="Jane"
                timeAgo="Today at 9:00 PM"
                content="This is general blog posts"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'))



