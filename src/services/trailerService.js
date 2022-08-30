class TrailerService {
  searchTrailers(organizationId, setTrailers) {
    fetch(
      `http://10.20.8.158:5002/api/v2/trailers/all/trailers?organizationId=${organizationId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTrailers(data.trailers);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  addTrailer(data, setInputsValues) {
    fetch("http://10.20.8.158:5002/api/v2/trailers/create", {
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

const trailerService = new TrailerService();
export default trailerService;
