# Cardápio - Projeto de Aprendizado

Este é um projeto simples desenvolvido em React TypeScript e Spring Boot por Thiago Pequeno, criado como parte do meu processo de aprendizado em desenvolvimento web. O objetivo deste projeto é permitir que os usuários cadastrem itens de comida, incluindo informações como nome, descrição, preço e uma imagem representativa.

## Funcionalidades Principais

- Cadastro de itens de comida.
- Inclusão de informações como nome, descrição, preço e imagem.
- Interface amigável para o usuário.

## Como Executar o Projeto Localmente

Para executar o projeto em sua máquina local, siga estas etapas:

1. Clone este repositório:

   ```bash
   git clone https://github.com/thiagopequeno/Card-pio.git


aqui está a tabela em MYSQL para o funcionamento do sistema

CREATE TABLE `food` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#Meu linkedin https://www.linkedin.com/in/thiago-pequeno-de-castro-2632bb248/

#Não esqueça de trocar as credencias do seu banco de dados no Backend em JAVA em APLICATION PROPERTIES
#Troque a Root para seu usuario;
#Troque a senha para sua senha;



#Mysql
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/fullstack?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false&allowPublicKeyRetrieval=true
spring.jpa.hibernate.ddl-auto=update

spring.datasource.username=root
spring.datasource.password=thiagohalls

# habilita a impress�o dos comando SQL no log
spring.jpa.show-sql=false

# formata os SQL (quebra linha, identa etc)
spring.jpa.properties.hibernate.format_sql=true
