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
                        and accesible from the navigation bar on top of the page.
                    </p>
                </div>

                <div className='info'>
                    <h4>Map of Endangered Species</h4>
                    <p>
                        This functionality displays a world map and provides information about
                        location of endangered species inhabiting selected areas.
                        To select an area, simply click on it or choose the option "select my location"
                        to select your current location.
                    </p>
                </div>

                <div id='guardian-of-responisveness'></div>

                <div className='info'>
                    <h4>Species Classification</h4>
                    <p>
                        Species Classification helps identify endangered species based on an uploaded
                        photo. To identify an endangered species, upload an image and select "Identify".
                        The photo will be identified as a certain endangered species or it will not be identified as any.
                    </p>
                </div>

                <div className='info'>
                    <h4>Encyclopedia</h4>
                    <p>
                        All the endangered species present in our database have a small encyclopedia entry.
                        That way, you can learn more about endangered species in your area and around the world.
                    </p>
                </div>

                <div className='empty'></div>
            </div>
        );
    }
}

export default HomeView;
