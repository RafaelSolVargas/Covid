import api from '../../services/api'
import { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import './SendFile.css'

const SendFile = () => {
    const history = useHistory()
    const [file, setFile] = useState()

    const handleSeeRegisterClick = () => {
        history.push('/register')
    }
    const handleSeeDatasClick = () => {
        history.push('/datas')
    }
    const handleSendFileClick = () => {
        let data = new FormData();
        data.append("file", file);

        api.post('data/file', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    return (
        <div className='container-datas'>
            <div className='container-titulo'>
                <h2 className='titulo'>Envie um arquivo CSV</h2>
            </div>
            <div className='file-container'>
                <input type='file' name='file' onChange={handleChange} />
            </div>
            <div className='button-group'>
                <Button id='btn-send' children='Send' onClick={handleSendFileClick}></Button>
            </div>
            <div className='button-group'>
                <Button id='btn-see-register' children='Register' onClick={handleSeeRegisterClick}></Button>
                <Button id='btn-see-data' children='Data' onClick={handleSeeDatasClick}></Button>
            </div>
        </div >
    );
}

export default SendFile;

