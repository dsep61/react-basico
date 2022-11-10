import Button from '../Button/Button';
import './Main.css';

const Main = ({text}) => {
  return (
    <div className='main'>
        <h1>{text}</h1>
        <Button variant="cancelar" text="Cancelar"/>
        <Button variant="confirmar" text="Confirmar"/>
    </div>
  )
}

export default Main