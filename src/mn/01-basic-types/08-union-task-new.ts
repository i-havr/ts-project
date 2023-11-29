type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(dev: Developer, newLevel: Level) {
  dev.level = newLevel;
}

const dev1: Developer = { login: "ihor", skills: ["js"], level: "middle" };

gradeDeveloper(dev1, "senior");

console.log(dev1.level);
