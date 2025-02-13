const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-red-500">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
