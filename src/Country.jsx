import React from "react";
// import List from "./List";
import BasicCountryInfo from './BasicCountryInfo'
import CountryFlag from './CountryFlag'

const Country = ({ c }) => {
  return (
  <div className='container'>
    <CountryFlag c={c}/>
    <div className='info-container'>
      <div className='country-info'>
        <h2 className='country-name'>{c.name}</h2>
        <BasicCountryInfo c={c}/>
{/*     <List item={c.currencies} title="Currencies:" />
        <List item={c.languages} title="Languages: " />
        <List item={c.borders} title="Border Countries:" /> */}
    </div>
  </div>
</div>
  );
};








export default Country;
