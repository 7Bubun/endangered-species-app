import React, { Component } from 'react';
import img from '../tmp/img.jpg';
import logo from '../logo.svg'
import './InfoView.css';

class InfoView extends Component {
    state = {
        allSpecies: this.getSpecies()
    };

    render() {
        return (
            <div className='container'>
                <div className='sidebar'>
                    {this.state.allSpecies.map(species => <div key={species}
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
                        {this.state.text == null ? 'Choose species on sidebar to display information.'
                            : this.state.text}
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
        let list = [];
        //mock
        for (let i = 0; i < 20; i++) {
            list.push('Student' + Math.round(79800 * Math.random()));
        }

        return list;
    }

    getData(speciesName) {
        //mock
        this.setState({
            title: speciesName,
            text: this.getLoremIpsum(),
            imageURL: img,
            links: [
                'https://pl.wikipedia.org/wiki/Politechnika_Warszawska',
                'https://www.pw.edu.pl'
            ]
        });
    }

    //mock
    getLoremIpsum() {
        return ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            + 'Curabitur vel neque sed est hendrerit consequat. Phasellus et quam '
            + 'sed mi luctus egestas et ut felis. Phasellus sollicitudin id neque et tincidunt. '
            + 'Integer tempor justo massa, vel viverra nibh bibendum quis. Proin quis nulla euismod, '
            + 'posuere odio eget, placerat tortor. Quisque felis nisi, iaculis et dictum a, '
            + 'finibus quis augue. Quisque vitae nisl sapien. Aliquam erat volutpat. Donec tristique '
            + 'sollicitudin egestas. Pellentesque ligula lectus, feugiat sit amet velit ac, egestas volutpat urna. '
            + 'Sed feugiat maximus tortor, lacinia semper nunc auctor ac. Nam porta ullamcorper leo. '
            + 'Praesent augue massa, tristique vel neque quis, sagittis feugiat leo. '
            + 'Vestibulum et nulla sed sem pretium maximus. Proin ut est lorem. Pellentesque nisl eros, '
            + 'blandit vel malesuada a, tempor et risus. Nulla ultricies eleifend dictum. '
            + 'Nulla tristique, nunc eget hendrerit dictum, ipsum dolor interdum tellus, '
            + 'non vehicula elit quam iaculis risus. Nullam malesuada, sem sit amet convallis viverra, '
            + 'ipsum nulla bibendum justo, condimentum aliquet tellus libero sit amet dui. '
            + 'Praesent sollicitudin imperdiet luctus. Proin suscipit, eros a vestibulum ultricies, '
            + 'ante enim mollis orci, eget auctor mi libero ac tortor. Cras ex dolor, '
            + 'molestie in ultricies non, fermentum blandit nisl. Curabitur viverra leo '
            + 'id sapien convallis facilisis. Integer egestas felis non velit tincidunt laoreet. '
            + 'Pellentesque eu lectus sit amet orci condimentum sodales. Mauris id quam enim. '
            + 'Nam a quam at massa fermentum venenatis eget non urna. Donec dictum consectetur varius. '
            + 'Curabitur rutrum rhoncus urna et condimentum. Class aptent taciti sociosqu ad litora '
            + 'torquent per conubia nostra, per inceptos himenaeos. Vivamus a lectus vel diam vulputate '
            + 'placerat eu eu sem. Duis ullamcorper ex id tempor finibus. Ut at viverra felis, '
            + 'quis euismod metus. Aliquam fringilla sollicitudin nisi, a ultrices dui vehicula quis. '
            + 'Mauris tempor feugiat tellus sed mattis. Interdum et malesuada fames ac ante ipsum primis '
            + 'in faucibus. Nullam fringilla nisi fermentum, pulvinar ipsum ac, viverra nibh. '
            + 'Phasellus rhoncus nibh tortor, nec iaculis felis aliquet id. Ut eget metus elit. '
            + 'Vestibulum a leo nulla. Aenean est nunc, lacinia non consequat sit amet, congue a magna.'
        );
    }
}

export default InfoView;
