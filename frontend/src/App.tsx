import './App.css'
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
import { Card } from './componentes/card';
import { useFoodData } from './componentes/instancias/useFoodData';
import { CreateModal } from './componentes/create-modal/create-modal';

function App() {
  const {data}=useFoodData();
  const [isModalOpen,setIsModalOpen] = useState(false);
  const handleOpenModal =()=>{
    setIsModalOpen(prev=>!prev);
  }

  console.log(data);
  return(
    <div className='container'>
      <h1>Cardápio</h1>
      <div className='card-grid'>
    
      
        {data?.map((foodData) =>        
       <Card
       key={foodData.id}
       price={foodData.price}
       title={foodData.title}
       imagem={foodData.imagem}   
       description={foodData.description}
        />
        )}
      
      </div>
        {isModalOpen && <CreateModal onClose={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
  
}

export default App
