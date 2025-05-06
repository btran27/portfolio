"use client";

import { Container } from "@/components/container";
import { TopBar } from "@/components/top-bar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {

  return (
    <div className="pt-16">
      <TopBar />
      <Container id="gallery">
        <p>pics here</p>
      </Container>
    </div>
  );
}
