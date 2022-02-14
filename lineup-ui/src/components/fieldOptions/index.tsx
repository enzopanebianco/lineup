import React from 'react';
import { useField } from '../../contexts/FieldContext';
import { Container } from './styles';

function FieldOptions() {
  const {setTeamColors,teamColors} = useField();
  return (
    <>
      <Container>
        <div>
          <label>Primária</label>
          <input 
            onChange={(e)=>
              setTeamColors({primaryColor:e.target.value,
              secundaryColor:teamColors.secundaryColor})}
          type="color" />
        </div>
        <div>
          <label htmlFor="">Secundária</label>
          <input type="color" onChange={(e)=>
              setTeamColors({secundaryColor:e.target.value,
              primaryColor:teamColors.primaryColor})} />
        </div>
      </Container>
    </>
  );
}

export default FieldOptions;