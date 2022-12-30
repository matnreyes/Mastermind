import Guess from './Guess'

const Game = () => {
  return (
    <div className="bg-slate-300 flex">
      <h2>Guess the code to save humanity</h2>
      <ul className=''>
        <li className='p-10'>
          <Guess />
        </li>
        <li className='p-10'>
          <Guess />
        </li>
      </ul>
    </div>
  )
}

export default Game