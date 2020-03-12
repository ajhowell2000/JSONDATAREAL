var success= function(employees)
{
console.log("Data collected", employees);
    newtable(employees);
};

    var failure = function(errorMsg)
{
console.log("Something went wrong", errorMsg);
};

var employeePromise=d3.json("employee.json");

employeePromise.then(success,failure);

var newtable= function(employees)
{
    var row= d3.select ("#faculty tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr");
    
    row.append("td")
        .append("img")
        .attr("src", function(employee) 
              { return (employee.photo); });
    row.append("td")
    .text(function(employee) 
          { return (employee.firstName+ " " + eemployee.lastName);
    
    
    
    
    
    
    });
