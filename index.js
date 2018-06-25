// Code your solution in this file!

function logDriverNames(driversArray) {
    return driversArray.forEach(function (driver) {
      console.log(driver.name)
    });
};

function logDriversByHometown(driversArray, hometown) {
  return driversArray.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    };
  })
};

function driversByRevenue(driversArray) {
  return driversArray.slice().sort(function (one, two) {
      return one.revenue - two.revenue;
  });
  //RETURN SOMETHING
};

function driversByName(driversArray) {
  return driversArray.slice().sort(function (one, two) {
      return one.name.localeCompare(two.name);

  });
  //RETURN SOMETHING
  };

function totalRevenue(driverArray) {
  return driverArray.reduce(function (total, driverArray_element) {
    return total + driverArray_element.revenue;
  }, 0);
};


function averageRevenue(driverArray) {
  return (totalRevenue(driverArray) / (driverArray.length));
};
