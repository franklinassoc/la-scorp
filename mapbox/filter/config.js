const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    'pk.eyJ1IjoiZnJhbmthZG1pbiIsImEiOiJjajhvbW51NHYwNWI2MzNyejV4Y2s0aDN4In0.FSOtZl6iInZhjDUiS6Xscg',
  CSV: "https://docs.google.com/spreadsheets/d/1SrdM1eT4sNml-oq4_I6wodyFBhflymjUAmdSDIrjykY/gviz/tq?tqx=out:csv&sheet=local-parks",
  center: [-92.172, 31.096],
  zoom: 6,
  title: "Louisiana Outdoor Recreation Inventory",
  description:
    "LORI provides location and site characteristic data for outdoor recreation sites within Louisiana.",
  sideBarInfo: ["Park_Name", "Owner_Entity", "Full_Address", "Description"],
  popupInfo: ["Park_Name"], // Can accept only one field
  filters: [
    {
      type: "checkbox",
      title: "No Public Access: ",
      columnHeader: "Closed", // Case sensitive - must match spreadsheet entry
      listItems: ["X"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "checkbox",
      title: "Playground: ",
      columnHeader: "Playground", // Case sensitive - must match spreadsheet entry
      listItems: ["1","2"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
  ],
};