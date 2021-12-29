import React, { Component } from 'react';
import "./HomeView.css";

class HomeView extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>

                <div className='info'>
                    <h4>About</h4>
                    <p>
                        The purpose of this app is to make preserving endangered species
                        easy. Currently, 3 functionalities are offered. These are described below
                        and accesible from navigation bar on top of page.
                    </p>
                </div>

                <div className='info'>
                    <h4>Map of Endangered Species</h4>
                    <p>
                        This functionality displays map of world and gives information about
                        location of some of endangered species that live on selected area.
                        To select an area, simply click on it or choose option "select my localization"
                        to select your current localization.
                    </p>
                </div>

                <div id='guardian-of-responisveness'></div>

                <div className='info'>
                    <h4>Species Classification</h4>
                    <p>
                        Species Classification helps to...
                    </p>
                </div>

                <div className='info'>
                    <h4>Encyclopedia</h4>
                    <p>
                        Endangered species...
                    </p>
                </div>

                <div className='empty'></div>
            </div>
        );
    }
}

export default HomeView;
