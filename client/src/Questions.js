import React, {Component} from 'react';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: props.topic.name,
      listOfQuestions: []
    };
  }

  render() {
  	<div>
  		<QuestionEntry listOfQuestions={this.state.listOfTopics}
  					endTest={props.endTest}>
  		</QuestionEntry>
    </div>
  }
}

export default Questions;