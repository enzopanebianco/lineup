import * as Css from './styles';
import Button from '../../components/UI/button';
import LineupList from '../../components/lineupList';
import axios from 'axios';
import { useEffect } from 'react';

function Home() {
//771dab1d0568692c2b93770cb801e59c8663de2c27b2b27bc72b7f45e105c1d5


  async function test(){
    const res = await axios.get('https://receitaws.com.br/v1/cnpj/18522439000140',{
      headers:{
        Authorization: 'Bearer 771dab1d0568692c2b93770cb801e59c8663de2c27b2b27bc72b7f45e105c1d5'
      }
    })
    console.log(res)
  }

  useEffect(()=>{
    test()
  },[])

  return (
    <>
      <Css.Container>
        <Css.HomeHeader>
          <Css.Title>
            Home
          </Css.Title>
        <Css.HomeFilters>
        <Css.Input placeholder='digite o título da escalação...' />
        <Css.Select name="" id="">
          <option value="">Time</option>
        </Css.Select>
        <Css.Select name="" id="">
          <option value="">Formação</option>
        </Css.Select>
    
      <Button text='Pesquisar' color='orange' active  />    
        </Css.HomeFilters>
        </Css.HomeHeader>
        <LineupList />
      </Css.Container>
    </>
  );
}

export default Home;