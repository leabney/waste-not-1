import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../components/Card';

class Resources extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Page Not Found'>
                        <p>404 Error:  The page you requested was not found.</p>
                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Resources;