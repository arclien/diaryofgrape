import styled from 'styled-components';
import {
  BaseModal,
  NewBaseButton,
  textEllipsis,
  white,
  gray120,
  flexCenterY,
  flexContainer,
  mobileSubTitle14,
  mobileSubTitle16,
} from 'remember-ui';

export const Container = styled(BaseModal)`
  position: relative;
`;

export const Modal = styled.div`
  background-color: ${white};

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;
`;

export const Header = styled.div`
  ${flexCenterY};

  position: relative;
  justify-content: space-between;
  height: 50px;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.4);
  background-color: #d7d7d7;
`;

Header.Right = styled.div`
  width: 50px;
  max-width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid ${white};
`;

Header.Right.Icon = styled.div`
  width: 14px;
  height: 14px;
  color: rgba(0, 0, 0, 0.4);
`;

Header.Title = styled.div`
  ${flexContainer('flex-start', 'center')};

  width: calc(100vw - 50px);
  max-width: calc(100vw - 50px);
  text-align: left;
  padding: 16px 18px;
  border-right: 2px solid rgba(0, 0, 0, 0.4);
`;

Header.Title.Text = styled.div`
  ${mobileSubTitle14({ color: '#000' })};
  ${textEllipsis};

  width: 100%;
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: #e5e5e5;
`;

Body.Main = styled.div`
  height: ${({ hasFooter }) => (hasFooter ? `calc(100% - 72px)` : `100%`)};

  overflow-y: auto;
`;

export const Footer = styled.div`
  ${flexCenterY};

  width: 100%;
  box-shadow: inset 0 1px 0 0 ${gray120};
  background-color: #e5e5e5;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 15px;
  height: 72px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Button = styled(NewBaseButton)`
  ${mobileSubTitle16({ color: '#000' })};

  height: 42px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.3), inset 4px 4px 0 0 #ffefb4,
    inset -4px -4px 0 0 #d4ab0f;
  border: solid 2px #000000;
  background-color: #e9be1a;
`;
