'use client';

import { useState, createContext, useContext } from 'react';

import { data } from '../../_assets/_data/data';

const PeopleContext = createContext();

export const PeopleContextProvider_58 = ({ children }) => {
  const [people, setPeople] = useState(data);
  console.log('data', data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PeopleContext.Provider value={{ people, removePerson }}>
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeopleContext_58 = () => {
  return useContext(PeopleContext);
};
