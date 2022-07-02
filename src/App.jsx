import './App.css'
//teste
function App() {
  const palavras_chave = ["linux", "docker", "server", "rails", "douane", "my-developments",
"command-line", "ruby", "c-2", "linux-on-mac", "maintenance", "security", "gnome", "kubernetes",
"mes-developpements", "ubuntu", "python", "vcs", "capybara", "contribution", "git", "apt",
"bazaar", "chef", "cucumber", "debian", "game", "howto", "packaging", "testing", "boost", "debug",
"devise", "elixir", "gtk", "homebrew", "information", "ssh", "tuxtremsplit", "xpath"]
  const componentes = palavras_chave.map(
    (componentes)=> 
    <p className='itens'>
      {componentes}
    </p>
    
  )
  return(
    <div className='componente' >
      {componentes}
    </div>
  )
}

export default App
