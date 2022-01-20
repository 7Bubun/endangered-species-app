import React, { Component } from 'react';
import Config from '../config';
import logo from '../logo.svg'
import './InfoView.css';

class InfoView extends Component {
    state = {};

    render() {
        return (
            <div className='container'>
                <div className='sidebar'>
                    {this.state.allSpecies == null
                        ? <div className='sidebar-element'>Loading...</div>
                        : this.state.allSpecies.map(species => <div key={species}
                            className='sidebar-element' onClick={() => this.getData(species)}>{species}</div>)}
                </div>

                <div className='content'>
                    <div className='title'>
                        <h2 className='header2'>{this.state.title == null ? 'Encyclopedia' : this.state.title}</h2>
                    </div>

                    <div className='image'>
                        <img src={this.state.imageURL == null ? logo : this.state.imageURL} alt='' />
                    </div>

                    <div className='text'>
                        {this.state.text == null ? 'Choose species on the sidebar to display information.'
                            : this.state.text.map(paragraph => <p key={paragraph}>paragraph</p>)}
                    </div>

                    <div className='footer'>
                        <div>
                            <div>Sources:</div>
                            {this.state.links == null ? '' : this.state.links.map(
                                link => <div key={link}> <a href={link} target='_blank' rel='noreferrer'>{link}</a></div>)}
                        </div>
                    </div>
                </div>

                <div className='empty'></div>
            </div>
        );
    }

    getSpecies() {
        const request = new XMLHttpRequest();
        request.onload = () => {
            let list = JSON.parse(request.responseText);

            for (let i = 0; i < list.length; i++) {
                list[i] = list[i].FullSpeciesName;
            }

            this.setState({ allSpecies: list });
        };

        request.open('GET', Config.API_URL + '/api/species', true);
        request.send();
    }

    getData(speciesName) {
        const request = new XMLHttpRequest();
        request.onload = () => {
            const data = JSON.parse(request.responseXML);
            let text = [];
            let links = [];

            for (const information of data.Details) {
                text.push(information.Information);
            }

            for (const link of data.Links) {
                links.push(link.Link);
            }

            this.setState({
                title: speciesName,
                text: text,
                imageURL: 'data:image/(png|jpg);base64, ' + data.Image,
                links: links
            });
        };

        request.open('POST', Config.API_URL + '/api/encyclopedia', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({ name: speciesName }));
    }
}

export default InfoView;
