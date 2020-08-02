import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../PageDefault';
import FormField from '../../components/FormField';
import SelectField from '../../components/SelectField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import videosRepository from '../../repositories/videos.js';
import categoriesRepository from '../../repositories/categories.js';

function VideoPage() {
  const initialData = {
    categoryId: '',
    name: '',
    url: '',
  };

  const [categories, setCategories] = useState([]);

  const history = useHistory();
  const { value, handleOnChange } = useForm(initialData);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    videosRepository.createVideo({
      categoryId: value.categoryId,
      name: value.name,
      url: value.url,
    }).then(() => {
      console.log("CADASTRADO");
      history.push('/');
    });
  };

  useEffect(() => {
    categoriesRepository.getAllCategories().then((data) => {
      setCategories([...data]);
    }).catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <form>
        <FormField label="Nome:" value={value.name} name="name" onChange={handleOnChange} />
        <FormField label="URL:" type="url" value={value.url} name="url" onChange={handleOnChange} />
        <SelectField values={categories} label="Selecione uma categoria" name="categoryId" value={value.categoryId} onSelect={handleOnChange} />
        <Button onClick={handleOnSubmit}>Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria" className="navegation">Ir para cadastro de categoria</Link>
    </PageDefault>
  );
}

export default VideoPage;
