import AddDomain from "../pages/AddDomain.svelte";
import Home from "../pages/Home.svelte";
import Portfolio from "../pages/Portfolio.svelte";

export const themes = [
  "acid",
  "autumn",
  "black",
  "bumblebee",
  "caramellatte",
  "corporate",
  "cyberpunk",
  "dim",
  "dracula",
  "emerald",
  "fantasy",
  "garden",
  "light",
  "lofi",
  "nord",
  "pastel",
  "retro",
  "silk",
  "valentine",
  "winter",
  "wireframe",
];

const isSubdomain = window.location.hostname.split(".").length > 2;

export const routes = {
  "/": isSubdomain ? Portfolio : Home,
  "/home": Home,
  "/add-domain": AddDomain,
  "/portfolio": Portfolio,
};
