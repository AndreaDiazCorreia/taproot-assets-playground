# Taproot Assets Playground 🌱

[English](#english) | [Español](#español)

## English

### Overview
Welcome to the Taproot Assets Playground, an interactive development environment designed to help you explore and experiment with the Taproot Assets protocol. This tool provides an intuitive graphical interface for creating, managing, and sending digital assets on Bitcoin, making it easier to understand and work with this powerful technology. Whether you're a seasoned blockchain developer or just starting your journey into digital assets, this playground will help you grasp the potential of Taproot Assets.

### 📚 Learn More
Ready to dive into Taproot Assets? Our comprehensive guides will help you understand:
- [**Discover Taproot Assets →**](docs/en/taproot-assets.md): Learn about the protocol, its applications, and why it matters
- [**Explore Tutorials →**](docs/en/tutorials.md): Step-by-step guides to start building

### Features
- 🎨 User-friendly web interface for Taproot Assets operations
- 🔨 Token creation and minting capabilities
- 📤 Asset transfer functionality
- 🌍 Universe management for asset organization
- 🛠️ Integration with TAPD (Taproot Assets Daemon)
- 📚 Comprehensive documentation in English and Spanish
- 🔍 Real-time asset visualization
- 🔐 Secure asset management
- 🌐 Network status monitoring

### Prerequisites
Before you begin, ensure you have the following installed:
- [Lightning Polar](https://lightningpolar.com/) v0.3.1 or higher
- Node.js v16 or higher
- TAPD v0.5.0-alpha.rc1
- Docker (for running Polar)
- pnpm (preferred package manager)

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/AndreaDiazCorreia/taproot-assets-playground.git
cd taproot-assets-playground
```

2. Set up your environment:
```bash
cd playground
cp .env.example .env
```

3. Configure Polar and your Lightning Network environment:

First, ensure you have Polar installed and running:
- Download and install [Lightning Polar](https://lightningpolar.com/) v0.3.1 or higher
- Launch Polar on your system

Next, create and configure your test network:
- In Polar, click "Create a New Network"
- Select "Bitcoin" as the backend
- Add at least:
  - 1 Bitcoin node
  - 1 LND node
  - 1 TAPD node (version 0.5.0-alpha.rc1)
  - The LND node should be connected to your Bitcoin node
  - TAPD should be connected to your LND node

Configure your nodes:
- Start all nodes in your network
- Wait for the Bitcoin node to finish syncing
- Fund your LND node by mining some blocks to its Bitcoin address
- Ensure your LND node is properly connected and has channels (if needed)
- Get your TAPD connection details by clicking on the TAPD node and going to "Connect"

Update your environment configuration:
- Open the `.env` file you created earlier
- Fill in the TAPD connection details from Polar:
  ```
  TAPO_RPC_HOST=localhost:10029
  TAPD_CERT_PATH=/path/to/your/tls.cert
  TAPD_MACAROON_PATH=/path/to/your/admin.macaroon
  ```

4. Install dependencies and start the application:
```bash
pnpm install
pnpm dev
```

5. Verify your setup:
- Open your browser to `http://localhost:3000`
- The playground should connect to your TAPD node
- You should see the main dashboard with your node information

### Project Structure
```
taproot-assets-playground/
├── docs/                    # Documentation
│   ├── en/                 # English guides
│   └── es/                 # Spanish guides
├── playground/             # Main application
│   ├── app/               # Next.js application
│   │   ├── api/          # Backend API routes
│   │   └── assets/       # Asset management pages
│   ├── components/        # React components
│   ├── lib/              # Utilities and APIs
│   └── public/           # Static assets
└── README.md              # This file
```

### Roadmap 🛣️

#### Current Focus
- [ ] UI/UX Improvements
  - Enhanced token visualization
  - Real-time transaction status updates
  - Responsive design optimization
  - Improved error handling and feedback
  - Publish a website 
- [ ] Improve Tutorials 

#### Coming Soon
- [ ] CLI Tool Integration
  - Direct TAPD CLI command interface
  - Batch operations support
  - Script automation capabilities
  - Advanced querying tools

#### Future Plans
- [ ] Setup Automation
  - One-click Polar configuration
  - Automated TAPD setup
  - Environment validation tools
  - Network health monitoring
- [ ] Advanced Features
  - Token metadata explorer
  - Asset proof verification tools
  - Group token operations
  - Interactive tutorial mode
  - Advanced analytics dashboard

### Contributing
We welcome contributions to make this playground better! Whether it's:
- Improving documentation
- Adding new features
- Fixing bugs
- Suggesting improvements
- Adding translations
- Enhancing test coverage

Please feel free to open issues or submit pull requests.

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Español

### Descripción General
Bienvenido al Playground de Taproot Assets, un entorno de desarrollo interactivo diseñado para ayudarte a explorar y experimentar con el protocolo Taproot Assets. Esta herramienta proporciona una interfaz gráfica intuitiva para crear, gestionar y enviar activos digitales en Bitcoin, facilitando la comprensión y el trabajo con esta poderosa tecnología. Ya seas un desarrollador blockchain experimentado o estés comenzando tu viaje en los activos digitales, este playground te ayudará a comprender el potencial de Taproot Assets.

### 📚 Aprende Más
¿Listo para sumergirte en Taproot Assets? Nuestras guías completas te ayudarán a entender:
- [**Descubre Taproot Assets →**](docs/es/taproot-assets.md): Aprende sobre el protocolo, sus aplicaciones y por qué es importante
- [**Explora los Tutoriales →**](docs/es/tutoriales.md): Guías paso a paso para empezar a construir

### Características
- 🎨 Interfaz web amigable para operaciones con Taproot Assets
- 🔨 Capacidades de creación y acuñación de tokens
- 📤 Funcionalidad de transferencia de activos
- 🌍 Gestión de universos para organizar activos
- 🛠️ Integración con TAPD (Taproot Assets Daemon)
- 📚 Documentación completa en inglés y español
- 🔍 Visualización de activos en tiempo real
- 🔐 Gestión segura de activos
- 🌐 Monitoreo del estado de la red

### Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:
- [Lightning Polar](https://lightningpolar.com/) v0.3.1 o superior
- Node.js v16 o superior
- TAPD v0.5.0-alpha.rc1
- Docker (para ejecutar Polar)
- pnpm (gestor de paquetes preferido)

### Inicio Rápido

1. Clona el repositorio:
```bash
git clone https://github.com/AndreaDiazCorreia/taproot-assets-playground.git
cd taproot-assets-playground
```

2. Configura tu entorno:
```bash
cd playground
cp .env.example .env
```

3. Configura Polar y tu entorno de Lightning Network:

Primero, asegúrate de tener Polar instalado y en funcionamiento:
- Descarga e instala [Lightning Polar](https://lightningpolar.com/) v0.3.1 o superior
- Inicia Polar en tu sistema

Luego, crea y configura tu red de prueba:
- En Polar, haz clic en "Create a New Network"
- Selecciona "Bitcoin" como backend
- Añade al menos:
  - 1 nodo Bitcoin
  - 1 nodo LND
  - 1 nodo TAPD (versión 0.5.0-alpha.rc1)
  - El nodo LND debe estar conectado a tu nodo Bitcoin
  - TAPD debe estar conectado a tu nodo LND

Configura tus nodos:
- Inicia todos los nodos en tu red
- Espera a que el nodo Bitcoin termine de sincronizarse
- Fondea tu nodo LND minando algunos bloques a su dirección Bitcoin
- Asegúrate de que tu nodo LND esté correctamente conectado y tenga canales (si es necesario)
- Obtén los detalles de conexión de TAPD haciendo clic en el nodo TAPD y yendo a "Connect"

Actualiza tu configuración de entorno:
- Abre el archivo `.env` que creaste anteriormente
- Completa los detalles de conexión de TAPD desde Polar:
  ```
  TAPO_RPC_HOST=localhost:10029
  TAPD_CERT_PATH=/ruta/a/tu/tls.cert
  TAPD_MACAROON_PATH=/ruta/a/tu/admin.macaroon
  ```

4. Instala las dependencias e inicia la aplicación:
```bash
pnpm install
pnpm dev
```

5. Verifica tu configuración:
- Abre tu navegador en `http://localhost:3000`
- El playground debería conectarse a tu nodo TAPD
- Deberías ver el panel principal con la información de tu nodo

### Estructura del Proyecto
```
taproot-assets-playground/
├── docs/                    # Documentación
│   ├── en/                 # Guías en inglés
│   └── es/                 # Guías en español
├── playground/             # Aplicación principal
│   ├── app/               # Aplicación Next.js
│   │   ├── api/          # Rutas de API backend
│   │   └── assets/       # Páginas de gestión de activos
│   ├── components/        # Componentes React
│   ├── lib/              # Utilidades y APIs
│   └── public/           # Activos estáticos
└── README.md              # Este archivo
```

### Plan de Desarrollo 🛣️

#### Enfoque Actual
- [ ] Mejoras de UI/UX
  - Visualización mejorada de tokens
  - Actualizaciones de estado en tiempo real
  - Optimización de diseño responsivo
  - Mejor manejo de errores y retroalimentación
  - Publicar una página web
- [ ] Mejorar Tutoriales

#### Próximamente
- [ ] Integración de Herramientas CLI
  - Interfaz de comandos directa con TAPD
  - Soporte para operaciones por lotes
  - Capacidades de automatización de scripts
  - Herramientas avanzadas de consulta

#### Planes Futuros
- [ ] Automatización de Configuración
  - Configuración de Polar con un clic
  - Configuración automatizada de TAPD
  - Herramientas de validación de entorno
  - Monitoreo de salud de la red
- [ ] Características Avanzadas
  - Explorador de metadatos de tokens
  - Herramientas de verificación de pruebas de activos
  - Operaciones grupales de activos
  - Modo tutorial interactivo
  - Panel de análisis avanzado

### Contribuciones
¡Damos la bienvenida a las contribuciones para mejorar este playground! Ya sea:
- Mejorando la documentación
- Añadiendo nuevas características
- Arreglando errores
- Sugiriendo mejoras
- Agregando traducciones
- Mejorando la cobertura de pruebas

No dudes en abrir issues o enviar pull requests.

### Licencia
Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.