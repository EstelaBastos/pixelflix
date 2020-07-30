import React, { useState } from 'react';
import PageDefault from './../PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../components/FormField'

function CadastroCategoria() {

    const initialData = {
        name: '',
        description: '',
        color: '#0c0722'
    };
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(initialData);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setCategories([...categories, category]);
        setCategory(initialData);
    };
    const setValue = (key, value) => {
        setCategory({
            ...category,
            [key]: value
        });
    };
    const handleOnChange = (event) =>{
        setValue(event.target.getAttribute('name'), event.target.value);
    };

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <form onSubmit={handleOnSubmit}>
                <FormField label="Nome:" value={category.name} name="name" onChange={handleOnChange}/>
                <div>
                    <label>
                        Descrição:
                        <textarea type="text" value={category.description} name="description"
                            onChange={handleOnChange} />
                    </label>
                </div>
                <FormField label="Cor:" type="color" value={category.color} name="color" onChange={handleOnChange}/>
                <button>Cadastrar</button>
            </form>

            <ul>{categories.map((category, indice) => {
                return (<li key={`${category}${indice}`}>{category.name}</li>)
            })}</ul>

            <Link to="/">Ir para home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;