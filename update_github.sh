#!/bin/bash
echo "🚀 Iniciando actualización a GitHub..."
git add .
echo "✅ Archivos añadidos al staging"
git commit -m "actualización $(date +%Y-%m-%d_%H:%M:%S)"
echo "✅ Commit realizado"
git push
echo "✅ Cambios subidos a GitHub"
echo "🎉 ¡Proceso completado!"
