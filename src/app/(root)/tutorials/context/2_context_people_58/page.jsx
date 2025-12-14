'use client';

import Wrapper from '../../_assets/_wrapper/Tutorials_58';

import { usePeopleContext_58, PeopleContextProvider_58 } from './_context';

const PropDrilling_58 = () => {
  return (
    <PeopleContextProvider_58>
      <Wrapper>
        <div className='container'>
          <h3>Context API Demo</h3>
          <List />
        </div>
      </Wrapper>
    </PeopleContextProvider_58>
  );
};

const List = () => {
  const { people } = usePeopleContext_58();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePeopleContext_58();
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
