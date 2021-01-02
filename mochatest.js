let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./server");
chai.should();
chai.use(chaiHttp);
describe("Profiles of users",() =>{
	

	describe("GET/profile/:id",() =>{
		it("it should give profile by id",(done)=>{
			chai.request(server)
				.get("/profile/")
				.end((err,response)=> {
					response.should.have.status(200);
					response.body.should.be.a('database');
					response.body.length.should.be.eq(1);
				done();	
				});
		});
	});



		describe("POST/register",() =>{
		it("it should register a user",(done)=>{
			const register={
				name: 'hk',
				email: '',
				

			};
			chai.request(server)
				.post("/register")
				.send(register)
				.end((err,response)=> {
					response.should.have.status(200);
					response.body.should.be.a('database');
					response.body.should.have.property('name').eq('hk');
					response.body.should.have.property('email').eq('');
					
				done();	
				});
		});
	});

	  describe("PUT /image", () => {
    it("It should PUT an existing task", (done) => {
        const entryNo = 1;
        const entry= {
            name: "Task 1 changed",
            completed: true
        };
        chai.request(server)                
            .put("/image" + entryNo)
            .send(entry)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('id').eq(1);
                response.body.should.have.property('name').eq("Task 1 changed");
                response.body.should.have.property('completed').eq(true);
            done();
            });
    });


});


});
