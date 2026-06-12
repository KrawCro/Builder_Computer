# Patrón de Diseño Builder

## Autor

**Anchundia Lucas José Andrés**
Programación Orientada a Objetos - Nivel 3A

---

## Descripción

Este proyecto implementa el patrón de diseño **Builder** utilizando el lenguaje de programación **TypeScript**.

El objetivo es demostrar cómo construir objetos complejos paso a paso, separando el proceso de construcción de la representación final del objeto.

---

## Problema Planteado

Una tienda de computadoras necesita crear diferentes configuraciones de equipos para distintos tipos de clientes.

Cada computadora puede tener múltiples componentes:

* Procesador
* Memoria RAM
* Disco SSD
* Tarjeta gráfica
* WiFi
* Bluetooth

Utilizar un constructor tradicional con muchos parámetros dificulta la lectura y mantenimiento del código.

Ejemplo:

```typescript
new Computadora(
  "Intel i7",
  "32GB",
  "1TB SSD",
  "RTX 4060",
  true,
  true
);
```

A medida que aumentan los atributos, resulta más difícil identificar qué representa cada parámetro.

---

## Solución Aplicando Builder

Para resolver este problema se implementó una clase llamada **ComputadoraBuilder**.

Esta clase permite construir una computadora paso a paso mediante métodos específicos para cada componente.

Ejemplo:

```typescript
const gamer = new ComputadoraBuilder()
  .setProcesador("Intel i7")
  .setRAM("32GB")
  .setSSD("1TB NVMe")
  .setGrafica("RTX 4060")
  .setWiFi(true)
  .setBluetooth(true)
  .build();
```

De esta manera el código es más legible, organizado y fácil de mantener.

---

## Proceso de Aplicación del Patrón Builder

1. Se crea una instancia de la clase `ComputadoraBuilder`.
2. Se configuran los atributos mediante métodos específicos.
3. Cada método retorna el mismo objeto Builder para permitir el encadenamiento.
4. Finalmente se ejecuta el método `build()`.
5. Se obtiene una instancia completamente construida de `Computadora`.

---

## Estructura del Proyecto

```text
EXPOSICION_BUILDER
│
├── README.md
├── index.ts
└── diapositivas.pptx
```

---

## Ventajas del Patrón Builder

* Mejora la legibilidad del código.
* Evita constructores extensos y difíciles de entender.
* Facilita el mantenimiento.
* Permite crear diferentes configuraciones del mismo objeto.
* Favorece la reutilización de código.

---

## Tecnologías Utilizadas

* TypeScript
* Visual Studio Code
* GitHub

---

## Conclusión

El patrón Builder es un patrón de diseño creacional que permite construir objetos complejos paso a paso.

En este proyecto se aplicó Builder para crear computadoras personalizadas de forma clara y organizada, demostrando cómo este patrón mejora la calidad y mantenibilidad del software.
