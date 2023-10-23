#!/bin/bash

# Variable para rastrear si hay un error
ERROR=false

# Cambia al directorio del proyecto Angular (reemplaza 'ruta_al_proyecto' por la ruta real)
#cd "ruta_al_proyecto"

# Ejecuta las pruebas del proyecto Angular utilizando Angular CLI sin observación
ng test --code-coverage --watch=false --browsers=ChromeHeadless > coverage_output.txt

# Verifica que el número de fallos sea igual a 0
# Verifica que el número de fallos sea igual a 0
FAILED_COUNT=$(grep -oE 'TOTAL: [0-9]+ FAILED' coverage_output.txt | awk '{print $2}')

echo $FAILED_COUNT
if [ "$FAILED_COUNT" -ne 0 ]; then
    echo "Hubo $FAILED_COUNT pruebas fallidas."
    exit 1
fi

# Extrae el porcentaje de cobertura de Statements del archivo de salida
COVERAGE_PERCENTAGE=$(grep -E "Statements\s+:\s+[0-9]+\.[0-9]+" coverage_output.txt | awk '{print $3}' | tr -d '%')

echo "COVERAGE_PERCENTAGE: $COVERAGE_PERCENTAGE"  # Mensaje de depuración

# Compara el porcentaje de cobertura con el umbral deseado
COVERAGE_THRESHOLD=60.0  # Cambia este valor al umbral deseado (con decimales)

if [ -z "$COVERAGE_PERCENTAGE" ]; then
    echo "No se pudo obtener el porcentaje de cobertura. Verifica que las pruebas se hayan ejecutado correctamente."
    exit 1
fi

if (( $(echo "$COVERAGE_PERCENTAGE < $COVERAGE_THRESHOLD" | bc -l) )); then
    echo "La cobertura de pruebas es insuficiente ($COVERAGE_PERCENTAGE%), se esperaba al menos $COVERAGE_THRESHOLD%."
    exit 1
else
    echo "La cobertura de pruebas es suficiente ($COVERAGE_PERCENTAGE%)."
fi
