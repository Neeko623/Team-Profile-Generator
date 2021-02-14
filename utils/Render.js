
// Function to render all employee's information

const render = (employees) => {
	console.log("employees:", employees);

	//=======MANAGER========//
	const createManager = (manager) => {
		return `
      <li>
      <div class="col-md-3">
      <div class="card cardbody">
      <div class="card-header" style="background: #B19CD9">
      <div class="name">${manager.name}</div>
      <div class="desc">${manager.getRole()}</div>
      </div>

        <div class="card-body">
          <form role="form">			
            <div class="form-group">
                <label for="reserve-unique-id" id="reserve-unique-id">ID: ${manager.id}</label>
            </div>
            <div class="form-group">
              <label for="reserve-email" id="reserve-email">Email:<a href="mailto: ${manager.getEmail()}"> ${manager.getEmail()}</a></label>
            </div>
            <div class="form-group">
                <label for="reserve-phone" id="reserve-office-number">Office Number: ${manager.officeNumber}</label>					
            </div>				
            </form>
        </div>
      </div>
    </div>
    </li>
          `;
	};

	//=======ENGINEER========//
	const createEngineer = (engineer) => {
		return `
    <li>
    <div class="col-md-3">
    <div class="card cardbody">
    <div class="card-header" style="background: #B19CD9">
    <div class="name">${engineer.name}</div>
    <div class="desc">${engineer.getRole()}</div>
    </div>

    <div class="card-body">
    <form role="form">			
      <div class="form-group">
          <label for="reserve-unique-id" id="reserve-unique-id">ID: ${engineer.id}</label>
      </div>
            <div class="form-group">
              <label for="reserve-email" id="reserve-email">Email:<a href="mailto: ${engineer.getEmail()}"> ${engineer.getEmail()}</a></label>
            </div>
            <div class="form-group">
            <label for="reserve-phone" id="github">Github: <a href="https://github.com/${engineer.github}" class="contact-btn">${engineer.github}</a>
            </div>				
            </form>
        </div>
      </div>
    </div>
    </li>
`;
	};

	//=======INTERN========//
	const createIntern = (intern) => {
    return `
    <li>
       <div class="col-md-3">
          <div class="card cardbody">
             <div class="card-header" style="background: #B19CD9">
                <div class="name">${intern.name}</div>
                <div class="desc">${intern.getRole()}</div>
             </div>
             <div class="card-body">
                <form role="form">
                   <div class="form-group">
                      <label for="reserve-unique-id" id="reserve-unique-id">ID: ${intern.id}</label>
                   </div>
                   <div class="form-group">
                      <label for="reserve-email" id="reserve-email">Email:<a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()}</a></label>
                   </div>
                   <div class="form-group">
                      <label for="reserve-phone" id="school">School: ${intern.school}</label>				
                   </div>
                </form>
             </div>
          </div>
       </div>
    </li>
    `;
    };

	const team = [];
	team.push(
		employees
		.filter((employee) => employee.getRole() === "Manager")
		.map((manager) => createManager(manager))
		.join("")
	);
	team.push(
		employees
		.filter((employee) => employee.getRole() === "Engineer")
		.map((engineer) => createEngineer(engineer))
		.join("")
	);
	team.push(
		employees
		.filter((employee) => employee.getRole() === "Intern")
		.map((intern) => createIntern(intern))
		.join("")
	);

	return team.join("");
};

module.exports = (employeeHtml) => {
	return `
  <!DOCTYPE html>
  <html>
     <head>
        <title>TEAM PROFILE GENERATOR</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
     </head>
     <body>
        <style>
        * {
          margin: 0;
          padding: 0;
          font-family: "Ubuntu", sans-serif;
          box-sizing: border-box;
          text-decoration: none;
        }
        
        body {
          background: url(bg.jpg) no-repeat center;
          background-size: cover;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }
        
        .profile-card {
          text-align: center;
          border-radius: 15px;
          grid-template-columns: repeat(5, 2fr);
          grid-column-gap: 10px;
        }
        
        .card-header {
          padding: 20px 40px;
        }
        
        .text-center {
          color: #f2f2f2;
          font-size: 3rem;
        }
        
        .name {
          text-align: center;
          color: #f2f2f2;
          font-size: 28px;
          font-weight: 600;
          margin: 10px 0;
        }
        
        .desc {
          text-align: center;
          font-size: 18px;
          color: pink;
        }
        
        .contact-btn {
          padding: 10px 20px;
          color: pink;
          border: 2px solid pink;
          border-radius: 6px;
          transition: .3s linear;
        }
        
        .contact-btn:hover {
          background: #e66767;
          color: #f2f2f2;
        }
        
        .card-footer {
          background: #f4f4f4;
          border-radius: 10px;
          line-height: 30px;
        }
        
        .ul {
          list-style-type: none;
          right: 0;
          position: relative;
        }
        
        li {
          float: left;
          margin: 20px;
        }
        
        .cardbody {
          width: 300px;
          border-radius: 10px;
        }
        </style>
        <div class="jumbotron" style="background: #8e24cd" >
           <h1 class="text-center" >My Awesome Team</h1>
        </div>
        <div class='container'>
           <ul class="ul">
              ${render(employeeHtml)}
           </ul>
        </div>
     </body>
  </html>
  `;
};