import React from 'react';

import Toast from './Toast';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/toast';

interface ToastContainerprops {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerprops> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
