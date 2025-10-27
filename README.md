# Regresión Lineal sobre Metadatos de Películas

Este proyecto muestra la implementación de un modelo de regresión lineal aplicado al análisis de metadatos de películas, con visualizaciones interactivas en Plotly y un notebook explicativo accesible desde una página web.

## Descripción del Proyecto

Este proyecto busca:

- Aplicar regresión lineal para predecir variables como ingresos o puntuación promedio de películas.
- Analizar relaciones entre presupuesto, duración, género, popularidad y otros metadatos.
- Facilitar la comprensión de modelos de regresión mediante visualizaciones interactivas y explicaciones pedagógicas.

## Dataset Utilizado

- **Fuente**: [Movie Metadata Dataset en Kaggle](https://www.kaggle.com/datasets/bobirino/movie-metadata)
- **Descripción**: Contiene información sobre miles de películas, incluyendo presupuesto, ingresos, duración, géneros, puntuación de usuarios, popularidad y más.

## Modelo Implementado

- **Algoritmo**: Regresión lineal (`LinearRegression` de `sklearn`)
- **Preprocesamiento**:
  - Imputación de valores faltantes
  - Codificación de variables categóricas (género, idioma)
  - Selección de variables relevantes
- **Evaluación**:
  - Coeficiente de determinación (R²)
  - Error cuadrático medio (MSE)
  - Visualización de residuos y ajuste

## Visualizaciones Interactivas

Las gráficas fueron generadas con **Plotly** e incluyen:

- Dispersión entre variables predictoras y objetivo
- Histograma de duración y presupuesto
- Gráfica de regresión con línea de ajuste
- Análisis de residuos y predicciones
