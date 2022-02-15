import { BallPlayer, Container } from './styles';
import Draggable from 'react-draggable';
import { useField } from '../../contexts/FieldContext';
import { memo } from 'react';

type PlayerProps = {
  key:number;
  name: string;
}

function Player({ name }: PlayerProps) {
  console.log(name)
  const { teamColors } = useField();
  return (
    <Draggable
      defaultPosition={{ x: 2, y: 3 }}
      bounds={{ left: 2, right: 280, top: 10, bottom: 340 }}
    >
      <Container>
        <BallPlayer primary_color={teamColors.primaryColor}
          secondary_color={teamColors.secundaryColor} />
        <span>{name}</span>
      </Container>
    </Draggable>
  );
}

export default memo(Player,(prevProps, nextProps) => {
  return Object.is(prevProps.key, nextProps.key)
});