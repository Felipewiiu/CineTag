# Dicas dos recursos utilizados neste projeto

## Routes da biblioteca React-router-dom

- Ele avisa que vão existir mas de uma rota dentro dele

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