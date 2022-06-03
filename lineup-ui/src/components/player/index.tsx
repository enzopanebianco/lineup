import {  Container } from './styles';
import Draggable from 'react-draggable';
import { useField } from '../../contexts/FieldContext';
import { forwardRef, useCallback, useRef } from 'react';
import BallPlayer from '../UI/ballPlayer';


type PlayerProps = {
  key: number;
  name: string;
  x: number;
  y: number;
  id: number;
}


const Player = forwardRef(({ name, x, y, id }: PlayerProps, fieldRef:any) => {

  const { teamColors, handlePositionPlayers,phaseGame } = useField();
  const ref = useRef(null);

  const handleNewPosition = useCallback((event: any) => {
    if (fieldRef.current) {
      const availLeft = fieldRef.current.offsetLeft;
      const availTop = fieldRef.current.offsetTop;

      const newXPosition = event.x - availLeft;
      const newYPosition = event.y - availTop;
  
      handlePositionPlayers({
        playerId: id,
        x: newXPosition,
        y: newYPosition
      })
    }
  }, [])

  return (

    <Draggable
      onStop={handleNewPosition}
      axis="both"
      // defaultPosition={{ x, y }}
     position={{x,y}}
      bounds={{ left: 2, right: 280, top: 10, bottom: 340 }}
    >
      <Container ref={ref}>

        <BallPlayer primary_color={teamColors.primaryColor}
          secondary_color={teamColors.secundaryColor} />

        <span>{name}</span>
      </Container>
    </Draggable>
  );
}
)
export default Player;