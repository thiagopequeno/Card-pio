package projetofullstack.Mapper;

import projetofullstack.Dtos.FoodRequestDto;
import projetofullstack.Dtos.FoodResponseDto;
import projetofullstack.model.Food;

public class MapperFood {

    public static FoodResponseDto toDto(Food food){
          return new FoodResponseDto(
                    food.getId(),
                    food.getImagem(),
                    food.getTitle(),
                    food.getPrice(),
                    food.getDescription()

            );

    }
    public  static Food toEntity(FoodRequestDto foodRequestDto){
             Food food = new Food();
             food.setImagem(foodRequestDto.imagem());
            food.setTitle(foodRequestDto.title());
            food.setPrice(foodRequestDto.price());
            food.setDescription(foodRequestDto.description());
            return food;
    }

}
