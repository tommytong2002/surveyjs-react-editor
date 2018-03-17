import React, {Component} from "react";
import PropTypes from 'prop-types';
import * as SurveyJSEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import "surveyjs-editor/surveyeditor.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import 'image-picker/image-picker/image-picker.css';
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "image-picker/image-picker/image-picker.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(SurveyKo, $);
widgets.select2(SurveyKo, $);
widgets.imagepicker(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

export class SurveyEditor extends Component {

    static propTypes = {
        editorOptions: PropTypes.object,
        onSaveSurvey: PropTypes.fun
    };

    static defaultProps = {
        editorOptions: {showEmbededSurveyTab: false}
    };

    constructor(props) {
        super(props);
        this.saveMySurvey = this.saveMySurvey.bind(this);
    }


    componentDidMount() {
        const editorOptions = this.props.editorOptions;

        const editor = new SurveyJSEditor.SurveyEditor(
            "surveyEditorContainer",
            editorOptions
        );

        editor.saveSurveyFunc = this.saveMySurvey;

        this.setState({
            editor: editor
        })
    }

    render() {
        return (
            <div id="surveyEditorContainer"/>
        );
    }

    saveMySurvey() {
        const text = this.state.editor.text;
        this.props.onSaveSurvey(text)
    }
}
