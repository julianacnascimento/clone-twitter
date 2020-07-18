import React from 'react';
import { Tab } from 'styled-icons/material-outlined';

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
          
          <Tab>Tweets</Tab>

          <Tweets>
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
          </Tweets>

      </Container>
  );
}

export default Feed;