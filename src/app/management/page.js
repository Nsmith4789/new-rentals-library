"use client";
import React, { useState, useEffect } from "react";
import Movie from "@/components/Movie";
import { Rentals, MovieLibrary } from "@/utils/Rentals"; // Corrected import of MovieLibrary
import { getAllDocuments } from "@/utils/firebaseUtils";
import { db } from "../../../firebase.config";

export default function ManagementPage() {
  const [library, setLibrary] = useState(new MovieLibrary("Hollywood", []));

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "rentals");
        if (documents && documents.length > 0) {
          const rentalInstances = documents.map(
            (doc) =>
              new Rentals(
                doc.title,
                doc.year,
                doc.rentalId,
                doc.availableRentals
              )
          );
          setLibrary(
            (prevLibrary) =>
              new MovieLibrary("Hollywood", [
                ...prevLibrary.rentals,
                ...rentalInstances,
              ])
          );
        } else {
          console.log("No documents found for 'rentals'");
        }
      } catch (error) {
        console.error("Failed fetching data", error);
      }
    }

    fetchData();
    return () => {
      console.log("get all docs cleanup");
    };
  }, []);

  function handleAddRental(e) {
    e.preventDefault();

    const newRental = new Rentals(
      e.target.elements.title.value,
      parseInt(e.target.elements.year.value, 10), // ParseInt to ensure it's a number
      e.target.elements.rentalId.value,
      parseInt(e.target.elements.availableRentals.value, 10)
    );

    const newLibrary = new MovieLibrary(library.name, [
      ...library.rentals,
      newRental,
    ]);
    setLibrary(newLibrary);

    e.target.reset(); // Reset the form after adding the rental
  }

  function updateRental(rentalToUpdate) {
    console.log("Updated Rental From Library", rentalToUpdate);

    const newRentals = library.rentals.map((rental) =>
      rental.rentalId === rentalToUpdate.rentalId ? rentalToUpdate : rental
    );

    const newMovieLibrary = new MovieLibrary("Hollywood", newRentals);
    setLibrary(newMovieLibrary);
  }

  function deleteRental(rentalIdToDelete) {
    const updatedRentals = library.rentals.filter(
      (rental) => rental.rentalId !== rentalIdToDelete
    );
    const updatedLibrary = new MovieLibrary(library.name, updatedRentals);
    setLibrary(updatedLibrary);
  }

  return (
    <div>
      <h1 className="my-12 text-6xl text-center">ManagementPage For Rentals</h1>

      <form
        onSubmit={handleAddRental}
        className="p-5 m-5 border border-red-950"
      >
        <h2 className="mb-2 text-2xl">Add Rental</h2>
        <div>
          <input
            className="p-1 border rounded border-red-950"
            placeholder="Title"
            type="text"
            name="title"
            id="title-input"
            required
          />
          <input
            className="p-1 border rounded border-red-950"
            placeholder="Year"
            type="number"
            name="year"
            id="year-input"
            required
          />
          <input
            className="p-1 border rounded border-red-950"
            placeholder="Rental Id"
            type="text"
            name="rentalId"
            id="rental-id-input"
            required
          />
          <input
            className="p-1 border rounded border-red-950"
            placeholder="Available Rentals"
            type="number"
            name="availableRentals"
            id="available-rental-input"
            required
            min={0}
          />
        </div>
        <button
          className="p-2 my-2 border border-red-600 hover:bg-red-600"
          type="submit"
        >
          Submit
        </button>
      </form>

      {library.rentals.map((rental) => (
        <Movie
          key={rental.rentalId} // Ensure each Movie has a unique key
          title={rental.title}
          year={rental.year}
          rentalId={rental.rentalId}
          availableRentals={rental.availableRentals}
          updateRental={updateRental}
          deleteRental={deleteRental}
        />
      ))}
    </div>
  );
}
