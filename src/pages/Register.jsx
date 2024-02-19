import React from 'react'
import Add from "../imgs/addAvatar.png"

const register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Live Chat</span>
            <span className="title">Faça seu cadastro e use nosso chat.</span>
            
            <form>
                <input type="text" name="name" id="name" required  placeholder="Seu Nome" />
                <input type="email" name="email" id="email" required placeholder="Seu E-mail" />
                <input type="password" name="password" id="password" required placeholder="Sua Senha"/>
                <input style={{display:"none"}} type="file" name="profile_photo" id="profile_photo" accept="image/png, image/gif, image/jpeg" required/>
                <label htmlFor="profile_photo" className='profile_img'>
                  <img src={Add} alt="" />
                  <span>Upload profile image</span>
                </label>
                <button><span className='moveleft'>Cadastrar-se</span></button>
            </form>
            <p>Já tem uma conta? Entrar</p>
        </div>
    </div>
  )
}

export default register