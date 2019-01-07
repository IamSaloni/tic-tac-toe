import React from 'react'
import Square from './Square'

class Board extends React.Component {
    renderSquare(i){
       return <Square />;
    }
    render() {
        const status = 'Next Player : X';
        return (
            <div>
                <div>
                    {status}
                </div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board