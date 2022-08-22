import SportSee from '../assets/IMG/sportsee.png'
import ArgentBank from '../assets/IMG/argentbank.png'
import Kasa from '../assets/IMG/kasa.png'
import LearnAtHome from '../assets/IMG/learnathome.png'
import LesPetitsPlats from '../assets/IMG/lespetitsplats.png'
import Billed from '../assets/IMG/billed.png'
import Fisheye from '../assets/IMG/Fisheye.png'
import SliderPuzzle from '../assets/IMG/SliderPuzzle.png'

export default function ProjectsSection() {
  const projects = [
    {
      img: ArgentBank,
      name: 'ArgentBank',
      description:
        'This project is linked to a Backend API accessed through POST and PUT HTTP requests. Authentificating the user, storing the token along with fetching and modifying his/her data were the main focus of this project. Some documentation with Swagger and some initial testing of the API with Postman made it extra fun',
      tags: ['REACT', 'REDUX', 'SWAPPER', 'POSTMAN'],
      url: 'https://github.com/MarieRodiet/argentBank-Front',
    },
    {
      img: SportSee,
      name: 'Sportsee',
      description:
        'This app fetches data and converts it into amazing looking graphs. I used the factory pattern (see pages/App.js) to simplify the process of bringing in data from different locations. A single boolean is responsible for getting the right URL through which the data is going to be fetched => either from a local server or from a json file located within the root folder',
      tags: ['API', 'SASS', 'RECHARTS', 'REACT'],
      url: 'https://github.com/MarieRodiet/sportsee_front',
    },
    {
      img: Kasa,
      name: 'Kasa',
      description:
        'This Web application uses React and fetchs data from a local json file. It uses react router, hooks along with some sass to style all that ',
      tags: ['REACT', 'JSON', 'RESPONSIVE', 'JSX'],
      url: 'https://github.com/MarieRodiet/kasa',
    },
    {
      img: LearnAtHome,
      name: 'Learn@Home',
      description:
        "This little but challenging project involves understanding the client's needs of a website and write precise documentation such as Use Cases and User Stories. The next step of the project was to create the mockup and transform it into a beautiful and professional design",
      tags: ['AGILE', 'FIGMA', 'UI/UX', 'DOC'],
      url: 'https://github.com/MarieRodiet/learnAtHome',
    },
    {
      img: LesPetitsPlats,
      name: 'Les Petits Plats',
      description:
        'This Web application will show you my algorithms skills through the optimized search filters that I created in order to find recipes',
      tags: ['JSBENCH', 'SEO', 'ES6', 'BOOTSTRAP'],
      url: 'https://github.com/MarieRodiet/Les-Petits-Plats',
    },
    {
      img: Billed,
      name: 'Billed',
      description:
        'This project is about testing a web application that was coded long ago with jQuery code and no comment',
      tags: ['JEST', 'E2E TESTS', 'DEBUGGING'],
      url: 'https://github.com/MarieRodiet/Billed',
    },
    {
      img: Fisheye,
      name: 'Fisheye',
      description:
        'In this web app coded in Vanilla Javascript I used ES6 and the factory design pattern in order to switch the media template depending on to its type (picture or video)',
      tags: ['ACCESSIBILITY', 'FETCH', 'ESLINT'],
      url: 'https://github.com/MarieRodiet/Fisheye',
    },
    {
      img: SliderPuzzle,
      name: 'Slider Puzzle',
      description:
        'This is a little game I coded in order to practice DOM manipulation, canvas and logic in Javascript',
      tags: ['JS', 'CANVAS', 'DOM'],
      url: 'https://github.com/MarieRodiet/sliderPuzzleRepo',
    },
  ]
  return (
    <section className="projectsSection" id="projects">
      <h1 className="projectsSection-title">Projects</h1>
      <div className="projectsSection-container">
        {projects.map((p, i) => (
          <a
            href={p.url}
            target="_blank"
            key={`${`${i} home page ${p.name}`}`}
            className="projectsSection-container-project"
          >
            <h2 className="projectsSection-container-project-name">{p.name}</h2>
            <div className="projectsSection-container-project-content">
              <img
                className="projectsSection-container-project-content-img"
                src={p.img}
                alt={`home page ${p.name}}`}
              />
              <div className="projectsSection-container-project-content-description">
                {p.description}
              </div>
              <div className="projectsSection-container-project-content-tags">
                {p.tags.map((element, j) => (
                  <span key={`${j + element}`}>{element}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}