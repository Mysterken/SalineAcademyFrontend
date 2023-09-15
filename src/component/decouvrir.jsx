import React, { useEffect, useState } from "react";
import { items } from './items.jsx';

export default function Decouvrir(){

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
    let filters = ["Violon", "Piano", "Voix", "Flute"];
  
    const handleFilterButtonClick = (selectedCategory) => {
      if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
  
    useEffect(() => {
      filterItems();
    }, [selectedFilters]);
  
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = items.filter((item) => item.category === selectedCategory);
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...items]);
      }
    };

return <>
    <div>
       <h1> Découvrir</h1>
        <div id='colDecouvrir'>
            <aside id='searchFilter'>
                <h2>Catégories</h2>
                <ul className="buttons-container">
                    {filters.map((category, idx) => (
                    <li>
                        <button
                            onClick={() => handleFilterButtonClick(category)}
                            className={`button ${
                            selectedFilters?.includes(category) ? "active" : ""
                            }`}
                            key={`filters-${idx}`}>
                        {category}
                        </button>
                    </li> ))}
                </ul>
            </aside>
            
            <div id="cardDisplay" className="items-container">
                {filteredItems.map((item, idx) => (
                <div key={`items-${idx}`} className="item image cardProf">
                    <section className="nameDesc">
                        <p>{item.name}</p>
                        <span className="category">{item.category}</span>
                    </section>
                </div>
                ))}
            </div>
        </div>
      </div>
</>
}