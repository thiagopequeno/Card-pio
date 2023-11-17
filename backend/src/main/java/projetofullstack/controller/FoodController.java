package projetofullstack.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.mapper.Mapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetofullstack.Dtos.FoodRequestDto;
import projetofullstack.Dtos.FoodResponseDto;
import projetofullstack.Mapper.MapperFood;
import projetofullstack.model.Food;
import projetofullstack.model.RepositoryFood;
import projetofullstack.service.FoodService;

import java.util.List;

@RestController
@RequestMapping("/food")
@RequiredArgsConstructor
@CrossOrigin(origins ="http://localhost:5173",allowedHeaders = "*")
public class FoodController {

    private final FoodService foodService;
    @GetMapping
    public ResponseEntity<List<FoodResponseDto>> getFood() {
            if (foodService.getFood().isEmpty()){
                ResponseEntity.noContent().build();
            }
            List<Food> food = foodService.getFood();
            List<FoodResponseDto> foodResponseDto = food.stream().map(MapperFood::toDto).toList();;
        return ResponseEntity.ok(foodResponseDto);
    }

    @PostMapping
    public ResponseEntity<FoodResponseDto> postFood(@RequestBody @Valid FoodRequestDto dto) {
       Food salva = foodService.postFood(MapperFood.toEntity(dto));
       FoodResponseDto foodResponseDto = MapperFood.toDto(salva);
        return ResponseEntity.ok(foodResponseDto);
    }
}
