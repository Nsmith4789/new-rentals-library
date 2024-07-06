import React from 'react'
import React, {useState} from 'react'

export default function Movie({title, year, rentalId, availableRentals}) {
  const [isUpdating, setIsUpdating] = useState(false)


  return (
    <div className="p-5 m-6 border border-green-600 rounded-md bg-purple-700">
{ isUpdating
  ?(
      <form className="p-5 m-5 border border-red-950">
        <div>
          <input className="p-1 border rounded border-red-950" placeholder="Title" type="text" name="title" id="title-input" required />
          <input className="p-1 border rounded border-red-950" placeholder="Year" type="number" name="year" id="year-input" required />
          <input className="p-1 border rounded border-red-950" placeholder="Rental Id" type="text" name="rentalId" id="rental-id-input" required />
          <input className="p-1 border rounded border-red-950" placeholder="Available Rentals" type="number" name="availableRentals" id="available-rental-input" required min={0} />
        </div>
        <button className="p-2 my-2 border border-red-600 hover:bg-red-600" type="submit">Submit</button>
      </form>
   ) : (
    <>
      <div>
      Title: {title}
      <br></br>
      Year: {year}
      <br></br>
      Rental Id: {rentalId}
      <br></br>
      Available Rentals:{availableRentals}
      </div>
      <div>
        <button className="p-2 my-2 border border-red-600 hover:bg-red-600">Update</button>
      </div>
      </>
)}
    </div>
  )
}
