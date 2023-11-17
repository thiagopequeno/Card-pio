package projetofullstack.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import projetofullstack.Dtos.FoodRequestDto;
import projetofullstack.Mapper.MapperFood;
import projetofullstack.model.Food;
import projetofullstack.model.RepositoryFood;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodService {

    private final RepositoryFood repositoryFood;

    public List<Food> getFood(){
        List<Food> food = repositoryFood.findAll();
        if (food.isEmpty()){
            throw new RuntimeException("Não há comida");
        }
        return food;
    }
    public Food postFood(Food foodRequestDto){
       return repositoryFood.save(foodRequestDto);
    }


}
