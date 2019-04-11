import React, {Component} from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className="lds-loader-overlay">
                <div className="lds-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>);
    }
}