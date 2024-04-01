import React from "react";

const Icon = ({ size = "30", fill = "#bfbfbf", ...other }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" {...other}>
      <path
        d="m620.42 553.915 41.919-41.92-41.92-41.919-162.622-162.622-41.92 41.92 161.919 162.622L415.14 674.619l41.92 41.92 163.358-162.624zM.263 495.356c-9.376 296.35 231.998 537.756 528.38 528.38 268.158-8.672 486.396-226.974 495.1-495.132C1033.12 232.318 791.746-9.088 495.364.32 227.206 8.192 8.232 227.198.264 495.356zm65.792 90.367C15.464 282.142 282.15 15.456 585.732 66.047 775.106 97.12 925.44 248.19 957.249 437.564c50.56 303.55-216.127 570.236-519.676 519.676-189.375-31.104-339.71-181.438-371.517-371.517z"
        fill={fill}
      />
    </svg>
  );
};
export default React.memo(Icon);