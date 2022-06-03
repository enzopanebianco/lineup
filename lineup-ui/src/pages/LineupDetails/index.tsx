import Field from '../../components/field';
import Header from '../../components/header';
import LineupInfo from '../../components/lineupInfo';
import Sidebar from '../../components/sidebar';
import Button from '../../components/UI/button';
import attackSVG from '../../assets/images/attack.svg'
import defenderSVG from '../../assets/images/defender.svg'
import * as Css from './styles';
import FieldOptions from '../../components/fieldOptions';
import { BiExpand } from 'react-icons/bi'
import { useField } from '../../contexts/FieldContext';
import { useState } from 'react';
import './animation.css';

function LineupDetails() {
    const { changePositionOnPhaseGame, phaseGame } = useField();
    const [expandField, setExpandField] = useState(false);
    return (
        <>
            <Css.Container>
                <Sidebar />
                <section>
                    <Header />
                    <Css.LineupMain>
                        <article>
                            <Css.LineupBox
                                className={expandField ? 'animateExpandField' : ''}
                                padding="30px 30px 2px 30px">
                                <Field />
                                <i onClick={() => setExpandField(!expandField)}>
                                    <BiExpand size={25} color="white" />
                                </i>
                            </Css.LineupBox>
                            <Css.ButtonsBox>
                                <Button color="#4AE812" text='Ataque'
                                    active={phaseGame === 'attack'}
                                    icon={attackSVG} onClick={() =>
                                        changePositionOnPhaseGame('attack')
                                    }
                                />
                                <span>/</span>
                                <Button color="#FF6B35" text='Defesa'
                                    active={phaseGame === 'defense'}
                                    icon={defenderSVG} onClick={() =>
                                        changePositionOnPhaseGame('defense')
                                    }
                                />
                            </Css.ButtonsBox>

                        </article>
                        <article>
                            <Css.LineupBox padding="10px 20px">
                                <LineupInfo />
                            </Css.LineupBox>

                            <Css.LineupBox padding='15px 20px'>
                                <Css.TextareaDescription placeholder='Explique sua escalação...' />
                            </Css.LineupBox>
                            <Css.SaveOptions>
                                <Css.LineupBox padding='5px 15px' >
                                    <FieldOptions />

                                </Css.LineupBox>
                                <Button color="#0062ff"
                                    active
                                    text="Salvar"
                                />
                            </Css.SaveOptions>
                        </article>
                        {/* <article>
                            <Css.ButtonInfoPositions >
                                <BsThreeDotsVertical size={20}/>
                            </Css.ButtonInfoPositions>
                        </article> */}
                    </Css.LineupMain>
                </section>
            </Css.Container>
        </>
    )
}

export default LineupDetails;