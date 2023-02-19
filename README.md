# Dicas dos recursos utilizados neste projeto

## Routes da biblioteca React-router-dom

- É o componente que engloba um conjunto de rotas filhas do local atual 

## BrouserRouter

- O componente BrowserRouter é responsável por informar a nossa aplicação que teremos um roteamento de componentes a seguir, o Routes é o próprio roteador e o Route é a rota em específico.

## Copiando valores de props para um componente

- No exemplo abaixo uma alternativa de se passar valores de props é usando um spread, ele copia todas as propriedades do objeto passado todos de uma vez só. Uma boa opção para economizar na escrita.

> Exemplo:

```
 <section className={styles.container}>
      {videos.map(videos => {
        return <Cards {...videos} key={videos.id}/>
      })}
    </section>
    
```

## Méto de array some

O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false. Ou seja, ele vai comparando cada posição para verificar a existência do elemento procurado.

## Méto de array splice

É o método de array que permite  inserir novos elementos no meio de uma lista mas ele também  pode ser usado para excluir ou substituir os elemntos existentes  também 
- Para deletar um item de uma lista é preciso passar dois argumentos para dentro da função como no exemplo:

```
array.splice(position, number)
```
O argumento position determina a posição do  item a ser excluído e o argumento number determina o número de elementos a serem excluídos.

## Méto de array findIndex

O ``findIndex()` método retorna o índice do primeiro elemento em uma matriz que satisfaça a função de teste fornecida. Se nenhum elemento satisfizer a função de teste, -1 será retornado.

## useParams



