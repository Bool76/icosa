import React from "react";
import { useEffect, useState } from "react";
import companyDetailInfo from "../Data/companyInfo.json";


const CompanyInfo = () => {
    const EachCompanyItem = companyDetailInfo.map(
        singleCompanyInfo => {

              const StockPriceDisplay = () => {

                // Utilize useState to create a state to hold true / false value
                const [showStockPrice, setShowStockPrice] = useState(false);   

                // Set showStockPrice to false
                const onClickTrue = () => setShowStockPrice(false);

                // Set showStockPrice to true
                const onClickFalse = () => setShowStockPrice(true);


                return (
                  <div>

                    {/* onClick == showStockPrice conditional: if true fire onClickTrue and if false fire onClickFalse*/}
                    <input type="submit" value="Stock Price" onClick={ e=> showStockPrice ? onClickTrue() : onClickFalse()} />

                    {/* If showStockPrice is true then run <StockPriceDiv> component */}
                    { showStockPrice ? <StockPriceDiv /> : null }
                  </div>
                );
              }
              

            // Stock Price Content
            const StockPriceDiv = () => (
                <div id="results" className="search-results">
                  {singleCompanyInfo.stockPrice}
                </div>
              );


            // Display each company info
            return(
                <div className="container">
                    <div className="companyInfoContainer" id="1234">
                        <h2>{singleCompanyInfo.company}</h2>
                        <p>TICKER: {singleCompanyInfo.ticker}</p>
                    </div> 
                    <p className="stockPrice">STOCK: {singleCompanyInfo.stockPrice}</p>
                    <StockPriceDisplay/>
                </div>
            );
        }   
    );

    return (  
        <div className='companyLine'> 
            {EachCompanyItem}
        </div>
    );
};
 
export default CompanyInfo;