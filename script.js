// Stock inicial de autos
        const autos = [
            { marca: 'Toyota', modelo: 'Corolla', año: 2020 },
            { marca: 'Ford', modelo: 'Focus', año: 2018 },
            { marca: 'Renault', modelo: 'Clio', año: 2021 },
            { marca: 'Chevrolet', modelo: 'Cruze', año: 2023}
        ];

        // Agregar auto
        function agregarAuto() {
            const marca = document.getElementById('nuevaMarca').value.trim();
            const modelo = document.getElementById('nuevoModelo').value.trim();
            const año = parseInt(document.getElementById('nuevoAnio').value);

            if (marca && modelo && !isNaN(año)) {
                autos.push({ marca, modelo, año });
                alert('Auto agregado con éxito.');
                mostrarTodos();
            } else {
                alert('Completa todos los campos correctamente.');
            }
        }

        // Eliminar auto
        function eliminarAuto() {
            const indice = parseInt(document.getElementById('indiceEliminar').value);
            if (!isNaN(indice) && indice >= 0 && indice < autos.length) {
                autos.splice(indice, 1);
                alert('Auto eliminado.');
                mostrarTodos();
            } else {
                alert('Índice inválido.');
            }
        }

        // Mostrar resultados
        function mostrarResultados(lista) {
            const ul = document.getElementById('resultadoLista');
            ul.innerHTML = '';

            if (lista.length === 0) {
                ul.innerHTML = '<li>No se encontraron resultados.</li>';
            } else {
                for (let i = 0; i < lista.length; i++) {
                    const auto = lista[i];
                    const li = document.createElement('li');
                    li.textContent = `[${i}] ${auto.marca} ${auto.modelo} - Año ${auto.año}`;
                    ul.appendChild(li);
                }
            }
        }

        // Mostrar todos los autos
        function mostrarTodos() {
            mostrarResultados(autos);
        }

        // Buscar por marca
        function buscarPorMarca() {
            const marca = document.getElementById('marcaInput').value.trim().toLowerCase();
            const resultado = autos.filter(auto => auto.marca.toLowerCase() === marca);
            mostrarResultados(resultado);
        }

        // Mostrar todos al cargar
        mostrarTodos();