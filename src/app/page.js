import Image from "next/image";
import Movie from "@/components/Movie";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="my-12 text-6xl text-center">Hollywood Rentals</h1>
      <h2 className="text-3xl text-center">All The Latest Titles</h2>
<div>
  <h3>Rentals</h3>
<div>
<Movie
title={"Fast Five"}
year={"2017"}
rentalId={"F5F17"}
availableRentals={6}
/>

<Movie
title={"Woodlawn"}
year={"2019"}
rentalId={"WLN19"}
availableRentals={2}
/>

<Movie
title={"Gone In 60 Seconds"}
year={"2005"}
rentalId={"GI60S"}
availableRentals={1}
/>

<Movie
title={"13 Hours"}
year={"2016"}
rentalId={"13H16"}
availableRentals={4}
/>
</div>

</div>

    </main>
  );
}
