import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LoadDatas } from "../../services/Datas";
import Button from "../../components/Button";
import './Datas.css'

const Datas = () => {
    const [datas, setDatas] = useState([-1, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1])
    const history = useHistory()

    const loadTasks = async () => {
        const [hasErrors, response] = await LoadDatas()

        if (hasErrors) return

        setDatas(response)
    }

    const handleSeeRegisterClick = () => {
        history.push('/register')
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <div className='container-datas'>
            <div className='label-datas'>
                <label>Registros de Covid</label>
            </div>
            <ul className='lista-datas'>
                {datas.map(data => {
                    return (
                        (data === -1) ?
                            <div className='titulos-datas'>
                                <p>Data Registro</p>
                                <p>Cidade</p>
                                <p>Bairro</p>
                                <p>Tosse</p>
                                <p>Sintomas</p>
                                <p>Óbito</p>
                            </div>
                            :
                            <li key={data} >
                                <div className='data-container'>
                                    <p >28/10/2021</p>
                                    <p >Florianopol</p>
                                    <p >Ingle</p>
                                    <p >Sdddim</p>
                                    <p >Sim</p>
                                    <p >Não</p>
                                </div>
                            </li>
                    )
                })}
            </ul>
            <div className='button-group'>
                <Button id='btn-see-register' children='Register Data' onClick={handleSeeRegisterClick}></Button>
            </div>
        </div >
    );
}

export default Datas;

