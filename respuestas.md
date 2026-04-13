# Fase 3:
**1. ¿Qué ventaja tiene usar TypeScript y definir la clase Serie en lugar de usar objetos literales genéricos (any) como lo haríamos en JavaScript puro al iterar la tabla? R: Reduce errores y hace el código más claro y mantenible en el tiempo al estár tipado. Esta característica también ayuda a validar el código en tiempo de compilación (a diferencia de any en el caso de JS).

**2. En tu función que calcula el promedio, ¿por qué es recomendable usar variables let para el acumulador de la suma y const para el arreglo de datos? R: Debido a que su valor debe ir cmabiando en cada iteración al sumar los elementos.

**3. ¿Qué pasaría en tiempo de compilación si intentas asignar el valor "cinco" al atributo seasons de una Serie en el archivo data ts? R: Se generará error en tiempo de compilación indicando que un string no es asignable a un number.