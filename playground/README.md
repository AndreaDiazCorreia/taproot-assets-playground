# Taproot Assets Playground

[English](#english) | [Español](#español)

## English

### Overview
This application provides a comprehensive development environment for exploring and testing Taproot Assets functionality. It offers an intuitive interface for creating, managing, and transferring digital assets on the Bitcoin network, making complex operations accessible through a user-friendly graphical interface.

### Technical Architecture

The application is built using Next.js 13 with App Router, featuring a modern and robust architecture:

**API Layer (`/app/api`)**
- Asset Management
  - `/assets/generate-address`: Address generation
  - `/assets/list`: Asset listing and querying
  - `/assets/mint`: Asset creation
  - `/assets/send`: Transfer operations
- Universe Integration
  - `/universe/info`: Network information
  - `/universe/sync`: Synchronization management

**User Interface (`/app/assets`)**
- Asset listing interface
- Minting workflow
- Transfer management
- Universe synchronization tools

### Setup Instructions

1. Install dependencies:
```bash
cd playground
pnpm install
```

2. Configure environment:
```bash
cp .env.example .env
```

3. Set environment variables:
```env
TAPO_RPC_HOST=localhost:10029
TAPD_CERT_PATH=/path/to/your/tls.cert
TAPD_MACAROON_PATH=/path/to/your/admin.macaroon
```

4. Start development server:
```bash
pnpm dev
```

### Prerequisites
- Node.js (v16 or higher)
- pnpm
- Lightning Polar installation
- TAPD (v0.5.0-alpha.rc1 or higher)

### Development Guidelines

The application follows a modular structure:

1. Frontend Components
   - Pages in `/app`
   - UI components in `/components`
   - Custom hooks in `/hooks`

2. API Integration
   - Endpoints in `/app/api`
   - Types in `/lib/types`
   - Utilities in `/lib/utils.ts`

### Future Development

Planned enhancements:
1. Enhanced asset visualization
2. Advanced search capabilities
3. Batch operations
4. Extended API documentation
5. Additional management tools

### Support
- [Official Documentation](https://docs.lightning.engineering/taproot-assets/overview)
- [Lightning Community Slack](https://lightningcommunity.slack.com)
- Project repository issues

---

## Español

### Descripción General
Esta aplicación proporciona un entorno de desarrollo completo para explorar y probar la funcionalidad de Taproot Assets. Ofrece una interfaz intuitiva para crear, gestionar y transferir activos digitales en la red Bitcoin, haciendo que las operaciones complejas sean accesibles a través de una interfaz gráfica amigable.

### Arquitectura Técnica

La aplicación está construida usando Next.js 13 con App Router, presentando una arquitectura moderna y robusta:

**Capa de API (`/app/api`)**
- Gestión de Activos
  - `/assets/generate-address`: Generación de direcciones
  - `/assets/list`: Listado y consulta de activos
  - `/assets/mint`: Creación de activos
  - `/assets/send`: Operaciones de transferencia
- Integración con Universe
  - `/universe/info`: Información de red
  - `/universe/sync`: Gestión de sincronización

**Interfaz de Usuario (`/app/assets`)**
- Interfaz de listado de activos
- Flujo de creación de activos
- Gestión de transferencias
- Herramientas de sincronización

### Instrucciones de Configuración

1. Instalar dependencias:
```bash
cd playground
pnpm install
```

2. Configurar entorno:
```bash
cp .env.example .env
```

3. Configurar variables de entorno:
```env
TAPO_RPC_HOST=localhost:10029
TAPD_CERT_PATH=/ruta/a/tu/tls.cert
TAPD_MACAROON_PATH=/ruta/a/tu/admin.macaroon
```

4. Iniciar servidor de desarrollo:
```bash
pnpm dev
```

### Requisitos Previos
- Node.js (v16 o superior)
- pnpm
- Instalación de Lightning Polar
- TAPD (v0.5.0-alpha.rc1 o superior)

### Guías de Desarrollo

La aplicación sigue una estructura modular:

1. Componentes Frontend
   - Páginas en `/app`
   - Componentes UI en `/components`
   - Hooks personalizados en `/hooks`

2. Integración de API
   - Endpoints en `/app/api`
   - Tipos en `/lib/types`
   - Utilidades en `/lib/utils.ts`

### Desarrollo Futuro

Mejoras planificadas:
1. Visualización mejorada de activos
2. Capacidades avanzadas de búsqueda
3. Operaciones por lotes
4. Documentación extendida de API
5. Herramientas adicionales de gestión

### Soporte
- [Documentación Oficial](https://docs.lightning.engineering/taproot-assets/overview)
- [Slack de la Comunidad Lightning](https://lightningcommunity.slack.com)
- Issues en el repositorio del proyecto