import React from "react";
import Countries from "./Countries";

export const count = Countries.length;

export function countriesAll() {
  Countries.map(country => {
    return <div className="country">{country}</div>;
  });
}
// export function countryStarts(props) {
//   Countries.filter(country => {
//     return country.startsWith(props.text);
//   }).map(i => {
//     return <div className="country">{i}</div>;
//   });
// }

export function countryStarts(typing) {
  return Countries.filter(country => {
    return country.toLowerCase().startsWith(typing);
  }).map(i => {
    return (
      <div key={i} className="div-country">
        {i}
      </div>
    );
  });
}

export function countryInclude(typing) {
  return Countries.filter(country => {
    return country.includes(typing);
  }).map(i => {
    return (
      <div key={i} className="div-country">
        {i}
      </div>
    );
  });
}
