import {SurveyEditor} from "./components/surveyjs-builder-react";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor() {
        super()

        this.onSaveSurvey = this.onSaveSurvey.bind(this);
    }

    onSaveSurvey(text) {
        console.log(text);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="demo">
                <SurveyEditor onSaveSurvey={this.onSaveSurvey}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById("content"));
