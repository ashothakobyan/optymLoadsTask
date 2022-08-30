class DriverService {
  searchDrivers(organizationId, setDrivers) {
    fetch(
      `http://10.20.8.158:5002/api/v2/accounts/all/drivers?organizationId=${organizationId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.drivers);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  addDriver(data, setInputsValues) {
    fetch("http://10.20.8.158:5002/api/v2/accounts/add/driver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setInputsValues({ name: "", email: "", phone: "", password: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const driverService = new DriverService();
export default driverService;
