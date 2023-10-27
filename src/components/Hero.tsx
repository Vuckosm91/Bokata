import Button from "@mui/material/Button";
import { lightBlue } from "@mui/material/colors";

const colorHeroButton = lightBlue["A400"];

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
              backgroundColor: colorHeroButton,
              width: "280px",
              height: "50px",
              padding: "15px",
              marginRight: "30px",
              marginY: "20px",
              borderRadius: "30px",
            }}
            variant="contained"
          >
            ABOUT US
          </Button>
          <Button
            sx={{
              color: colorHeroButton,
              width: "280px",
              height: "50px",
              marginY: "20px",
              border: "2px solid",
              borderRadius: "30px",
            }}
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
