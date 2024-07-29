import React from "react";

const DeleteConfirmationModal = ({ onDeleteConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Account Deletion</h2>
        <p className="my-4">
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onDeleteConfirm}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
