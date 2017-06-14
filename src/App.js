import React, { Component } from "react"

import EditorContainer  from './Containers/EditorContainer'
import { CompilerList } from './Common/Common'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compiler: CompilerList[0] // AssemblyScript
        }
    }

    componentWillMount() {
        // remove spinner
        let spinner = document.getElementById('load-spinner');
        document.body.removeChild(spinner);

        let url = window.location.href;
        let compiler = url.split('#')[1];
        if (compiler) {
            CompilerList.forEach(value => {
                if (compiler.toLowerCase() === value.toLowerCase()) {
                    this.setState({ compiler });
                }
            });
        }
    }

	render() {
        const { compiler } = this.state;
        return (
            <EditorContainer compiler={ compiler }/>
        );
	}
}
