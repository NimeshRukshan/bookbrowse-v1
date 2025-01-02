import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Collapse,
  Card,
  CardContent,
  Grid,
  useTheme,
} from "@mui/material";
import BackButton from "../components/BackButton";
import myProfile from "../assets/my-profile.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const technologies = [
  "React",
  "Node.js",
  "Next.js",
  "MongoDB",
  "MySQL",
  "Azure",
  "Docker",
];

const projects = [
  {
    title: "Car Selling and Buying Website",
    description:
      "Developed a car-selling platform with multi-language support and interactive dashboards.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MySQL", "Sequelize"],
  },
  {
    title: "UniKart - E-Commerce App",
    description:
      "Built an e-commerce platform with CI/CD pipelines and Azure deployment.",
    technologies: ["MERN Stack", "TailwindCSS", "Azure", "Docker"],
  },
  {
    title: "Jeft - E-Scooty Rental App",
    description:
      "Created a PWA for scooter rentals with QR code integration and real-time data.",
    technologies: ["React", "PWA", "MaterialUI", "SpringBoot", "MySQL"],
  },
];

const About = () => {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <BackButton label="Back to Home" to="/" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: 3,
        }}
      >
        <Avatar
          alt="Rukshan Fernando"
          src={myProfile}
          sx={{ width: 120, height: 120, mb: 2 }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: theme.spacing(1),
            color: theme.palette.primary.main,
          }}
          gutterBottom
        >
          Rukshan Fernando
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Software Engineer
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Passionate software engineer with expertise in modern web
          technologies, creating innovative solutions for complex problems.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            href="/mnt/data/my-resume.pdf"
            target="_blank"
            download="Rukshan Fernando SE Intern Resume.pdf"
            sx={{ textTransform: "none" }}
          >
            Download Resume
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/NimeshRukshan"
            target="_blank"
            sx={{ textTransform: "none" }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/rukshanfdo"
            target="_blank"
            sx={{ textTransform: "none" }}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: theme.spacing(1),
            color: theme.palette.primary.main,
          }}
          gutterBottom
          color="secondary"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Hide Details" : "More About Me"}
        </Typography>
        <Collapse in={showMore} timeout="auto" unmountOnExit>
          <Box mb={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                marginBottom: theme.spacing(1),
                color: theme.palette.primary.main,
              }}
              gutterBottom
            >
              Technologies
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {technologies.map((tech) => (
                <Typography
                  key={tech}
                  variant="body1"
                  sx={{
                    padding: 1,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                marginBottom: theme.spacing(1),
                color: theme.palette.primary.main,
              }}
              gutterBottom
            >
              Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      borderRadius: 2,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: theme.typography.fontWeightBold,
                          marginBottom: theme.spacing(1),
                          color: theme.palette.primary.main,
                        }}
                        gutterBottom
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={1}>
                        {project.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Technologies:</strong>{" "}
                        {project.technologies.join(", ")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default About;
