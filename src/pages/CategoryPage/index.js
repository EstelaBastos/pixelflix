import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import categoriesRepository from '../../repositories/categories.js';

function CategoryPage() {
  const initialData = {
    name: '',
    description: '',
    color: '#0c0722',
  };

  const [categories, setCategories] = useState([]);
  const { value, handleOnChange, clearForm } = useForm(initialData);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, value]);
    clearForm(initialData);
  };

  useEffect(() => {
    categoriesRepository.getAllCategories().then((data) => {
      setCategories([...data]);
    }).catch((error) => console.log(error.message));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form>
        <FormField label="Nome:" value={value.name} name="name" onChange={handleOnChange} />
        <FormField label="Descrição:" type="textarea" value={value.description} name="description" onChange={handleOnChange} />
        <FormField label="Cor:" type="color" value={value.color} name="color" onChange={handleOnChange} />
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
        {categories.map((category) => (<li key={`${category.name}`}>{category.name}</li>))}
      </ul>
      <Link to="/" className="navegation">Ir para home</Link>
    </PageDefault>
  );
}

export default CategoryPage;
