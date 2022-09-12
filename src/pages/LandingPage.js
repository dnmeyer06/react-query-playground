import React from "react";
import { Link } from "react-router-dom";
import { apiKeys } from "../config";

function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>
      <div>
        <div>
          <Link to={`${apiKeys.CHARACTER}/1`}>Characters</Link>
        </div>
        <div>
          <Link to={`${apiKeys.LOCATION}/1`}>Locations</Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
