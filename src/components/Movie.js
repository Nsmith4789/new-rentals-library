'use client'
import React, { useState } from 'react';

export default function Movie({ title, year, rentalId, availableRentals, updateRental, deleteRental }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedRental, setUpdatedRental] = useState({
    title,
    year,
    rentalId,
    availableRentals,
  });

  function handleUpdateFormSubmit(e) {
    e.preventDefault();
    const newRental = {
      title: updatedRental.title,
      year: parseInt(updatedRental.year, 10),
      rentalId: updatedRental.rentalId,
      availableRentals: parseInt(updatedRental.availableRentals, 10),
    };

    setUpdatedRental(newRental);
    updateRental(newRental);
    setIsUpdating(false);
  }

  return (
    <div className="p-5 m-6 border border-green-600 rounded-md bg-purple-700">
      {isUpdating ? (
        <form onSubmit={handleUpdateFormSubmit} className="p-5 m-5 border border-red-950">
          <div>
            <input
              className="p-1 border rounded border-red-950"
              placeholder="Title"
              type="text"
              name="title"
              id="title-input"
              required
              value={updatedRental.title}
              onChange={(e) => setUpdatedRental({ ...updatedRental, title: e.target.value })}
            />
            <input
              className="p-1 border rounded border-red-950"
              placeholder="Year"
              type="number"
              name="year"
              id="year-input"
              required
              value={updatedRental.year}
              onChange={(e) => setUpdatedRental({ ...updatedRental, year: e.target.value })}
            />
            <input
              className="p-1 border rounded border-red-950"
              placeholder="Rental Id"
              type="text"
              name="rentalId"
              id="rental-id-input"
              required
              value={updatedRental.rentalId}
              onChange={(e) => setUpdatedRental({ ...updatedRental, rentalId: e.target.value })}
            />
            <input
              className="p-1 border rounded border-red-950"
              placeholder="Available Rentals"
              type="number"
              name="availableRentals"
              id="available-rental-input"
              required
              min={0}
              value={updatedRental.availableRentals}
              onChange={(e) => setUpdatedRental({ ...updatedRental, availableRentals: e.target.value })}
            />
          </div>
          <button className="p-2 my-2 border border-red-600 hover:bg-red-600" type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div>
            Title: {title}
            <br />
            Year: {year}
            <br />
            Rental Id: {rentalId}
            <br />
            Available Rentals: {availableRentals}
          </div>
          <div>
            <button onClick={() => setIsUpdating(true)} className="p-2 my-2 border border-red-600 hover:bg-red-600">Update</button>
            <button onClick={() => deleteRental(rentalId)} className="p-2 my-2 ml-2 border border-red-600 hover:bg-red-600">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
