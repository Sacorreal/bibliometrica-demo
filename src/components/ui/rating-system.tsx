"use client";
import "@/app/globals.css";
import { Star } from "lucide-react";
import { useState } from "react";

export default function RatingSystem() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [totalStars, setTotalStars] = useState(5);

  [...Array(totalStars)].map((star, index) => {
    const currentRating = index + 1;

    return (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={currentRating}
          onChange={() => setRating(currentRating)}
        />
        <span
          className="star"
          style={{
            color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
          }}
          onMouseEnter={() => setHover(currentRating)}
          onMouseLeave={() => setHover(0)}
        >
          <Star />
        </span>
      </label>
    );
  });
}
