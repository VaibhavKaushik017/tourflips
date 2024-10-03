import React from "react";
import { Button } from "../ui/button";
import { CarouselComponent } from "./Carousel";

function Discover() {
  return (
    <div className="w-[90%] grid gap-5 mx-auto py-8">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-4xl font-bold max-w-lg">
          Discover Popular Destinations
        </h2>
        <div>
          <span className="text-sm text-gray-400">I am flying from</span>
          <p className="text-xl">Lisbon, Portugal</p>
        </div>
      </div>
      
      <div>
        <CarouselComponent />
      </div>
    </div>
  );
}

export default Discover;
