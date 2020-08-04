import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';
import ColorPicker from '../../components/ColorPicker'
import color from '../../components/ColorPicker/index.js'



export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar caso.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva seu caso detalhadamente</p>
                
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}>
                <ColorPicker/>
                    <textarea style={{
                backgroundColor: color
              }}
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}></textarea>
                    <input 
                    placeholder="Valor em reais" 
                    value={value}
                    onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                    
                    

                </form>
            </div>
        </div>
    )
}