// import Logo from '../public/vite.svg'
import LogoUrl, { ReactComponent as Logo } from './assets/react.svg'

function App() {
  return (
    <>
      {/* <Logo /> */}
      <img src={LogoUrl} alt="" className="logo" />
    </>
  )
}

export default App
