import Button from "@mui/material/Button";
import { lightGreen } from "@mui/material/colors";

const colorAbout = lightGreen[500];

const AboutUs = () => {
  return (
    <div className="about1">
      <div className="about2"></div>
      <div className="about3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quas
          velit architecto. Ex qui optio totam rerum non sequi recusandae
          debitis, eos laboriosam fugit minima tenetur aliquam. Architecto
          labore et quaerat autem commodi! Doloremque, voluptates labore
          distinctio repellendus optio quo voluptatibus, at corporis
          necessitatibus dolorum aliquam corrupti saepe officiis? Error neque
          culpa totam, nostrum laborum officia ipsum impedit cum! Doloribus
          necessitatibus veritatis inventore expedita dicta sed enim, fuga
          quibusdam obcaecati quo quos voluptate aperiam nostrum at non amet
          dolor quasi impedit aut corporis placeat iusto architecto consectetur?
          Cupiditate aliquid, neque molestiae dolor aperiam dicta, repudiandae
          qui repellat quod quis corporis!
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colorAbout,
            width: "280px",
            padding: "10px",
            marginRight: "30px",
            marginY: "20px",
            borderRadius: "30px",
          }}
        >
          ABOUT US
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
