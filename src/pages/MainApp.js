// TODO: With the current layout this page is too heavy for Thanos's machine.

// import '../App.css'
// import HeatmapChart from "../components/HeatmapChart";
// import MapChart from "../components/MapChart";
// import ScatterChart from "../components/ScatterChart";
// import StockChart from "../components/StockChart";
//
// function MainApp() {
//     const heatData_1k = require ("../components/HeatmapChart/heatmap_data_1k.json");
//     const heatData_100k = require ("../components/HeatmapChart/heatmap_data_100k.json");
//
//     const scatterData_1k = require ("../components/ScatterChart/scatter_data_1k.json");
//     const scatterData_50k = require ("../components/ScatterChart/scatter_data_50k.json");
//     const scatterData_100k = require ("../components/ScatterChart/scatter_data_100k.json");
//
//     const stockData_50k = require ("../components/StockChart/stock_data_50k.json");
//     const stockData_100k = require ("../components/StockChart/stock_data_100k.json");
//
//     return (
//         <div>
//             <div style={{width: '100%', backgroundColor: 'peachpuff',padding: 10 }}>
//                 <HeatmapChart
//                     id="Heatmap_100k"
//                     dataPoints={{'data':heatData_100k}}
//                     title='HeatMap chart with 100K data-points'
//                 ></HeatmapChart>
//             </div>
//             <div style={{width: '100%', backgroundColor: 'lightcyan',padding: 10 }}>
//                 <HeatmapChart
//                     id="Heatmap_1k"
//                     dataPoints={{'data':heatData_1k}}
//                     title='HeatMap chart with 1K data-points'
//                 ></HeatmapChart>
//             </div>
//
//             <div style={{width: '100%', display: 'table'}}>
//                 <div style={{display: 'table-row', padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'indigo',padding: 10 }}>
//                             <MapChart
//                                 id="Map"
//                                 title='Map chart'
//                             ></MapChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightpink',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_50k"
//                                 dataPoints={{'data':scatterData_50k}}
//                                 title='Scatter chart with 50K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: 'table-row',  padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightgreen',  padding: 10 }}>
//                             <StockChart
//                                 id="Stock_50k"
//                                 dataPoints={{'data':stockData_50k}}
//                                 title='Stock chart with 50K data-points'
//                             ></StockChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightpink',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_1k"
//                                 dataPoints={{'data':scatterData_1k}}
//                                 title='Scatter chart with 1K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: 'table-row',  padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
//                             <StockChart
//                                 id="Stock_50k"
//                                 dataPoints={{'data':stockData_50k}}
//                                 title='Stock chart with 50K data-points'
//                             ></StockChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'orange',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_1k"
//                                 dataPoints={{'data':scatterData_1k}}
//                                 title='Scatter chart with 1K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: 'table-row',  padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
//                             <StockChart
//                                 id="Stock_100k"
//                                 dataPoints={{'data':stockData_100k}}
//                                 title='Stock chart with 100K data-points'
//                             ></StockChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'orange',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_1k"
//                                 dataPoints={{'data':scatterData_1k}}
//                                 title='Scatter chart with 1K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: 'table-row',  padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
//                             <StockChart
//                                 id="Stock_100k"
//                                 dataPoints={{'data':stockData_100k}}
//                                 title='Stock chart with 100K data-points'
//                             ></StockChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'orange',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_1k"
//                                 dataPoints={{'data':scatterData_1k}}
//                                 title='Scatter chart with 1K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: 'table-row',  padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
//                             <StockChart
//                                 id="Stock_100k"
//                                 dataPoints={{'data':stockData_100k}}
//                                 title='Stock chart with 100K data-points'
//                             ></StockChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'orange',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_1k"
//                                 dataPoints={{'data':scatterData_1k}}
//                                 title='Scatter chart with 1K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: 'table-row',  padding:50}}>
//                     <div style={{width: '50%', display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
//                             <StockChart
//                                 id="Stock_100k"
//                                 dataPoints={{'data':stockData_100k}}
//                                 title='Stock chart with 100K data-points'
//                             ></StockChart>
//                         </div>
//                     </div>
//                     <div style={{display: 'table-cell'}}>
//                         <div style={{ backgroundColor: 'orange',padding: 10 }}>
//                             <ScatterChart
//                                 id="Scatter_100k"
//                                 dataPoints={{'data':scatterData_100k}}
//                                 title='Scatter chart with 100K data-points'
//                             ></ScatterChart>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default MainApp;
//
