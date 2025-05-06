"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { TopBar } from "@/components/top-bar";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Recipe = {
  _id: string;
  food_name: string;
  ingredients: string;
  instructions: string;
};

export default function Recipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get("/api/recipe")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div className="pt-16">
      <TopBar />
      <Container id="recipe">
        {recipes.map((recipe) => (
          <Card key={recipe._id} className="m-4">
            <CardHeader>
              <CardTitle>{recipe.food_name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p className="mt-2"><strong>Instructions:</strong> {recipe.instructions}</p>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}
