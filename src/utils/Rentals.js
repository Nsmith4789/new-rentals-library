// Book class with a constructor.
class Rentals {
    constructor(title, year, rentalId, availableRentals) {
      this.title = title;
      this.year = year;
      this.rentalId = rentalId;
      this.availableRentals = availableRentals;
      //Function to reduce available rentals when rented out.
      this.rentRental = function () {
        if (this.availableRentals > 0) {
          this.availableRentals -= 1;
        } else if (this.availableRentals == 0) {
          console.log(`No available Rentals of ${this.title}`);
        }
      };
      //Function to increase the available copies when a book is returned.
      this.returnRental = function () {
        this.availableRentals += 1;
      };
    }
  }
  //Library class with constructor function
  class MovieLibrary {
    constructor(name, rentals) {
      //String name
      this.name = name;
      //Array of book objects
      this.rentals = rentals;
      // Function to add a book to the Library
      this.addRental = function (newRental) {
        const oldRental = this.rentals.find(
          (rental) =>
            rental.rentalId.toLowerCase() == newRental.rentalId.toLowerCase() &&
            rental.title.toLowerCase() == newRental.title.toLowerCase()
        );
        if (oldRental != undefined) {
          oldRental.availableRentals += newRental.availableRentals;
        } else {
          this.rentals.push(newRental);
        }
      };
      //Function to remove a book from the library using the isbn.
      this.removeRental = function (rentalId) {
        const rental = this.rentals.find(
          (rental) => rental.rentalId.toLowerCase() == rentalId.toLowerCase()
        );
        this.rentals.splice(rental, 1);
      };
      //Function to find a book by the title of the book.
      this.findRentalByTitle = function (searchedTitle) {
        const matchedRental = this.rentals.find(
          (rental) => rental.title.toLowerCase() == searchedTitle.toLowerCase()
        );
        //If the book is found return the book
        if (matchedRental != undefined) {
          return matchedRental;
        } else {
          //Log if no book is found
          console.log(`No rental found with a title of ${searchedTitle}`);
        }
      };
      //Function to display the details of all books in the Library.
      this.listAllRentals = function () {
        this.rentals.forEach((rental) => {
          console.log(`Title: ${rental.title}
  Year: ${rental.year}
  Rental Id: ${rental.rentalId}
  Available Rentals: ${rental.availableRentals}
  `);
        });
      };
    }
  }
  
  export { Rentals, MovieLibrary };