import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { enableBodyScrollLock } from 'utils/utils';
import useScrollLock from 'hooks/useScrollLock';

import {
  Container,
  Modal,
  Header,
  Body,
  Footer,
  Button,
} from './MobileModal.styles';

const modalType = 'mobileFullModal';

export const MobileModal = ({
  isOpen,
  onClose,
  onAfterOpen = () => {},

  title,
  submit,
  submitText,
  submitButtonDisabled = false,

  isLoading = false,
  bodyScrollLockTargetId,
  delegateCloseControl = false,
  children,
}) => {
  const { modalId, bodyScrollLockTarget } = useScrollLock(
    bodyScrollLockTargetId,
    modalType
  );

  return (
    <Container
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      bodyScrollLockTarget={bodyScrollLockTarget}
    >
      <Modal>
        <Header>
          <Header.Title>
            <Header.Title.Text>{title}</Header.Title.Text>
          </Header.Title>
          <Header.Right>
            <Header.Right.Icon onClick={() => onClose()}>
              <FontAwesomeIcon icon={faTimes} />
            </Header.Right.Icon>
          </Header.Right>
        </Header>
        <Body id={modalId && `${modalType}${modalId}`}>
          <Body.Main hasFooter={!!submit}>{children}</Body.Main>
          {submit && (
            <Footer>
              <Button
                className="not-draggable"
                size="large"
                block
                onClick={() => {
                  enableBodyScrollLock(
                    bodyScrollLockTarget,
                    delegateCloseControl
                  );
                  submit();
                }}
                disabled={submitButtonDisabled}
                isLoading={isLoading}
              >
                {submitText}
              </Button>
            </Footer>
          )}
        </Body>
      </Modal>
    </Container>
  );
};
