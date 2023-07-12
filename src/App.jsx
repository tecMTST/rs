import './App.css'
import guilhermeBoulos from './assets/boulos.jpg'
import logo from './assets/psol.svg'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase'

function App() {
  const { register, handleSubmit, getValues} = useForm()

  const addTodo = async e => {
    const values = getValues()
    console.log(values)

    try {
      console.log('chamei')
      const docRef = await addDoc(collection(db, 'filiados'), values)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <div className="container">
      <div className="conteudo">
        <img id="logo" src={logo} />
        <h1>Atenção filiado!</h1>
        <h2>O 8ºcongresso vem aí! Quer saber como participar?</h2>
        <form onSubmit={handleSubmit(addTodo)}>
          <label>
            Nome completo:
            <input {...register('nome')} />
          </label>
          <label>
            WhatsApp:
            <input type='number' {...register('whatsapp')} />
          </label>
          <label>
            Cidade:
            <input {...register('cidade')} />
          </label>
        </form>
        <a
          href="http://wa.me/5511982871523"
          target="_blank"
          onClick={addTodo}
        >
          CLIQUE AQUI E RECEBA AS INFORMAÇÕES
        </a>
      </div>
      <img id="imagem" src={guilhermeBoulos} />
    </div>
  )
}

export default App
