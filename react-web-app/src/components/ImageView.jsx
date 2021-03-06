import React, { Component } from 'react';
import Config from '../config';
import './ImageView.css';

class ImageView extends Component {
    state = {
        fullName: 'Name',
        category: 'Category',
        links: ['Links']
    };

    render() {
        return (
            <div className='wrapper'>
                <div className='input-container'>
                    <h3>Check an animal</h3>
                    <form name='form'>
                        <input name='file' type='file' className='file-input' />

                    </form>
                    <button onClick={() => this.classify(this.getInfo)}>Check</button>
                </div>

                <div className='information-container'>
                    <div className='half centered-content right-bordered'>
                        <h4>{this.state.fullName}</h4>
                    </div>

                    <div className='half centered-content'>
                        <h4>{this.state.category}</h4>
                    </div>

                    <div className='cb'></div>

                    <div className='links centered-content'>
                        <ul>
                            {this.state.links.map(link => <li key={link}>{link}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    classify = (func) => {
        let file = document.forms['form']['file'].files[0];

        if (file == null) {
            return;
        }

        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    const result = data.predictions[0];

                    if (result.probability > 0.8) {
                        func(result.tagName);
                    }
                }
            }
        };

        let fileReader = new FileReader();
        fileReader.onload = function () {
            const URL = 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/b9a1c1ac-eaca-4965-be2a-47615d7fb885/classify/iterations/Iteration1/image';
            let bytes = new Uint8Array(this.result);
            request.open('POST', URL, true);
            request.setRequestHeader('Prediction-Key', 'b3d0774404464793a6117c6d1c89b8c0');
            request.setRequestHeader('Content-Type', 'application/octet-stream');
            request.send(bytes);
        };

        fileReader.readAsArrayBuffer(file);
    }

    getInfo = (speciesTag) => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    let links = [];

                    for (const link of data.Links) {
                        links.push(link.Link);
                    }

                    this.setState({
                        fullName: data.FullName,
                        category: data.Category,
                        links: links
                    });
                }
            }
        };

        request.open('POST', Config.API_URL + '/api/species-tag', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({ tag: speciesTag }));
    }
}

export default ImageView;
