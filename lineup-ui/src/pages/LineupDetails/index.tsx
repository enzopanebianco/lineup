import React, { useState } from 'react';
import Field from '../../components/field';
import Header from '../../components/header';
import LineupInfo from '../../components/lineupInfo';
import Sidebar from '../../components/sidebar';
import Button from '../../globalStyles/button';
import attackSVG from '../../assets/images/attack.svg'
import defenderSVG from '../../assets/images/defender.svg'
import * as Css from './styles';
import FieldOptions from '../../components/fieldOptions';
import Player from '../../components/player';

function LineupDetails() {
    const [change,setChange] = useState(false);


    return (
        <>
            <Css.Container>
                <Sidebar />
                <section>
                    <Header />
                    <Css.LineupMain>
                        <article>
                            <Css.LineupBox padding="30px">
                                <Field >
                               
                                </Field>
                            </Css.LineupBox>
                            <Css.ButtonsBox>
                                <Button color="#4AE812" text='Ataque'
                                    active={change}
                                 icon={attackSVG} onClick={()=>setChange(!change)}
                                />
                                <span>/</span>
                                <Button color="#FF6B35" text='Defesa'
                                    active={!change?true:false}
                                    icon={defenderSVG} onClick={()=>setChange(!change)}
                                />
                            </Css.ButtonsBox>
                        </article>
                        <article>
                            <Css.LineupBox padding="10px 20px">
                                <LineupInfo />
                            </Css.LineupBox>
                            <Css.LineupBox padding='15px 20px' >
                                <FieldOptions />
                            </Css.LineupBox>
                        </article>
                    </Css.LineupMain>
                </section>
            </Css.Container>
        </>
    )
}

export default LineupDetails;