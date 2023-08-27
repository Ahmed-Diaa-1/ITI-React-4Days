import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function CardPageDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  console.log(location);

  return <div></div>;
}
