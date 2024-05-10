const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age

// La lógica para adivinar el año de nacimiento se divide en su propia 
// función que se llama cuando se renderiza el componente.

// La edad de la persona no tiene que pasarse como parámetro a la 
// función, ya que puede acceder directamente a todos los props que se pasan al componente.

// Si examinamos nuestro código actual de cerca, notaremos que la función auxiliar está 
// realmente definida dentro de otra función que define el comportamiento de nuestro componente. 
// En la programación Java, definir una función dentro de otra es complejo y engorroso, por lo que no es tan común. 
// En JavaScript, sin embargo, definir funciones dentro de funciones es una técnica de uso común.
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p><p>So you were probably born in {bornYear()}</p></p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
