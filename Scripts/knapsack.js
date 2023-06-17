function knapsackPromise(index, capacidade, itens, valor_total) {
  return new Promise((resolve) => {
    const knapsackRecursive = (index, capacidade, itens, valor_total) => {
      if (index < 0 || capacidade === 0) {
        return {
          valor_total,
          itens_selecionados: [],
          capacidade,
        };
      }

      if (itens[index].peso > capacidade) {
        return knapsackRecursive(index - 1, capacidade, itens, valor_total);
      }

      const inclui = knapsackRecursive(
        index - 1,
        capacidade - itens[index].peso,
        itens,
        valor_total + itens[index].valor
      );

      const exclui = knapsackRecursive(
        index - 1,
        capacidade,
        itens,
        valor_total
      );

      if (inclui.valor_total > exclui.valor_total) {
        inclui.itens_selecionados.push(itens[index]);
        return inclui;
      } else {
        return exclui;
      }
    };

    const result = knapsackRecursive(index, capacidade, itens, valor_total);
    resolve(result);
  });
}
