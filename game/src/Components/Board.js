import React from "react";
import Square from "./Square";
// import Game from "./Game";
import PropTypes from "prop-types";

const renderSquare = (props, i) => {
  return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
};

const Board = props => {
  return (
    <div>
      <div className="board-row">
        {renderSquare(props,0)}
        {renderSquare(props,1)}
        {renderSquare(props,2)}
      </div>
      <div className="board-row">
        {renderSquare(props,3)}
        {renderSquare(props,4)}
        {renderSquare(props,5)}
      </div>
      <div className="board-row">
        {renderSquare(props,6)}
        {renderSquare(props,7)}
        {renderSquare(props,8)}
      </div>
    </div>
  );
};

Board.defaultProps = {
  squares: [],
  onClick: () => {
    console.log("default function was called");
  }
};

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func
};

export default Board;
