import overlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({
	children,
  onClose,
}: {
	children: JSX.Element;
  onClose: () => void;
}) {
  return (
    <div className={overlayStyles['overlay']} onClick={onClose}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element,
	onClose: PropTypes.func,
};

export default ModalOverlay;