import React, {useState, useEffect}from 'react';
import { NativeSelect, FormControl} from "@material-ui/core";
import {fetchCountries} from "../../Covid19Api/index";
import styles from "./CountryChoose.module.css";

export default function CountryChoose({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchApi = async () =>{
            setFetchedCountries(await fetchCountries());
        }

        fetchApi();
      
    },
   [setFetchedCountries]
    )
   
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="">Gobal</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )
}
