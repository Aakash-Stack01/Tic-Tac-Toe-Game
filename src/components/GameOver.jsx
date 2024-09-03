export default function GameOver({ winner, resetGame }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} Won</p> : <p>It's a draw </p>}
      <p>
        <button onClick={resetGame}> Rematch!</button>
      </p>
    </div>
  );
}
