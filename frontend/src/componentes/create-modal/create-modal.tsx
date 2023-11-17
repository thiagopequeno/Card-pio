import { useState,useEffect } from "react";
import { useFoodData } from "../instancias/useFoodData";
import { useFoodDataMutate } from "../instancias/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "../create-modal/create-modal.css"

interface CreateModalProps {
  onClose: () => void;
}


  interface InputProps{
        label:string,
        value:string|number,
        updateValue:(value:any)=>void
  }
  const Input: React.FC<InputProps> = ({ label, value, updateValue }) => {
    return (
      <>
        <label>{label}</label>
        <input value={value} onChange={(e) => updateValue(e.target.value)} />
      </>
    );
  };
  interface ModalPros{
    closeModal(): void
  }

  export function CreateModal({ onClose }: CreateModalProps,{closeModal}:ModalPros){
    const [title,setTitle] =useState("");
    const [price,setPrice] =useState(0);
    const [imagem,setImagem] =useState("");
    const [description,setDescricao]= useState("");
    const {mutate, isSuccess}= useFoodDataMutate()

    const submit = ()=>{
      const foodData:FoodData={
        title,
        price,
        imagem,
        description
      }
      mutate(foodData);
      onClose(); // Fecha o modal após o submit
    }
    useEffect(()=>{
      if(!isSuccess) return
        closeModal()
    },[isSuccess])
    return(
        <div className="modal-overflow">
            <div className="modal-body">
            <button onClick={onClose} className="close-modal-btn">Fechar</button>
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                <Input label="preço" value={price} updateValue={setPrice}></Input>
                
                <Input label="titulo" value={title} updateValue={setTitle}></Input>
                <Input label="imagem" value={imagem} updateValue={setImagem}></Input>
                <Input label="descricao" value={description} updateValue={setDescricao}></Input>
                </form>
                <button onClick={submit} className="btn-secundary"
                >Postar
           
          
                </button>
            </div>

        </div>
    )
  }