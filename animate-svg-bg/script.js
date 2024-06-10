const svg = document.getElementById("svg-bg");
const path = document.getElementById("path");

function anime(){
  path.animate(
    [
      {
        d: "path('M 0 0 Q 50 80 100 0 Z')"
      },
      {
        d: "path('M 0 0 Q 50 30 100 0 Z')",
        
      },
    ],
    {
      duration: 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  ); 
}
anime();
