import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LoadDatas } from "../../services/Datas";
import Button from "../../components/Button";
import './Datas.css'

const Datas = () => {
    const [datas, setDatas] = useState([])
    const history = useHistory()

    const loadTasks = async () => {
        const [hasErrors, response] = await LoadDatas()

        if (hasErrors) return console.log('Erro')

        setDatas(response.datas)
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
            <div className='lista-datas'>
                <div className='titulos-datas'>
                    <p>Data Registro</p>
                    <p>Cidade</p>
                    <p>Bairro</p>
                    <p>Sexo</p>
                    <p>Tosse</p>
                    <p>Óbito</p>
                </div>
            </div>
            <ul className='lista-datas'>
                {datas.map(data => {
                    return (
                        <li key={data.id} >
                            <div className='data-container'>
                                <p >{data.data}</p>
                                <p >{data.cidade}</p>
                                <p >{data.bairro}</p>
                                <p >{data.sexo}</p>
                                <p >{(data.tosse === true) ? 'sim' : 'não'}</p>
                                <p >{(data.obito === true) ? 'sim' : 'não'}</p>
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

