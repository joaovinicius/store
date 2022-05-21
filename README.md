# DDD, TDD, arquitetura limpa, código limpo e essas coisa aí

O que é DDD e como seria na prática?

## Dominio
  É a camada responsável pela definição do seu domínio de negócios.

  Inicialmente agruparemos nossos objetos por:
  - Agregados
  - Entidades
  - Valores de objetos
  - Autenticação*

## Contextos delimitados
  Nosso contexto delimitado é onde definimos as regras de negócio ou melhor dizendo:
  > É onde criamos abstrações das mudanças do domínio
  Em termos práticos, podemos criar a abstração das modificações do nosso domínio e implementar o caso de uso para cada modificação utilizando o SRP.

  - Contexto: **Admin**
    - Domínio: **Categoria**
      - Abstração: Repositório
      - Casos de Uso: Comando
        - Criar
        - Editar
        - Excluir
        - Recuperar

  - Contexto: **Ecommerce**
    - Domínio: **Categoria**
      - Abstração: Repositório
      - Casos de Uso: Comando
        - Recuperar

## Adaptadores
  Os adaptadores são abstrações de conceitos implementados por ferramentas. Ex: **HttpClient**
```
export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export interface Response {
  data: any,
  status: number,
  headers: unknown,
  request: unknown
}

export interface Config {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: any;
  params?: any;
}

export interface HttpClient {
  request(config: Config): Promise<Response>,
  get(url: string, config?: Config): Promise<Response>,
  delete(url: string, config?: Config): Promise<Response>,
  post(url: string, data: unknown, config?: Config): Promise<Response>,
  put(url: string, data: unknown, config?: Config): Promise<Response>,
  patch(url: string, data: unknown, config?: Config): Promise<Response>,
}
```

## Aplicação
  Nesta camada faremos a implementação utilizando as regras dos adaptadores.
  Nesta camada podemos ter várias implementações de serviços executados por diferente clientes. Ex:
   - Api
   - Banco de dados SQl
   - Cache no servidor
   - Cache no cliente

## Infraestrutura
  Na camada de infraestrutura aplicaremos as modificações através da injeção de dependências utilizado pela tecnologia implementada.
  Ou seja:
  - Nuxt injeta o axios na aplicação de serviço e ela funcionará
  - Lib mudou? Não é mais axios? Implementa a adaptação da abstração do httpClient para nova lib e funcionará se seguir o princípio de LSP

  > Se para cada objeto O1, do tipo S, há um objeto O2, do tipo T, de tal forma que um programa P definido em termos de T, o comportamento de P não é alterado quando O1 é substituído por O2. Então S é um subtipo de T.

