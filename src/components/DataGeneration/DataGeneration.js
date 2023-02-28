import React from "react";
import { useEffect } from 'react';

function DataGeneration() {
    // Create an array to store the dummy data
    const dummyData = [];

    // Generate x and y coordinates of random integers
    for (let i = 0; i < 300000; i++) {
        const x = Math.floor(Math.random() * (2000 - 20 + 1)) + 20;
        const y = Math.floor(Math.random() * (2000 - 20 + 1)) + 20;
        const data = { x, y };
        dummyData.push(data);
    }

    // Convert the dummy data to JSON
    const jsonData = JSON.stringify(dummyData, null, 2);

    // Save the JSON data to a file
    useEffect(() => {
        // Create a Blob object from the JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Create a download link for the file
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'dummy-coordinates.json';

        // Add the link to the DOM and click it to trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the link from the DOM after the download is complete
        document.body.removeChild(downloadLink);
    }, [jsonData]);

    return <div>Generating dummy data...</div>;
}

export default DataGeneration;
