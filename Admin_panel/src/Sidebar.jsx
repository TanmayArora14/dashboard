import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const handleFilterClick = async (filter) => {
    try {
      let response;
      switch (filter) {
        case "End Year":
          // Implement logic for End Year filter
          console.log("End Year filter clicked");
          break;
        case "Topics":
          response = await fetch(
            "http://localhost:3000/api/dashboard?topic=oil"
          );
          break;
        case "Sector":
          response = await fetch(
            "http://localhost:3000/api/dashboard?sector=energy"
          );
          break;
        case "Region":
          // Implement logic for Region filter
          console.log("Region filter clicked");
          break;
        case "PEST":
          response = await fetch(
            "http://localhost:3000/api/dashboard?pest=economic"
          );
          break;
        case "Source":
          // Implement logic for Source filter
          console.log("Source filter clicked");
          break;
        case "SWOT":
          // Implement logic for SWOT filter
          console.log("SWOT filter clicked");
          break;
        case "Country":
          // Implement logic for Country filter
          console.log("Country filter clicked");
          break;
        default:
          break;
      }

      if (response) {
        const jsonData = await response.json();
        console.log(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
        <li className="sidebar-list-item">
          <div>Filters :-</div>
        </li>
        {/* Filters */}
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("End Year")}
          >
            End_Year
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("Topics")}
          >
            Topics
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("Sector")}
          >
            Sector
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("Region")}
          >
            Region
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("PEST")}
          >
            PEST
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("Source")}
          >
            Source
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("SWOT")}
          >
            SWOT
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            className="filter-button"
            onClick={() => handleFilterClick("Country")}
          >
            Country
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
