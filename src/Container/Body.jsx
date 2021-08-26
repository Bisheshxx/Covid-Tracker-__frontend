import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import Map from "./Map";
import './body.css';
import "leaflet/dist/leaflet.css";
import Hospital from "./Hospital";
import Tryhospital from "./tryhospital";
import CustomPagination from "./Pagination";

const Body = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [hospital, setHospital] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);


  useEffect(() => {
    fetch("https://corona.askbhunte.com/api/v1/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospital(data.data);
        console.log(data.data)
      });
  }, []);

  console.log(casesType);

  const onCountryChange = async (e) => {

    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);

        countryCode === "worldwide"
          ? setMapCenter([34.80746, -40.4796])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);

      });
  };
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentHospitals = hospital.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // const pageNumbers = [];

  // const [pageNumbers,setPageNumbers]=useState([]);

  // useEffect(()=>{
  //   let total=[];
  //   for (let i = 1; i <= Math.ceil(hospital.length / postsPerPage); i++) {
  //     total.push(i);
  //   }
  //   setPageNumbers(total);

  // },[hospital,postsPerPage])
  

  return (
    <div className="app">
     <div className="app__header">
          <h1 style={{color:"white",fontFamily:"Arial",fontWeight:"bold"}}>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      <div className="app__left">
        {/* <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}
        <div className="left">
        <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}

          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}

          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}

          />
        </div>
     
        <Map className="map"
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
       
        </div>
        <div className="right">
      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>Live Cases by Country</h3>
            <Table countries={tableData} />
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </Card>
      
      </div>
</div>
<div className="heading" style={{display:"flex"}}>
<h1 style={{marginBottom:"1cm",color:"white",fontFamily:"Arial",fontWeight:"bold"}}>Hospitals for covid-19 patients</h1>
<div className="flag" >
      
</div>
</div>
<div className='app__right' style={{background:"#fff", padding:"20px",borderRadius:'20px',display:'block',marginTop:"1cm"}}>
        <div style={{paddingLeft:"20px"}}>
        <h3 style={{fontFamily:"Arial",fontWeight:"bold"}}>Hospitals</h3>
        </div>
        
        <Tryhospital  hospital={currentHospitals}/>
        <CustomPagination 
          postsPerPage={postsPerPage}
          totalPosts={hospital.length}
          paginate={paginate}
        />
        
      </div>
     
    </div>


  )

}
export default Body
