package projetofullstack.Dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record FoodResponseDto(
        @NotNull
        Long id,
        @NotNull
        String imagem,
        @NotBlank
        String title,
        @NotNull
        String price,
        @NotBlank
        @Size(min = 10, max = 500)
        String description



) {
}
