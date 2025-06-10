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
                let nuevosAutos = [];
                for (let i = 0; i < autos.length; i++) {
                    if (i !== indice) {
                        nuevosAutos.push(autos[i]);
                    }
                }

                autos.length = 0;
                for (let i = 0; i < nuevosAutos.length; i++) {
                    autos.push(nuevosAutos[i]);
                }

                alert('Auto eliminado del stock.');
                mostrarTodos();
            } else {
                alert('Índice inválido.');
            }
        }

        function eliminarAutos(){
            while (autos.length > 0){
                autos.pop();
            }
            alert("Todos los autos fueron eliminados del stock.");
        }

        // Mostrar resultados
        function mostrarResultados(lista) {
            if (lista.length === 0) {
                alert('No se encontraron resultados.');
            } else {
                let mensaje = 'Vehiculos disponibles:\n';
                for (let i = 0; i < lista.length; i++) {
                    const auto = lista[i];
                    mensaje += `[${i}] ${auto.marca} ${auto.modelo} - Año ${auto.año}\n`;
                }
                alert(mensaje);
            }
        }

        // Mostrar todos los autos
        function mostrarTodos() {
            mostrarResultados(autos);
        }

        // Buscar por marca
        function buscarPorMarca() {
            const marca = document.getElementById('marcaInput').value.trim().toLowerCase();
            let resultado = [];

            for (let i = 0; i < autos.length; i++) {
                if (autos[i].marca.toLowerCase() === marca) {
                    resultado.push(autos[i]);
                }
            }

            mostrarResultados(resultado);
        }

        // Mostrar todos al cargar
        mostrarTodos();