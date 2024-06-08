import React from 'react';
import { Button, Heading, Pane } from 'evergreen-ui';

const mainPage: React.FC = () => {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Pane textAlign="center">
        <Heading size={800} marginBottom={16}>¡Bienvenido a mi proyecto con Evergreen!</Heading>
        <Button appearance="primary">Hacer Clic</Button>
      </Pane>
    </Pane>
  );
}

export default mainPage;
