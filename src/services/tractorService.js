class TractorService {
  searchTractors(organizationId, setTractors) {
    fetch(
      `http://10.20.8.158:5002/api/v2/tractors/all/tractors?organizationId=${organizationId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTractors(data.tractors);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  addTractor(data, setInputsValues) {
    fetch("http://10.20.8.158:5002/api/v2/tractors/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setInputsValues({
          name: "",
          make: "",
          model: "",
          year: "",
          vin: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const tractorService = new TractorService();
export default tractorService;
