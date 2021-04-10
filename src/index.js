// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


// Create a react component
function buttonClickMe(){
    return "Please, "
}

const App = () => {
    const buttonText = { text:"Click Me!" };
    const style = { backgroundColor: 'blue', color: 'white' }

    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:00 PM"/>
            <CommentDetail author="Alex" timeAgo="Yesterday at 5:00 PM"/>
            <CommentDetail author="Jane" timeAgo="Today at 9:00 PM"/>
        </div>
    );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'))



