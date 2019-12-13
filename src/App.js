import React from "react";
import { observer } from "mobx-react";
import Player from './components/Player/Player'

@observer
export default class App extends React.Component {

    render() {
        return (
            <div>
                <Player name='Dealer' />
                <Player name='Player' />
            </div>
        );
    }
}
