import {Link, useParams} from "react-router-dom";
import StockChart from "../components/StockChart";

function Stock() {
    let { id } = useParams();
    let dataPoints = [];

    if (id==="1") {
        dataPoints = require("../components/StockChart/stock_data_1k.json")
    } else if (id==="50") {
        dataPoints = require("../components/StockChart/stock_data_50k.json")
    } else if (id==="100") {
        dataPoints = require("../components/StockChart/stock_data_100k.json")
    }
    // else if (id==="300"){
    //     dataPoints = require("../components/StockChart/stock_data_300k.json")
    // }

    return (
        <>
            Stock
            <nav>
                <ul>
                    <li>
                        <Link to="/stock/1">1k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/stock/50">50k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/stock/100">100k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/stock/300">300k datapoints</Link>
                    </li>
                </ul>
            </nav>
            <StockChart
                id="Single stock"
                dataPoints={{'data':dataPoints}}
            ></StockChart>
        </>
    );
}

export default Stock;
