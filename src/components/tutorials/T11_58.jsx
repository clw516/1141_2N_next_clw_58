import Wrapper from '../../assets/wrappers/Tutorials_58';
const T11_58 = () => {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log('count', count);
  };

  return (
    <Wrapper>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </Wrapper>
  );
};

export default T11_58;
