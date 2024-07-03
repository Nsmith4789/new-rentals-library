import React from 'react'

export default function Movie({title, year, rentalId, availableRentals}) {
  return (
    <div className="p-5 m-6 border border-green-600 rounded-md bg-purple-700">
      Title: {title}
      <br></br>
      Year: {year}
      <br></br>
      Rental Id: {rentalId}
      <br></br>
      Available Rentals:{availableRentals}
    </div>
  )
}
