import './App.css'
import guilhermeBoulos from './assets/boulos.jpg'
import logo from './assets/psol.svg'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbx7U35DqF8cgm-8ECzAkIpNNevHLIOU0hlCeDFq9yiyPRmULkjgSJ-WpGVVr1i9FNVDmg/exec'

  const onSubmit = e => {
    

    console.log(e)

    fetch(scriptUrl, { method: 'POST', body: e , mode: "cors"})
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="conteudo">
        <img id="logo" src={logo} />
        <h1>Atenção filiado!</h1>
        <h2>O 8ºcongresso vem aí! Quer saber como participar?</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <label>
            Nome completo:
            <input {...register("nome")}/>
          </label>
          <label>
            WhatsApp:
            <input {...register("whatsapp")}/>
          </label>
          <label>
            Cidade:
            <input {...register("cidade")}/>
          </label>
        </form>
        <a href="http://wa.me/5511982871523" target="_blank" onClick={handleSubmit(onSubmit)}>
          CLIQUE AQUI E RECEBA AS INFORMAÇÕES
        </a>
      </div>
      <img id="imagem" src={guilhermeBoulos} />
    </div>
  )
}

export default App
