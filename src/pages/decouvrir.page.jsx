import React, { useEffect, useState } from "react";
import { items } from '../component/items.jsx';
import "../style/decouvrir.css"
import { getMasterclasses } from "../API/masterclass.js"

export { Page }

function Page() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [masterclasses, setMasterclasses] = useState(null);
    const [filteredItems, setFilteredItems] = useState([]);

// amélioration possible avec une itération sur les tags pour choisir.
    useEffect(() => {
        getMasterclasses()
            .then((masterclass) => {
                let save = masterclass.map((element)=>{
                    return { name:element.title,
                            category: element.tags[0]?.name,
                            tag: null
                    }
                })      
                    setMasterclasses(save)
                    setFilteredItems(save)
            })
            .catch((error) => console.error(error))
    }, [])
    
    if (masterclasses) {
  
        console.log(typeof masterclasses);
        console.log(masterclasses);
        console.log(typeof items);
        console.log("items",items);
    }



    let filters = ['Piano','Violin','Guitar','Flute','Saxophone','Trumpet','Clarinet','Cello','Harp','Trombone',
        'Drums','Bass Guitar','Oboe','Accordion','Ukulele','Banjo','Mandolin','Harmonica','Tuba','Viola'];

    const handleFilterButtonClick = (selectedCategory) => {
        if (!selectedCategory) return
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
                let temp = masterclasses.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            console.log("AAAAAAAAAA",masterclasses)
            // logic gate en prévisualisation
            if(!masterclasses){
                return []
            }
            setFilteredItems(masterclasses);
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
                                    className={`button ${selectedFilters?.includes(category) ? "active" : ""
                                        }`}
                                    key={`filters-${idx}`}>
                                    {category}
                                </button>
                            </li>))}
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