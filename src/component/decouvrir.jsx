import { useState } from 'react'
import React from 'react'
import TextWithAnimation from './filter.jsx'

export default function Decouvrir(){

return <>
    <div>
       <h1> Découvrir</h1>
        <div id='colDecouvrir'>
            <TextWithAnimation></TextWithAnimation>
            <div id='cardDisplay'>
                <section class='cardProf'>
                     <div class="image"></div>    
                    {/* <div class='blackBox'></div>
                    <img src="https://c.stocksy.com/a/xuK700/z9/1748707.jpg" alt="" /> */}
                    <section class='nameDesc'>
                        <p>Nom prenom</p>
                        <span>Biographie de la personne</span>
                    </section>
                </section>
                <section class='cardProf'>
                     <div class="image"></div>    
                    {/* <div class='blackBox'></div>
                    <img src="https://c.stocksy.com/a/xuK700/z9/1748707.jpg" alt="" /> */}
                    <section class='nameDesc'>
                        <p>Nom prenom</p>
                        <span>Biographie de la personne</span>
                    </section>
                </section>
                <section class='cardProf secondCard'>
                     <div class="image"></div>    
                    {/* <div class='blackBox'></div>
                    <img src="https://c.stocksy.com/a/xuK700/z9/1748707.jpg" alt="" /> */}
                    <section class='nameDesc'>
                        <p>Nom prenom</p>
                        <span>Biographie de la personne</span>
                    </section>
                </section>
                <section class='cardProf secondCard'>
                     <div class="image"></div>    
                    {/* <div class='blackBox'></div>
                    <img src="https://c.stocksy.com/a/xuK700/z9/1748707.jpg" alt="" /> */}
                    <section class='nameDesc'>
                        <p>Nom prenom</p>
                        <span>Biographie de la personne</span>
                    </section>
                </section>
                
            </div>
        </div>
      </div>
</>

}
