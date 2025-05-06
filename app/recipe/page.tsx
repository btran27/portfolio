"use client";

import { Container } from "@/components/container";
import { TopBar } from "@/components/top-bar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("/api/recipe")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="pt-16">
      <TopBar />
      <Container id="gallery">
        {recipes.map((post) => (
          <p>Hello</p>
          ))}
      </Container>
    </div>
  );
}
