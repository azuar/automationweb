import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

const host = window.location.hostname;
const parts = host.split(".");
const subdomain = parts.length > 3 ? parts[0] : null; // Ambil subdomain jika ada

if (subdomain && subdomain !== "www") {
  window.location.href = `/portfolio`; // Arahkan user ke dashboard mereka
}

export default app
