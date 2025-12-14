'use client';

import { useState } from 'react';
import Wrapper from '../../_assets/_wrapper/Tutorials_58';

import { data } from '../../_assets/_data/data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling_58 = () => {
  const [people, setPeople] = useState(data);
  console.log('data', data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <Wrapper>
      <div className='container'>
        <h3>prop drilling</h3>
        <List people={people} removePerson={removePerson} />
      </div>
    </Wrapper>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling_58;
