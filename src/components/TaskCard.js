import { useState } from "react";
import Modal from "./ui/Modal";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const TaskCard = ({ task }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  return (
    <div className="p-[0.5px] rounded-lg bg-gradient-to-l from-[#d6542c] to-[#124c81] mb-4">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-text">{task.title}</h2>
          <div className="flex gap-2">
            <button className="focus:outline-none" onClick={handleEdit}>
              <img src="/edit.svg" alt="Edit" className="w-5 h-5" />
            </button>
            <button className="focus:outline-none" onClick={handleDelete}>
              <img src="/delete.svg" alt="Delete" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <hr className="my-2 border-primary" />
        <p className="text-text">{task.description}</p>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <EditTask task={task} closeModal={setShowModal} />
      </Modal>
      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <DeleteTask task={task} closeModal={setShowDeleteModal} />
      </Modal>
    </div>
  );
};

export default TaskCard;
