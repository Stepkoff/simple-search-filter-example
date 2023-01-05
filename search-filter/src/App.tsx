import React, {useEffect, useState} from 'react';
import './App.scss';
import {IUser} from "./users";
import Table from "./components/Table";

const App = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const res = await fetch(`http://localhost:5000?q=${query}`);
    return res.json();
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers()
        .then(response => setUsers(response));
    }, 1000)
    return () => {
      clearTimeout(timer);
    }
  }, [query]);
  return (
    <div className={'App'}>
      <input type="text" className={'search'} placeholder={'Search'} onChange={(event) => setQuery(event.target.value)}/>
      <Table users={users}/>
    </div>
  );
};

export default App;
