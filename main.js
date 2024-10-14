const aldoSkills = [
  { skill: "AWS", proficiency: 3 },
  { skill: "BABEL", proficiency: 4 },
  { skill: "BITBUCKET", proficiency: 2 },
  { skill: "CIRCLE CI", proficiency: 5 },
  { skill: "DOCKER", proficiency: 3 },
  { skill: "ELECTRON", proficiency: 4 },
  { skill: "EXPRESS JS", proficiency: 5 },
  { skill: "FIGMA", proficiency: 2 },
  { skill: "GIT", proficiency: 4 },
  { skill: "GITHUB", proficiency: 5 },
  { skill: "GRAPHQL", proficiency: 3 },
  { skill: "GOLANG", proficiency: 2 },
  { skill: "HTML5/CSS3", proficiency: 5 },
  { skill: "JAVASCRIPT", proficiency: 4 },
  { skill: "JEST", proficiency: 3 },
  { skill: "JIRA", proficiency: 2 },
  { skill: "NEST JS", proficiency: 4 },
  { skill: "NODE JS", proficiency: 5 },
  { skill: "OAUTH", proficiency: 3 },
  { skill: "OPENAPI", proficiency: 2 },
  { skill: "REACT", proficiency: 5 },
  { skill: "REDUX", proficiency: 4 },
  { skill: "REACT ROUTER", proficiency: 3 },
  { skill: "REACT NATIVE", proficiency: 4 },
  { skill: "RESPONSIVE DESIGN", proficiency: 5 },
  { skill: "RUBY", proficiency: 3 },
  { skill: "POSTGRESQL", proficiency: 4 },
  { skill: "POSTMAN", proficiency: 5 },
  { skill: "SASS", proficiency: 4 },
  { skill: "SQL", proficiency: 3 },
  { skill: "STORYBOOKS", proficiency: 2 },
  { skill: "TESTING LIBRARY", proficiency: 4 },
  { skill: "TYPESCRIPT", proficiency: 5 },
  { skill: "WEBPACK", proficiency: 3 },
  { skill: "WORDPRESS", proficiency: 2 },
  { skill: "YARN", proficiency: 4 },
];

const skillsUL = document.getElementById("skillList");

const skillListElement = aldoSkills
  .map(({ skill }) => `<li>${skill}</li>`)
  .join("");

skillsUL.innerHTML = skillListElement;
