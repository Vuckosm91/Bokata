import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="description1">
        <p className="write1">Providing a Range of</p>
        <p className="write2">
          Commercial & <br /> Residential Services
        </p>
      </div>
      <div className="description2">
        <p className="text1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          maxime impedit natus ullam dolorum necessitatibus tempora, accusantium
          incidunt at ut saepe. Hic, quasi fugiat illum exercitationem quia
          ratione voluptate iusto?
        </p>
        <div className="button1">
          <Button
            sx={{
              width: "280px",
              padding: "10px",
              marginRight: "30px",
              marginY: "20px",
              borderRadius: "30px",
            }}
            variant="contained"
          >
            ABOUT US
          </Button>
          <Button
            sx={{ width: "280px", padding: "10px", borderRadius: "30px" }}
            variant="outlined"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
