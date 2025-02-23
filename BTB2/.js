const averageSalaries = Object.values(employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = {
        totalSalary: 0,
        count: 0
      };
    }
    acc[employee.department].totalSalary += employee.salary;
    acc[employee.department].count++;
    return acc;
  }, {})).map(dept => ({
    ...dept,
    averageSalary: dept.totalSalary / dept.count
  })).filter(dept => dept.averageSalary > 65000);
  
  console.log(averageSalaries);