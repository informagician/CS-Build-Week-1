import React from 'react';

const About = () => {
    return(
    <div>
        <h2>About the Game</h2>
        <p>According to <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wikipedia</a>:</p>
        <blockquote>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.</blockquote>
        <h2>Rules of the Game</h2>
        <ul>
            <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation</li>
            <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
            <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
            <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
        </ul>
    </div>
    )
}

export default About;