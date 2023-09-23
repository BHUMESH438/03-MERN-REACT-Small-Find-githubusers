import React from 'react';
import styled from 'styled-components';
import { GithubContext, useGitContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useGitContext();
  let languages = repos.reduce((acc, crr) => {
    // lang !== null; dynamicobj['key'] = value
    if (crr['language']) {
      acc[crr['language']] = acc[crr['language']] + 1 || 1;
    }
    return acc;
  }, {});

  // STEP 2 - Chart Data
  const chartData = [
    {
      label: 'html',
      value: '290'
    },
    {
      label: 'css',
      value: '260'
    },
    {
      label: 'js',
      value: '180'
    },
    {
      label: 'ts',
      value: '140'
    }
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={chartData} />
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
