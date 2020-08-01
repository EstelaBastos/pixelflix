import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function CadastroCategoria() {
  const initialData = {
    name: '',
    description: '',
    color: '#0c0722',
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
      [key]: value,
    });
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const data = await response.json();
      setCategories([...data]);
    });
  }, []);

  const handleOnChange = (event) => {
    setValue(event.target.getAttribute('name'), event.target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form>
        <FormField label="Nome:" value={category.name} name="name" onChange={handleOnChange} />
        <FormField label="Descrição:" type="textarea" value={category.description} name="description" onChange={handleOnChange} />
        <FormField label="Cor:" type="color" value={category.color} name="color" onChange={handleOnChange} />
        <Button onClick={handleOnSubmit}>Cadastrar</Button>
      </form>

      {
        categories.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <ul>
        {categories.map((value) => (<li key={`${value}`}>{value.name}</li>))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
