import React, { useState, useEffect } from 'react';
import Grid from './components/Grid'
import './App.css';
import Control from './components/Control';

function App() {

  const [ isAlive, setIsAlive ] = useState()
  let [ gen, setGen ] = useState(0)
  let [ color, setColor ] = useState('black')
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let grid = []
    for(let i=0;i<=624;i++){
      let row = Math.floor(i/25)
      let col = i % 25
      let cell = {'row':row,'col':col,'status':0}
      grid.push(cell)
    }
    setIsAlive(grid)
    // eslint-disable-next-line 
  },[])

  const setRandom = () => {
    let grid = []
    for(let i=0;i<=624;i++){
      let row = Math.floor(i/25)
      let col = i % 25
      let rand = Math.floor(Math.random() * Math.floor(2));
      let cell = {'row':row,'col':col,'status':rand === 1 ? 1 : 0}
      grid.push(cell)
    }
    setIsAlive(grid)
    setGen(0)
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        console.log('Hello')
        start()
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isActive, seconds]);

  const setClear = () => {
    let grid = []
    for(let i=0;i<=624;i++){
      let row = Math.floor(i/25)
      let col = i % 25
      let cell = {'row':row,'col':col,'status':false}
      grid.push(cell)
    }
    setIsAlive(grid)
    setGen(0)
  }

  const start = () => {
    
    let nextGen = []
    for(let i=0;i<625;i++){
      let cell
      let score = 0
      // NW
      if(Number(isAlive[i]['row']) - 1 >= 0 && Number(isAlive[i]['col']) - 1 >= 0) {
        score += isAlive[i-26]['status']
      }
      // N
      if(Number(isAlive[i]['row']) - 1 >= 0) {
        score += isAlive[i-25]['status']
      }
      // NE
      if(Number(isAlive[i]['row']) - 1 >= 0 && Number(isAlive[i]['col']) + 1 < 25) {
        score += isAlive[i-24]['status']
      }
      // W
      if(Number(isAlive[i]['col']) - 1 >= 0){
        score += isAlive[i-1]['status']
      }
      // E
      if(Number(isAlive[i]['col']) + 1 < 25){
        score += isAlive[i+1]['status']
      }
      // SW
      if(Number(isAlive[i]['row']) + 1 < 25 && Number(isAlive[i]['col']) - 1 >= 0) {
        score += isAlive[i+24]['status']
      }
      // S
      if(Number(isAlive[i]['row']) + 1 < 25) {
        score += isAlive[i+25]['status']
      }
      // SE
      if(Number(isAlive[i]['row']) + 1 < 25 && Number(isAlive[i]['col']) + 1 < 25) {
        score += isAlive[i+26]['status']
      }
      if(isAlive[i]['status'] === 1){
        if(score < 2){
          cell = {...isAlive[i], 'status':0}
        } else if(score < 4){
          cell = {...isAlive[i], 'status':1}
        } else if(score >= 4){
          cell = {...isAlive[i], 'status':0}
        }
      } else {
        if(score === 3){
          cell = {...isAlive[i], 'status':1}
        } else {
          cell = {...isAlive[i], 'status':0}
        }
      }
      nextGen.push(cell)
    }
    setIsAlive(nextGen)
    setGen(gen = gen + 1)
  }

  return (
    <>
    <h1>Conway's Game of Life</h1>
    <p>Currently at Gen # {gen}</p>
    <Grid isAlive={isAlive} setIsAlive={setIsAlive} color={color}/>
    <Control setRandom={setRandom} setClear={setClear} start={start} gen={gen} setGen={setGen} setColor={setColor} color={color} setIsActive={setIsActive} isActive={isActive} />
    </>
  );
}

export default App;
