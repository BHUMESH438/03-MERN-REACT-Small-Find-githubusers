import React from 'react';
import styled from 'styled-components';
import { useGitContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useGitContext();
  console.log(repos);
  //value will be returned as language={label,value,stars}
  const languages = repos.reduce((acc, crr) => {
    const { language, stargazers_count } = crr;
    if (!language) return acc; //if the property is null return empty {}
    if (language) {
      acc[language] = {
        ...acc[language],
        label: language,
        value: acc[language] ? acc[language].value + 1 : 1,
        stars: acc[stargazers_count] ? acc[stargazers_count].stars + 1 : 1
      };
    }
    return acc;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5); //will give the obj to array

  console.log(languages);
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map(items => {
      return { ...items, value: items.stars };
    })
    .slice(0, 5);

  //destructuring right away the stars and forks form the {} of return reduce
  // if we didnt destructure then name={stars:{},forks:{}}
  //in acc star property and its [name] acc.star[name]
  let { stars, forks } = repos.reduce(
    (acc, crr) => {
      const { stargazers_count, name, forks } = crr;
      acc.stars[stargazers_count] = { label: name, value: stargazers_count };
      acc.forks[forks] = { label: name, value: forks };
      return acc;
    },
    {
      stars: {},
      forks: {}
    }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
