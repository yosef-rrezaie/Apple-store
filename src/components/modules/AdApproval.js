"use client";
import { useEffect } from "react";

function AdApproval() {
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/getProducts");
      const data = await res.json()
      console.log(data)
    }
    getProducts()
  }, []);
  return <div></div>;
}

export default AdApproval;
