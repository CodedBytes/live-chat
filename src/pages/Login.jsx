import React from 'react'

const login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Live Chat</span>
            <span className="title">Faça seu login.</span>
            
            <form>
                <input type="email" name="email" id="email" required placeholder="Seu E-mail" />
                <input type="password" name="password" id="password" required placeholder="Sua Senha"/>
                <button><span className='moveleft'>Entrar</span></button>
            </form>
            <p>Não possui uma conta? Cadastrar-se</p>
        </div>
    </div>
  )
}

export default login