import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage, useToast } from '../../hooks/toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { left: '120%', opacity: 0, transform: 'rotateZ(0deg)' },
      enter: { left: '0%', opacity: 1, transform: 'rotateZ(360deg)' },
      leave: { left: '120%', opacity: 0, transform: 'rotateZ(0deg)' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
