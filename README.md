# Electron Vite Forge Template

![Electron Vite Forge Template](docs/banner.svg)

Plantilla base para crear aplicaciones de escritorio con **Electron**, usando **Electron Forge** junto con **Vite** para un desarrollo moderno y rápido. Integra además **React**, **TypeScript** y **TailwindCSS**, ideal para proyectos modernos con una configuración lista para producción.

## 🚀 Tecnologías usadas

- [Electron](https://www.electronjs.org/)
- [Electron Forge](https://www.electronforge.io/)
- [Vite](https://vitejs.dev/)
- [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/brionex/electron-app-template.git
cd electron-app-template
```

2. Instala las dependencias:

```bash
npm install
```

---

## 💻 Comandos disponibles

| Comando            | Descripción                                             |
| ------------------ | ------------------------------------------------------- |
| `npm run dev`      | Inicia la app en modo desarrollo con hot reload.        |
| `npm run package`  | Empaqueta la app sin instalador.                        |
| `npm run make`     | Empaqueta la app en formato instalable para tu sistema. |
| `npm run publish`  | Publica la app (requiere configuración previa).         |
| `npm run lint`     | Ejecuta ESLint para revisar errores y buenas prácticas. |
| `npm run lint:fix` | Repara automáticamente errores corregibles de lint.     |

---

## 🧠 Estructura del proyecto

```bash
📁 src/                        # Código fuente principal
│
├── 📁 main/                  # Proceso principal de Electron
│   ├── _main.ts             # Punto de entrada principal de Electron
│   └── ipc-register.ts      # Registro de canales IPC entre main y preload
│
├── 📁 preload/              # Proceso preload (puente seguro entre main y renderer)
│   ├── _preload.ts          # Punto de entrada del preload
│   └── api.d.ts             # Tipado para las funciones expuestas por preload
│
└── 📁 renderer/             # Interfaz de usuario (React + Vite)
    ├── index.html           # HTML base para Vite
    ├── main.tsx             # Entrada de la app React
    ├── vite-env.d.ts        # Tipado de Vite
    ├── 📁views/             # Componentes de vista principales (como App.tsx)
    │   └── App.tsx
    ├── 📁styles/            # Archivos de estilos (Tailwind + globales)
    │   └── global.css
    └── 📁services/          # Servicios como lógica compartida o APIs IPC
        └── ping-pong.ts

📁 resources/                # Recursos estáticos (íconos, etc.)
├── icon.ico
└── icon.png

forge.config.ts             # Configuración de Electron Forge
vite.main.config.ts         # Configuración de Vite para el proceso main
vite.preload.config.ts      # Configuración de Vite para el proceso preload
vite.renderer.config.ts     # Configuración de Vite para el renderer
package.json                # Dependencias y scripts del proyecto
tsconfig.json               # Configuración base de TypeScript
tsconfig.main.json          # TS config específica para main
tsconfig.renderer.json      # TS config específica para renderer
eslint.config.js            # Configuración de ESLint para linting del proyecto
```

## 📤 Publicación

Este template incluye soporte para `electron-forge publish`. Puedes configurar el destino (GitHub Releases, S3, etc.) en tu archivo `forge.config.ts`. Más información aquí:
👉 [https://www.electronforge.io/config/publishers](https://www.electronforge.io/config/publishers)

---

## 📄 Licencia

Este proyecto está licenciado bajo la licencia [MIT](LICENSE).

---

## 🙌 Créditos

Este template fue creado para facilitar el desarrollo de aplicaciones de escritorio modernas, combinando lo mejor del ecosistema web y Electron.
