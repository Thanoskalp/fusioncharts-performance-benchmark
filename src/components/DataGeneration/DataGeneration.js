import React from "react";
import { useEffect } from 'react';

function DataGeneration() {
    // Create an array to store the dummy data
    const dummyData = [];

    // // Generate x and y coordinates of random integers
    // for (let i = 0; i < 300000; i++) {
    //     const x = Math.floor(Math.random() * (2000 - 20 + 1)) + 20;
    //     const y = Math.floor(Math.random() * (2000 - 20 + 1)) + 20;
    //     const data = { x, y };
    //     dummyData.push(data);
    // }


    // Generate 1000 rows of dummy data
    // for (let i = 0; i < 300000; i++) {
    //     // Generate the "rowid" field as an integer between 20 and 200, saved as a string
    //     const rowid = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    //     // Generate the "colimnid" field as an integer between 50 and 300, saved as a string
    //     const colimnid = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    //     // Generate the "value" field as an integer between 10 and 50
    //     const value = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    //     // Generate the "trlabel" field as a string of 3 random words
    //     const words = ['apple', 'banana', 'orange', 'peach', 'grape', 'kiwi'];
    //     const trlabel = `${words[Math.floor(Math.random() * words.length)]} ${words[Math.floor(Math.random() * words.length)]} ${words[Math.floor(Math.random() * words.length)]}`;
    //     // Create an object to store the row data
    //     const data = { rowid: rowid.toString(), colimnid: colimnid.toString(), value, trlabel };
    //     dummyData.push(data);
    // }


    // Convert the dummy data to JSON
    const jsonData = JSON.stringify(dummyData, null, 2);

    // Save the JSON data to a file
    useEffect(() => {
        // Create a Blob object from the JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Create a download link for the file
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'dummy-data.json';

        // Add the link to the DOM and click it to trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the link from the DOM after the download is complete
        document.body.removeChild(downloadLink);
    }, [jsonData]);

    return <div>Generating dummy data...</div>;
}

export default DataGeneration;
