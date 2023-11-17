package projetofullstack.Dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record FoodRequestDto(
        @NotBlank(message = "Envie uma imagem")
        String imagem,
        @NotBlank(message = "Titulo Nulo")
        String title,
        @NotNull(message = "Insira um preço")
        String price,
        @NotBlank(message = "Insira uma descrição sobre o alimento")
        String description
) {
}
