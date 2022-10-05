import React, { useState } from 'react';
import styled from 'styled-components';
import Hanoi from './projects/hanoi';
import Prison from './projects/prison';


const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const header = {
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center'
}
const projects = {
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center'
}

const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['Tower of Hanoi Redux', 'Prison Escape: Freedom Awaits'];

const pages = [Hanoi, Prison];


function TabGroup() {
    const [active, setActive] = useState(types[0]);
    const mapping = () => {
        pages.map((arr) => {
            return <p>{arr}</p>
        })
    }
    return (
        <>
            <ButtonGroup>
            {types.map((data, i) =>
                <button onClick={() => setActive(pages[i])}>
                    {data}
                </button>
            )}
            {active}
            </ButtonGroup>
            </>
    );
};

    /*return (
        <>
            <ButtonGroup>
                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                ))}

            </ButtonGroup>
            <p />
            <div>
                DisplayPage({active})
            </div>
        </>
    );
}*/

const Projects = () => {
    return (
        <div>
            <h1 style={header}>Take a look at my projects <br /></h1>
            <br />
            <div style={projects}>
                <TabGroup/>
            </div>
        </div>
    );
};

export default Projects;
