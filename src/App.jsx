import './App.css'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import Alunos from './components/alunos/Alunos'
import Pricing from './components/pricing/Pricing'
import Resume from './components/resume/Resume'
import Equipamentos from './components/equipamentos/Equipamentos'
import Publicacoes from './components/publicacoes/Publicacoes'
import Projetos from './components/projetos/Projetos'

function App() {
  return (
    <main className="main">
      <Header />
      <Sobre />
      <Equipamentos />
      <Alunos />
      <Publicacoes />
      <Projetos />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
