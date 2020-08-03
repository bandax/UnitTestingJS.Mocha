const request = require('supertest');
const { expect } = require('chai');

describe("Json placeholder users endpoint", () => {
    let apiURL;

    beforeEach(() => {
        apiURL = "https://jsonplaceholder.typicode.com";
    });
    

    it("should return http status code 200 with Get method", async() => {
        await request(apiURL)
            .get("/users")
            .expect(200);
    });

    it("should return content-type:header and application-type application/json with Get method", async() => {
        await request(apiURL)
            .get("/users")            
            .expect('Content-Type', /json/);
    });

    it("should return an array of 10 users with Get method", async() => {
        await request(apiURL)
            .get("/users")            
            .expect((res) => {                
                res.body.length === 10;
            });
    });
});