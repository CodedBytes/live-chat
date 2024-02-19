import React from 'react'
import Img from '../imgs/img.png'
import Attach from '../imgs/attach.png'

const chatInputPainel = () => {
  return (
    <div className="chatInput">
      <input type="text" name="" id="" required placeholder="Digite sua mensagem..."/>

      <div className="send">
        <img src={Attach} alt="" />
        <input style={{display:"none"}} type="file" name="upload_files" id="upload_files" />
        <label htmlFor="upload_files">
          <img src={Img} alt="" />
        </label>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default chatInputPainel