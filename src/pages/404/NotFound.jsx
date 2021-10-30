/* Libraries */
import { React } from "react";
import { useHistory } from 'react-router-dom'
import Button from "../../components/Button";
import './NotFound.css'

const NotFound = () => {
    const history = useHistory()

    const handleDatasClick = () => {
        history.push('/') // Sends the users tasks screen
    }

    return (
        <>
            <form>
                <div className='container-not-found'>
                    <h2>Página não encontrada</h2>
                    <div className='label-not-found'>
                        <label>Clique aqui para ver os dados</label>
                    </div>
                    <div className='button-not-found'>
                        <Button id='btn-datas-not-found' onClick={handleDatasClick} children='Datas'></Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NotFound;