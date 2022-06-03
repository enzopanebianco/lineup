
import { useField } from '../../contexts/FieldContext';
import * as Css from './styles';

function FieldOptions() {
  const { setTeamColors, teamColors } = useField();
  return (
    <>
      <Css.Container>

        <div>
          <label>Primária</label>
          <input
            onChange={(e) =>
              setTeamColors({
                primaryColor: e.target.value,
                secundaryColor: teamColors.secundaryColor
              })}
            type="color" />
        </div>
        <div>
          <label htmlFor="">Secundária</label>
          <input type="color" onChange={(e) =>
            setTeamColors({
              secundaryColor: e.target.value,
              primaryColor: teamColors.primaryColor
            })} />
        </div>
        <div>
          <p>Time</p>
          <input type="text" />
        </div>

      </Css.Container>
    </>
  );
}

export default FieldOptions;