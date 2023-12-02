import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="bg-dark">
      <div className="text-center">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;