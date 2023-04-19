import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';

function Modal({ children, title, onClose }: {
  children: JSX.Element;
  title?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const buttonClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.addEventListener('keydown', buttonClose);
    return () => {
      document.body.removeEventListener('keydown', buttonClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={`${modalStyles.layout}`}>
        <div className={`${modalStyles['header']} text text_type_main-medium`}>
          {title ?? <br />}
          <div onClick={onClose} className={`${modalStyles['icon-wrapper']}`}>
            <CloseIcon type='primary' />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    document.body
  );
};

Modal.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string,
	onClose: PropTypes.func,
};

export default Modal;