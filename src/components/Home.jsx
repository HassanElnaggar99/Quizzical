import './Home.css'

export default function Home(props) {
  return (
    <header className='home-header'>
      <h1 className='home-title'>Quizzical</h1>
      <p className='home-description'>Some description if needed</p>
      <button className='home-btn' onClick={props.changePage}>Start quiz</button>
    </header>
  )
}
