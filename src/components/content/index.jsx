import { useState } from "react";

export function Content() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const border = document.getElementById("email");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (event) => {
    const newEmail = event.target.value; // pega o valor do input e armazena na variável newEmail
    setEmail(newEmail); // atualiza o estado do email com o valor de newEmail
    if (!validateEmail(newEmail)) {
      // se o email não for válido (de acordo com a função validateEmail)
      setError("Please provide a valid email address."); // atualiza o estado do erro com a mensagem de erro
      border.style.border = "2px solid red !important";
    } else {
      // se o email for válido (de acordo com a função validateEmail)
      setError(""); // atualiza o estado do erro com uma string vazia
    }
  };

  const handleSubmit = (event) => {
    // Função que é chamada quando o formulário é submetido
    event.preventDefault(); // Previne o comportamento padrão do formulário

    if (!validateEmail(email)) {
      // Se o email não for válido
      setError("Please provide a valid email address.");

      border.style.border = "2px solid red !important";
      // Atualiza o estado do erro com a mensagem de erro
      return; // Exit the function if validation fails
    }
    console.log(`${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-8 flex flex-col sm:flex-row sm:row justify-center gap-3">
        <input
          className="p-3 px-10 sm:pr-28 border rounded-3xl focus:outline-none"
          type="email"
          value={email}
          onChange={handleChange} // Chama a função handleChange toda vez que o valor do input muda
          id="email"
          placeholder="Your email adress..."
          required
          style={{
            border: error
              ? "2px solid var(--Light-Red)"
              : "2px solid var(--Gray",
          }}
        />
        {error && <p className="text-red-500 text-center sm:absolute sm:mt-16 sm:mr-48">{error}</p>}
        <button className="p-3 px-24 sm:px-14 text-white rounded-3xl">Notify me</button>
      </div>
    </form>
  );
}
