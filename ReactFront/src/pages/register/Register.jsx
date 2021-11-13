import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { PostData } from "../../services/Datas";
import Button from "../../components/Button";
import './Register.css'

const Register = () => {
    const [values, setValues] = useState({
        data: '',
        cidade: '',
        bairro: '',
        sexo: '',
        tosse: false,
        obito: false,
        carro: ''
    })
    const history = useHistory()


    const handleValuesChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleRegisterClick = async () => {

        const [hasErrors, response] = await PostData(values)

        if (hasErrors) return console.log('Erro')

        console.log(response)
    }

    const handleSeeDataClick = () => {
        history.push('/') // Sends the users tasks screen
    }


    return (
        <>
            <form className='form-register'>
                <h2>Register</h2>

                <div className='container-register'>
                    <div className='form-group'>
                        <label htmlFor='cidade'>Cidade: </label>
                        <input type='text' name='cidade' id='cidade' onChange={handleValuesChange} placeholder='Coloque uma cidade' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bairro'>Bairro: </label>
                        <input type='text' name='bairro' id='bairro' onChange={handleValuesChange} placeholder='Coloque o bairro' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='data' className='labels-input'>Data: </label>
                        <input type='date' name='data' id='data' onChange={handleValuesChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='sexo'>Sexo: </label>
                        <div className='radio-container'>
                            <input type='radio' name='sexo' className='radio' value='masculino' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Masculino</label>
                            <input type='radio' name='sexo' className='radio' value='feminino' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Feminino</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tosse'>Tosse: </label>
                        <div className='radio-container'>
                            <input type='' name='tosse' className='radio' value='true' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='tosse' className='radio' value='false' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                    <select name="carro" id="cars" onChange={handleValuesChange}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>


                    <div className='form-group'>
                        <label htmlFor='obito'>Óbito: </label>
                        <div className='radio-container'>
                            <input type='radio' name='obito' className='radio' value='true' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='obito' className='radio' value='false' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                </div>
                <div className='break'></div>
                <div className='button-group'>
                    <Button id='btn-see-data' children='Datas' onClick={handleSeeDataClick}></Button>
                    <Button id='btn-post-data' children='Register' onClick={handleRegisterClick}></Button>
                </div>
            </form>
        </>
    );
}

export default Register;

