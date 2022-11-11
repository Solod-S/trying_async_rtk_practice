import { useGetPokemonByNameQuery } from 'redux/pokemonApi';
import { Link } from 'react-router-dom';

import { useState } from 'react';
export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  const {
    data,
    error,
    isLoading,
    isUninitialized,
    refetch,
    isFetching,
    isError,
  } = useGetPokemonByNameQuery(pokemonName, {
    // skip: true,
    skip: pokemonName === '',
    // пропускать запуск пока pokemonName пустая строка (возвращает тру)
    // pollingInterval: 1000,
    // автообновление фетча через ..
    refetchOnFocus: true,
    // когда вернемся на вкладку обновит фетч (setupListeners(store.dispatch); в тор добавить нужно)
    refetchOnReconnect: true,
    // рефертч при скачке интернета
  });
  // const { isUninitialized } = после перого запуска будет фелс (отслеживаем был ли первый запуск)
  // const { isLoading  } = для кеша (для лоадера не годиться, так как отслеживает первый запус, на первом запуске тру на сл фелс, оно считает что в кеше уже есть данные)
  // const { isFetching  } = для лоадера (стартует с фелс, когда грузиться то тру и заканчивает фелс)
  // const { refetch   } = делает рефетч (  <button type="button" onClick={refetch}>Refetch</button>)
  // const { isError    } = если ошибка то будет тру
  const handleOnSubmit = event => {
    event.preventDefault();

    setPokemonName(event.currentTarget.elements.pokemonName.value);
    event.currentTarget.reset();
  };
  console.log(`data`, data);
  console.log(`error`, error);
  console.log(`isLoading`, isLoading);
  return (
    <>
      <Link to="todos">TODOS</Link>
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      <button type="button" onClick={refetch} disabled={isUninitialized}>
        Refetch
      </button>
      {isFetching && <h2>LOADING....</h2>}
      {isError && error.originalStatus === 404 && (
        <h3>
          {pokemonName} {error.data}
        </h3>
      )}
      {}
      {data && !isFetching && !isError && <h1>{data.name}</h1>}
    </>
  );
};
