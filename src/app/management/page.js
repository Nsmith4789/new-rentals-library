'use client'
import React, { useState } from 'react';
import Movie from '@/components/Movie';
import { Rentals, MovieLibrary } from '@/utils/Rentals'; // Rename Library to MovieLibrary

export default function ManagementPage() {
  const [library, setLibrary] = useState(
    new MovieLibrary("Hollywood", [
      new Rentals("Fast Five", 2015, "f515", 5),
      new Rentals("Gone In 60 Seconds", 2008, "GI60", 2),
      new Rentals("Woodlawn", 2017, "WL17", 3),
      new Rentals("Friday", 2005, "FR05", 6)
    ])
  );

  function handleAddRental(e) {
    e.preventDefault();

    const newRental = new Rentals(
      e.target.title.value,
      parseInt(e.target.year.value), // ParseInt to ensure it's a number
      e.target.rentalId.value,
      parseInt(e.target.availableRentals.value)
    );

    const newLibrary = new MovieLibrary(library.name, [...library.rentals, newRental]);
    setLibrary(newLibrary);

    e.target.reset(); // Reset the form after adding the rental
  }

  return (
    <div>
      <h1 className="my-12 text-6xl text-center">ManagementPage For Rentals</h1>

      <form onSubmit={handleAddRental} className="p-5 m-5 border border-red-950">
        <h2 className="mb2 text-2xl">Add Rental</h2>
        <div>
          <input className="p-1 border rounded border-red-950" placeholder="Title" type="text" name="title" id="title-input" required />
          <input className="p-1 border rounded border-red-950" placeholder="Year" type="number" name="year" id="year-input" required />
          <input className="p-1 border rounded border-red-950" placeholder="Rental Id" type="text" name="rentalId" id="rental-id-input" required />
          <input className="p-1 border rounded border-red-950" placeholder="Available Rentals" type="number" name="availableRentals" id="available-rental-input" required min={0} />
        </div>
        <button className="p-2 my-2 border border-red-600 hover:bg-red-600" type="submit">Submit</button>
      </form>

      {library.rentals.map(rental => (
        <Movie
          key={rental.rentalId} // Add a key prop to Movie component
          title={rental.title}
          year={rental.year}
          rentalId={rental.rentalId}
          availableRentals={rental.availableRentals}
        />
      ))}
    </div>
  );
}
