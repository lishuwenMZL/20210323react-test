// /**
//  * 井棋游戏
//  * 
//  * **/ 

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './test.css'

// // 按钮
// function Square(props) {
//   return (
//     <button
//       className="square"
//       onClick={ props.onClick }>
//         { props.value }
//     </button>
//   );
// }

// // 9个方块
// class Board extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     }
//   }
  
//   // 点击事件
//   handleClick(i) {
//     const squares = this.state.squares.slice()
//     if (calculateWinner(squares) || squares[i]) return

//     squares[i] = this.state.xIsNext ? 'X' : 'O'
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     })
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={ ()=>{ this.handleClick(i) }}
//       />
//     )
//   }

//   render () {
//     const winner = calculateWinner(this.state.squares)
//     let status;
//     if (winner) status = 'winner: ' + winner
//     else status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')

//     return (
//       <div>
//         <div className="status">{ status }</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// // 棋盘
// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// // ========================================

// // const element = <h1> h11111111111 </h1>

// // function Text (props) {
// //   return (
// //     <div>
// //       div {props.name}
// //     </div>
// //   )
// // }

// // class Text extends React.Component { 
// //   render () { 
// //     return <h1> helle, { this.state.name }</h1>
// //   }
// // }


// // ReactDOM.render(
// //   <Game />,
// //   // element,
// //   // <Text name="angle"/>,
// //   document.getElementById('root')
// // );
