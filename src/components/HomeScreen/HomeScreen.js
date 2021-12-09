import Logo from './Logo'
import InputZap from './InputZap'
import ButtonStart from './ButtonStart'

export default function HomeScreen({ setPage }) {
  return (
    <div className="container">
      <Logo pathImage="./assets/img/logo.png" />
      <div>
        <InputZap />
        <ButtonStart text="Praticar React" setPage={setPage} />
      </div>
    </div>
  )
}