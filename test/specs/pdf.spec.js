const request = require('supertest');
const { expect } = require('chai');
const fs = require('fs');
const pdf = require('pdf-parse');

describe("React - home task2 pdf file", () => {
    let dataBuffer;

    beforeEach(() => {
        dataBuffer = fs.readFileSync('./pdfs/React – home task 2.pdf');
    });

    afterEach(() =>{
        dataBuffer = null;
    });

    it("should contain 14 pages", async() => {        
        pdf(dataBuffer).then(function(data) {
        
            // number of pages
            //console.log(data.numpages);
            // number of rendered pages
            //console.log(data.numrender);
            // PDF info
            //console.log(data.info);
            // PDF metadata
            //console.log(data.metadata); 
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            //console.log(data.version);
            // PDF text
            //console.log(data.text); 
            expect(data.numpages).to.be.equal(14);
                
        });
    });

    it("should contain React word", async() => {
        pdf(dataBuffer).then(function(data) {
            expect(data.text.includes('React')).to.be.true();
        })
    });

});
