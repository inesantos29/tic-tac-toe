import React, { Component } from 'react'
import { Square } from '../Square'
import { calculateWinner } from '../../utils/helpers'

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare = (i) => {
    const squares = this.state.squares[i]
    return <Square value={squares} onClick={() => this.handleClick(i)} />
  }

  render() {
    const { squares, xIsNext } = this.state
    const winner = calculateWinner(squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
