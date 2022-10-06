const redsec = document.getElementById("redsec");
const bluesec = document.getElementById("bluesec");
const greensec = document.getElementById("greensec");
const yellowsec = document.getElementById("yellowsec");
const fancysec = document.getElementById("fancysec");

const redColors = [
  "#FF6263",
  "#DE4839",
  "#BF3325",
  "#E6425E",
  "#E83A59",
  "#EF5354",
  "#EB4D4B",
];

const blueColors = [
  "#1B98F5",
  "#23C4ED",
  "#383CC1",
  "#12B0E8",
  "#51E1ED",
  "#120E43",
  "#03203C",
];

const greenColors = [
  "#1FAA59",
  "#38CC77",
  "#02B290",
  "#50DBB4",
  "#3DBE29",
  "#4DD637",
  "#1C8D73",
];

const yellowColors = [
  "#E8BD0D",
  "#EDBF69",
  "#E5D68A",
  "#DDD101",
  "#AF9D5A",
  "#F4CE6A",
  "#A77B06",
];

const fancyColors = [
  "#8D3DAF",
  "#758283",
  "#E07C24",
  "#E03B8B",
  "#FF6666",
  "#242B2E",
  "#03C6C7",
  "#5A20CB",
  "#6A1B4D",
  "#CAD5E2",
  "#35BDD0",
  "#0D0D0D",
];

// Single color card
const card = (color, appendChildComponents) => {
  const colorDiv = document.createElement("div");
  colorDiv.setAttribute(
    "class",
    `bg-[${color}] h-[350px] xs:h-60 w-[73%] xs:w-40 rounded-md hover:scale-110 duration-300 
    my-5 mx-[11px] cursor-pointer flex justify-center items-center`
  );
  colorDiv.setAttribute("onclick", `copyColor("${color}")`);
  const innerSpan = document.createElement("span");
  innerSpan.innerHTML = color;
  innerSpan.setAttribute(
    "class",
    `text-lg font-semibold bg-[gray] px-6 py-1 rounded-lg hidden`
  );
  innerSpan.setAttribute("id", `${color}`);
  colorDiv.appendChild(innerSpan);
  appendChildComponents.appendChild(colorDiv);
};

// All colors are randaring
redColors.map((color) => {
  card(color, redsec);
});

blueColors.map((color) => {
  card(color, bluesec);
});

greenColors.map((color) => {
  card(color, greensec);
});

yellowColors.map((color) => {
  card(color, yellowsec);
});

fancyColors.map((color) => {
  card(color, fancysec);
});
/// till here

// Click color box to copy
const copyColor = (color) => {
  const getColor = document.getElementById(color);
  getColor.style.display = "block";
  setTimeout(() => {
    getColor.style.display = "none";
  }, 1000);
  navigator.clipboard.writeText(color);
};
