# 📋 AUDITORÍA INTEGRAL DE CÓDIGO FUENTE — CAMPUS INTERACTIVO INTERRUPTION
**Fecha de Corte:** `2026-08-17 18:23:22`  
**Estado:** ✅ Remediaciones de Fase 0 Aplicadas y Build Exitoso  
**Total de Archivos Auditados:** `59`

---

## 🔍 Resumen de Remediaciones Realizadas (Fase 0 y Fase 1):

1. **BUG-1 Resuelto (`Groundings.jsx`):**
   - El temporizador de respiración 4-7-8 opera de forma limpia y segura sin variables indefinidas (`setCycle`).

2. **BUG-2 Resuelto (Unificación de IDs de Módulos):**
   - Todos los IDs se encuentran unificados bajo la convención estándar `modulo1`, `modulo2`, ..., `modulo11` en `Sidebar.jsx`, `Dashboard.jsx`, `curriculum.js` y `db.js`.
   - El bloqueo secuencial opera correctamente impidiendo saltos ilegítimos.

3. **BUG-3 Resuelto (Navegación de Evaluaciones en `ModuloContainer.jsx`):**
   - Si un módulo tiene `tieneEvaluacion: false` (módulos 8, 10 y 11), el sistema redirige automáticamente a la `/ruta` de formación sin provocar pantallas de error.

4. **SEC-1 Resuelto (`AdminDashboard.jsx`):**
   - El componente utiliza el `isAdmin` proveniente de `AuthContext` (verificación de Custom Claims) eliminando la sobreescritura client-side.

5. **Error Boundary Global Activo:**
   - La aplicación está envuelta en un `<ErrorBoundary>` en `main.jsx` para evitar pantallas blancas ante errores no controlados.

---

## 📦 Índice de Archivos

- [`.oxlintrc.json`](.oxlintrc.json) — *0.2 KB*
- [`api/evaluator.js`](api/evaluator.js) — *2.2 KB*
- [`firestore.rules`](firestore.rules) — *1.1 KB*
- [`index.html`](index.html) — *0.5 KB*
- [`package-lock.json`](package-lock.json) — *82.2 KB*
- [`package.json`](package.json) — *0.6 KB*
- [`src/App.css`](src/App.css) — *4.1 KB*
- [`src/App.jsx`](src/App.jsx) — *9.6 KB*
- [`src/components/AdminRoute.jsx`](src/components/AdminRoute.jsx) — *0.4 KB*
- [`src/components/ErrorBoundary.jsx`](src/components/ErrorBoundary.jsx) — *1.1 KB*
- [`src/components/GlobalHUDWidget.jsx`](src/components/GlobalHUDWidget.jsx) — *4.6 KB*
- [`src/components/ProtectedRoute.jsx`](src/components/ProtectedRoute.jsx) — *0.3 KB*
- [`src/components/Sidebar.jsx`](src/components/Sidebar.jsx) — *5.0 KB*
- [`src/context/AuthContext.jsx`](src/context/AuthContext.jsx) — *4.1 KB*
- [`src/context/UIContext.jsx`](src/context/UIContext.jsx) — *0.6 KB*
- [`src/data/autoevaluacionCoach.js`](src/data/autoevaluacionCoach.js) — *11.0 KB*
- [`src/data/calendario_c1.json`](src/data/calendario_c1.json) — *42.7 KB*
- [`src/data/curriculum.js`](src/data/curriculum.js) — *4.0 KB*
- [`src/data/dinamicas.js`](src/data/dinamicas.js) — *17.8 KB*
- [`src/data/evaluacion1.js`](src/data/evaluacion1.js) — *0.9 KB*
- [`src/data/evaluacionesRegistry.js`](src/data/evaluacionesRegistry.js) — *1.1 KB*
- [`src/data/groundings.js`](src/data/groundings.js) — *9.2 KB*
- [`src/data/maquinaQuiebres.js`](src/data/maquinaQuiebres.js) — *13.0 KB*
- [`src/data/modulesRegistry.js`](src/data/modulesRegistry.js) — *0.2 KB*
- [`src/data/modulo1.js`](src/data/modulo1.js) — *14.3 KB*
- [`src/data/modulo10.js`](src/data/modulo10.js) — *4.2 KB*
- [`src/data/modulo11.js`](src/data/modulo11.js) — *15.7 KB*
- [`src/data/modulo2.js`](src/data/modulo2.js) — *9.2 KB*
- [`src/data/modulo3.js`](src/data/modulo3.js) — *9.2 KB*
- [`src/data/modulo4.js`](src/data/modulo4.js) — *6.5 KB*
- [`src/data/modulo5.js`](src/data/modulo5.js) — *6.0 KB*
- [`src/data/modulo6.js`](src/data/modulo6.js) — *3.0 KB*
- [`src/data/modulo7.js`](src/data/modulo7.js) — *18.8 KB*
- [`src/data/modulo8.js`](src/data/modulo8.js) — *2.3 KB*
- [`src/data/modulo9.js`](src/data/modulo9.js) — *8.4 KB*
- [`src/data/programaEntrenamiento.js`](src/data/programaEntrenamiento.js) — *18.5 KB*
- [`src/data/rutaRegistry.js`](src/data/rutaRegistry.js) — *0.3 KB*
- [`src/data/tareasQtData.js`](src/data/tareasQtData.js) — *13.0 KB*
- [`src/index.css`](src/index.css) — *11.6 KB*
- [`src/lib/firebase.js`](src/lib/firebase.js) — *0.7 KB*
- [`src/main.jsx`](src/main.jsx) — *0.6 KB*
- [`src/pages/AdminDashboard.jsx`](src/pages/AdminDashboard.jsx) — *13.9 KB*
- [`src/pages/AutoevaluacionCoach.jsx`](src/pages/AutoevaluacionCoach.jsx) — *10.2 KB*
- [`src/pages/Dashboard.jsx`](src/pages/Dashboard.jsx) — *7.7 KB*
- [`src/pages/Dinamicas.jsx`](src/pages/Dinamicas.jsx) — *7.5 KB*
- [`src/pages/EvaluacionContainer.jsx`](src/pages/EvaluacionContainer.jsx) — *10.0 KB*
- [`src/pages/Evaluaciones.jsx`](src/pages/Evaluaciones.jsx) — *2.7 KB*
- [`src/pages/Glosario.jsx`](src/pages/Glosario.jsx) — *4.6 KB*
- [`src/pages/Groundings.jsx`](src/pages/Groundings.jsx) — *9.6 KB*
- [`src/pages/MaquinaQuiebres.jsx`](src/pages/MaquinaQuiebres.jsx) — *8.8 KB*
- [`src/pages/ModuloContainer.jsx`](src/pages/ModuloContainer.jsx) — *5.9 KB*
- [`src/pages/NotFound.jsx`](src/pages/NotFound.jsx) — *0.8 KB*
- [`src/pages/ProgramaEntrenamiento.jsx`](src/pages/ProgramaEntrenamiento.jsx) — *20.6 KB*
- [`src/pages/RutaFormacion.jsx`](src/pages/RutaFormacion.jsx) — *4.8 KB*
- [`src/pages/TareasQuantumTeam.jsx`](src/pages/TareasQuantumTeam.jsx) — *34.0 KB*
- [`src/services/ai.js`](src/services/ai.js) — *4.6 KB*
- [`src/services/db.js`](src/services/db.js) — *7.6 KB*
- [`vercel.json`](vercel.json) — *0.1 KB*
- [`vite.config.js`](vite.config.js) — *0.2 KB*

---

## 💻 CÓDIGO FUENTE COMPLETO

### 📄 Archivo: `.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}

```

---

### 📄 Archivo: `api/evaluator.js`

```javascript
export default async function handler(req, res) {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajustar en producción al dominio específico
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Verificación básica de que hay un token de Firebase en el header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Opcional: Aquí idealmente verificarías el token de Firebase con firebase-admin,
  // pero para no requerir credenciales de servicio en este Vercel Edge Function,
  // confiamos en que el frontend lo pasa (Vercel rate limit es sugerido).
  
  const GROQ_API_KEY = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Server Configuration Error: Missing API Key' });
  }

  const { messages, model = "llama-3.3-70b-versatile", temperature = 0.7, max_tokens = 1000 } = req.body;

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens
      })
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.json();
      return res.status(groqResponse.status).json(errorData);
    }

    const data = await groqResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Groq API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

```

---

### 📄 Archivo: `firestore.rules`

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Función auxiliar para verificar si el usuario es admin basado en Custom Claims
    function isAdmin() {
      return request.auth != null && request.auth.token.admin == true;
    }

    // Reglas para la colección 'users'
    match /users/{userId} {
      // Un usuario puede leer/escribir su propio documento
      allow read, write: if request.auth != null && request.auth.uid == userId;
      // Un admin puede leer todos los usuarios
      allow read: if isAdmin();
      
      // Colección anidada: progreso ('progress')
      match /progress/{docId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
        allow read: if isAdmin();
      }

      // Colección anidada: historial de sesiones ('sessions')
      match /sessions/{sessionId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
        allow read: if isAdmin();
      }
    }

    // Reglas globales seguras (denegar todo por defecto)
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

```

---

### 📄 Archivo: `index.html`

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpeg" href="/interrupcion_logo.jpg" />
    <meta name="description" content="Panel de control del Campus Interactivo – Acceso a recursos, progreso y entrenamiento para estudiantes.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>INTERRUPTION | Campus Interactivo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

### 📄 Archivo: `package-lock.json`

```json
{
  "name": "cpsl-campus-interactivo",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "cpsl-campus-interactivo",
      "version": "0.0.0",
      "dependencies": {
        "dompurify": "^3.4.13",
        "firebase": "^12.17.1",
        "react": "^19.2.8",
        "react-dom": "^19.2.8",
        "react-router-dom": "^7.18.2"
      },
      "devDependencies": {
        "@types/react": "^19.2.17",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.4",
        "oxlint": "^1.75.0",
        "vite": "^8.2.0"
      }
    },
    "node_modules/@firebase/ai": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/@firebase/ai/-/ai-2.14.0.tgz",
      "integrity": "sha512-TYEQqCQUTyVHuG/HVi9vau6F9kvEaS49o/hmdn/yUuN6ZXQkwIml2nNJTIBfjNl/r9LOxwUNILgcOY16nxObug==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check-interop-types": "0.3.4",
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-types": "0.x"
      }
    },
    "node_modules/@firebase/analytics": {
      "version": "0.10.23",
      "resolved": "https://registry.npmjs.org/@firebase/analytics/-/analytics-0.10.23.tgz",
      "integrity": "sha512-34ALWXzWA6PTRUA5hipZmsm1RKzeecw5J1+qTCXsiMzwLqONC+GuTIQSdmm91MmTAEA+wG1Q5t0IFahcYQOqAA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/installations": "0.6.23",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/analytics-compat": {
      "version": "0.2.29",
      "resolved": "https://registry.npmjs.org/@firebase/analytics-compat/-/analytics-compat-0.2.29.tgz",
      "integrity": "sha512-allztvCvCUlItZzD97TiRAtGoFJzR1FQFmLxbaLc6PvgscqD9cl5NdKPTtka6keShVYXvCZJpzWcRoH4TME8rw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/analytics": "0.10.23",
        "@firebase/analytics-types": "0.8.4",
        "@firebase/component": "0.7.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/analytics-types": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/@firebase/analytics-types/-/analytics-types-0.8.4.tgz",
      "integrity": "sha512-zQ+XTgkwH6CY/eUSHJRP7e4LxM30RCxlCmob5sy2axs25GE3Ny0XdgpDscMTHHQIGqWkxPXad4w2Mw9sCgT8zQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/app": {
      "version": "0.16.0",
      "resolved": "https://registry.npmjs.org/@firebase/app/-/app-0.16.0.tgz",
      "integrity": "sha512-G+ZGEyVP8YTb3ay6A+XpcYgFH3sTESHcnHU/EyTktodqhz2BHkLq+QEP7IVwjiMX0cxYwpVKip0/wC0KZcn9vQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "idb": "7.1.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/app-check": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@firebase/app-check/-/app-check-0.13.0.tgz",
      "integrity": "sha512-AbMttBKazQvGVXBZhQdVAdPzRhwHyJAY3Ghu5y2C7IZKIDIppzNYz0shTZ1mP4FBJa+28BuC4t+5h1Q6pT3Asg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/app-check-compat": {
      "version": "0.4.6",
      "resolved": "https://registry.npmjs.org/@firebase/app-check-compat/-/app-check-compat-0.4.6.tgz",
      "integrity": "sha512-2pzNEZEkX84jSqy6TH6FI1HSLA1lc7kakRUybBbKjg9YhIttPlW/XX3N9CDtChji2PTTPWVPZiWhB10exHfA+A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check": "0.13.0",
        "@firebase/app-check-types": "0.5.4",
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/app-check-interop-types": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/@firebase/app-check-interop-types/-/app-check-interop-types-0.3.4.tgz",
      "integrity": "sha512-zz3i6e13B8BfWiLy8MABtTh8aGIACgKbf9UVnyHcWs+yQzJXgQcl8A46b0zfaiJHdQ+niF0ouAfcpuf+3LMPQg==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/app-check-types": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/@firebase/app-check-types/-/app-check-types-0.5.4.tgz",
      "integrity": "sha512-xV7JsIyzVr15aA7f3Pi0rB9gdBuVubs89FGA8VkRYA4g0l78poADgdfrScgf7NndSg9mm7cR7PJyY0+t22KaGw==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/app-compat": {
      "version": "0.5.16",
      "resolved": "https://registry.npmjs.org/@firebase/app-compat/-/app-compat-0.5.16.tgz",
      "integrity": "sha512-shQq37O8qELDzvsVwYPlDXwD1zlcrZ0m2bpBF5ov2HSbY8x+AHsnL5TtJ2e1JAfkQN05qHao1AfabS69PN6GiA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app": "0.16.0",
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/app-types": {
      "version": "0.9.5",
      "resolved": "https://registry.npmjs.org/@firebase/app-types/-/app-types-0.9.5.tgz",
      "integrity": "sha512-YevqTjvo7Iujsa9Dwowmd6dSoElhzmD63ZSrq6bzjvQ6POjYgNjOFHLmNIgJs48eNO093NCERibuFnxbfOvU7A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/logger": "0.5.1"
      }
    },
    "node_modules/@firebase/auth": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/@firebase/auth/-/auth-1.13.4.tgz",
      "integrity": "sha512-s+NS1aV0DDyyfoIMeSz53HXnVTv7ufJjJfrP63XyaWHweJ5vOoxKWrTm5tO7S7PDqvyOa/Wi3oP0dgAo6JTMMA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@react-native-async-storage/async-storage": "^2.2.0 || ^3.0.0"
      },
      "peerDependenciesMeta": {
        "@react-native-async-storage/async-storage": {
          "optional": true
        }
      }
    },
    "node_modules/@firebase/auth-compat": {
      "version": "0.6.9",
      "resolved": "https://registry.npmjs.org/@firebase/auth-compat/-/auth-compat-0.6.9.tgz",
      "integrity": "sha512-/hHeTBmQ61+N5J1RECls+WfskZTY78JXr7aO5EMOfUpqJvDqvoS+568k0rp6Ss/4UWwBjadILs+H+SGy1zCS3A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/auth": "1.13.4",
        "@firebase/auth-types": "0.13.1",
        "@firebase/component": "0.7.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/auth-interop-types": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/@firebase/auth-interop-types/-/auth-interop-types-0.2.5.tgz",
      "integrity": "sha512-1Li/YuBDBAXcKv7BzY4U28gontUmAaw53sYiqbaVOMCFb2lFKK/c3CGMUWqtwe7+TXrl3poWnTCL5umYBg85Eg==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/auth-types": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/@firebase/auth-types/-/auth-types-0.13.1.tgz",
      "integrity": "sha512-0c1Mnid0uMDfGJHeUS4zfvBa4/CedJXotGy/n/NZJnBjwiJawt0ZYU+wH2VAVLiRCEfG2ncCkAX3yd1/2nrB7g==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x",
        "@firebase/util": "1.x"
      }
    },
    "node_modules/@firebase/component": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/@firebase/component/-/component-0.7.4.tgz",
      "integrity": "sha512-tLpOaaCol9ugUIYp2R3CbWPPA8Ajg/papX/XHEy8U52b/QXH3BbX8tTJX9aShDCjp+9sMAxMLD94i7lresdugQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/data-connect": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/@firebase/data-connect/-/data-connect-0.7.3.tgz",
      "integrity": "sha512-nHBFk3Ntl+NZCRIUG2d5j7I69P0otjyQ/duhVKLbw4+5cNke/F6RK1pdE5Jnf831/QOTs2Bd00LlxlZ+jNsb9w==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/auth-interop-types": "0.2.5",
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/database": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@firebase/database/-/database-1.1.4.tgz",
      "integrity": "sha512-D+j4+8uhGtNd1tVD+X+c8JrC4ppStGJKyujSQt2NPwdN26QcCk0BeIxue+UqspHkHiFHyQOimwlzjLewGq6S+A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check-interop-types": "0.3.4",
        "@firebase/auth-interop-types": "0.2.5",
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "faye-websocket": "0.11.4",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/database-compat": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/@firebase/database-compat/-/database-compat-2.1.6.tgz",
      "integrity": "sha512-mu7S/75UIajB1A5M9Vfojk69LttW55uABp9nHEtWrV/mIaSEwvoaIe9GySsEzS2EKFK5/3f5okcAuUbihhYeJg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/database": "1.1.4",
        "@firebase/database-types": "1.0.21",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      },
      "peerDependenciesMeta": {
        "@firebase/app": {
          "optional": true
        },
        "@firebase/app-compat": {
          "optional": true
        }
      }
    },
    "node_modules/@firebase/database-types": {
      "version": "1.0.21",
      "resolved": "https://registry.npmjs.org/@firebase/database-types/-/database-types-1.0.21.tgz",
      "integrity": "sha512-SX1jUqhttKgg/m9dYRTvqU9QvucBooziWfA986r4cpsbi4zlsvewe424j3Vpduwd6DG1MSAMfBVT2VqA61FnkA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-types": "0.9.5",
        "@firebase/util": "1.15.2"
      }
    },
    "node_modules/@firebase/firestore": {
      "version": "4.17.0",
      "resolved": "https://registry.npmjs.org/@firebase/firestore/-/firestore-4.17.0.tgz",
      "integrity": "sha512-P9tof6pyO1bnLlMWbux+5O7WFJqlb7OTPMKxxOiXKYiQl7mxykAvxr1BFCgWeEXUU7DZxQncyJ040B0IhFVZCg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "@firebase/webchannel-wrapper": "1.0.6",
        "@grpc/grpc-js": "~1.9.0",
        "@grpc/proto-loader": "^0.7.8",
        "re2js": "^2.8.3",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/firestore-compat": {
      "version": "0.4.12",
      "resolved": "https://registry.npmjs.org/@firebase/firestore-compat/-/firestore-compat-0.4.12.tgz",
      "integrity": "sha512-k2uX81Ao/S0jnFcWGPOQpKK1cPlJHvD9WIqh/RE1XBDP2yg5zhE4rHhSg1rtB11k39q3nKon9XLNDDrPjGclag==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/firestore": "4.17.0",
        "@firebase/firestore-types": "3.0.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/firestore-types": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@firebase/firestore-types/-/firestore-types-3.0.4.tgz",
      "integrity": "sha512-jGn+JSS4X9zZsrfu7Yw66v5YRdOLD1oyQh4USR0xWl4CUqV/DA6bNIXRPpxH/cUl3iVTNiP6MN7g+EL42A4qfA==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x",
        "@firebase/util": "1.x"
      }
    },
    "node_modules/@firebase/functions": {
      "version": "0.13.6",
      "resolved": "https://registry.npmjs.org/@firebase/functions/-/functions-0.13.6.tgz",
      "integrity": "sha512-9obLnzeQUivK5lmtGFOU2ucQ38BjTp+jpPtbfFp/mDsdVCvEpRqdWNvMMQ6aQwR4vcVc/utsvngm5BRkXbc7ZA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check-interop-types": "0.3.4",
        "@firebase/auth-interop-types": "0.2.5",
        "@firebase/component": "0.7.4",
        "@firebase/messaging-interop-types": "0.2.5",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/functions-compat": {
      "version": "0.4.6",
      "resolved": "https://registry.npmjs.org/@firebase/functions-compat/-/functions-compat-0.4.6.tgz",
      "integrity": "sha512-dj9sOet+FIU91jeU4A3vGJoXHty7NqkSfjRLCwLgJXPDk1m72KFuxD3nlFgw/yXx/Fr7UjqzbxZ0LrIOdpx7+w==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/functions": "0.13.6",
        "@firebase/functions-types": "0.6.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/functions-types": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@firebase/functions-types/-/functions-types-0.6.4.tgz",
      "integrity": "sha512-zV6kgqtduR4rUAdC/ilS7kmb93XD7bEZoJDlVBZqlOw2uGGGCNBQBuleww2rr0Ulr3L9o2TDjumEt68/l1f9DQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/installations": {
      "version": "0.6.23",
      "resolved": "https://registry.npmjs.org/@firebase/installations/-/installations-0.6.23.tgz",
      "integrity": "sha512-MBkbcQfd+3qHjW+slsH4s7jH5qTdGlYpwqmxEZ7QcIpgDxu1SKyU0f+mCZhCt1BCacLNiOWF5L0R06N0LtlfMg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/util": "1.15.2",
        "idb": "7.1.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/installations-compat": {
      "version": "0.2.23",
      "resolved": "https://registry.npmjs.org/@firebase/installations-compat/-/installations-compat-0.2.23.tgz",
      "integrity": "sha512-isaXmjb9roM83eVeXAe+ZRNKYNsSo2s0aNM+cy04AAGEyVL/d8Aa11GwEXovRFeYjl9+1yRAOxRDTOukZRwTxA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/installations": "0.6.23",
        "@firebase/installations-types": "0.5.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/installations-types": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/@firebase/installations-types/-/installations-types-0.5.4.tgz",
      "integrity": "sha512-U2eFapdHwjb43Vx9o+Pmj4dFfvcHEK1IirEFLqMtWrTHvmdrS3gBpBD1kmJk/9HjsOtoHZxJ2Paoe79e+L1ZPg==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x"
      }
    },
    "node_modules/@firebase/logger": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/@firebase/logger/-/logger-0.5.1.tgz",
      "integrity": "sha512-vZKLsqE1ABOy8OjQiE7cUTFn4gvaqlk88yp8N94Pk/sDpq61YqZGqmVFZTvOyflTwuYFcWirBdYGoJgbDaXKYQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/messaging": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/@firebase/messaging/-/messaging-0.13.1.tgz",
      "integrity": "sha512-kL8fdjbNBI7hprlXJrUjktDWosrpT4JtfwXtVVevImPF/rBRAsC+LS/jIs+kgQVuotnvMhaBCgAFipBoY9YU9g==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/installations": "0.6.23",
        "@firebase/messaging-interop-types": "0.2.5",
        "@firebase/util": "1.15.2",
        "idb": "7.1.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/messaging-compat": {
      "version": "0.2.28",
      "resolved": "https://registry.npmjs.org/@firebase/messaging-compat/-/messaging-compat-0.2.28.tgz",
      "integrity": "sha512-/AmMqHRnSQhPsdeED3ocs+s30/tpFvZDiiwIYY2uXFRvLujo1fnbPOeCFoe4Y+dRy1LCSjpvJf+dy5ZTsxi1yg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/messaging": "0.13.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/messaging-interop-types": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/@firebase/messaging-interop-types/-/messaging-interop-types-0.2.5.tgz",
      "integrity": "sha512-tUEKnaAP2Y/MNIqgnriPpV6e5l13Vs/+p2yrd6NGlncPJT9O3a8muYZtdnWe+IJ4fgKLHJVC79n/asxk/N5Msw==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/performance": {
      "version": "0.7.13",
      "resolved": "https://registry.npmjs.org/@firebase/performance/-/performance-0.7.13.tgz",
      "integrity": "sha512-1u6fuXP9cj0s+lkTFAspr/ttfPebPbEdpx+5Wdr4mPZbp8qH2KCMxOddEAR1ZMRa5GI0E7hDYSnolEmbqOFOAg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/installations": "0.6.23",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0",
        "web-vitals": "^4.2.4"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/performance-compat": {
      "version": "0.2.26",
      "resolved": "https://registry.npmjs.org/@firebase/performance-compat/-/performance-compat-0.2.26.tgz",
      "integrity": "sha512-jgoocXLN6ao26xWQ8pzosmzQ33uLzGBJQPNK0NTbVy1XvIHr5pfgBf9hWLOxsWe+R7sJq5bjD+8ybXprmt61mA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/performance": "0.7.13",
        "@firebase/performance-types": "0.2.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/performance-types": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@firebase/performance-types/-/performance-types-0.2.4.tgz",
      "integrity": "sha512-kJSEk7b0uhpcPRyL4SQ/GPujLqk52XNKcXlnsKDbWGAb9vugcLvOU3u6zfEdwd+d8hWJb5S5ZizV1JFFI0nkKg==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/remote-config": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/@firebase/remote-config/-/remote-config-0.9.1.tgz",
      "integrity": "sha512-nzQUSJnk1zAZEl2Q5O3I7Z61cYLK5JI4H6wyyOiHkVZ+bmgy1YXNNMptNbVjixMQ/eCzgA6nZRaC+1eBcJGUFA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/installations": "0.6.23",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/remote-config-compat": {
      "version": "0.2.28",
      "resolved": "https://registry.npmjs.org/@firebase/remote-config-compat/-/remote-config-compat-0.2.28.tgz",
      "integrity": "sha512-kEO9Gn6fbmVj7eNUtZ6d59mLgUDUD0qo7aCicGOWNfuRWTaUv3CF9DMYychO61zaEQ3cfA+CEny4V1E8A1gRGA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/logger": "0.5.1",
        "@firebase/remote-config": "0.9.1",
        "@firebase/remote-config-types": "0.5.1",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/remote-config-types": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/@firebase/remote-config-types/-/remote-config-types-0.5.1.tgz",
      "integrity": "sha512-cX/1LT6KQwkXzck2eSzeKnuvXZCyr8qaPpDcikoJs7jmI+oBOXixpDLeDtWj1U6GNMkIoXrEDNoyT2Ypcyp5/A==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/storage": {
      "version": "0.14.4",
      "resolved": "https://registry.npmjs.org/@firebase/storage/-/storage-0.14.4.tgz",
      "integrity": "sha512-jfzEWZb3Fpsq3FwAB2ifoc8mcSh935qXdDou3TpyjDWa45hhNcZUv8/w28/10njByhfK7snbakKN30nwnzQ3/w==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/storage-compat": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/@firebase/storage-compat/-/storage-compat-0.4.4.tgz",
      "integrity": "sha512-qSRgCB9f2R/nCp8t/8OC101cIFBFeUazlRInOMdzbnLzvrQBzEfx19SrR4pvdj/0+M+P/y8AK/a2s+3EB+B1Pw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.4",
        "@firebase/storage": "0.14.4",
        "@firebase/storage-types": "0.8.4",
        "@firebase/util": "1.15.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/storage-types": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/@firebase/storage-types/-/storage-types-0.8.4.tgz",
      "integrity": "sha512-BT7cwxJOx8SWwlQfrlC+bD/Sk3Cw+1odCi8UZNFNWTVZoPsBnA5W+mqtZzVnvsdJpXCFGSGQ7R7vOR6dtM/BRA==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x",
        "@firebase/util": "1.x"
      }
    },
    "node_modules/@firebase/util": {
      "version": "1.15.2",
      "resolved": "https://registry.npmjs.org/@firebase/util/-/util-1.15.2.tgz",
      "integrity": "sha512-974pWIZVLDMc5GW5YAsj8y0XxULxIy/sPUy7tsxmWbF93KRIyh9xpuHlh0zDL+shUcf5nHDjFOg9YLiQ763eiA==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/webchannel-wrapper": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@firebase/webchannel-wrapper/-/webchannel-wrapper-1.0.6.tgz",
      "integrity": "sha512-Vr/Mqu79dMwGRAyGbJ4uN4+BtXB3/mRTdzetD1daWNeG8QaWuzhhbG77GltO5c0yYmYls8i250iX73624GJd7Q==",
      "license": "Apache-2.0"
    },
    "node_modules/@grpc/grpc-js": {
      "version": "1.9.16",
      "resolved": "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.9.16.tgz",
      "integrity": "sha512-wE4Ut/olIzfKqp631XrG+wbF0v1vWFN4YL9FyXC2LJiG33DsV7PLzURjrCvY/6je2ntdRkeLpPDluzSRGaVltQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@grpc/proto-loader": "^0.7.8",
        "@types/node": ">=12.12.47"
      },
      "engines": {
        "node": "^8.13.0 || >=10.10.0"
      }
    },
    "node_modules/@grpc/proto-loader": {
      "version": "0.7.15",
      "resolved": "https://registry.npmjs.org/@grpc/proto-loader/-/proto-loader-0.7.15.tgz",
      "integrity": "sha512-tMXdRCfYVixjuFK+Hk0Q1s38gV9zDiDJfWL3h1rv4Qc39oILCu1TRTDt7+fGUI8K4G1Fj125Hx/ru3azECWTyQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "lodash.camelcase": "^4.3.0",
        "long": "^5.0.0",
        "protobufjs": "^7.2.5",
        "yargs": "^17.7.2"
      },
      "bin": {
        "proto-loader-gen-types": "build/bin/proto-loader-gen-types.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.144.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.144.0.tgz",
      "integrity": "sha512-nuhZIOLuI6TFQ32I/WnUx+SCPY7SdSKwgnFHydAuoS1+Z4BRcaP+RRJmGzl9lw+0OFF7UmaESf7KQRXaNLHypg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.78.0.tgz",
      "integrity": "sha512-Bu819lmAfZMUHErrpe0cEWj3iaefuUODHSU8+UbXy67V/r7/7f4K3FL0NmbD85E+wiFLDYuhP8Zlv0XnVeXshw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.78.0.tgz",
      "integrity": "sha512-CDfxZgB61B7buRdY2FJoAYYPPXCZ1EoC1LKscnC5dg3kjobdxiconvAvvN1BmHyW4PyFT3jRLDag/BY/roSNBQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.78.0.tgz",
      "integrity": "sha512-2Y2U9Ahrz+OO0Ej88f9SJYq51/jUBp1Mc7iZu0ukrbeeZ3gpRGfzIFnoqfHDY96xr0GEfNrPUBFEy0nN5aD7HA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.78.0.tgz",
      "integrity": "sha512-rpych6eJq6m9jDRypTEaPD1xysaEW5h9+xuxhGK/QhOg+/xaqPZrCrTNoIl/f3nEjuJeCEmstNDlrE9rJi/3/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.78.0.tgz",
      "integrity": "sha512-IcMGrQT3QizkOESUJd5et+rOhVqSkNDfNik1cvrKDqIbzqx9KMtRswpFgkCuNTSwylCFLKhGUu8KmqY1ZnC0Dg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.78.0.tgz",
      "integrity": "sha512-/uLdoJ0IXE6vo/0f0LKjinQAp+re+VMaCWaNT8ENIv2EOCkSsc8SGaflXAuW0Jua2dq5+GLVWm1NQK7P3UFSNQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.78.0.tgz",
      "integrity": "sha512-7xi4Wb/O8NRJhLoUXmDJMUVpNYvB5kefdhFU1Jb8rtae4QoXlTiLwI14X4YvAXVZLNZChP8m5qO9SQAlWQTbkQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.78.0.tgz",
      "integrity": "sha512-4hFW0+fVXa3OIh1Y4A5SPkmvI4wuuBSrCVKzOyE7PTjhc7yEqZ1pmvEEeS5Lj/MaqvegFxXyF33N+6jkehxdyg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.78.0.tgz",
      "integrity": "sha512-oC0mvsgBJjlMijSDEhx9KuvR9zYeHXceA9MjbuXB1F8NSR78Yj2unOBrstEvTVaq+pko+kuue6DajC00eqvTdg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.78.0.tgz",
      "integrity": "sha512-XAllT5SUZS+ohjuZ3/5S0cwe0r7eboiuigeStCZ5DXRYx/2KVM2UvQXvAfyzXEimtQjAB7cDQ2YxDe2Zl2WNQQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.78.0.tgz",
      "integrity": "sha512-trucMER/0QtecoXvc1y/UVqE3kwJipDwrx4oHfj+nNm3dq2zjP44WT0CfHNDPM3G1DXIkx/gY6lAD21NSCZVhA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.78.0.tgz",
      "integrity": "sha512-cm3O4F/HQbdzOUX5mKHqG5KDL6E5w0pnlZ+fbBy2rmLryPOowkuLagFHTopQsEIpjcaZoPOrL+BmmAytAG9HFg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.78.0.tgz",
      "integrity": "sha512-33wRf6HqGNsybJ3qX4cGaQN2ODPxNmc1rMa0mrTmx3eFq1VzOnvQooi9bIGVYakW8a/wmqVx1mgsUm8R2xfTiw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.78.0.tgz",
      "integrity": "sha512-rRdISSYegj6VganMZ9tjRjijowfHJ09IZU01i0toBAqr6n5LEtwHq2IeS4FjW2RoskOHlb6efB26H5izYb3GEQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.78.0.tgz",
      "integrity": "sha512-GmsP4rW0xTL6u5CVdcDsaN5Fbc7hBc382Wmar1kttbnwSEviM+rSINKOMQ+UQ6iH+AGwC+8gaAiwu134Tgh6Lg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.78.0.tgz",
      "integrity": "sha512-sy9yeYuADc8a+n4TLBayzMCZiHPW78DcIFVpOXTmdKHWQeM9xe5uzkqIIZmi326D5hY9XVwacipEB1p7tQjPAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.78.0.tgz",
      "integrity": "sha512-rjc2hF1KfMi8fZj1X/m3AmnHbdsF3rL0v6KQg0Uc880Yb2khjz+3U14sfdZ7jWTpRnN1m1NQa/TT7uU9lJWPrA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.78.0.tgz",
      "integrity": "sha512-zcuXFVrEFHIafRfkCQT8w/Xe41o07ozl/vwHq7p94vB29xVzsB0sZGYORU1jhcYKv3Lr0J3HbJ2T4fHH5rWmvA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.78.0.tgz",
      "integrity": "sha512-Sb5ocmLSuYeOuXd+CFOToGKp/gjXUEWDnvIGwhnh8aq8wY4TMmEnKnvbogSW7RdMZv77JSARduS7/gv+khYEjA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@protobufjs/aspromise": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
      "integrity": "sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/base64": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
      "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/codegen": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.5.tgz",
      "integrity": "sha512-zgXFLzW3Ap33e6d0Wlj4MGIm6Ce8O89n/apUaGNB/jx+hw+ruWEp7EwGUshdLKVRCxZW12fp9r40E1mQrf/34g==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/eventemitter": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.1.tgz",
      "integrity": "sha512-vW1GmwMZNnL+gMRaovlh9yZX74kc+TTU3FObkkurpMaRtBfLP3ldjS9KQWlwZgraRE0+dheEEoAxdzcJQ8eXZg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/fetch": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.1.tgz",
      "integrity": "sha512-GpptLrs57adMSuHi3VNj0mAF8dwh36LMaYF6XyJ6JMWlVsc+t42tm1HSEDmOs3A8fC9yyeisgLhsTVQokOZ0zw==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.1"
      }
    },
    "node_modules/@protobufjs/float": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
      "integrity": "sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/path": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
      "integrity": "sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/pool": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
      "integrity": "sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/utf8": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.2.tgz",
      "integrity": "sha512-b1UQwcEZ4yCnMCD8DAL1VlbvBJE9/IX4FTIp7BG1xYpf29SLazLSrqUkj4w7Y5y7cCVP6E5tcqqcI0xemPkHug==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.4.tgz",
      "integrity": "sha512-jHC2cnyKz5xU2fhECtFl8OZ83cYNt13GZQD+0uMJ/X3o+ijmd56okHhTUwxVSHPx1IRVIJEZ1/1pPzeLCU6XKA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-Dc5mPD8F5F/FS8i01syd7FTF6yB2fVthH/TRkjwJkzUK6EpoxHtqvZQP5Zwq80/5z19TWYHIg1KOHboCgVx/aQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-fpDm4oBo6SqLvWUYCmFhdde3U9KH2fRNNMeAnAPAIwxRL345xutL0EtEUcuoxsoazdJGv/MuDBQHlCDrtbvqOg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.4.tgz",
      "integrity": "sha512-rSJoreDE/HoIzoaib6MTp5jQtCTdMHKIvItAKT/ImS6Y6Ww76oUaeMyp4Vc/fAgd/ehji068IxetHXAnqUwN9A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.4.tgz",
      "integrity": "sha512-/jm8OGHgn7oGaJu3i/qZI9spUGcJ+y/lk43ttQ/iO1tOd9NissG6o97bighBCiL+BKRngmcDuR6ikfwYdJmVuQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.4.tgz",
      "integrity": "sha512-tIP06BeD9EqvECBrPZ+sqdPlYrT+aYaAiu1wYziVx5elRK/ftm33JxVDy2bXGbr6J0CrtirCkR87/X5a2euEng==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.4.tgz",
      "integrity": "sha512-Ql1Q0EQqVThvn9VAVlwNzsUvbSFtCMGjLpRRi4pk5i7NZZ4n5ISiLMjHYtus4VQ2PvkSw24zyaCVsiS+sXPj1w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.4.tgz",
      "integrity": "sha512-GjbjXD4XXfN19D0LZNbmiCBUoDiRACsYHr0yaIbbn8aFsXjHZifcYqu/W5Er5X2X990WjHXFrxarn5chzItorQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.4.tgz",
      "integrity": "sha512-p5WR0NOwaRmJ/B1b6IjEFLLivwEsf3PrdBIhRbhTCQisbo2SvHHpG4ELB/+FgQNnB88LTOF86upmJmbvZdQ2lw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.4.tgz",
      "integrity": "sha512-4/GyVjmhR+Tc6HLJvwc1sOhPqAZtySiSMesOZyX6JQ5XBxoTDEMKQzvo07NIK6nTon/SivlZqvhzvuVBNQhObQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.4.tgz",
      "integrity": "sha512-l9eeLsCNvPpmSXUej0etw/J1eqV0Jj1D5G/xG6YTijmE6dkv6E2QezgWbTfQk63v952DPqrjOCoiqxq7Bw0YUQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.4.tgz",
      "integrity": "sha512-e0F355MSTMm3+UOqtV3L24gFUp2N5m1f8L/7d56deik6va+AXdrt9F8LbzGpeWGWRbZEDq4m8NVnJDeBtf9DZg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.4.tgz",
      "integrity": "sha512-AWLi0uBRYh6QlE7OKhiz+phZC0qwtij2QZmhmOdsLdFn64m7oMpooE9ICE3lhm9xMb4SpDo2WbHcxX1iFLFtqw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.4.tgz",
      "integrity": "sha512-UwSDJOg3dqCAejWdxclJjCsh3Qq4vLYMDxmyHqo1btz3stK2VqgwNd3mm5tuIwzSlGIQ/1H9Hr+Zn09mrezNqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "26.2.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.2.0.tgz",
      "integrity": "sha512-5IviulTZeRNp2vAJ514cc/HUlY5nZ9fCbq9DMyC52BrhFZACo3nI0R7qBxhQmo/d27NFe96ur/b7Wwxklda+kg==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.18",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.18.tgz",
      "integrity": "sha512-AnzbBERsrLKtk2XSfTbYRLjQPdy116Sty4q+T+Bp3IC4l6jNBvreVPAHmpq9qhXQM7CXZPjLVmGMw9sy+hxQ3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.4.tgz",
      "integrity": "sha512-Bsc+QHgp+P/F02XDzNCY9jnZNCUuLki36KT7VKrTXXLdHf+vHMNZnW1rVu5DNW/rCK+fya3DATySbLM4yhtKUw==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/trusted-types": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/@types/trusted-types/-/trusted-types-2.0.7.tgz",
      "integrity": "sha512-ScaPdn1dQczgbl0QFTeTOmVHFULt394XJgOQNoyVhZ6r2vLnMLJfBPd53SB52T/3G36VI1/g2MZaX0cwDuXsfw==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.5.tgz",
      "integrity": "sha512-BOVzne/NL162sMdResB25mUv+vWMF5NoAjNf09TeGlE7ZpszZWSD3winycicLJw72yeVsoCn/2kOhEuCvEShMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dompurify": {
      "version": "3.4.13",
      "resolved": "https://registry.npmjs.org/dompurify/-/dompurify-3.4.13.tgz",
      "integrity": "sha512-2vmYIoqjze2d+kakP8S/nS5shfsl587kzwEjcGlTdiksUVgFHnFCsLYDVj/JNqJVOQZGSYBTmuycv0PodwmnMQ==",
      "license": "(MPL-2.0 OR Apache-2.0)",
      "optionalDependencies": {
        "@types/trusted-types": "^2.0.7"
      }
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/faye-websocket": {
      "version": "0.11.4",
      "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
      "integrity": "sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==",
      "license": "Apache-2.0",
      "dependencies": {
        "websocket-driver": ">=0.5.1"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/firebase": {
      "version": "12.17.1",
      "resolved": "https://registry.npmjs.org/firebase/-/firebase-12.17.1.tgz",
      "integrity": "sha512-dhp41ye9jMQvhx5FwjMkf/hjDHJApl7gXmvzOZGvP0M7c/GZGUnQ4qvsvlOBkF0Pa7wAwHMdcpL0ON2pXCQ4Sw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/ai": "2.14.0",
        "@firebase/analytics": "0.10.23",
        "@firebase/analytics-compat": "0.2.29",
        "@firebase/app": "0.16.0",
        "@firebase/app-check": "0.13.0",
        "@firebase/app-check-compat": "0.4.6",
        "@firebase/app-compat": "0.5.16",
        "@firebase/app-types": "0.9.5",
        "@firebase/auth": "1.13.4",
        "@firebase/auth-compat": "0.6.9",
        "@firebase/data-connect": "0.7.3",
        "@firebase/database": "1.1.4",
        "@firebase/database-compat": "2.1.6",
        "@firebase/firestore": "4.17.0",
        "@firebase/firestore-compat": "0.4.12",
        "@firebase/functions": "0.13.6",
        "@firebase/functions-compat": "0.4.6",
        "@firebase/installations": "0.6.23",
        "@firebase/installations-compat": "0.2.23",
        "@firebase/messaging": "0.13.1",
        "@firebase/messaging-compat": "0.2.28",
        "@firebase/performance": "0.7.13",
        "@firebase/performance-compat": "0.2.26",
        "@firebase/remote-config": "0.9.1",
        "@firebase/remote-config-compat": "0.2.28",
        "@firebase/storage": "0.14.4",
        "@firebase/storage-compat": "0.4.4",
        "@firebase/util": "1.15.2"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/http-parser-js": {
      "version": "0.5.10",
      "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.10.tgz",
      "integrity": "sha512-Pysuw9XpUq5dVc/2SMHpuTY01RFl8fttgcyunjL7eEMhGM3cI4eOmiCycJDVCo/7O7ClfQD3SaI6ftDzqOXYMA==",
      "license": "MIT"
    },
    "node_modules/idb": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/idb/-/idb-7.1.1.tgz",
      "integrity": "sha512-gchesWBzyvGHRO9W8tzUWFDycow5gwjvFKfyV9FF32Y7F50yZMp7mP+T2mJIWFx49zicqyC4uefHM17o6xKIVQ==",
      "license": "ISC"
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lodash.camelcase": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz",
      "integrity": "sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==",
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "license": "Apache-2.0"
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/oxlint": {
      "version": "1.78.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.78.0.tgz",
      "integrity": "sha512-QgQePuxIqKOzo1KSjG2EnITEeWvWnKAm77eq8nrMtf6AGoA+zyGc4PFYtDNJSD25g/ibOwfQ851hZ4/SPkMVoA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.78.0",
        "@oxlint/binding-android-arm64": "1.78.0",
        "@oxlint/binding-darwin-arm64": "1.78.0",
        "@oxlint/binding-darwin-x64": "1.78.0",
        "@oxlint/binding-freebsd-x64": "1.78.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.78.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.78.0",
        "@oxlint/binding-linux-arm64-gnu": "1.78.0",
        "@oxlint/binding-linux-arm64-musl": "1.78.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.78.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.78.0",
        "@oxlint/binding-linux-riscv64-musl": "1.78.0",
        "@oxlint/binding-linux-s390x-gnu": "1.78.0",
        "@oxlint/binding-linux-x64-gnu": "1.78.0",
        "@oxlint/binding-linux-x64-musl": "1.78.0",
        "@oxlint/binding-openharmony-arm64": "1.78.0",
        "@oxlint/binding-win32-arm64-msvc": "1.78.0",
        "@oxlint/binding-win32-ia32-msvc": "1.78.0",
        "@oxlint/binding-win32-x64-msvc": "1.78.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=7.0.2001",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.26",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.26.tgz",
      "integrity": "sha512-u82N74LFzG8ca+dD8puPnplTXoGH4fTPpVGuIbt36G3qvNlkvfD0lEAZSxaly3KX8TS/L1A1gsCEmvKmBcVbkQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.17",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/protobufjs": {
      "version": "7.6.5",
      "resolved": "https://registry.npmjs.org/protobufjs/-/protobufjs-7.6.5.tgz",
      "integrity": "sha512-/FPD0nUc9jH6rfFjji9IBqOz4pcSE3CsT1m7Ep6Mdb0LxSUMj8hgl6GomOvZzpNpAqqGaXA0P3VSrZLFzIhQrw==",
      "hasInstallScript": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.2",
        "@protobufjs/base64": "^1.1.2",
        "@protobufjs/codegen": "^2.0.5",
        "@protobufjs/eventemitter": "^1.1.1",
        "@protobufjs/fetch": "^1.1.1",
        "@protobufjs/float": "^1.0.2",
        "@protobufjs/path": "^1.1.2",
        "@protobufjs/pool": "^1.1.0",
        "@protobufjs/utf8": "^1.1.1",
        "@types/node": ">=13.7.0",
        "long": "^5.3.2"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/re2js": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/re2js/-/re2js-2.8.6.tgz",
      "integrity": "sha512-xLgQil4kIUCrAzVk9fRSkxkFNwmygLFjVxXrLc65aE1F0+Zsb8rxumFBy4XKyvgMCTL6kilDq3EZ0piE2dP/Dg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/react": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.8.tgz",
      "integrity": "sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.8.tgz",
      "integrity": "sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.8"
      }
    },
    "node_modules/react-router": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.18.2.tgz",
      "integrity": "sha512-aUVMjFm3GAPTTZL7oYr5E7ETiqfQCHRLH+B+5afnICvf0r7kkK4eR6SMuwbSTJw/7t+12khT/Kahij49fqOCIg==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.18.2.tgz",
      "integrity": "sha512-AIKJ/jgGlFb3EbfCXk5Gzshiwt+l3mqbCrNjmEWMMjqQxNJ3svBa6bgzFyCC2Sw3RA0VWF1kg3uQf2OFhxb8hw==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.18.2"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.4.tgz",
      "integrity": "sha512-rSr7irW0K7QRWzjdJXqZowkcRdDtjRduh43rBltnVKd0VFq839l1lJoDvGJb6gl7+4rTTCrPWu+YfujUL8Ug7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.144.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.2.4",
        "@rolldown/binding-darwin-arm64": "1.2.4",
        "@rolldown/binding-darwin-x64": "1.2.4",
        "@rolldown/binding-freebsd-x64": "1.2.4",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.4",
        "@rolldown/binding-linux-arm64-gnu": "1.2.4",
        "@rolldown/binding-linux-arm64-musl": "1.2.4",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.4",
        "@rolldown/binding-linux-s390x-gnu": "1.2.4",
        "@rolldown/binding-linux-x64-gnu": "1.2.4",
        "@rolldown/binding-linux-x64-musl": "1.2.4",
        "@rolldown/binding-openharmony-arm64": "1.2.4",
        "@rolldown/binding-win32-arm64-msvc": "1.2.4",
        "@rolldown/binding-win32-x64-msvc": "1.2.4"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "8.2.1",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.2.1.tgz",
      "integrity": "sha512-EU/eS7BH3XROHh2YnBefjM6DBKA6ZeMZEYQbj7NLWg5wHYlhB8B/Mayd5XsgWq+NFYccDOTemRpdETWR6Ka/lw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.5",
        "postcss": "^8.5.25",
        "rolldown": "~1.2.1",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.4.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/web-vitals": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/web-vitals/-/web-vitals-4.2.4.tgz",
      "integrity": "sha512-r4DIlprAGwJ7YM11VZp4R884m0Vmgr6EAKe3P+kO0PPj3Unqyvv59rczf6UiGcb9Z8QxZVcqKNwv/g0WNdWwsw==",
      "license": "Apache-2.0"
    },
    "node_modules/websocket-driver": {
      "version": "0.7.5",
      "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.5.tgz",
      "integrity": "sha512-ZL2+3c7kMBdIRCMz6l8jQMHyGVxj+UL+xVk74Ombiciboca8rHa15L86B19E5oh1pL9Ii/uj54gtsIrZGMo6zA==",
      "license": "Apache-2.0",
      "dependencies": {
        "http-parser-js": ">=0.5.1",
        "safe-buffer": ">=5.1.0",
        "websocket-extensions": ">=0.1.1"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/websocket-extensions": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
      "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs": {
      "version": "17.7.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.3.tgz",
      "integrity": "sha512-GZtjxm/J/4TSxuL3FNYjCmLktBTnIw/rVmKSIyKeYAZpmJB2ig9VauCC5xsa82GNKVKDAqpOn3KVzNt0zmrU0g==",
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    }
  }
}

```

---

### 📄 Archivo: `package.json`

```json
{
  "name": "cpsl-campus-interactivo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "dompurify": "^3.4.13",
    "firebase": "^12.17.1",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.2"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.4",
    "oxlint": "^1.75.0",
    "vite": "^8.2.0"
  }
}

```

---

### 📄 Archivo: `src/App.css`

```css
/* App Specific Styles */

/* Login View */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at 50% 50%, #0d1b3e 0%, var(--bg-dark) 100%);
}

.login-card {
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.form-group {
  margin-bottom: 2rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-muted);
}

.form-group input {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  color: white;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: var(--crear-blue);
  background: rgba(0, 0, 0, 0.4);
}

/* Sidebar */
.sidebar {
  width: 280px;
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0;
  box-shadow: none;
  background: rgba(255, 255, 255, 0.01);
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  display: block;
  padding: 1rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
}

.sidebar a:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.sidebar a.active {
  background: var(--crear-gold-light);
  color: var(--crear-gold);
  font-weight: 600;
  border-left: 3px solid var(--crear-gold);
}

/* Dashboard Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Helpers */
.p-6 {
  padding: 2rem;
}

/* Progress bar */
.progress-bar-container {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--crear-blue) 0%, var(--crear-gold) 100%);
  border-radius: 4px;
  transition: width 0.5s ease-out;
}

/* ==========================================================================
   MOBILE & RESPONSIVE DESIGN
   ========================================================================== */

.mobile-header {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.mobile-menu-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.close-sidebar-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
}

.close-sidebar-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 90;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar-overlay.show {
  display: block;
  opacity: 1;
}

@media (max-width: 992px) {
  .app-layout {
    flex-direction: column;
  }
  
  .mobile-header {
    display: flex;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    z-index: 100;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .close-sidebar-btn {
    display: block;
  }
  
  .main-content {
    padding: 1.5rem 1rem;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .login-card {
    padding: 2rem 1.5rem;
  }
}

```

---

### 📄 Archivo: `src/App.jsx`

```javascript
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar'
import GlobalHUDWidget from './components/GlobalHUDWidget'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import RutaFormacion from './pages/RutaFormacion'
import ModuloContainer from './pages/ModuloContainer'
import EvaluacionContainer from './pages/EvaluacionContainer'
import Groundings from './pages/Groundings'
import Evaluaciones from './pages/Evaluaciones'
import Dinamicas from './pages/Dinamicas'
import MaquinaQuiebres from './pages/MaquinaQuiebres'
import ProgramaEntrenamiento from './pages/ProgramaEntrenamiento'
import AutoevaluacionCoach from './pages/AutoevaluacionCoach'
import AdminDashboard from './pages/AdminDashboard'
import TareasQuantumTeam from './pages/TareasQuantumTeam'
import NotFound from './pages/NotFound'
import Glosario from './pages/Glosario'
import AdminRoute from './components/AdminRoute'
import { useAuth } from './context/AuthContext'
import { useUI } from './context/UIContext'
import { updateSessionHeartbeat, logSessionRoute } from './services/db'

function App() {
  const { user, sessionId, loginWithGoogle, loading } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [consentStatus, setConsentStatus] = useState(localStorage.getItem('analyticsConsent') || 'pending');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Registro de Rutas Consciente (Reemplazo de Spy Mode)
  useEffect(() => {
    if (user && sessionId && consentStatus === 'granted') {
      // Uso de clave idempotente para evitar duplicados en StrictMode
      const routeKey = `${sessionId}:${location.pathname}`;
      const lastRoute = sessionStorage.getItem('lastRouteRecorded');
      if (lastRoute !== routeKey) {
        logSessionRoute(user.uid, sessionId, location.pathname);
        sessionStorage.setItem('lastRouteRecorded', routeKey);
      }
    }
  }, [user, sessionId, location.pathname, consentStatus]);

  // Rastreador de tiempo basado en visibilidad (Heartbeat)
  useEffect(() => {
    if (!user || !sessionId || consentStatus !== 'granted') return;

    const sendHeartbeat = () => {
      if (document.visibilityState === 'visible') {
        updateSessionHeartbeat(user.uid, sessionId);
      }
    };

    const intervalId = window.setInterval(sendHeartbeat, 5 * 60 * 1000); // 5 minutos

    return () => {
      window.clearInterval(intervalId);
    };
  }, [user, sessionId, consentStatus]);

  if (loading) {
    return null; // El AuthProvider ya está mostrando la pantalla de carga principal
  }

  if (!user) {
    return (
      <div className="login-container">
        <div className="glass-panel login-card animate-fade-in" style={{padding: '4rem 3rem'}}>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
            <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{width: '300px', height: '300px', maxWidth: '100%'}} />
          </div>
          <h1 className="text-gold" style={{fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', letterSpacing: '2px'}}>INTERRUPTION</h1>
          <p className="text-muted" style={{marginBottom: '3rem', fontSize: '1.1rem', textAlign: 'center'}}>Plataforma de Entrenamiento Avanzado</p>
          
          <button onClick={loginWithGoogle} className="btn-primary" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Continuar con Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`app-layout ${isFocusMode ? 'focus-mode-active' : ''}`}>
      {!isFocusMode && (
        <>
          <div className="mobile-header glass-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{ width: '45px', height: '45px' }} />
              <h2 className="text-gold" style={{ fontSize: '1.2rem', margin: 0, letterSpacing: '1px' }}>INTERRUPTION</h2>
            </div>
            <button 
              type="button"
              className="mobile-menu-btn" 
              onClick={toggleMobileMenu}
              aria-label="Abrir menú principal"
              aria-expanded={isMobileMenuOpen}
              aria-controls="main-navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--crear-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </>
      )}

      {user && <GlobalHUDWidget />}

      <main className="main-content animate-fade-in">
        {isFocusMode && (
          <button 
            onClick={toggleFocusMode} 
            className="focus-exit-btn"
            title="Salir del Modo Enfoque"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            <span>Salir de Enfoque</span>
          </button>
        )}
        
        {consentStatus === 'pending' && (
          <div className="glass-panel" style={{ position: 'fixed', bottom: '20px', right: '20px', left: '20px', zIndex: 9999, padding: '1.5rem', borderLeft: '4px solid var(--crear-blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{flex: 1, minWidth: '300px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'var(--text-main)'}}>Registro de Progreso</h4>
              <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)'}}>
                Registramos tu avance, rutas visitadas y tiempo aproximado para mejorar tu experiencia de aprendizaje. No registramos el contenido privado de tus reflexiones en herramientas.
              </p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <button className="btn-secondary" onClick={() => {
                localStorage.setItem('analyticsConsent', 'denied');
                setConsentStatus('denied');
              }}>
                Rechazar
              </button>
              <button className="btn-primary" onClick={() => {
                localStorage.setItem('analyticsConsent', 'granted');
                setConsentStatus('granted');
              }}>
                Aceptar
              </button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/home" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/ruta" element={<ProtectedRoute><RutaFormacion /></ProtectedRoute>} />
          <Route path="/modulo/:id" element={<ProtectedRoute><ModuloContainer /></ProtectedRoute>} />
          <Route path="/evaluacion/:id" element={<ProtectedRoute><EvaluacionContainer /></ProtectedRoute>} />
          <Route path="/groundings" element={<ProtectedRoute><Groundings /></ProtectedRoute>} />
          <Route path="/dinamicas" element={<ProtectedRoute><Dinamicas /></ProtectedRoute>} />
          <Route path="/quiebres" element={<ProtectedRoute><MaquinaQuiebres /></ProtectedRoute>} />
          <Route path="/entrenamiento" element={<ProtectedRoute><ProgramaEntrenamiento /></ProtectedRoute>} />
          <Route path="/autoevaluacion" element={<ProtectedRoute><AutoevaluacionCoach /></ProtectedRoute>} />
          <Route path="/glosario" element={<ProtectedRoute><Glosario /></ProtectedRoute>} />
          <Route path="/evaluaciones" element={<ProtectedRoute><Evaluaciones /></ProtectedRoute>} />
          <Route path="/tareas-qt" element={<ProtectedRoute><TareasQuantumTeam /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/superadmin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

```

---

### 📄 Archivo: `src/components/AdminRoute.jsx`

```javascript
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

```

---

### 📄 Archivo: `src/components/ErrorBoundary.jsx`

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary atrapó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#fff', background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Algo salió mal</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>La plataforma ha encontrado un error inesperado.</p>
          <button 
            className="btn-primary" 
            onClick={() => window.location.replace('/')}
          >
            Volver al inicio
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;

```

---

### 📄 Archivo: `src/components/GlobalHUDWidget.jsx`

```javascript
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';

export default function GlobalHUDWidget() {
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedGodAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
    } else if (user?.photoURL) {
      setSelectedAvatar(user.photoURL);
    }

    if (user) {
      getUserProgress(user.uid).then((data) => {
        if (data) setProgress(data.globalPercentage || 0);
      });
    }
  }, [user]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const selectAvatar = (path) => {
    setSelectedAvatar(path);
    localStorage.setItem('selectedGodAvatar', path);
    setShowAvatarModal(false);
  };

  const gods = [
    { id: 'prometeo', name: 'Prometeo (Robó el fuego)', path: '/avatars/prometeo.jpg' },
    { id: 'wukong', name: 'Sun Wukong (Desafió al cielo)', path: '/avatars/sun_wukong.jpg' },
    { id: 'loki', name: 'Loki (Dios del Caos)', path: '/avatars/loki.jpg' }
  ];

  if (!user) return null;

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <div className="global-hud-widget animate-fade-in">
        <audio ref={audioRef} src="/Magic.mp3" loop />
        
        <button 
          className={`hud-music-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>

        <div className="hud-avatar-container" onClick={() => setShowAvatarModal(true)} title={`${progress}% Completado. Cambiar avatar.`}>
          <svg width="60" height="60" className="hud-progress-ring">
            <circle
              className="hud-progress-ring-bg"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="30"
              cy="30"
            />
            <circle
              className="hud-progress-ring-fill"
              stroke="var(--crear-gold)"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="30"
              cy="30"
            />
          </svg>
          {selectedAvatar ? (
            <img src={selectedAvatar} alt="Avatar" className="hud-avatar-img" />
          ) : (
            <div className="hud-avatar-placeholder">?</div>
          )}
        </div>
      </div>

      {showAvatarModal && (
        <div className="modal-overlay" onClick={() => setShowAvatarModal(false)} style={{ zIndex: 10001 }}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <h3 className="text-gold" style={{ marginTop: 0, fontSize: '1.5rem' }}>Elige tu Avatar Disruptor</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Si no tienes una foto de perfil (o quieres cambiarla), puedes elegir a uno de los dioses que interrumpieron la mitología.</p>
            
            <div className="gods-grid">
              {gods.map(god => (
                <div key={god.id} className="god-card" onClick={() => selectAvatar(god.path)}>
                  <img src={god.path} alt={god.name} />
                  <p>{god.name}</p>
                </div>
              ))}
            </div>

            <button className="btn-secondary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => setShowAvatarModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

```

---

### 📄 Archivo: `src/components/ProtectedRoute.jsx`

```javascript
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

```

---

### 📄 Archivo: `src/components/Sidebar.jsx`

```javascript
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import { useEffect } from 'react'

export default function Sidebar({ isOpen, onClose }) {
  const { isAdmin } = useAuth();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
      <aside 
        id="main-navigation"
        className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}
        aria-label="Navegación principal"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', position: 'relative' }}>
          <button className="close-sidebar-btn" onClick={onClose} aria-label="Cerrar menú" style={{ position: 'absolute', right: '-10px', top: '-10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crear-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{ width: '160px', height: '160px', marginBottom: '0.5rem' }} />
          <h2 className="text-gold" style={{fontSize: '1.4rem', margin: 0, letterSpacing: '1px'}}>INTERRUPTION</h2>
        </div>
        <nav>
        <ul>
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ruta"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Ruta de Formación
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/modulo/modulo1"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Módulo Actual
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/groundings"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Groundings
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dinamicas"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Máquina de Dinámicas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/quiebres"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Máquina de Quiebres ⚡
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/entrenamiento"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Programa 6 Semanas 🚀
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/glosario" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="nav-icon">📖</span>
              <span className="nav-text">Glosario Central</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/autoevaluacion"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Autoevaluación Coach 🧭
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/tareas-qt"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Tareas QT (Deadlines C1) 🎯
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/evaluaciones"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Evaluaciones Alumnos
            </NavLink>
          </li>
          {isAdmin && (
            <li style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 215, 0, 0.2)' }}>
              <NavLink 
                to="/admin"
                className={({ isActive }) => isActive ? "active text-gold" : "text-gold"}
                onClick={onClose}
              >
                👑 Panel CEO
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
    </>
  )
}

```

---

### 📄 Archivo: `src/context/AuthContext.jsx`

```javascript
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { googleProvider } from '../lib/firebase';
import { initializeUser, startSession } from '../services/db';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);
  const [authError, setAuthError] = useState(null);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setAuthError(null);

      if (!currentUser) {
        setUser(null);
        setSessionId(null);
        setLoading(false);
        return;
      }

      try {
        // Obtenemos el token para verificar roles (Custom Claims)
        const tokenResult = await currentUser.getIdTokenResult();
        const hasAdminClaim = !!tokenResult.claims.admin;
        
        // Mantenemos el fallback por email temporalmente mientras se configuran los custom claims
        const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'jose.sanchez@crearpsl.net';
        const isEmailAdmin = currentUser.email === adminEmail;
        
        setIsAdmin(hasAdminClaim || isEmailAdmin);

        await initializeUser(currentUser);
        const sid = await startSession(currentUser.uid);
        
        setSessionId(sid);
        setUser(currentUser);
      } catch (error) {
        console.error("Error de inicialización:", error);
        setAuthError({
          code: error.code || 'unknown',
          message: error.message || "No pudimos preparar tu sesión. Intenta nuevamente."
        });
        setUser(null);
        setSessionId(null);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      // Verificar si las credenciales son las de prueba
      if (import.meta.env.VITE_FIREBASE_API_KEY === 'YOUR_API_KEY_HERE') {
        alert('⚠️ ATENCIÓN: El botón de Google está conectado, pero necesita tus credenciales de Firebase en el archivo .env.local para funcionar.\n\nPor favor revisa el chat para ver los pasos de cómo crear tu cuenta gratuita de Firebase.');
        return;
      }
      
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
      alert("Hubo un error al conectar con Google. Revisa la consola para más detalles.");
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, sessionId, loginWithGoogle, logout, loading, isAdmin, authError }}>
      {loading ? (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#0a1128', color: '#ffb703'}}>
          <div style={{width: '50px', height: '50px', border: '5px solid rgba(255,183,3,0.3)', borderTop: '5px solid #ffb703', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem'}}></div>
          <h2>Conectando con el servidor...</h2>
          <p style={{color: '#adb5bd'}}>Por favor espera unos segundos.</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      ) : authError ? (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#0a1128', color: 'var(--color-error)', padding: '2rem', textAlign: 'center'}}>
          <h2>Error de Autenticación</h2>
          <p style={{color: '#fff', marginBottom: '2rem', maxWidth: '500px'}}>{authError.message}</p>
          <button className="btn-primary" onClick={() => window.location.reload()}>Reintentar Conexión</button>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

```

---

### 📄 Archivo: `src/context/UIContext.jsx`

```javascript
import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export function useUI() {
  return useContext(UIContext);
}

export function UIProvider({ children }) {
  const [isFocusMode, setIsFocusMode] = useState(false);

  const toggleFocusMode = () => {
    setIsFocusMode(prev => !prev);
  };

  const setFocusMode = (value) => {
    setIsFocusMode(value);
  }

  const value = {
    isFocusMode,
    toggleFocusMode,
    setFocusMode
  };

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}

```

---

### 📄 Archivo: `src/data/autoevaluacionCoach.js`

```javascript
export const dimensionesAutoevaluacion = [
  {
    id: 1,
    titulo: "PRESENCIA DEL COACH",
    preguntas: [
      "¿Qué tan presente estoy en mis sesiones? (sin distracciones, sin pensar en la siguiente pregunta)",
      "¿Qué tan conectado estoy con mi intuición durante la sesión?",
      "¿Qué tan cómodo estoy con el silencio y los espacios vacíos?",
      "¿Qué tan capaz soy de sostener la incomodidad del coachee sin rescatarlo?",
      "¿Qué tan alineada está mi energía con lo que digo?"
    ],
    senales_positivas: [
      "El coachee se siente 'visto' y 'escuchado'.",
      "Hay silencios productivos, no incómodos.",
      "Las preguntas surgen de la intuición, no de un guion.",
      "Tu cuerpo está relajado pero alerta."
    ],
    senales_negativas: [
      "Piensas en la siguiente pregunta mientras el coachee habla.",
      "Te distraes con el reloj, el celular o pensamientos externos.",
      "Rescates al coachee cuando hay incomodidad.",
      "Tu energía está dispersa o ansiosa."
    ],
    accion_mejora: [
      "Practica 5 minutos de meditación antes de cada sesión.",
      "Graba tus sesiones y escúchalas prestando atención a tus silencios.",
      "Pide feedback: '¿Qué tan presente te sentí en esta sesión?'"
    ]
  },
  {
    id: 2,
    titulo: "ESCUCHA DEL COACH",
    preguntas: [
      "¿Qué tan bien escucho lo que el coachee DICE?",
      "¿Qué tan bien escucho lo que el coachee NO dice?",
      "¿Qué tan bien escucho el lenguaje corporal y la energía del coachee?",
      "¿Qué tan bien escucho mis propias interpretaciones sin imponerlas?",
      "¿Qué tan bien escucho el contexto más amplio (equipo, organización, sistema)?"
    ],
    senales_positivas: [
      "Parafraseas con precisión lo que el coachee dijo.",
      "Notas patrones recurrentes en el lenguaje del coachee.",
      "Detectas incongruencias entre palabra, tono y cuerpo.",
      "El coachee dice: 'Exactamente, eso es lo que quiero decir.'"
    ],
    senales_negativas: [
      "Interrumpes al coachee antes de que termine.",
      "Das consejos o soluciones prematuras.",
      "Proyectas tus interpretaciones sin verificar.",
      "El coachee tiene que repetir o explicar múltiples veces."
    ],
    accion_mejora: [
      "Practica la escucha activa: parafrasea antes de preguntar.",
      "Graba sesiones y cuenta cuántas veces interrumpes.",
      "Pide feedback: '¿Qué sentiste que no escuché de ti?'"
    ]
  },
  {
    id: 3,
    titulo: "PREGUNTAS PODEROSAS",
    preguntas: [
      "¿Qué tan efectivas son mis preguntas para generar quiebres?",
      "¿Qué tan abiertas son mis preguntas? (evitar preguntas cerradas)",
      "¿Qué tan bien timing tienen mis preguntas?",
      "¿Qué tan bien se alinean mis preguntas con el objetivo de la sesión?",
      "¿Qué tan bien evito preguntas que reflejan MI curiosidad, no la del coachee?"
    ],
    senales_positivas: [
      "El coachee hace una pausa larga antes de responder.",
      "El coachee dice: 'Nunca había pensado en eso.'",
      "La pregunta genera emoción visible (lágrimas, risa, incomodidad).",
      "La pregunta abre posibilidades, no las cierra."
    ],
    senales_negativas: [
      "El coachee responde rápidamente sin pensar.",
      "La pregunta es cerrada (sí/no) o sugiere la respuesta.",
      "La pregunta refleja tu curiosidad, no la transformación del coachee.",
      "La pregunta genera defensa o resistencia."
    ],
    accion_mejora: [
      "Prepara 3-5 preguntas poderosas antes de cada sesión.",
      "Después de cada pregunta, observa: ¿generó quiebre o no?",
      "Pide feedback: '¿Qué pregunta te generó más insight?'"
    ]
  },
  {
    id: 4,
    titulo: "GENERACIÓN DE QUIEBRES",
    preguntas: [
      "¿Qué tan bien genero quiebres reales (no solo insights intelectuales)?",
      "¿Qué tan bien muevo al coachee de la queja a la responsabilidad?",
      "¿Qué tan bien desafío las narrativas limitantes del coachee?",
      "¿Qué tan bien sostengo el quiebre hasta que hay acción?",
      "¿Qué tan bien evito rescatar al coachee del quiebre?"
    ],
    senales_positivas: [
      "Silencio incómodo después de una intervención.",
      "Emoción visible (lágrimas, risa nerviosa, tensión corporal).",
      "Cambio en el lenguaje del coachee (de queja a compromiso).",
      "Acción concreta reportada en el seguimiento."
    ],
    senales_negativas: [
      "El coachee dice: 'Tienes razón, voy a mejorar.' (vago, sin acción).",
      "Hay catarsis emocional pero no hay compromiso de acción.",
      "El coachee vuelve al mismo patrón en la siguiente sesión.",
      "No hay reporte de acción en el seguimiento."
    ],
    accion_mejora: [
      "Después de cada quiebre, pregunta: '¿Qué acción tomarás en las próximas 24 horas?'",
      "Establece checkpoints obligatorios (24h, 7 días).",
      "Pide feedback: '¿Qué quiebre real tuviste en esta sesión?'"
    ]
  },
  {
    id: 5,
    titulo: "CONGRUENCIA DEL COACH",
    preguntas: [
      "¿Qué tan congruente soy entre lo que digo y lo que hago?",
      "¿Qué tan bien honro mis propios compromisos con mis coachees?",
      "¿Qué tan bien modelo los comportamientos que enseño?",
      "¿Qué tan bien reconozco mis propios patrones limitantes?",
      "¿Qué tan bien trabajo mis propios temas (no los proyecto en el coachee)?"
    ],
    senales_positivas: [
      "Llegas a tiempo a las sesiones.",
      "Cumples los compromisos que haces con los coachees.",
      "Tu vida personal refleja los principios que enseñas.",
      "Reconoces tus errores y te haces responsable."
    ],
    senales_negativas: [
      "Llegas tarde o cancelas sesiones sin aviso adecuado.",
      "No das seguimiento a los compromisos de los coachees.",
      "Enseñas responsabilidad pero culpas a otros por tus problemas.",
      "Proyectas tus temas no resueltos en los coachees."
    ],
    accion_mejora: [
      "Ten un mentor o supervisor que evalúe tu congruencia.",
      "Pide feedback honesto a tus coachees: '¿Qué tan congruente me sientes?'",
      "Trabaja tus propios temas con un coach o terapeuta."
    ]
  },
  {
    id: 6,
    titulo: "DISEÑO DE CONTEXTO",
    preguntas: [
      "¿Qué tan bien diseño el contexto de mis sesiones? (espacio, tiempo, energía)",
      "¿Qué tan bien diseño el contexto de mis programas de entrenamiento?",
      "¿Qué tan bien creo un espacio seguro para la vulnerabilidad?",
      "¿Qué tan bien establezco acuerdos claros con mis coachees/equipos?",
      "¿Qué tan bien sostengo el contexto a lo largo del tiempo?"
    ],
    senales_positivas: [
      "Los coachees llegan puntuales y preparados.",
      "Hay un acuerdo claro de confidencialidad y respeto.",
      "Los coachees se sienten seguros para ser vulnerables.",
      "El contexto se sostiene a lo largo de las sesiones."
    ],
    senales_negativas: [
      "Los coachees llegan tarde o distraídos.",
      "No hay acuerdos claros o no se cumplen.",
      "Los coachees no se sienten seguros para abrirse.",
      "El contexto se pierde o se diluye con el tiempo."
    ],
    accion_mejora: [
      "Establece acuerdos claros al inicio de cada relación.",
      "Crea rituales de apertura y cierre de sesiones.",
      "Evalúa el contexto periódicamente: '¿Qué contexto estamos creando?'"
    ]
  },
  {
    id: 7,
    titulo: "SEGUIMIENTO Y ACCOUNTABILITY",
    preguntas: [
      "¿Qué tan bien doy seguimiento a los compromisos de mis coachees?",
      "¿Qué tan bien establezco checkpoints claros y medibles?",
      "¿Qué tan bien confronto cuando no hay acción?",
      "¿Qué tan bien celebro los logros de mis coachees?",
      "¿Qué tan bien evalúo el impacto real de mi coaching?"
    ],
    senales_positivas: [
      "Los coachees reportan acción en los checkpoints.",
      "Hay métricas claras de progreso.",
      "Confrontas con respeto cuando no hay acción.",
      "Celebras los logros, por pequeños que sean."
    ],
    senales_negativas: [
      "Los coachees no reportan y tú no lo confrontas.",
      "No hay métricas claras de progreso.",
      "Evitas confrontar la falta de acción.",
      "No celebras los logros."
    ],
    accion_mejora: [
      "Establece checkpoints obligatorios (24h, 7 días, 30 días).",
      "Usa un sistema de tracking (Excel, app, diario).",
      "Confronta con curiosidad: '¿Qué pasó? ¿Qué te impidió actuar?'",
      "Celebra cada logro, por pequeño que sea."
    ]
  },
  {
    id: 8,
    titulo: "EXPANSIÓN DEL COACH",
    preguntas: [
      "¿Qué tan bien me mantengo en aprendizaje continuo?",
      "¿Qué tan bien busco supervisión o mentoría para mi práctica?",
      "¿Qué tan bien evalúo mi propio impacto y ajusto mi enfoque?",
      "¿Qué tan bien cuido mi propio bienestar (evito burnout)?",
      "¿Qué tan bien enrolo a otros a ser coaches o líderes?"
    ],
    senales_positivas: [
      "Lees, estudias, te capacitas continuamente.",
      "Tienes un mentor o supervisor que evalúa tu práctica.",
      "Ajustas tu enfoque basado en feedback y resultados.",
      "Cuidas tu energía, salud y bienestar.",
      "Enrolos a otros a crecer y liderar."
    ],
    senales_negativas: [
      "No lees ni te capacitas desde hace tiempo.",
      "No tienes supervisión o mentoría.",
      "Usas el mismo enfoque con todos los coachees.",
      "Estás quemado, cansado, resentido.",
      "No enrolos a otros a crecer."
    ],
    accion_mejora: [
      "Dedica 5 horas semanales a aprendizaje (libros, cursos, podcasts).",
      "Busca un mentor o supervisor de coaching.",
      "Pide feedback de cada coachee al final del proceso.",
      "Establece límites claros para evitar burnout.",
      "Impacta a mínimo 7 personas por trimestre para que vivan una vida extraordinaria. Nota: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo."
    ]
  }
];

export const checklistCoach = {
  diario: [
    "¿Estuve 100% presente en esta sesión?",
    "¿Escuché lo que el coachee dijo y no dijo?",
    "¿Mis preguntas generaron quiebres o solo conversación?",
    "¿El coachee salió con un compromiso de acción claro?",
    "¿Establecí un checkpoint para dar seguimiento?",
    "¿Fui congruente con lo que enseño?",
    "¿Diseñé y sostuve un contexto de alto rendimiento?",
    "¿Qué aprendí de esta sesión?"
  ],
  semanal: [
    "¿Cuántas sesiones tuve esta semana?",
    "¿Qué patrones observé en mis coachees?",
    "¿Qué patrones observé en mí mismo?",
    "¿Qué coachee tuvo el mayor quiebre? ¿Por qué?",
    "¿Qué coachee tuvo el menor quiebre? ¿Por qué?",
    "¿Qué necesito ajustar la próxima semana?",
    "¿Qué apoyo necesito (mentor, supervisor, colega)?"
  ],
  trimestral: [
    "Número de coachees y sesiones.",
    "% de coachees que reportan quiebres reales (Meta: 80%+)",
    "% de coachees que cumplen compromisos (Meta: 70%+)",
    "% de coachees que renuevan o recomiendan (Meta: 60%+)",
    "Horas de aprendizaje continuo (Meta: 20h/trimestre)",
    "Testimonios y casos de transformación recolectados."
  ]
};

```

---

### 📄 Archivo: `src/data/calendario_c1.json`

```json
{
    "UIO1": [
        {
            "start": "2027-01-23T09:00:00",
            "equipo": "126",
            "entrenador": ""
        },
        {
            "start": "2027-02-27T09:00:00",
            "equipo": "128",
            "entrenador": ""
        },
        {
            "start": "2027-04-03T09:00:00",
            "equipo": "130",
            "entrenador": ""
        },
        {
            "start": "2027-05-08T09:00:00",
            "equipo": "132",
            "entrenador": ""
        },
        {
            "start": "2027-06-12T09:00:00",
            "equipo": "134",
            "entrenador": ""
        },
        {
            "start": "2027-07-17T09:00:00",
            "equipo": "136",
            "entrenador": ""
        },
        {
            "start": "2027-08-21T09:00:00",
            "equipo": "138",
            "entrenador": ""
        },
        {
            "start": "2027-09-25T09:00:00",
            "equipo": "140",
            "entrenador": ""
        },
        {
            "start": "2027-10-30T09:00:00",
            "equipo": "142",
            "entrenador": ""
        },
        {
            "start": "2027-12-04T09:00:00",
            "equipo": "144",
            "entrenador": ""
        }
    ],
    "MED": [
        {
            "start": "2024-11-22T09:00:00",
            "equipo": "1",
            "entrenador": "nan",
            "end": "2024-11-24T00:00:00"
        },
        {
            "start": "2025-01-10T09:00:00",
            "equipo": "2",
            "entrenador": "LEANDRO",
            "end": "2025-01-12T00:00:00"
        },
        {
            "start": "2025-02-14T09:00:00",
            "equipo": "3",
            "entrenador": "nan",
            "end": "2025-02-16T00:00:00"
        },
        {
            "start": "2025-03-21T09:00:00",
            "equipo": "4",
            "entrenador": "nan",
            "end": "2025-03-23T00:00:00"
        },
        {
            "start": "2025-04-25T09:00:00",
            "equipo": "5",
            "entrenador": "nan",
            "end": "2025-04-27T00:00:00"
        },
        {
            "start": "2025-06-06T09:00:00",
            "equipo": "6",
            "entrenador": "nan",
            "end": "2025-06-08T00:00:00"
        },
        {
            "start": "2025-07-11T09:00:00",
            "equipo": "7",
            "entrenador": "nan",
            "end": "2025-07-13T00:00:00"
        },
        {
            "start": "2025-08-15T09:00:00",
            "equipo": "8",
            "entrenador": "nan",
            "end": "2025-08-17T00:00:00"
        },
        {
            "start": "2025-09-19T09:00:00",
            "equipo": "9",
            "entrenador": "nan",
            "end": "2025-09-21T00:00:00"
        },
        {
            "start": "2025-10-24T09:00:00",
            "equipo": "10",
            "entrenador": "nan",
            "end": "2025-10-26T00:00:00"
        },
        {
            "start": "2025-11-28T09:00:00",
            "equipo": "11",
            "entrenador": "nan",
            "end": "2025-11-30T00:00:00"
        },
        {
            "start": "2026-01-09T09:00:00",
            "equipo": "12",
            "entrenador": "nan",
            "end": "2026-01-11T00:00:00"
        },
        {
            "start": "2026-02-13T09:00:00",
            "equipo": "13",
            "entrenador": "nan",
            "end": "2026-02-15T00:00:00"
        },
        {
            "start": "2026-03-20T09:00:00",
            "equipo": "14",
            "entrenador": "nan",
            "end": "2026-03-22T00:00:00"
        },
        {
            "start": "2026-04-24T09:00:00",
            "equipo": "15",
            "entrenador": "nan",
            "end": "2026-04-26T00:00:00"
        },
        {
            "start": "2026-05-29T09:00:00",
            "equipo": "16",
            "entrenador": "nan",
            "end": "2026-05-31T00:00:00"
        },
        {
            "start": "2026-07-03T09:00:00",
            "equipo": "17",
            "entrenador": "nan",
            "end": "2026-07-05T00:00:00"
        },
        {
            "start": "2026-08-07T09:00:00",
            "equipo": "18",
            "entrenador": "nan",
            "end": "2026-08-09T00:00:00"
        },
        {
            "start": "2026-09-11T09:00:00",
            "equipo": "19",
            "entrenador": "nan",
            "end": "2026-09-13T00:00:00"
        },
        {
            "start": "2026-10-16T09:00:00",
            "equipo": "20",
            "entrenador": "nan",
            "end": "2026-10-18T00:00:00"
        },
        {
            "start": "2026-11-20T09:00:00",
            "equipo": "21",
            "entrenador": "nan",
            "end": "2026-11-22T00:00:00"
        },
        {
            "start": "2027-01-09T09:00:00",
            "equipo": "22",
            "entrenador": ""
        },
        {
            "start": "2027-02-13T09:00:00",
            "equipo": "23",
            "entrenador": ""
        },
        {
            "start": "2027-03-20T09:00:00",
            "equipo": "24",
            "entrenador": ""
        },
        {
            "start": "2027-04-24T09:00:00",
            "equipo": "25",
            "entrenador": ""
        },
        {
            "start": "2027-05-29T09:00:00",
            "equipo": "26",
            "entrenador": ""
        },
        {
            "start": "2027-07-03T09:00:00",
            "equipo": "27",
            "entrenador": ""
        },
        {
            "start": "2027-08-07T09:00:00",
            "equipo": "28",
            "entrenador": ""
        },
        {
            "start": "2027-09-11T09:00:00",
            "equipo": "29",
            "entrenador": ""
        },
        {
            "start": "2027-10-16T09:00:00",
            "equipo": "30",
            "entrenador": ""
        },
        {
            "start": "2027-11-20T09:00:00",
            "equipo": "31",
            "entrenador": ""
        }
    ],
    "CUE": [
        {
            "start": "2024-07-05T09:00:00",
            "equipo": "1",
            "entrenador": "nan",
            "end": "2024-07-07T00:00:00"
        },
        {
            "start": "2024-08-09T09:00:00",
            "equipo": "2",
            "entrenador": "LEANDRO",
            "end": "2024-08-11T00:00:00"
        },
        {
            "start": "2024-09-13T09:00:00",
            "equipo": "3",
            "entrenador": "nan",
            "end": "2024-09-15T00:00:00"
        },
        {
            "start": "2024-10-18T09:00:00",
            "equipo": "4",
            "entrenador": "nan",
            "end": "2024-10-20T00:00:00"
        },
        {
            "start": "2024-11-22T09:00:00",
            "equipo": "5",
            "entrenador": "nan",
            "end": "2024-11-24T00:00:00"
        },
        {
            "start": "2025-01-10T09:00:00",
            "equipo": "6",
            "entrenador": "nan",
            "end": "2025-01-12T00:00:00"
        },
        {
            "start": "2025-02-14T09:00:00",
            "equipo": "7",
            "entrenador": "nan",
            "end": "2025-02-16T00:00:00"
        },
        {
            "start": "2025-03-21T09:00:00",
            "equipo": "8",
            "entrenador": "nan",
            "end": "2025-03-23T00:00:00"
        },
        {
            "start": "2025-04-25T09:00:00",
            "equipo": "9",
            "entrenador": "nan",
            "end": "2025-04-27T00:00:00"
        },
        {
            "start": "2025-05-30T09:00:00",
            "equipo": "10",
            "entrenador": "nan",
            "end": "2025-06-01T00:00:00"
        },
        {
            "start": "2025-07-04T09:00:00",
            "equipo": "11",
            "entrenador": "nan",
            "end": "2025-07-06T00:00:00"
        },
        {
            "start": "2025-08-08T09:00:00",
            "equipo": "12",
            "entrenador": "nan",
            "end": "2025-08-10T00:00:00"
        },
        {
            "start": "2025-09-12T09:00:00",
            "equipo": "13",
            "entrenador": "nan",
            "end": "2025-09-14T00:00:00"
        },
        {
            "start": "2025-10-17T09:00:00",
            "equipo": "14",
            "entrenador": "nan",
            "end": "2025-10-19T00:00:00"
        },
        {
            "start": "2025-11-21T09:00:00",
            "equipo": "15",
            "entrenador": "nan",
            "end": "2025-11-23T00:00:00"
        },
        {
            "start": "2026-01-09T09:00:00",
            "equipo": "16",
            "entrenador": "nan",
            "end": "2026-01-11T00:00:00"
        },
        {
            "start": "2026-02-13T09:00:00",
            "equipo": "17",
            "entrenador": "nan",
            "end": "2026-02-15T00:00:00"
        },
        {
            "start": "2026-03-20T09:00:00",
            "equipo": "18",
            "entrenador": "nan",
            "end": "2026-03-22T00:00:00"
        },
        {
            "start": "2026-04-24T09:00:00",
            "equipo": "19",
            "entrenador": "nan",
            "end": "2026-04-26T00:00:00"
        },
        {
            "start": "2026-05-29T09:00:00",
            "equipo": "20",
            "entrenador": "nan",
            "end": "2026-05-31T00:00:00"
        },
        {
            "start": "2026-07-03T09:00:00",
            "equipo": "21",
            "entrenador": "nan",
            "end": "2026-07-05T00:00:00"
        },
        {
            "start": "2026-08-07T09:00:00",
            "equipo": "22",
            "entrenador": "nan",
            "end": "2026-08-09T00:00:00"
        },
        {
            "start": "2026-09-11T09:00:00",
            "equipo": "23",
            "entrenador": "nan",
            "end": "2026-09-13T00:00:00"
        },
        {
            "start": "2026-10-16T09:00:00",
            "equipo": "24",
            "entrenador": "nan",
            "end": "2026-10-18T00:00:00"
        },
        {
            "start": "2026-11-20T09:00:00",
            "equipo": "25",
            "entrenador": "nan",
            "end": "2026-11-22T00:00:00"
        },
        {
            "start": "2027-01-08T09:00:00",
            "equipo": "26",
            "entrenador": "nan",
            "end": "2027-01-10T00:00:00"
        },
        {
            "start": "2027-01-09T09:00:00",
            "equipo": "26",
            "entrenador": ""
        },
        {
            "start": "2027-01-30T09:00:00",
            "equipo": "27",
            "entrenador": "nan",
            "end": "2027-02-01T00:00:00"
        },
        {
            "start": "2027-02-13T09:00:00",
            "equipo": "27",
            "entrenador": ""
        },
        {
            "start": "2027-03-06T09:00:00",
            "equipo": "28",
            "entrenador": "nan",
            "end": "2027-03-08T00:00:00"
        },
        {
            "start": "2027-03-20T09:00:00",
            "equipo": "28",
            "entrenador": ""
        },
        {
            "start": "2027-04-24T09:00:00",
            "equipo": "29",
            "entrenador": ""
        },
        {
            "start": "2027-05-29T09:00:00",
            "equipo": "30",
            "entrenador": ""
        },
        {
            "start": "2027-07-03T09:00:00",
            "equipo": "31",
            "entrenador": ""
        },
        {
            "start": "2027-08-07T09:00:00",
            "equipo": "32",
            "entrenador": ""
        },
        {
            "start": "2027-09-11T09:00:00",
            "equipo": "33",
            "entrenador": ""
        },
        {
            "start": "2027-10-16T09:00:00",
            "equipo": "34",
            "entrenador": ""
        },
        {
            "start": "2027-11-20T09:00:00",
            "equipo": "35",
            "entrenador": ""
        }
    ],
    "LIM": [
        {
            "start": "2024-01-19T09:00:00",
            "equipo": "4",
            "entrenador": "FERNANDO ARAGON",
            "end": "2024-01-21T00:00:00"
        },
        {
            "start": "2024-02-23T09:00:00",
            "equipo": "5",
            "entrenador": "LEANDRO",
            "end": "2024-02-25T00:00:00"
        },
        {
            "start": "2024-03-29T09:00:00",
            "equipo": "6",
            "entrenador": "CHUY",
            "end": "2024-03-31T00:00:00"
        },
        {
            "start": "2024-05-03T09:00:00",
            "equipo": "7",
            "entrenador": "LERNER",
            "end": "2024-05-05T00:00:00"
        },
        {
            "start": "2024-05-10T09:00:00",
            "equipo": "80",
            "entrenador": "nan",
            "end": "2024-05-12T00:00:00"
        },
        {
            "start": "2024-05-17T09:00:00",
            "equipo": "81",
            "entrenador": "nan",
            "end": "2024-05-19T00:00:00"
        },
        {
            "start": "2024-06-07T09:00:00",
            "equipo": "8",
            "entrenador": "LEANDRO",
            "end": "2024-06-09T00:00:00"
        },
        {
            "start": "2024-06-14T09:00:00",
            "equipo": "82",
            "entrenador": "nan",
            "end": "2024-06-16T00:00:00"
        },
        {
            "start": "2024-06-21T09:00:00",
            "equipo": "83",
            "entrenador": "nan",
            "end": "2024-06-23T00:00:00"
        },
        {
            "start": "2024-07-12T09:00:00",
            "equipo": "9",
            "entrenador": "FERNANDO ARAGON",
            "end": "2024-07-14T00:00:00"
        },
        {
            "start": "2024-07-19T09:00:00",
            "equipo": "84",
            "entrenador": "nan",
            "end": "2024-07-21T00:00:00"
        },
        {
            "start": "2024-07-26T09:00:00",
            "equipo": "85",
            "entrenador": "nan",
            "end": "2024-07-28T00:00:00"
        },
        {
            "start": "2024-08-02T09:00:00",
            "equipo": "16",
            "entrenador": "JOSE TORRON",
            "end": "2024-08-04T00:00:00"
        },
        {
            "start": "2024-08-16T09:00:00",
            "equipo": "10",
            "entrenador": "JOSE TORRON",
            "end": "2024-08-18T00:00:00"
        },
        {
            "start": "2024-08-23T09:00:00",
            "equipo": "86",
            "entrenador": "nan",
            "end": "2024-08-25T00:00:00"
        },
        {
            "start": "2024-08-30T09:00:00",
            "equipo": "87",
            "entrenador": "nan",
            "end": "2024-09-01T00:00:00"
        },
        {
            "start": "2024-09-06T09:00:00",
            "equipo": "17",
            "entrenador": "nan",
            "end": "2024-09-08T00:00:00"
        },
        {
            "start": "2024-09-20T09:00:00",
            "equipo": "11",
            "entrenador": "JOSÉ TORRÓN",
            "end": "2024-09-22T00:00:00"
        },
        {
            "start": "2024-09-27T09:00:00",
            "equipo": "88",
            "entrenador": "nan",
            "end": "2024-09-29T00:00:00"
        },
        {
            "start": "2024-10-04T09:00:00",
            "equipo": "89",
            "entrenador": "nan",
            "end": "2024-10-06T00:00:00"
        },
        {
            "start": "2024-10-11T09:00:00",
            "equipo": "18",
            "entrenador": "nan",
            "end": "2024-10-13T00:00:00"
        },
        {
            "start": "2024-10-25T09:00:00",
            "equipo": "12",
            "entrenador": "FER ARAGON",
            "end": "2024-10-27T00:00:00"
        },
        {
            "start": "2024-11-01T09:00:00",
            "equipo": "90",
            "entrenador": "nan",
            "end": "2024-11-03T00:00:00"
        },
        {
            "start": "2024-11-08T09:00:00",
            "equipo": "91",
            "entrenador": "nan",
            "end": "2024-11-10T00:00:00"
        },
        {
            "start": "2024-11-15T09:00:00",
            "equipo": "19",
            "entrenador": "nan",
            "end": "2024-11-17T00:00:00"
        },
        {
            "start": "2024-11-29T09:00:00",
            "equipo": "13",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2024-12-01T00:00:00"
        },
        {
            "start": "2024-12-06T09:00:00",
            "equipo": "92",
            "entrenador": "nan",
            "end": "2024-12-08T00:00:00"
        },
        {
            "start": "2024-12-13T09:00:00",
            "equipo": "93",
            "entrenador": "nan",
            "end": "2024-12-15T00:00:00"
        },
        {
            "start": "2024-12-20T09:00:00",
            "equipo": "20",
            "entrenador": "nan",
            "end": "2024-12-22T00:00:00"
        },
        {
            "start": "2025-01-17T09:00:00",
            "equipo": "14",
            "entrenador": "FER ARAGON",
            "end": "2025-01-19T00:00:00"
        },
        {
            "start": "2025-01-24T09:00:00",
            "equipo": "94",
            "entrenador": "nan",
            "end": "2025-01-26T00:00:00"
        },
        {
            "start": "2025-01-31T09:00:00",
            "equipo": "95",
            "entrenador": "nan",
            "end": "2025-02-02T00:00:00"
        },
        {
            "start": "2025-02-07T09:00:00",
            "equipo": "21",
            "entrenador": "nan",
            "end": "2025-02-09T00:00:00"
        },
        {
            "start": "2025-02-21T09:00:00",
            "equipo": "15",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2025-02-23T00:00:00"
        },
        {
            "start": "2025-02-28T09:00:00",
            "equipo": "96",
            "entrenador": "nan",
            "end": "2025-03-02T00:00:00"
        },
        {
            "start": "2025-03-07T09:00:00",
            "equipo": "97",
            "entrenador": "nan",
            "end": "2025-03-09T00:00:00"
        },
        {
            "start": "2025-03-14T09:00:00",
            "equipo": "22",
            "entrenador": "nan",
            "end": "2025-03-16T00:00:00"
        },
        {
            "start": "2025-03-28T09:00:00",
            "equipo": "16",
            "entrenador": "JOSE TORRON",
            "end": "2025-03-30T00:00:00"
        },
        {
            "start": "2025-04-04T09:00:00",
            "equipo": "98",
            "entrenador": "nan",
            "end": "2025-04-06T00:00:00"
        },
        {
            "start": "2025-04-11T09:00:00",
            "equipo": "99",
            "entrenador": "nan",
            "end": "2025-04-13T00:00:00"
        },
        {
            "start": "2025-04-18T09:00:00",
            "equipo": "23",
            "entrenador": "nan",
            "end": "2025-04-20T00:00:00"
        },
        {
            "start": "2025-05-02T09:00:00",
            "equipo": "17",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2025-05-04T00:00:00"
        },
        {
            "start": "2025-05-09T09:00:00",
            "equipo": "100",
            "entrenador": "nan",
            "end": "2025-05-11T00:00:00"
        },
        {
            "start": "2025-05-16T09:00:00",
            "equipo": "101",
            "entrenador": "nan",
            "end": "2025-05-18T00:00:00"
        },
        {
            "start": "2025-05-23T09:00:00",
            "equipo": "24",
            "entrenador": "nan",
            "end": "2025-05-25T00:00:00"
        },
        {
            "start": "2025-05-30T09:00:00",
            "equipo": "",
            "entrenador": "",
            "end": "2025-06-01T00:00:00"
        },
        {
            "start": "2025-06-06T09:00:00",
            "equipo": "",
            "entrenador": "",
            "end": "2025-06-08T00:00:00"
        },
        {
            "start": "2025-06-06T09:00:00",
            "equipo": "18",
            "entrenador": "FER ARAGON",
            "end": "2025-06-08T00:00:00"
        },
        {
            "start": "2025-06-13T09:00:00",
            "equipo": "102",
            "entrenador": "nan",
            "end": "2025-06-15T00:00:00"
        },
        {
            "start": "2025-06-13T09:00:00",
            "equipo": "",
            "entrenador": "",
            "end": "2025-06-15T00:00:00"
        },
        {
            "start": "2025-06-20T09:00:00",
            "equipo": "",
            "entrenador": "",
            "end": "2025-06-22T00:00:00"
        },
        {
            "start": "2025-06-20T09:00:00",
            "equipo": "103",
            "entrenador": "nan",
            "end": "2025-06-22T00:00:00"
        },
        {
            "start": "2025-06-27T09:00:00",
            "equipo": "",
            "entrenador": "",
            "end": "2025-06-29T00:00:00"
        },
        {
            "start": "2025-06-27T09:00:00",
            "equipo": "25",
            "entrenador": "nan",
            "end": "2025-06-29T00:00:00"
        },
        {
            "start": "2025-07-11T09:00:00",
            "equipo": "19",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2025-07-13T00:00:00"
        },
        {
            "start": "2025-07-18T09:00:00",
            "equipo": "104",
            "entrenador": "nan",
            "end": "2025-07-20T00:00:00"
        },
        {
            "start": "2025-07-25T09:00:00",
            "equipo": "105",
            "entrenador": "nan",
            "end": "2025-07-27T00:00:00"
        },
        {
            "start": "2025-08-01T09:00:00",
            "equipo": "26",
            "entrenador": "nan",
            "end": "2025-08-03T00:00:00"
        },
        {
            "start": "2025-08-15T09:00:00",
            "equipo": "20",
            "entrenador": "FER ARAGON",
            "end": "2025-08-17T00:00:00"
        },
        {
            "start": "2025-08-22T09:00:00",
            "equipo": "106",
            "entrenador": "nan",
            "end": "2025-08-24T00:00:00"
        },
        {
            "start": "2025-08-29T09:00:00",
            "equipo": "107",
            "entrenador": "nan",
            "end": "2025-08-31T00:00:00"
        },
        {
            "start": "2025-09-05T09:00:00",
            "equipo": "27",
            "entrenador": "nan",
            "end": "2025-09-07T00:00:00"
        },
        {
            "start": "2025-09-19T09:00:00",
            "equipo": "21",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2025-09-21T00:00:00"
        },
        {
            "start": "2025-09-26T09:00:00",
            "equipo": "108",
            "entrenador": "nan",
            "end": "2025-09-28T00:00:00"
        },
        {
            "start": "2025-10-03T09:00:00",
            "equipo": "109",
            "entrenador": "nan",
            "end": "2025-10-05T00:00:00"
        },
        {
            "start": "2025-10-10T09:00:00",
            "equipo": "28",
            "entrenador": "nan",
            "end": "2025-10-12T00:00:00"
        },
        {
            "start": "2025-10-24T09:00:00",
            "equipo": "22",
            "entrenador": "JOSE TORRON",
            "end": "2025-10-26T00:00:00"
        },
        {
            "start": "2025-10-31T09:00:00",
            "equipo": "110",
            "entrenador": "nan",
            "end": "2025-11-02T00:00:00"
        },
        {
            "start": "2025-11-07T09:00:00",
            "equipo": "111",
            "entrenador": "nan",
            "end": "2025-11-09T00:00:00"
        },
        {
            "start": "2025-11-14T09:00:00",
            "equipo": "29",
            "entrenador": "nan",
            "end": "2025-11-16T00:00:00"
        },
        {
            "start": "2025-11-28T09:00:00",
            "equipo": "23",
            "entrenador": "FER ARAGON",
            "end": "2025-11-30T00:00:00"
        },
        {
            "start": "2025-12-05T09:00:00",
            "equipo": "112",
            "entrenador": "nan",
            "end": "2025-12-07T00:00:00"
        },
        {
            "start": "2025-12-12T09:00:00",
            "equipo": "113",
            "entrenador": "nan",
            "end": "2025-12-14T00:00:00"
        },
        {
            "start": "2025-12-19T09:00:00",
            "equipo": "30",
            "entrenador": "nan",
            "end": "2025-12-21T00:00:00"
        },
        {
            "start": "2026-01-16T09:00:00",
            "equipo": "24",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2026-01-18T00:00:00"
        },
        {
            "start": "2026-01-23T09:00:00",
            "equipo": "114",
            "entrenador": "nan",
            "end": "2026-01-25T00:00:00"
        },
        {
            "start": "2026-01-30T09:00:00",
            "equipo": "115",
            "entrenador": "nan",
            "end": "2026-02-01T00:00:00"
        },
        {
            "start": "2026-02-06T09:00:00",
            "equipo": "31",
            "entrenador": "nan",
            "end": "2026-02-08T00:00:00"
        },
        {
            "start": "2026-02-20T09:00:00",
            "equipo": "25",
            "entrenador": "FER ARAGON",
            "end": "2026-02-22T00:00:00"
        },
        {
            "start": "2026-02-27T09:00:00",
            "equipo": "116",
            "entrenador": "nan",
            "end": "2026-03-01T00:00:00"
        },
        {
            "start": "2026-03-06T09:00:00",
            "equipo": "117",
            "entrenador": "nan",
            "end": "2026-03-08T00:00:00"
        },
        {
            "start": "2026-03-13T09:00:00",
            "equipo": "32",
            "entrenador": "nan",
            "end": "2026-03-15T00:00:00"
        },
        {
            "start": "2026-03-27T09:00:00",
            "equipo": "26",
            "entrenador": "FER ARAGON",
            "end": "2026-03-29T00:00:00"
        },
        {
            "start": "2026-04-03T09:00:00",
            "equipo": "118",
            "entrenador": "nan",
            "end": "2026-04-05T00:00:00"
        },
        {
            "start": "2026-04-10T09:00:00",
            "equipo": "119",
            "entrenador": "nan",
            "end": "2026-04-12T00:00:00"
        },
        {
            "start": "2026-04-17T09:00:00",
            "equipo": "33",
            "entrenador": "nan",
            "end": "2026-04-19T00:00:00"
        },
        {
            "start": "2026-05-01T09:00:00",
            "equipo": "27",
            "entrenador": "JOSE TORRON",
            "end": "2026-05-03T00:00:00"
        },
        {
            "start": "2026-05-08T09:00:00",
            "equipo": "120",
            "entrenador": "nan",
            "end": "2026-05-10T00:00:00"
        },
        {
            "start": "2026-05-15T09:00:00",
            "equipo": "121",
            "entrenador": "nan",
            "end": "2026-05-17T00:00:00"
        },
        {
            "start": "2026-05-22T09:00:00",
            "equipo": "34",
            "entrenador": "nan",
            "end": "2026-05-24T00:00:00"
        },
        {
            "start": "2026-05-29T09:00:00",
            "equipo": "28",
            "entrenador": "MAURICIO PEREZ",
            "end": "2026-05-31T00:00:00"
        },
        {
            "start": "2026-06-12T09:00:00",
            "equipo": "122",
            "entrenador": "nan",
            "end": "2026-06-14T00:00:00"
        },
        {
            "start": "2026-06-19T09:00:00",
            "equipo": "123",
            "entrenador": "nan",
            "end": "2026-06-21T00:00:00"
        },
        {
            "start": "2026-06-26T09:00:00",
            "equipo": "35",
            "entrenador": "nan",
            "end": "2026-06-28T00:00:00"
        },
        {
            "start": "2026-07-10T09:00:00",
            "equipo": "29",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2026-07-12T00:00:00"
        },
        {
            "start": "2026-07-17T09:00:00",
            "equipo": "124",
            "entrenador": "nan",
            "end": "2026-07-19T00:00:00"
        },
        {
            "start": "2026-07-24T09:00:00",
            "equipo": "125",
            "entrenador": "nan",
            "end": "2026-07-26T00:00:00"
        },
        {
            "start": "2026-07-31T09:00:00",
            "equipo": "36",
            "entrenador": "nan",
            "end": "2026-08-02T00:00:00"
        },
        {
            "start": "2026-08-14T09:00:00",
            "equipo": "30",
            "entrenador": "FER ARAGON",
            "end": "2026-08-16T00:00:00"
        },
        {
            "start": "2026-08-21T09:00:00",
            "equipo": "126",
            "entrenador": "nan",
            "end": "2026-08-23T00:00:00"
        },
        {
            "start": "2026-08-28T09:00:00",
            "equipo": "127",
            "entrenador": "nan",
            "end": "2026-08-30T00:00:00"
        },
        {
            "start": "2026-09-04T09:00:00",
            "equipo": "37",
            "entrenador": "nan",
            "end": "2026-09-06T00:00:00"
        },
        {
            "start": "2026-09-18T09:00:00",
            "equipo": "31",
            "entrenador": "FER ARAGON",
            "end": "2026-09-20T00:00:00"
        },
        {
            "start": "2026-09-25T09:00:00",
            "equipo": "128",
            "entrenador": "nan",
            "end": "2026-09-27T00:00:00"
        },
        {
            "start": "2026-10-02T09:00:00",
            "equipo": "129",
            "entrenador": "nan",
            "end": "2026-10-04T00:00:00"
        },
        {
            "start": "2026-10-09T09:00:00",
            "equipo": "38",
            "entrenador": "nan",
            "end": "2026-10-11T00:00:00"
        },
        {
            "start": "2026-10-23T09:00:00",
            "equipo": "32",
            "entrenador": "FER ARAGON",
            "end": "2026-10-25T00:00:00"
        },
        {
            "start": "2026-10-30T09:00:00",
            "equipo": "130",
            "entrenador": "nan",
            "end": "2026-11-01T00:00:00"
        },
        {
            "start": "2026-11-06T09:00:00",
            "equipo": "131",
            "entrenador": "nan",
            "end": "2026-11-08T00:00:00"
        },
        {
            "start": "2026-11-13T09:00:00",
            "equipo": "39",
            "entrenador": "nan",
            "end": "2026-11-15T00:00:00"
        },
        {
            "start": "2026-11-27T09:00:00",
            "equipo": "33",
            "entrenador": "LEANDRO BRUNIS",
            "end": "2026-11-29T00:00:00"
        },
        {
            "start": "2026-12-04T09:00:00",
            "equipo": "132",
            "entrenador": "nan",
            "end": "2026-12-06T00:00:00"
        },
        {
            "start": "2026-12-11T09:00:00",
            "equipo": "133",
            "entrenador": "nan",
            "end": "2026-12-13T00:00:00"
        },
        {
            "start": "2026-12-18T09:00:00",
            "equipo": "40",
            "entrenador": "nan",
            "end": "2026-12-20T00:00:00"
        },
        {
            "start": "2027-01-01T09:00:00",
            "equipo": "135",
            "entrenador": ""
        },
        {
            "start": "2027-01-15T09:00:00",
            "equipo": "22",
            "entrenador": ""
        },
        {
            "start": "2027-01-15T09:00:00",
            "equipo": "26",
            "entrenador": ""
        },
        {
            "start": "2027-01-29T09:00:00",
            "equipo": "34",
            "entrenador": ""
        },
        {
            "start": "2027-02-05T09:00:00",
            "equipo": "136",
            "entrenador": ""
        },
        {
            "start": "2027-02-05T09:00:00",
            "equipo": "41",
            "entrenador": ""
        },
        {
            "start": "2027-02-12T09:00:00",
            "equipo": "12",
            "entrenador": ""
        },
        {
            "start": "2027-02-19T09:00:00",
            "equipo": "23",
            "entrenador": ""
        },
        {
            "start": "2027-02-19T09:00:00",
            "equipo": "135",
            "entrenador": ""
        },
        {
            "start": "2027-03-05T09:00:00",
            "equipo": "24",
            "entrenador": ""
        },
        {
            "start": "2027-04-02T09:00:00",
            "equipo": "138",
            "entrenador": ""
        },
        {
            "start": "2027-04-02T09:00:00",
            "equipo": "25",
            "entrenador": ""
        },
        {
            "start": "2027-04-09T09:00:00",
            "equipo": "29",
            "entrenador": ""
        },
        {
            "start": "2027-04-16T09:00:00",
            "equipo": "139",
            "entrenador": ""
        },
        {
            "start": "2027-04-30T09:00:00",
            "equipo": "138",
            "entrenador": ""
        },
        {
            "start": "2027-04-30T09:00:00",
            "equipo": "144",
            "entrenador": ""
        },
        {
            "start": "2027-05-07T09:00:00",
            "equipo": "38",
            "entrenador": ""
        },
        {
            "start": "2027-05-07T09:00:00",
            "equipo": "30",
            "entrenador": ""
        },
        {
            "start": "2027-05-14T09:00:00",
            "equipo": "45",
            "entrenador": ""
        },
        {
            "start": "2027-05-14T09:00:00",
            "equipo": "140",
            "entrenador": ""
        },
        {
            "start": "2027-05-21T09:00:00",
            "equipo": "25",
            "entrenador": ""
        },
        {
            "start": "2027-06-11T09:00:00",
            "equipo": "15",
            "entrenador": ""
        },
        {
            "start": "2027-06-18T09:00:00",
            "equipo": "137",
            "entrenador": ""
        },
        {
            "start": "2027-06-18T09:00:00",
            "equipo": "26",
            "entrenador": ""
        },
        {
            "start": "2027-06-25T09:00:00",
            "equipo": "143",
            "entrenador": ""
        },
        {
            "start": "2027-06-25T09:00:00",
            "equipo": "46",
            "entrenador": ""
        },
        {
            "start": "2027-07-02T09:00:00",
            "equipo": "39",
            "entrenador": ""
        },
        {
            "start": "2027-07-16T09:00:00",
            "equipo": "14",
            "entrenador": ""
        },
        {
            "start": "2027-07-16T09:00:00",
            "equipo": "27",
            "entrenador": ""
        },
        {
            "start": "2027-07-16T09:00:00",
            "equipo": "144",
            "entrenador": ""
        },
        {
            "start": "2027-07-23T09:00:00",
            "equipo": "139",
            "entrenador": ""
        },
        {
            "start": "2027-07-23T09:00:00",
            "equipo": "27",
            "entrenador": ""
        },
        {
            "start": "2027-07-23T09:00:00",
            "equipo": "31",
            "entrenador": ""
        },
        {
            "start": "2027-07-23T09:00:00",
            "equipo": "138",
            "entrenador": ""
        },
        {
            "start": "2027-07-30T09:00:00",
            "equipo": "145",
            "entrenador": ""
        },
        {
            "start": "2027-07-30T09:00:00",
            "equipo": "47",
            "entrenador": ""
        },
        {
            "start": "2027-08-06T09:00:00",
            "equipo": "28",
            "entrenador": ""
        },
        {
            "start": "2027-08-06T09:00:00",
            "equipo": "146",
            "entrenador": ""
        },
        {
            "start": "2027-08-13T09:00:00",
            "equipo": "40",
            "entrenador": ""
        },
        {
            "start": "2027-08-13T09:00:00",
            "equipo": "17",
            "entrenador": ""
        },
        {
            "start": "2027-08-20T09:00:00",
            "equipo": "47",
            "entrenador": ""
        },
        {
            "start": "2027-08-27T09:00:00",
            "equipo": "147",
            "entrenador": ""
        },
        {
            "start": "2027-09-03T09:00:00",
            "equipo": "149",
            "entrenador": ""
        },
        {
            "start": "2027-09-10T09:00:00",
            "equipo": "29",
            "entrenador": ""
        },
        {
            "start": "2027-09-10T09:00:00",
            "equipo": "18",
            "entrenador": ""
        },
        {
            "start": "2027-09-10T09:00:00",
            "equipo": "148",
            "entrenador": ""
        },
        {
            "start": "2027-09-17T09:00:00",
            "equipo": "33",
            "entrenador": ""
        },
        {
            "start": "2027-09-17T09:00:00",
            "equipo": "143",
            "entrenador": ""
        },
        {
            "start": "2027-10-01T09:00:00",
            "equipo": "19",
            "entrenador": ""
        },
        {
            "start": "2027-10-01T09:00:00",
            "equipo": "30",
            "entrenador": ""
        },
        {
            "start": "2027-10-01T09:00:00",
            "equipo": "150",
            "entrenador": ""
        },
        {
            "start": "2027-10-08T09:00:00",
            "equipo": "34",
            "entrenador": ""
        },
        {
            "start": "2027-10-08T09:00:00",
            "equipo": "149",
            "entrenador": ""
        },
        {
            "start": "2027-10-08T09:00:00",
            "equipo": "46",
            "entrenador": ""
        },
        {
            "start": "2027-10-15T09:00:00",
            "equipo": "42",
            "entrenador": ""
        },
        {
            "start": "2027-10-22T09:00:00",
            "equipo": "49",
            "entrenador": ""
        },
        {
            "start": "2027-11-05T09:00:00",
            "equipo": "20",
            "entrenador": ""
        },
        {
            "start": "2027-11-05T09:00:00",
            "equipo": "31",
            "entrenador": ""
        },
        {
            "start": "2027-11-05T09:00:00",
            "equipo": "151",
            "entrenador": ""
        },
        {
            "start": "2027-11-12T09:00:00",
            "equipo": "35",
            "entrenador": ""
        },
        {
            "start": "2027-11-12T09:00:00",
            "equipo": "43",
            "entrenador": ""
        },
        {
            "start": "2027-11-12T09:00:00",
            "equipo": "50",
            "entrenador": ""
        },
        {
            "start": "2027-12-03T09:00:00",
            "equipo": "50",
            "entrenador": ""
        },
        {
            "start": "2027-12-10T09:00:00",
            "equipo": "152",
            "entrenador": ""
        },
        {
            "start": "2027-12-17T09:00:00",
            "equipo": "153",
            "entrenador": ""
        }
    ],
    "UIO2": [
        {
            "start": "2027-01-30T09:00:00",
            "equipo": "127",
            "entrenador": ""
        },
        {
            "start": "2027-03-06T09:00:00",
            "equipo": "129",
            "entrenador": ""
        },
        {
            "start": "2027-04-10T09:00:00",
            "equipo": "131",
            "entrenador": ""
        },
        {
            "start": "2027-05-15T09:00:00",
            "equipo": "133",
            "entrenador": ""
        },
        {
            "start": "2027-06-19T09:00:00",
            "equipo": "135",
            "entrenador": ""
        },
        {
            "start": "2027-07-24T09:00:00",
            "equipo": "137",
            "entrenador": ""
        },
        {
            "start": "2027-08-28T09:00:00",
            "equipo": "139",
            "entrenador": ""
        },
        {
            "start": "2027-10-02T09:00:00",
            "equipo": "141",
            "entrenador": ""
        },
        {
            "start": "2027-11-06T09:00:00",
            "equipo": "143",
            "entrenador": ""
        },
        {
            "start": "2027-12-11T09:00:00",
            "equipo": "145",
            "entrenador": ""
        }
    ],
    "MEX": [
        {
            "start": "2027-03-27T09:00:00",
            "equipo": "32",
            "entrenador": ""
        },
        {
            "start": "2027-05-01T09:00:00",
            "equipo": "33",
            "entrenador": ""
        },
        {
            "start": "2027-06-05T09:00:00",
            "equipo": "34",
            "entrenador": ""
        },
        {
            "start": "2027-07-10T09:00:00",
            "equipo": "35",
            "entrenador": ""
        }
    ],
    "GYE": [
        {
            "start": "2027-02-06T09:00:00",
            "equipo": "41",
            "entrenador": ""
        },
        {
            "start": "2027-03-13T09:00:00",
            "equipo": "42",
            "entrenador": ""
        },
        {
            "start": "2027-04-17T09:00:00",
            "equipo": "43",
            "entrenador": ""
        },
        {
            "start": "2027-05-22T09:00:00",
            "equipo": "44",
            "entrenador": ""
        },
        {
            "start": "2027-06-26T09:00:00",
            "equipo": "45",
            "entrenador": ""
        },
        {
            "start": "2027-07-31T09:00:00",
            "equipo": "46",
            "entrenador": ""
        },
        {
            "start": "2027-09-04T09:00:00",
            "equipo": "47",
            "entrenador": ""
        },
        {
            "start": "2027-10-09T09:00:00",
            "equipo": "48",
            "entrenador": ""
        },
        {
            "start": "2027-11-13T09:00:00",
            "equipo": "49",
            "entrenador": ""
        },
        {
            "start": "2027-12-18T09:00:00",
            "equipo": "50",
            "entrenador": ""
        }
    ]
}
```

---

### 📄 Archivo: `src/data/curriculum.js`

```javascript
import { modulo1 } from './modulo1';
import { modulo2 } from './modulo2';
import { modulo3 } from './modulo3';
import { modulo4 } from './modulo4';
import { modulo5 } from './modulo5';
import { modulo6 } from './modulo6';
import { modulo7 } from './modulo7';
import { modulo8 } from './modulo8';
import { modulo9 } from './modulo9';
import { modulo10 } from './modulo10';
import { modulo11 } from './modulo11';

// Fila única de verdad curricular
export const curriculum = [
  {
    id: 'modulo1',
    titulo: 'Módulo 1: Fundamentos Teóricos',
    descripcion: 'Bases conceptuales del Coaching de Alto Rendimiento y Transformación Profunda.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo1,
    tieneEvaluacion: true
  },
  {
    id: 'modulo2',
    titulo: 'Módulo 2: Arquitectura de Intervenciones de Coaching',
    descripcion: 'Estructura estándar de sesión y repertorio de técnicas conversacionales.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo2,
    tieneEvaluacion: true
  },
  {
    id: 'modulo3',
    titulo: 'Módulo 3: Maestría en Groundings',
    descripcion: 'Metodología para el diseño y aplicación de protocolos somáticos.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo3,
    tieneEvaluacion: true
  },
  {
    id: 'modulo4',
    titulo: 'Módulo 4: Diseño de Programas y Prevención',
    descripcion: 'Arquitectura de entrenamiento de 6 semanas y protocolos de mitigación de desvíos.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo4,
    tieneEvaluacion: true
  },
  {
    id: 'modulo5',
    titulo: 'Módulo 5: Fundamentos Filosóficos del Ser',
    descripcion: 'Raíces existenciales (Heidegger, Sartre, Kierkegaard) aplicadas al Liderazgo Auténtico.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo5,
    tieneEvaluacion: true
  },
  {
    id: 'modulo6',
    titulo: 'Módulo 6: Ontología del Lenguaje y Realidad',
    descripcion: 'El lenguaje como creador. Ontología, Logoterapia y la Búsqueda de Sentido.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo6,
    tieneEvaluacion: true
  },
  {
    id: 'modulo7',
    titulo: 'Módulo 7: Liderazgo de Transformación Profunda',
    descripcion: 'Salto de posibilidad del líder, quiebres ontológicos y el mapa de enrolamiento.',
    estado: 'disponible',
    duracionSemanas: 3,
    lecciones: modulo7,
    tieneEvaluacion: true
  },
  {
    id: 'modulo8',
    titulo: 'Módulo 8: Integración y Legado Existencial',
    descripcion: 'El Manifiesto del Líder de Alto Rendimiento y el Plan de Expansión.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo8,
    tieneEvaluacion: false // Asumimos que el 8 no tiene evaluación práctica de Groq
  },
  {
    id: 'modulo9',
    titulo: 'Módulo 9: Parálisis, Sobreanálisis y Acción',
    descripcion: 'Especialización en desbloqueo cognitivo, interrupción de parálisis y acción masiva.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo9,
    tieneEvaluacion: true
  },
  {
    id: 'modulo10',
    titulo: 'Módulo 10: Alcance, Límites y Ética',
    descripcion: 'Responsabilidad profesional, límites del modelo y cuándo derivar a psicoterapia.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo10,
    tieneEvaluacion: false
  },
  {
    id: 'modulo11',
    titulo: 'Módulo 11: Desbloquear la Propia Creatividad',
    descripcion: 'Ejercicios, protocolos y rituales para romper la rigidez mental del coach.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo11,
    tieneEvaluacion: false
  }
];

export const getModuleById = (id) => curriculum.find(m => m.id === id);

// Suma total de lecciones de todos los módulos
export const getTotalLessonsCount = () => {
  return curriculum.reduce((total, modulo) => total + modulo.lecciones.length, 0);
};

// Suma total de evaluaciones (las que tienen tieneEvaluacion === true)
export const getTotalEvaluationsCount = () => {
  return curriculum.filter(m => m.tieneEvaluacion).length;
};

```

---

### 📄 Archivo: `src/data/dinamicas.js`

```javascript
export const dinamicas = [
  {
    id: 1,
    nombre: "El Muro de las Quejas",
    escenario: "Quejándose constantemente",
    descripcion_escenario: "El equipo está atrapado en quejas sobre factores externos (la empresa, el cliente, el mercado, 'el sistema').",
    objetivo: "Transformar quejas en compromisos de acción.",
    instrucciones: [
      "Pide a cada persona que escriba en un post-it una queja recurrente del equipo.",
      "Peguen todos los post-its en una pared ('el muro').",
      "En silencio, lean todas las quejas por 2 minutos.",
      "Pregunta: '¿Qué nos está costando mantener estas quejas?'",
      "Cada persona toma UNA queja (puede ser la suya o de otro) y la reescribe como un compromiso: 'En lugar de quejarme de X, me comprometo a Y.'",
      "Peguen los nuevos compromisos sobre las quejas originales."
    ],
    preguntas_cierre: [
      "¿Qué fue más fácil: quejarse o comprometerse?",
      "¿Qué acción concreta harás en las próximas 24 horas?"
    ],
    tiempo: "30-45 minutos"
  },
  {
    id: 2,
    nombre: "La Silla Vacía del Futuro",
    escenario: "Paralizado por el miedo",
    descripcion_escenario: "El equipo está paralizado por el miedo al fracaso o la incertidumbre.",
    objetivo: "Conectar con el futuro deseado y actuar desde allí.",
    instrucciones: [
      "Coloca una silla vacía en el centro del círculo.",
      "Explica: 'Esta silla representa a su equipo dentro de 1 año, habiendo logrado lo imposible.'",
      "Cada persona, por turno, se sienta en la silla y habla COMO SI YA fuera ese futuro: 'Somos un equipo que...', 'Logramos...', 'Nos sentimos...'",
      "Los demás escuchan sin interrumpir.",
      "Al final, pregunta: '¿Qué versión de ti tiene que existir HOY para que ese futuro sea real?'"
    ],
    preguntas_cierre: [
      "¿Qué acción pequeña puedes tomar hoy como esa versión futura?",
      "¿Qué estás dispuesto a soltar para llegar allí?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 3,
    nombre: "El Juicio Invertido",
    escenario: "Juzgándose a sí mismo o a otros",
    descripcion_escenario: "El equipo está juzgando a un miembro, a un líder o a sí mismo ('somos flojos', 'no nos comprometemos').",
    objetivo: "Transformar juicios en curiosidad y aprendizaje.",
    instrucciones: [
      "Pide al grupo que identifique un juicio recurrente (ej. 'Este equipo no se compromete').",
      "Escribe el juicio en grande en una pizarra.",
      "Pregunta: '¿Qué evidencia tienen de que esto es VERDAD?'",
      "Luego pregunta: '¿Qué evidencia tienen de que esto es FALSO?'",
      "Finalmente: 'Si este juicio no fuera verdad, ¿qué otra historia podrían contar?'",
      "Cada persona escribe una nueva historia posible."
    ],
    preguntas_cierre: [
      "¿Qué te libera esta nueva historia?",
      "¿Qué acción se hace posible ahora?"
    ],
    tiempo: "30-40 minutos"
  },
  {
    id: 4,
    nombre: "La Línea de la Responsabilidad",
    escenario: "En modo víctima",
    descripcion_escenario: "El equipo vive en modo víctima, culpando a otros de sus resultados.",
    objetivo: "Mover al equipo de la víctima a la responsabilidad radical.",
    instrucciones: [
      "Dibuja una línea en el suelo con cinta. Un lado dice 'VÍCTIMA', el otro 'RESPONSABLE'.",
      "Pide a cada persona que piense en una situación reciente donde se sintió víctima.",
      "Por turno, cada uno se para en el lado 'VÍCTIMA' y comparte su historia (1 minuto).",
      "Luego cruza al lado 'RESPONSABLE' y responde: '¿Qué parte de esto es mía? ¿Qué podría haber hecho diferente?'",
      "El grupo escucha sin juzgar."
    ],
    preguntas_cierre: [
      "¿Qué se siente estar en el lado responsable?",
      "¿Qué compromiso haces desde allí?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 5,
    nombre: "El Espejo de los Otros",
    escenario: "Sin autoconciencia de sus patrones",
    descripcion_escenario: "El equipo no ve sus propios patrones limitantes; los proyecta en otros.",
    objetivo: "Generar autoconciencia a través del feedback directo.",
    instrucciones: [
      "Forma parejas. Cada persona tiene 3 minutos para compartir: 'Un patrón que veo en ti que te limita es...'",
      "Luego cambian de rol.",
      "En plenaria, pregunta: '¿Qué escuchaste que te sorprendió?'",
      "Cada persona escribe: 'Un patrón que estoy dispuesto a soltar es...'"
    ],
    preguntas_cierre: [
      "¿Qué te costó escuchar?",
      "¿Qué apoyo necesitas para cambiar esto?"
    ],
    tiempo: "30-40 minutos"
  },
  {
    id: 6,
    nombre: "La Subasta de Compromisos",
    escenario: "Hablando mucho, actuando poco",
    descripcion_escenario: "El equipo habla mucho pero actúa poco; hay poca accountability.",
    objetivo: "Generar compromisos públicos y medibles.",
    instrucciones: [
      "Cada persona escribe sus compromisos de impacto (estándar mínimo 7 personas) que está dispuesto a hacer en los próximos 7 días. Nota: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo.",
      "En plenaria, cada uno 'subasta' sus compromisos: los lee en voz alta.",
      "El grupo puede 'comprar' (apoyar) o 'rechazar' (si el compromiso no es claro o medible).",
      "Los compromisos 'vendidos' se escriben en un contrato público.",
      "Se establece un checkpoint en 7 días para reportar resultados."
    ],
    preguntas_cierre: [
      "¿Qué te da más energía: prometer en privado o en público?",
      "¿Qué te podría impedir cumplir y cómo lo manejarás?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 7,
    nombre: "El Funeral del Equipo Antiguo",
    escenario: "Aferrado al pasado",
    descripcion_escenario: "El equipo está aferrado a viejas formas de trabajar que ya no sirven.",
    objetivo: "Cerrar el pasado para abrir espacio a lo nuevo.",
    instrucciones: [
      "Pide al grupo que identifique 3-5 comportamientos o creencias del 'equipo antiguo' que quieren dejar atrás.",
      "Escriban cada uno en un papel.",
      "Hagan un 'funeral simbólico': lean cada papel, compartan qué les costará soltarlo, y luego rómpalo o quémalo (simbólicamente).",
      "En silencio, escriban: 'El equipo nuevo es...' (5 características).",
      "Lean en voz alta."
    ],
    preguntas_cierre: [
      "¿Qué te duele soltar?",
      "¿Qué te emociona del equipo nuevo?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 8,
    nombre: "La Rueda de las Posibilidades",
    escenario: "Creyendo que 'no hay opciones'",
    descripcion_escenario: "El equipo está atrapado en una sola narrativa ('no hay opciones', 'es imposible').",
    objetivo: "Expandir la visión de lo que es posible.",
    instrucciones: [
      "Dibuja un círculo grande en una pizarra. En el centro, escribe el problema o desafío.",
      "Divide el círculo en 8 'gajos' como una pizza.",
      "Cada gajo representa una perspectiva diferente: 'Si fueras un niño', 'Si tuvieras recursos ilimitados', 'Si fueras tu competencia', 'Si el tiempo no importara', etc.",
      "En grupos pequeños, llenen cada gajo con ideas desde esa perspectiva.",
      "Plenaria: ¿Qué nuevas posibilidades surgieron?"
    ],
    preguntas_cierre: [
      "¿Qué posibilidad te sorprende más?",
      "¿Cuál vas a explorar esta semana?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 9,
    nombre: "El Contrato de Congruencia",
    escenario: "Siendo incongruente",
    descripcion_escenario: "El equipo dice una cosa pero hace otra; hay falta de congruencia.",
    objetivo: "Alinear palabra y acción.",
    instrucciones: [
      "Cada persona escribe en una hoja: 'Digo que valoro X, pero mis acciones muestran Y.'",
      "En parejas, comparten su reflexión.",
      "Luego escriben: 'A partir de hoy, me comprometo a alinear mi acción con mi palabra en...'",
      "Firman un 'contrato de congruencia' que se pega en la pared.",
      "Establecen un sistema de recordatorio (alarma, post-it, compañero de accountability)."
    ],
    preguntas_cierre: [
      "¿Qué te costará más alinear?",
      "¿Quién te puede sostener en esto?"
    ],
    tiempo: "30-40 minutos"
  },
  {
    id: 10,
    nombre: "El Viaje del Héroe del Equipo",
    escenario: "Sin narrativa inspiradora",
    descripcion_escenario: "El equipo no tiene una narrativa inspiradora; se ve como víctima de las circunstancias.",
    objetivo: "Crear una narrativa épica del equipo como héroe de su propia historia.",
    instrucciones: [
      "Explica la estructura del Viaje del Héroe (llamado, desafíos, aliados, enemigos, transformación, retorno).",
      "En grupos, el equipo crea SU propia historia como un viaje épico:",
      "- ¿Cuál es nuestro llamado?",
      "- ¿Qué desafíos hemos enfrentado?",
      "- ¿Quiénes son nuestros aliados?",
      "- ¿Qué transformación estamos viviendo?",
      "- ¿Cuál es nuestro 'retorno' (legado)?",
      "Presentan la historia en formato creativo (dibujo, teatro, relato)."
    ],
    preguntas_cierre: [
      "¿Qué capítulo estamos viviendo ahora?",
      "¿Qué acción te corresponde como héroe?"
    ],
    tiempo: "60-90 minutos"
  },
  {
    id: 11,
    nombre: "La Caja de las Excusas",
    escenario: "Justificando constantemente",
    descripcion_escenario: "El equipo justifica constantemente por qué no puede actuar.",
    objetivo: "Identificar y soltar excusas.",
    instrucciones: [
      "Cada persona escribe en papeles separados 3-5 excusas que usa frecuentemente.",
      "Ponen las excusas en una caja física.",
      "Por turno, cada uno saca un papel (puede ser el suyo o de otro), lee la excusa en voz alta y responde: 'La verdad es que...'",
      "Luego rompe el papel y lo tira a la basura.",
      "Cierran con: 'A partir de hoy, en lugar de excusas, elegimos...'"
    ],
    preguntas_cierre: [
      "¿Qué excusa te costó más soltar?",
      "¿Qué verdad te libera?"
    ],
    tiempo: "30-45 minutos"
  },
  {
    id: 12,
    nombre: "El Círculo de la Verdad Radical",
    escenario: "Evitando conversaciones difíciles",
    descripcion_escenario: "El equipo evita conversaciones difíciles; hay 'elefantes en la sala'.",
    objetivo: "Crear un espacio seguro para decir verdades incómodas.",
    instrucciones: [
      "Formen un círculo. Establece el acuerdo: 'Aquí decimos la verdad con respeto, sin atacar.'",
      "Cada persona tiene 2 minutos para compartir UNA verdad incómoda que ha estado evitando decir.",
      "Los demás escuchan sin interrumpir ni defenderse.",
      "Después de cada verdad, el grupo dice: 'Gracias por tu verdad.'",
      "Cierran con: '¿Qué se hace posible ahora que esto está sobre la mesa?'"
    ],
    preguntas_cierre: [
      "¿Qué te costó más decir/escuchar?",
      "¿Qué acción se abre ahora?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 13,
    nombre: "La Balanza del Esfuerzo vs. Resultado",
    escenario: "Enfocado en esfuerzo, no resultados",
    descripcion_escenario: "El equipo se enorgullece del esfuerzo, no de los resultados.",
    objetivo: "Mover el foco del esfuerzo al resultado.",
    instrucciones: [
      "Dibuja una balanza en la pizarra. Un lado dice 'ESFUERZO', el otro 'RESULTADO'.",
      "Pide al equipo que liste 5 situaciones recientes donde se enfocaron en el esfuerzo.",
      "Para cada una, pregunta: '¿Qué resultado obtuvimos?'",
      "Si el resultado fue bajo, pregunta: '¿Qué habríamos hecho diferente si el foco hubiera sido el resultado desde el inicio?'",
      "Cada persona escribe: 'A partir de hoy, mediré mi éxito por...'"
    ],
    preguntas_cierre: [
      "¿Qué te da más orgullo: esforzarte o lograr?",
      "¿Qué resultado concreto te comprometes a lograr en 7 días?"
    ],
    tiempo: "30-40 minutos"
  },
  {
    id: 14,
    nombre: "El Mapa de los Enemigos Internos",
    escenario: "Bloqueado internamente",
    descripcion_escenario: "El equipo se siente bloqueado pero no identifica qué lo limita internamente.",
    objetivo: "Externalizar los patrones internos que limitan.",
    instrucciones: [
      "Explica: 'Todos tenemos enemigos internos (voces, creencias, patrones) que nos limitan.'",
      "Cada persona dibuja o escribe sus 3 enemigos internos principales.",
      "En plenaria, comparten: 'Mi enemigo interno X me dice...'",
      "Luego responden: '¿Qué voz necesito cultivar para contrarrestarlo?'",
      "Crean un 'escudo' con las nuevas voces."
    ],
    preguntas_cierre: [
      "¿Qué enemigo te limita más?",
      "¿Qué harás diferente cuando esa voz aparezca?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 15,
    nombre: "La Carrera de Relevos de la Responsabilidad",
    escenario: "Sin responsabilidad compartida",
    descripcion_escenario: "El equipo no se hace cargo colectivo; cada uno espera que otro actúe.",
    objetivo: "Generar responsabilidad compartida y secuencial.",
    instrucciones: [
      "Identifiquen un objetivo o desafío del equipo.",
      "Divídanlo en 5-7 'estaciones' (pasos clave).",
      "Cada persona se asigna UNA estación y se compromete a completarla en un tiempo específico.",
      "La siguiente estación no puede empezar hasta que la anterior se complete (como un relevo).",
      "Establezcan checkpoints diarios para reportar progreso."
    ],
    preguntas_cierre: [
      "¿Qué te da más energía: hacer tu parte o esperar a otros?",
      "¿Qué harás si ves que un compañero se retrasa?"
    ],
    tiempo: "30-40 minutos"
  },
  {
    id: 16,
    nombre: "El Tribunal de los Futuros Imposibles",
    escenario: "Sin aspiraciones inspiradoras",
    descripcion_escenario: "El equipo no tiene aspiraciones inspiradoras; se conforma con lo 'realista'.",
    objetivo: "Conectar con futuros que hoy parecen imposibles.",
    instrucciones: [
      "Cada persona escribe su 'futuro de posibilidad' (algo que desea pero cree inalcanzable).",
      "Formen un 'tribunal' con 3 roles: Fiscal (cuestiona por qué es imposible), Defensor (argumenta por qué es posible), Juez (decide si vale la pena intentarlo).",
      "Cada futuro pasa por el tribunal.",
      "Al final, cada persona responde: '¿Estoy dispuesto a intentarlo?'"
    ],
    preguntas_cierre: [
      "¿Qué te da más miedo: intentarlo o no intentarlo?",
      "¿Qué primer paso darás esta semana?"
    ],
    tiempo: "60-90 minutos"
  },
  {
    id: 17,
    nombre: "La Red de la Confianza",
    escenario: "Sin confianza entre sí",
    descripcion_escenario: "El equipo no confía entre sí; hay desconfianza o competencia interna.",
    objetivo: "Reconstruir la confianza a través de la vulnerabilidad.",
    instrucciones: [
      "Formen un círculo. Una persona sostiene un ovillo de lana.",
      "Comparte: 'Confío en ti, [nombre], porque...' o 'Necesito confiar más en ti en...'",
      "Lanza el ovillo a esa persona (sosteniendo el extremo).",
      "Esa persona hace lo mismo con otra.",
      "Al final, se forma una 'red' que los conecta a todos.",
      "Reflexión: 'Esta red es nuestra confianza. ¿Qué la fortalece? ¿Qué la debilita?'"
    ],
    preguntas_cierre: [
      "¿Qué te costó más compartir?",
      "¿Qué harás para fortalecer esta red?"
    ],
    tiempo: "30-45 minutos"
  },
  {
    id: 18,
    nombre: "El Semáforo de las Conversaciones",
    escenario: "En conversaciones tóxicas",
    descripcion_escenario: "El equipo tiene conversaciones que no generan acción (quejas, chismes, historias de víctima).",
    objetivo: "Identificar y transformar conversaciones tóxicas.",
    instrucciones: [
      "Explica los 3 colores: Rojo (limitan), Amarillo (neutras), Verde (generan acción).",
      "Cada persona identifica 2-3 conversaciones recurrentes en el equipo y las clasifica.",
      "Para cada 'rojo', responden: '¿Qué conversación verde la reemplazaría?'",
      "Crean un 'acuerdo de semáforo': 'A partir de hoy, cuando detectemos una conversación roja, diremos...'"
    ],
    preguntas_cierre: [
      "¿Qué conversación roja te cuesta más soltar?",
      "¿Qué conversación verde elegirás esta semana?"
    ],
    tiempo: "30-40 minutos"
  },
  {
    id: 19,
    nombre: "El Puente del Quiebre",
    escenario: "Cómodamente incómodo",
    descripcion_escenario: "El equipo está 'cómodamente incómodo'; sabe que debe cambiar pero no da el salto.",
    objetivo: "Generar un quiebre emocional y cognitivo que impulse la acción.",
    instrucciones: [
      "Dibuja un puente en el suelo con cinta. Un lado dice 'ZONA DE CONFORT', el otro 'ZONA DE POSIBILIDAD'.",
      "Cada persona se para en el lado 'CONFORT' y responde: '¿Qué me está costando quedarme aquí?'",
      "Luego da un paso al centro (el 'quiebre') y responde: '¿Qué estoy dispuesto a soltar para cruzar?'",
      "Finalmente cruza al lado 'POSIBILIDAD' y responde: '¿Qué me espera al cruzar?'",
      "El grupo testifica y sostiene."
    ],
    preguntas_cierre: [
      "¿Qué te detiene en el medio?",
      "¿Qué compromiso haces al cruzar?"
    ],
    tiempo: "45-60 minutos"
  },
  {
    id: 20,
    nombre: "La Máquina del Tiempo del Equipo",
    escenario: "Sin aprendizaje ni diseño",
    descripcion_escenario: "El equipo no aprende del pasado ni diseña el futuro; vive en el presente reactivo.",
    objetivo: "Integrar aprendizaje del pasado y diseño del futuro.",
    instrucciones: [
      "Divide al grupo en 3 'tripulaciones': Pasado, Presente, Futuro.",
      "Pasado: Identifica 3 aprendizajes clave de los últimos 6 meses.",
      "Presente: Identifica 3 patrones actuales que quieren mantener y 3 que quieren soltar.",
      "Futuro: Diseña 3 futuros imposibles para los próximos 6 meses.",
      "Integren: 'Del pasado aprendimos..., en el presente elegimos..., hacia el futuro nos comprometemos a...'",
      "Crean un 'manifiesto del equipo' con estas declaraciones."
    ],
    preguntas_cierre: [
      "¿Qué aprendizaje del pasado te sorprende?",
      "¿Qué futuro te da más energía?"
    ],
    tiempo: "60-90 minutos"
  }
];

```

---

### 📄 Archivo: `src/data/evaluacion1.js`

```javascript
export const evaluacion1 = {
  id: 'm1_eval',
  title: 'Evaluación de Fundamentos Teóricos',
  description: 'En este caso práctico evaluarás tu capacidad para llevar la teoría a la trinchera operativa. El Master Coach IA evaluará formativamente tu respuesta según 4 dimensiones: Identificación del problema, Calidad de Intervención, No-directividad, y Acción verificable.',
  type: 'open_ai',
  caseStudy: 'Tienes un cliente, Juan, que constantemente asiste a las sesiones con muchas ideas teóricas sobre por qué no puede avanzar, justificando su falta de acción con análisis psicológicos muy complejos sobre su pasado. Su objetivo declarado es lanzar su negocio, pero lleva meses sin dar un solo paso real.\n\nUtilizando el postulado del "Observador Generativo" y los pilares del Alto Rendimiento, redacta qué intervención harías y qué le dirías a Juan para sacarlo de la intelectualización y llevarlo a la acción masiva.'
};

```

---

### 📄 Archivo: `src/data/evaluacionesRegistry.js`

```javascript
import { evaluacion1 } from './evaluacion1';

const generateGenericEval = (id, title, description, focusTerm) => ({
  id,
  title: `Evaluación: ${title}`,
  description: description + " Resuelve este caso práctico y recibe feedback de nuestra IA actuando como Master Coach.",
  type: 'open_ai',
  caseStudy: `Un cliente llega a ti sintiéndose estancado y frustrado. Sabes que el núcleo de su problema puede abordarse mediante ${focusTerm}. \n\nDescribe paso a paso cómo estructurarías la sesión, qué distinciones le aportarías y qué acción concreta le pedirías al final para garantizar una alteración en su realidad.`
});

import { curriculum } from './curriculum';

export const evaluacionesRegistry = curriculum.reduce((acc, modulo) => {
  if (modulo.tieneEvaluacion) {
    if (modulo.id === 'modulo1') {
      acc[modulo.id] = evaluacion1;
    } else {
      acc[modulo.id] = generateGenericEval(
        modulo.id, 
        modulo.titulo.replace(/Módulo \d+: /, ''), 
        modulo.descripcion, 
        'los conceptos de este módulo'
      );
    }
  }
  return acc;
}, {});

```

---

### 📄 Archivo: `src/data/groundings.js`

```javascript
export const groundings = [
  {
    id: 1,
    nombre: "Pies que Deciden",
    escenario: "Paralizados por la sobre-reflexión o el miedo.",
    formato: "Virtual o presencial",
    duracion: "2-3 minutos",
    instrucciones: [
      "Interrupción: 'Párate ahora mismo. Si estás en virtual, párate frente a tu cámara. Si estás en presencial, párate donde estés.'",
      "Anclaje: 'Pon ambos pies firmemente en el suelo. Sepáralos al ancho de tus caderas. Siente el contacto de tus pies con el piso.'",
      "Expansión: 'Mueve los dedos de los pies. Nota la presión. Pisotea suavemente 3 veces. Siente cómo tus piernas te sostienen.'",
      "Declaración: 'Tus pies te llevan a donde decides ir. Pregúntate: ¿A dónde quiero ir que no he ido?'",
      "Acción: 'En las próximas 24 horas, darás UN paso físico hacia ese lugar. ¿Cuál es?'"
    ],
    pregunta_cierre: "¿Qué paso concreto darás en las próximas 24 horas?"
  },
  {
    id: 2,
    nombre: "Manos que Crean",
    escenario: "Atrapados en quejas o historias de víctima.",
    formato: "Virtual o presencial",
    duracion: "2 minutos",
    instrucciones: [
      "Interrupción: 'Levanta tus manos frente a ti. Ábrelas como si fueras a recibir algo.'",
      "Anclaje: 'Junta las palmas de tus manos con fuerza. Presiona una contra la otra durante 10 segundos. Siente la tensión, el calor.'",
      "Expansión: 'Suelta. Observa la sensación residual. ¿Qué crean tus manos cuando las usas? ¿Qué has creado con tus manos?'",
      "Declaración: 'Tus manos pueden quejarse o pueden crear. ¿Qué eliges crear hoy?'",
      "Acción: 'En las próximas 24 horas, usarás tus manos para crear algo concreto. ¿Qué es?'"
    ],
    pregunta_cierre: "¿Qué crearás con tus manos en las próximas 24 horas?"
  },
  {
    id: 3,
    nombre: "Respiración que Corta",
    escenario: "Conversaciones circulares sin acción.",
    formato: "Virtual o presencial",
    duracion: "1-2 minutos",
    instrucciones: [
      "Inhalación: 'Toma aire profundamente durante 4 segundos.'",
      "Retención: 'Si te resulta cómodo, pausa suavemente un instante.'",
      "Exhalación Fuerte: 'Exhala con fuerza por la boca, como si apagaras una vela a 2 metros de distancia.'",
      "Expansión: 'Repite 3 veces. En la última exhala, imagina que estás expulsando TODAS las excusas, TODAS las justificaciones.'",
      "Declaración: 'Tu respiración es tuya. Nadie más la controla. ¿Qué más está bajo tu control?'",
      "Acción: 'En las próximas 24 horas, actuarás desde lo que SÍ controlas. ¿Qué acción tomarás?'"
    ],
    pregunta_cierre: "¿Qué está 100% bajo tu control y actuarás desde allí?"
  },
  {
    id: 4,
    nombre: "Espejo de la Verdad",
    escenario: "Evitando verse a sí mismos honestamente.",
    formato: "Virtual (cámara) o presencial (espejo/pareja)",
    duracion: "3 minutos",
    instrucciones: [
      "Contacto visual: 'Mírense a los ojos en silencio (o miren un punto fijo si les resulta incómodo). No hay nada de qué defenderse.'",
      "Anclaje: 'Mantén la mirada. No la bajes. Quédate con la incomodidad.'",
      "Expansión: 'Pregúntate en silencio: ¿Qué estoy evitando ver de mí mismo? ¿Qué historia me estoy contando?'",
      "Declaración: 'La verdad que evitas ver es la puerta a tu libertad. ¿Estás dispuesto a verla?'",
      "Acción: 'En las próximas 24 horas, enfrentarás UNA verdad que has evitado. ¿Cuál es?'"
    ],
    pregunta_cierre: "¿Qué verdad enfrentarás y qué acción tomarás?"
  },
  {
    id: 5,
    nombre: "Cuerpo que Habla",
    escenario: "Desconectados de sus emociones y señales corporales.",
    formato: "Virtual o presencial",
    duracion: "3 minutos",
    instrucciones: [
      "Interrupción: 'Pon una mano en tu pecho y otra en tu estómago. Cierra los ojos.'",
      "Anclaje: 'Siente tu latido. Siente tu respiración. ¿Dónde hay tensión en tu cuerpo ahora?'",
      "Expansión: 'Tu cuerpo te habla todo el tiempo. ¿Qué te está diciendo ahora? ¿Qué emoción hay debajo de esa tensión?'",
      "Reconexión: 'Observa qué sensaciones aparecen. Puedes tomarlas como una fuente de información.'",
      "Acción: 'En las próximas 24 horas, escucharás a tu cuerpo y actuarás según lo que te pida. ¿Qué harás?'"
    ],
    pregunta_cierre: "¿Qué te pide tu cuerpo y qué harás al respecto?"
  },
  {
    id: 6,
    nombre: "Grito Silencioso",
    escenario: "Reprimiendo emociones (ira, frustración, impotencia).",
    formato: "Virtual (mic apagado) o presencial (privado)",
    duracion: "2 minutos",
    instrucciones: [
      "Interrupción: 'Abre tu boca como si fueras a gritar. Pero no hagas sonido. Es un grito silencioso.'",
      "Anclaje: 'Tensa todo tu cuerpo: puños cerrados, mandíbula apretada, hombros hacia arriba. Sostén 10 segundos.'",
      "Expansión: 'Suelta de golpe. Deja caer los brazos, relaja la mandíbula. Siente la liberación.'",
      "Declaración: '¿Qué has estado reprimiendo que necesita salir? ¿Qué pasaría si lo expresaras?'",
      "Acción: 'En las próximas 24 horas, expresarás algo que has estado reprimiendo. ¿Qué es y cómo lo harás?'"
    ],
    pregunta_cierre: "¿Qué expresarás y a quién?"
  },
  {
    id: 7,
    nombre: "Silla del Futuro",
    escenario: "Atrapados en el presente problemático, sin visión de futuro.",
    formato: "Virtual o presencial",
    duracion: "3 minutos",
    instrucciones: [
      "Interrupción: 'Imagina una silla vacía frente a ti. En esa silla está tu YO del futuro, dentro de 1 año, habiendo logrado lo imposible.'",
      "Anclaje: 'Mira a esa versión. ¿Cómo se ve? ¿Cómo se siente? ¿Qué dice?'",
      "Expansión: 'Esa versión de ti te dice: \"Lo que te limita hoy es irrelevante. Lo que importa es lo que haces AHORA\".'",
      "Declaración: '¿Qué te dice esa versión de ti que necesitas escuchar?'",
      "Acción: 'En las próximas 24 horas, harás algo que esa versión futura de ti te agradecería. ¿Qué es?'"
    ],
    pregunta_cierre: "¿Qué harás hoy que tu futuro yo celebrará?"
  },
  {
    id: 8,
    nombre: "Peso de la Responsabilidad",
    escenario: "En modo víctima, culpando a otros.",
    formato: "Virtual o presencial",
    duracion: "2-3 minutos",
    instrucciones: [
      "Interrupción: 'Extiende tus brazos hacia adelante, palmas hacia arriba, como si sostuvieras algo pesado.'",
      "Anclaje: 'Imagina que en tus manos está el peso de TODAS tus excusas, TODAS tus justificaciones, TODAS tus culpas a otros.'",
      "Expansión: 'Siente el peso. ¿Cuánto te está costando sostener esto? ¿Estás dispuesto a soltarlo?'",
      "Declaración: 'Suelta los brazos. Deja caer el peso. La responsabilidad no es una carga, es tu poder. ¿Estás dispuesto a tomarlo?'",
      "Acción: 'En las próximas 24 horas, tomarás responsabilidad radical por algo que has estado culpando a otros. ¿Qué es?'"
    ],
    pregunta_cierre: "¿Por qué dejarás de culpar y qué harás en su lugar?"
  },
  {
    id: 9,
    nombre: "Latido que Conecta",
    escenario: "Aislados, sin sentido de equipo o propósito compartido.",
    formato: "Virtual o presencial",
    duracion: "2 minutos",
    instrucciones: [
      "Interrupción: 'Pon tu mano en tu pecho. Siente tu latido.'",
      "Anclaje: 'Cierra los ojos. Escucha tu latido. Es el mismo ritmo que te ha sostenido toda tu vida.'",
      "Expansión: 'Imagina que todos en esta llamada están sintiendo su latido ahora. Somos un coro de latidos.' (Presencial: Escuchen el sonido colectivo).",
      "Declaración: 'Tu latido te conecta con algo más grande. ¿Con qué te conecta?'",
      "Acción: 'En las próximas 24 horas, actuarás desde esa conexión. ¿Qué harás que sirva a algo más grande que ti?'"
    ],
    pregunta_cierre: "¿Qué harás que sirva al equipo/propósito mayor?"
  },
  {
    id: 10,
    nombre: "Salto de Posibilidad",
    escenario: "Atrapados en pensamiento lineal ('paso a paso'), sin permiso para lo imposible.",
    formato: "Virtual o presencial",
    duracion: "3 minutos",
    instrucciones: [
      "Interrupción: 'Párate. Separa los pies. Prepara tu cuerpo para saltar.'",
      "Anclaje: 'Dobla ligeramente las rodillas. Siente la energía en tus piernas. No saltes todavía. Solo siente la posibilidad.'",
      "Expansión: 'Imagina que estás a punto de dar un salto de posibilidad: no un paso pequeño, un SALTO. De quien eres a quien puedes ser.'",
      "Declaración: '¿Qué salto estás evitando dar? ¿Qué te espera al otro lado?'",
      "Acción: 'En las próximas 24 horas, darás un micro-salto (una acción que te saque de tu zona de confort). ¿Qué salto darás?'"
    ],
    pregunta_cierre: "¿Qué harás en las próximas 24 horas que te saque de tu zona de confort?"
  }
];

export const groundingEmergencia = {
  nombre: "Grounding de Emergencia",
  duracion: "30 segundos",
  instrucciones: [
    "Interrupción: '¡ALTO! Todos, párense AHORA.' (5 segundos)",
    "Anclaje: 'Pies en el suelo. Manos en los muslos. Respiren.' (10 segundos)",
    "Expansión: 'Miren a su alrededor. Están aquí. Ahora.' (5 segundos)",
    "Declaración: '¿Desde dónde quieren continuar? ¿Desde la queja o desde la acción?' (5 segundos)",
    "Acción: 'Tomen UNA decisión AHORA. ¿Continuamos o paramos?' (5 segundos)"
  ]
};

```

---

### 📄 Archivo: `src/data/maquinaQuiebres.js`

```javascript
export const maquinaQuiebres = [
  {
    id: 1,
    patron: "La Queja Crónica",
    descripcion: "El equipo vive quejándose de factores externos (la empresa, el cliente, el mercado, 'el sistema').",
    quiebre_necesario: "De la queja a la responsabilidad.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Grito Silencioso'",
        instrucciones: "2 minutos. Tensar todo el cuerpo, soltar de golpe."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Muro de las Quejas'",
        instrucciones: "Escribir quejas en post-its, pegarlas, leer en silencio."
      },
      {
        fase: "3. Declaración",
        herramienta: "Contrato: 'De Queja a Compromiso'",
        instrucciones: "Reescribir cada queja como compromiso: 'En lugar de quejarme de X, me comprometo a Y.'"
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 24h",
        instrucciones: "Reportar: '¿Qué hiciste en lugar de quejarte?'"
      }
    ],
    pregunta_quiebre: "¿Qué te está costando más: quejarte o comprometerte?"
  },
  {
    id: 2,
    patron: "El Juicio al Otro",
    descripcion: "El equipo juzga constantemente a otros (líderes, compañeros, clientes) sin verse a sí mismo.",
    quiebre_necesario: "Del juicio externo a la autoconciencia.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Espejo de la Verdad'",
        instrucciones: "3 minutos. Mirarse a los ojos, no bajar la mirada."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Juicio Invertido'",
        instrucciones: "Escribir el juicio, buscar evidencia de que es FALSO, crear nueva historia."
      },
      {
        fase: "3. Declaración",
        herramienta: "Declaración pública: 'El juicio que suelto es...'",
        instrucciones: "Cada persona declara qué juicio está dispuesta a soltar."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Cuándo te atrapaste juzgando y elegiste otra cosa?'"
      }
    ],
    pregunta_quiebre: "¿Qué verdad sobre ti estás evitando ver al juzgar a otros?"
  },
  {
    id: 3,
    patron: "La Víctima del Sistema",
    descripcion: "El equipo se ve como víctima de circunstancias externas, sin poder de acción.",
    quiebre_necesario: "De la víctima a la responsabilidad radical.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Peso de la Responsabilidad'",
        instrucciones: "2-3 minutos. Sostener el peso de las excusas, soltar."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'La Línea de la Responsabilidad'",
        instrucciones: "Línea en el suelo: un lado 'Víctima', otro 'Responsable'. Cruzar físicamente."
      },
      {
        fase: "3. Declaración",
        herramienta: "Manifiesto: 'Soy responsable de...'",
        instrucciones: "Cada persona declara 3 cosas de las que es 100% responsable."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 24h",
        instrucciones: "Reportar: '¿Qué hiciste desde la responsabilidad hoy?'"
      }
    ],
    pregunta_quiebre: "¿Qué parte de esto es TUYA, no del sistema?"
  },
  {
    id: 4,
    patron: "El Esfuerzo Sin Resultado",
    descripcion: "El equipo se enorgullece del esfuerzo ('trabajamos mucho'), no de los resultados.",
    quiebre_necesario: "Del esfuerzo al resultado.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Respiración que Corta'",
        instrucciones: "1-2 minutos. Inhalar 4, sostener 4, exhalar con fuerza 4."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'La Balanza del Esfuerzo vs. Resultado'",
        instrucciones: "Listar situaciones de esfuerzo, preguntar: '¿Qué resultado obtuvimos?'"
      },
      {
        fase: "3. Declaración",
        herramienta: "Compromiso: 'Mediré mi éxito por...'",
        instrucciones: "Cada persona declara cómo medirá su éxito (resultado, no esfuerzo)."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Qué resultado concreto lograste?'"
      }
    ],
    pregunta_quiebre: "¿Qué te da más orgullo: esforzarte o lograr?"
  },
  {
    id: 5,
    patron: "La Parálisis por Miedo",
    descripcion: "El equipo está paralizado por el miedo al fracaso, la incertidumbre o el juicio.",
    quiebre_necesario: "Del miedo a la acción.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Pies que Deciden'",
        instrucciones: "2-3 minutos. Párate, siente los pies, pisotea, decide."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'La Silla Vacía del Futuro'",
        instrucciones: "Silla vacía representa el futuro logrado. Hablar DESDE allí."
      },
      {
        fase: "3. Declaración",
        herramienta: "Declaración: 'Estoy dispuesto a...'",
        instrucciones: "Cada persona declara qué está dispuesto a hacer a pesar del miedo."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 24h",
        instrucciones: "Reportar: '¿Qué hiciste con miedo hoy?'"
      }
    ],
    pregunta_quiebre: "¿Qué te da más miedo: intentarlo o no intentarlo?"
  },
  {
    id: 6,
    patron: "La Incongruencia",
    descripcion: "El equipo dice una cosa pero hace otra; falta de alineación entre palabra y acción.",
    quiebre_necesario: "De la incongruencia a la integridad.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Cuerpo que Habla'",
        instrucciones: "3 minutos. Mano en pecho, sentir latido, escuchar al cuerpo."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Contrato de Congruencia'",
        instrucciones: "Escribir: 'Digo X, pero hago Y.' Compartir en parejas."
      },
      {
        fase: "3. Declaración",
        herramienta: "Contrato firmado: 'A partir de hoy, alinearé...'",
        instrucciones: "Firmar un contrato público de congruencia."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint diario (3 días)",
        instrucciones: "Reportar: '¿Cómo alineaste palabra y acción hoy?'"
      }
    ],
    pregunta_quiebre: "¿Qué te costará más alinear: tu palabra o tu acción?"
  },
  {
    id: 7,
    patron: "Las Excusas Infinitas",
    descripcion: "El equipo justifica constantemente por qué no puede actuar ('no tengo tiempo', 'no es mi área', etc.).",
    quiebre_necesario: "De las excusas a la verdad.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Manos que Crean'",
        instrucciones: "2 minutos. Presionar palmas, soltar, sentir creación."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'La Caja de las Excusas'",
        instrucciones: "Escribir excusas, ponerlas en caja, leer en voz alta, responder 'La verdad es que...', romper."
      },
      {
        fase: "3. Declaración",
        herramienta: "Declaración: 'La verdad que evito es...'",
        instrucciones: "Cada persona declara una verdad que ha estado evitando."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 24h",
        instrucciones: "Reportar: '¿Qué hiciste a pesar de la excusa?'"
      }
    ],
    pregunta_quiebre: "¿Qué verdad te libera más que tu excusa?"
  },
  {
    id: 8,
    patron: "Las Conversaciones Tóxicas",
    descripcion: "El equipo tiene conversaciones que no generan acción (chismes, quejas, historias de víctima).",
    quiebre_necesario: "De conversaciones tóxicas a conversaciones de acción.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Salto de Posibilidad'",
        instrucciones: "3 minutos. Párate, prepara el salto, siente la posibilidad."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Semáforo de las Conversaciones'",
        instrucciones: "Clasificar conversaciones en rojo/amarillo/verde, reemplazar rojas por verdes."
      },
      {
        fase: "3. Declaración",
        herramienta: "Acuerdo: 'Cuando detectemos una conversación roja, diremos...'",
        instrucciones: "Crear un acuerdo de equipo para interrumpir conversaciones tóxicas."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Qué conversación roja interrumpiste?'"
      }
    ],
    pregunta_quiebre: "¿Qué conversación te está costando más cambiar?"
  },
  {
    id: 9,
    patron: "La Falta de Confianza",
    descripcion: "El equipo no confía entre sí; hay desconfianza, competencia interna o resentimientos.",
    quiebre_necesario: "De la desconfianza a la vulnerabilidad.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Latido que Conecta'",
        instrucciones: "2 minutos. Mano en pecho, sentir latido, imaginar latidos compartidos."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'La Red de la Confianza'",
        instrucciones: "Círculo con ovillo de lana, compartir: 'Confío en ti porque...' o 'Necesito confiar más en...'"
      },
      {
        fase: "3. Declaración",
        herramienta: "Declaración: 'Para fortalecer esta red, yo...'",
        instrucciones: "Cada persona declara qué hará para fortalecer la confianza."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Qué hiciste para fortalecer la confianza esta semana?'"
      }
    ],
    pregunta_quiebre: "¿Qué te costó más compartir sobre la confianza?"
  },
  {
    id: 10,
    patron: "El Pasado que Atrapa",
    descripcion: "El equipo está aferrado a viejas formas de trabajar, resentimientos o historias del pasado.",
    quiebre_necesario: "Del pasado al futuro.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Respiración que Corta'",
        instrucciones: "1-2 minutos. Exhalar con fuerza, expulsar el pasado."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Funeral del Equipo Antiguo'",
        instrucciones: "Escribir comportamientos a soltar, hacer funeral simbólico, romper/quemar."
      },
      {
        fase: "3. Declaración",
        herramienta: "Manifiesto: 'El equipo nuevo es...'",
        instrucciones: "Declarar 5 características del equipo nuevo."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Qué comportamiento viejo soltaste esta semana?'"
      }
    ],
    pregunta_quiebre: "¿Qué te duele más soltar del pasado?"
  },
  {
    id: 11,
    patron: "La Falta de Visión",
    descripcion: "El equipo no tiene aspiraciones inspiradoras; se conforma con lo 'realista'.",
    quiebre_necesario: "De lo realista a lo imposible.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Silla del Futuro'",
        instrucciones: "3 minutos. Imaginar YO futuro en silla, hablar desde allí."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Tribunal de los Futuros Imposibles'",
        instrucciones: "Cada futuro pasa por tribunal (fiscal, defensor, juez)."
      },
      {
        fase: "3. Declaración",
        herramienta: "Declaración: 'Mi futuro de posibilidad es... y estoy dispuesto a...'",
        instrucciones: "Declarar el futuro y el compromiso de intentarlo."
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Qué paso diste hacia tu futuro de posibilidad?'"
      }
    ],
    pregunta_quiebre: "¿Qué te da más miedo: que sea imposible o que sea posible y no lo intentes?"
  },
  {
    id: 12,
    patron: "El Equipo Desconectado",
    descripcion: "El equipo no tiene narrativa compartida; cada uno trabaja en lo suyo sin sentido de propósito común.",
    quiebre_necesario: "De individuos aislados a equipo con propósito.",
    receta: [
      {
        fase: "1. Interrupción",
        herramienta: "Grounding: 'Latido que Conecta'",
        instrucciones: "2 minutos. Sentir latido, imaginar coro de latidos."
      },
      {
        fase: "2. Desplazamiento",
        herramienta: "Dinámica: 'El Viaje del Héroe del Equipo'",
        instrucciones: "Crear narrativa épica del equipo (llamado, desafíos, transformación, legado)."
      },
      {
        fase: "3. Declaración",
        herramienta: "Manifiesto del Equipo",
        instrucciones: "Declarar: 'Somos un equipo que...', 'Nuestro legado es...'"
      },
      {
        fase: "4. Acción",
        herramienta: "Checkpoint 7 días",
        instrucciones: "Reportar: '¿Qué hiciste esta semana que sirvió al propósito del equipo?'"
      }
    ],
    pregunta_quiebre: "¿Qué capítulo del viaje estamos viviendo y qué te corresponde hacer?"
  }
];

```

---

### 📄 Archivo: `src/data/modulesRegistry.js`

```javascript
import { curriculum } from './curriculum';

export const modulesRegistry = curriculum.reduce((acc, modulo) => {
  acc[modulo.id] = modulo.lecciones;
  return acc;
}, {});

```

---

### 📄 Archivo: `src/data/modulo1.js`

```javascript
export const modulo1 = [
  {
    id: "m1_l1",
    title: "1.1 Propósito y Alcance del Manual",
    content: `
      <div class="alert-info">
        <p><strong>Este documento constituye el manual académico y metodológico</strong> diseñado para la estandarización de competencias en el ámbito del coaching de alto rendimiento, la transformación profunda, la presencia y la gestión de estados.</p>
      </div>
      <p>Su propósito principal es dotar a facilitadores, directivos y líderes de un <span class="highlight-text">corpus teórico-práctico unificado</span>, riguroso y basado en evidencia, que permita diseñar, implementar y evaluar intervenciones de desarrollo humano de manera consistente y altamente efectiva.</p>
    `
  },
  {
    id: "m1_l2",
    title: "1.2 Coaching de Alto Rendimiento",
    content: `
      <h3>1.2.1 Definición y Propósito Central</h3>
      <p>El coaching de alto rendimiento se define como una praxis de acompañamiento estratégico orientada a la <strong>maximización del potencial individual y sistémico</strong>. A diferencia de las vertientes terapéuticas tradicionales o del coaching de contingencia, esta disciplina no se centra en la patología ni en la mera resolución de conflictos, sino en la consecución de la <span class="highlight-text">excelencia operativa</span>, la ejecución medible y la asunción de una responsabilidad radical sobre los resultados.</p>
      
      <div class="alert-warning">
        <p>Su núcleo teleológico (propósito) radica en estructurar las condiciones cognitivas y conductuales óptimas para que el individuo (coachee) opere desde su máxima capacidad. Esto facilita la proyección y materialización de escenarios futuros que trascienden las limitaciones históricas y contextuales del sujeto.</p>
      </div>
      
      <h3>1.2.2 Principios Fundamentales</h3>
      <p>La estructura metodológica del coaching de alto rendimiento se fundamenta en siete axiomas operativos:</p>
      <ul class="icon-list">
        <li><span class="highlight-text">Orientación teleológica (a objetivos):</span> Concentración estricta en metas definidas, cuantificables y delimitadas temporalmente.</li>
        <li><span class="highlight-text">Personalización sistémica:</span> Adaptación de la praxis a las singularidades cognitivas, fortalezas y barreras específicas de cada sistema.</li>
        <li><span class="highlight-text">Evaluación heurística y retroalimentación:</span> Medición continua y objetiva del desempeño para iterar y garantizar una mejora sostenida.</li>
        <li><span class="highlight-text">Enfoque pragmático (orientado a la acción):</span> Diseño e instrumentación de estrategias viables enfocadas en la ejecución tangible.</li>
        <li><span class="highlight-text">Responsabilidad radical:</span> Asunción incondicional de compromiso por parte del agente respecto a sus decisiones, procesos y resultados.</li>
        <li><span class="highlight-text">Kaizen (mejora continua):</span> Adopción de un proceso evolutivo basado en el aprendizaje reflexivo constante.</li>
        <li><span class="highlight-text">Psicología Positiva aplicada:</span> Apalancamiento estratégico en las virtudes, resiliencia y éxitos históricos del individuo como motor de cambio.</li>
      </ul>

      <h3>1.2.3 El Rol y Funciones del Coach</h3>
      <p>El profesional en alto rendimiento trasciende los roles de mentor o terapeuta; se instituye como un <strong>arquitecto de contextos conversacionales y operativos</strong>. Su labor es facultar al individuo para que diseñe su realidad desde el paradigma de la posibilidad (potencia) y no desde el determinismo (restricción).</p>
      <p>Sus competencias fundamentales abarcan:</p>
      <ul class="icon-list blue-bullets">
        <li>Diagnosticar con rigor el estadio actual de desempeño y el marco perceptual (observador) del coachee.</li>
        <li>Co-diseñar planes de acción estratégicos alineados simétricamente con los objetivos declarados.</li>
        <li>Proveer retroalimentación disruptiva orientada a la reestructuración cognitiva y la expansión de la perspectiva.</li>
        <li>Exigir y sostener el rigor en la responsabilidad y el compromiso conductual del agente.</li>
        <li>Facilitar la instauración de ecologías y hábitos sostenibles orientados a la excelencia.</li>
      </ul>
    `
  },
  {
    id: "m1_l3",
    title: "1.3 Transformación Profunda Aplicada al Coaching",
    content: `
      <div class="alert-info">
        <p><strong>Principios de Posibilidad:</strong> En este programa nos enfocamos en el cambio discontinuo, la creación de posibilidad y la revisión de perspectivas. Usamos estos principios para ampliar el repertorio de lectura y acción del liderazgo.</p>
      </div>
      <p>El modelo de <strong>"Coaching de Alto Rendimiento"</strong> es un marco heurístico innovador que transpone, de manera analógica y metafórica, algunas ideas al campo del desarrollo humano y la ontología del lenguaje.</p>
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <p><strong>El observador y el contexto:</strong> Nuestras preguntas, categorías, interpretaciones y decisiones influyen en la manera en que experimentamos una situación y en las posibilidades de acción que identificamos.</p>
        <p><strong>Definición Operativa:</strong> Consiste en un proceso sistémico de expansión perceptual que utiliza la metáfora de cambio no lineal, la reestructuración del lenguaje, el diseño de promesas y la habituación estratégica para catalizar saltos cualitativos en el desarrollo personal.</p>
      </div>
      
      <h3>1.3.2 Principios de la Transformación Profunda</h3>
      <p>Este modelo postula que el principal impedimento para la evolución humana es la externalización del locus de control: delegar la agencia creativa a las circunstancias empíricas o a narrativas históricas deterministas.</p>
      <ul class="icon-list">
        <li><span class="highlight-text">Diseño ontológico desde la posibilidad:</span> La intervención se ancla en la proyección de futuros incondicionados, desvinculándose de las narrativas de déficit.</li>
        <li><span class="highlight-text">El postulado del Observador generativo:</span> Inspirado metafóricamente en la interpretación de Copenhague, sostiene que la perspectiva adoptada por el sujeto altera materialmente su espectro de elecciones y realidades posibles.</li>
        <li><span class="highlight-text">El Salto de Posibilidad frente a la linealidad:</span> Habilita transiciones de estado disruptivas y exponenciales, cuestionando la necesidad de progresiones causales estrictamente ligadas a condicionamientos pasados.</li>
        <li><span class="highlight-text">Sincronización integral:</span> Consolidación de la coherencia sistémica entre los dominios cognitivo (pensamiento), afectivo (emoción) y conativo (acción ejecutiva).</li>
        <li><span class="highlight-text">Deconstrucción de condicionamientos:</span> Desarticulación neurocognitiva y discursiva de esquemas limitantes para desbloquear la agencia creadora.</li>
      </ul>

      <h3>1.3.3 Cuadro Comparativo</h3>
      <div class="crear-table-wrapper">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Criterio</th>
              <th>Coaching Tradicional</th>
              <th>Coaching de Alto Rendimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Enfoque Principal</strong></td>
              <td>Resolución de problemas y cumplimiento de metas incrementales.</td>
              <td><span class="highlight-text">Diseño ontológico desde la posibilidad y futuros incondicionados.</span></td>
            </tr>
            <tr>
              <td><strong>Naturaleza del Cambio</strong></td>
              <td>Lineal, progresiva y sujeta a causalidad histórica.</td>
              <td><span class="highlight-blue">Saltos de posibilidad: disruptiva, exponencial y no lineal.</span></td>
            </tr>
            <tr>
              <td><strong>Locus de Control</strong></td>
              <td>A menudo influenciado por narrativas de limitación externa.</td>
              <td><span class="highlight-text">Responsabilidad radical y observador generativo.</span></td>
            </tr>
            <tr>
              <td><strong>Método Cognitivo</strong></td>
              <td>Identificación y corrección de déficits conductuales.</td>
              <td><span class="highlight-blue">Sincronización integral y deconstrucción de paradigmas limitantes.</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "m1_l4",
    title: "1.4 Presencia, Autorregulación y Anclaje (Grounding)",
    content: `
      <h3>1.4.1 Definición y Mecanismos</h3>
      <p>El <span class="highlight-text">Grounding (técnica de anclaje)</span> es una práctica breve de atención corporal, respiración y presencia utilizada para favorecer el enfoque, disminuir distracciones y preparar al participante para una conversación o actividad. Sus funciones operativas principales son:</p>
      
      <div class="grid-2-cols">
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🧠</div>
          <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Mindfulness Somático</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Anclar la cognición del individuo en el momento presente.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🫀</div>
          <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Mitigación Amigdalina</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Reducir marcadores de estrés y ansiedad regulando la hiperactivación.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🧘</div>
          <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Propiocepción</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Promover la reconexión consciente con el cuerpo y el estímulo ambiental inmediato.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚡</div>
          <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Capacidad Ejecutiva</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Restaurar la funcionalidad del córtex prefrontal optimizando la toma de decisiones.</p>
        </div>
      </div>

      <h3>1.4.2 Principios de Diseño Metodológico de Groundings</h3>
      <p>La formulación e implementación de dinámicas de anclaje debe adherirse a estrictos criterios de estandarización metodológica:</p>
      <ul class="icon-list blue-bullets">
        <li><strong>Brevedad operativa:</strong> Las intervenciones deben acotarse temporalmente entre 30 y 180 segundos.</li>
        <li><strong>Eficiencia cognitiva (Simplicidad):</strong> Empleo de instrucciones unívocas, directas y desprovistas de abstracciones complejas.</li>
        <li><strong>Viabilidad contextual (Accesibilidad):</strong> Capacidad de ejecución autónoma en entornos cotidianos sin requerir instrumentación o acompañamiento especializado.</li>
        <li><strong>Bioseguridad y contención:</strong> Exclusión categórica de estímulos o posturas que puedan inducir desregulación traumática o riesgo físico.</li>
        <li><strong>Consistencia (Repetibilidad):</strong> Eficacia preservada ante la aplicación longitudinal e iterativa de la técnica.</li>
        <li><strong>Alineación ecológica (Coherencia contextual):</strong> Pertinencia de la técnica respecto al clima organizacional o terapéutico en curso.</li>
      </ul>
    `
  },
  {
    id: "m1_l5",
    title: "1.5 Pilares del Compromiso en el Entrenamiento",
    content: `
      <div class="alert-warning" style="margin-bottom: 2rem;">
        <p>Para asegurar la viabilidad empírica de los procesos de transformación, este modelo exige la interiorización y práctica rigurosa de <strong>cinco imperativos ético-conductuales</strong>:</p>
      </div>
      
      <div class="grid-2-cols">
        <div style="border-left: 2px solid var(--crear-gold); padding-left: 1rem;">
          <h4 style="color: var(--crear-gold); margin-bottom: 0.5rem;">1. Integridad de la palabra</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted);">Adhesión irrestricta e impecable a los compromisos asumidos y a la ética de las interacciones.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-blue); padding-left: 1rem;">
          <h4 style="color: var(--crear-blue); margin-bottom: 0.5rem;">2. Enrolamiento generativo</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted);">Habilidad de liderazgo para inspirar, movilizar y cooptar a terceros en la materialización de una visión compartida.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-gold); padding-left: 1rem;">
          <h4 style="color: var(--crear-gold); margin-bottom: 0.5rem;">3. Inmersión fenomenológica</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted);">Participación activa, consciente e indivisa en todas las dinámicas del proceso formativo (presencia plena).</p>
        </div>
        <div style="border-left: 2px solid var(--crear-blue); padding-left: 1rem;">
          <h4 style="color: var(--crear-blue); margin-bottom: 0.5rem;">4. Sostenibilidad de la visión</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted);">Capacidad de mantener el foco teleológico de manera resiliente frente a contingencias o disonancias temporales.</p>
        </div>
      </div>
      
      <div style="border-left: 2px solid var(--crear-gold); padding-left: 1rem; margin-top: 1.5rem; max-width: 50%;">
        <h4 style="color: var(--crear-gold); margin-bottom: 0.5rem;">5. Sinergia colectiva</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted);">Comprensión y asimilación de la naturaleza interdependiente e intersubjetiva de los ecosistemas de alto rendimiento (Trabajo en equipo).</p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo10.js`

```javascript
export const modulo10 = [
  {
    id: "m10_l1",
    title: "Alcance, Límites y Ética del Modelo",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">Módulo 10: Integridad y Seguridad Psicológica</h3>
        <p>El coaching de alto rendimiento es una herramienta poderosa para catalizar la acción, pero no es una solución universal ni un sustituto para la atención en salud mental. La verdadera responsabilidad radical incluye conocer y respetar nuestros límites de competencia.</p>
      </div>

      <h3>1. Qué puede y qué NO puede hacer el Coaching</h3>
      
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">✅ Lo que SÍ hacemos</strong>
          <ul class="icon-list blue-bullets">
            <li>Facilitar la toma de conciencia sobre narrativas limitantes.</li>
            <li>Acompañar en el diseño de planes de acción verificables.</li>
            <li>Enseñar técnicas breves de autorregulación y gestión de estados (groundings) para la claridad cognitiva temporal.</li>
            <li>Desafiar las excusas operativas y el sobreanálisis.</li>
          </ul>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--color-error);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">❌ Lo que NO hacemos</strong>
          <ul class="icon-list blue-bullets">
            <li>Tratar, diagnosticar o intervenir en trastornos de salud mental (ansiedad clínica, depresión, TEPT).</li>
            <li>Prometer resultados absolutos ignorando las barreras sistémicas, económicas o biológicas del individuo.</li>
            <li>Usar los principios de posibilidad como justificación clínica o médica.</li>
            <li>Asumir que "todo está en la mente" y que "el cliente lo elige todo".</li>
          </ul>
        </div>
      </div>

      <h3 style="margin-top: 3rem;">2. Cuándo y Cómo Derivar a Psicoterapia</h3>
      <p>El coaching asume que el cliente tiene la capacidad funcional básica para gestionar su presente y proyectar su futuro. Cuando esa funcionalidad está comprometida, la intervención debe detenerse.</p>

      <table class="crear-table" style="margin-top: 1.5rem;">
        <thead>
          <tr>
            <th>Señal de Alerta (Red Flag)</th>
            <th>Acción del Coach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Incapacidad persistente para actuar:</strong> El cliente experimenta parálisis total, ataques de pánico ante la idea de tomar acción, o alteración de estado persistente que no cede con groundings.</td>
            <td>Detener la exploración ontológica. Reconocer la sobrecarga ("Veo que esto es muy pesado"). Sugerir evaluación psicológica antes de continuar el coaching.</td>
          </tr>
          <tr>
            <td><strong>Trauma activo:</strong> El cliente hace referencias a eventos traumáticos no procesados que inundan la conversación de forma incontrolable.</td>
            <td>No profundizar. El coach NO debe realizar catarsis de trauma. Derivar inmediatamente a un especialista en trauma.</td>
          </tr>
          <tr>
            <td><strong>Manejo de ideación suicida o autolesiones:</strong> Cualquier mención directa o indirecta.</td>
            <td>Detener la sesión, activar protocolos de emergencia/contactos de apoyo y derivar incondicionalmente.</td>
          </tr>
        </tbody>
      </table>

      <div class="alert-warning" style="margin-top: 3rem; text-align: center; padding: 2rem;">
        <h2 style="color: var(--crear-gold); margin-top: 0; font-size: 1.5rem;">Un Recordatorio de Congruencia</h2>
        <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 0;">
          Obligar a un cliente a asumir "responsabilidad radical" sobre una condición médica o estructural que escapa a su control no es liderazgo, es negligencia. El Maestro Enrolador sabe cuándo liderar hacia la acción y cuándo liderar hacia el cuidado profesional externo.
        </p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo11.js`

```javascript
export const modulo11 = [
  {
    id: "m11_l1",
    title: "11.1 Fundamentación y Principios",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">Desbloquear la Propia Creatividad</h3>
        <p>Un coach no puede generar quiebres, preguntas poderosas ni intervenciones creativas si está operando desde patrones automáticos, rigidez mental o bloqueo creativo. La creatividad del coach no es un "extra", es una <strong>condición de posibilidad</strong> para el coaching de alto rendimiento.</p>
      </div>

      <h3>Fuentes de la Creatividad en el Coaching</h3>
      <ul class="icon-list blue-bullets">
        <li><strong>Guilford (1950)</strong>: Pensamiento divergente como base de la creatividad.</li>
        <li><strong>De Bono (1970)</strong>: Pensamiento lateral y ruptura de patrones.</li>
        <li><strong>Csikszentmihalyi (1996)</strong>: Flow y condiciones para la creatividad.</li>
        <li><strong>Amabile (1996)</strong>: Creatividad en contextos organizacionales.</li>
        <li><strong>Sternberg (2006)</strong>: Creatividad como hábito, no como talento.</li>
      </ul>

      <h3 style="margin-top: 2rem;">Principios de Diseño de los Ejercicios</h3>
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">1. Brevedad y Efectividad</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">2-10 minutos máximo. Debe generar un desplazamiento real, no solo "sentirse creativo".</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">2. Aplicabilidad</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Lo que se ejercita debe transferirse directamente a la sesión de coaching.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">3. Repetibilidad</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Se puede practicar diariamente sin perder potencia.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">4. Seguridad Psicológica</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">No requiere exposición emocional intensa ni habilidades artísticas previas.</p>
        </div>
      </div>
    `
  },
  {
    id: "m11_l2",
    title: "11.2 Ejercicios Cortos y Efectivos (1-6)",
    content: `
      <h3>12 Ejercicios para Desbloquear la Creatividad (Parte 1)</h3>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-gold); margin-top: 0;">EJERCICIO 1: Las 30 Usos de un Objeto</h4>
        <p><strong>Propósito:</strong> Activar el pensamiento divergente y romper la fijación funcional. <strong>Duración:</strong> 3-5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Elige un objeto cotidiano (un bolígrafo, una taza, una silla).</li>
          <li>Durante 3 minutos, escribe <strong>30 usos diferentes</strong> para ese objeto. No juzgues, no filtres.</li>
          <li>Al final, revisa: ¿Cuántos fueron convencionales? ¿Cuántos creativos?</li>
        </ol>
        <p style="font-size: 0.9rem;"><em>Transferencia:</em> Antes de una sesión, hazlo con "una pregunta" o "una intervención". ¿Cuáles son 30 formas diferentes de intervenir en esta situación?</p>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-blue); margin-top: 0;">EJERCICIO 2: El Abogado del Diablo Inverso</h4>
        <p><strong>Propósito:</strong> Romper la adhesión a una sola perspectiva. <strong>Duración:</strong> 3-5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Piensa en una creencia fuerte sobre coaching (ej. "El coach no da consejos").</li>
          <li>Durante 3 minutos, <strong>defiende la postura opuesta</strong> con la mayor convicción posible. Escribe 5 argumentos sólidos.</li>
          <li>No necesitas creerlo, solo ejercitar la flexibilidad cognitiva.</li>
        </ol>
        <p style="font-size: 0.9rem;"><em>Transferencia:</em> Cuando te sientas "atrapado" con un coachee, pregúntate: "¿Cuál es la postura opuesta y qué argumentos tendría?"</p>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-gold); margin-top: 0;">EJERCICIO 3: La Pregunta Más Estúpida</h4>
        <p><strong>Propósito:</strong> Desactivar el juicio interno y permitir preguntas "prohibidas". <strong>Duración:</strong> 2-3 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Piensa en un caso de coaching actual.</li>
          <li>Durante 2 minutos, escribe <strong>las 10 preguntas más "estúpidas"</strong> que podrías hacerle ("¿Y si todo esto es un sueño?").</li>
          <li>Al final, elige UNA que, aunque parezca absurda, podría abrir algo interesante.</li>
        </ol>
        <p style="font-size: 0.9rem;"><em>Transferencia:</em> Las preguntas "estúpidas" a menudo son las que generan quiebres reales.</p>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-blue); margin-top: 0;">EJERCICIO 4: Metáfora Forzada</h4>
        <p><strong>Propósito:</strong> Activar el pensamiento analógico. <strong>Duración:</strong> 3-5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Piensa en un caso. Elige una categoría al azar (ej. "un animal", "un clima").</li>
          <li>Pregúntate: "Si este caso fuera una tormenta, ¿cómo sería?"</li>
          <li>Escribe 5 características de esa metáfora aplicadas al caso.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-gold); margin-top: 0;">EJERCICIO 5: El Coach de Otro Estilo</h4>
        <p><strong>Propósito:</strong> Romper la identificación con un solo estilo de coaching. <strong>Duración:</strong> 5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Piensa en un caso. Imagina que eres un coach radicalmente diferente (ej. si eres ontológico, sé conductista).</li>
          <li>Durante 3 minutos, <strong>intervén como ese coach</strong>. Escribe 3 preguntas que haría.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-blue); margin-top: 0;">EJERCICIO 6: La Restricción Creativa</h4>
        <p><strong>Propósito:</strong> La restricción fuerza la creatividad. <strong>Duración:</strong> 3-5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Piensa en un caso e impón una restricción absurda ("Solo puedo hacer preguntas de 3 palabras").</li>
          <li>Durante 3 minutos, diseña intervenciones bajo esa restricción.</li>
        </ol>
      </div>
    `
  },
  {
    id: "m11_l3",
    title: "11.3 Ejercicios Cortos y Efectivos (7-12)",
    content: `
      <h3>12 Ejercicios para Desbloquear la Creatividad (Parte 2)</h3>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-gold); margin-top: 0;">EJERCICIO 7: El Objeto al Azar</h4>
        <p><strong>Propósito:</strong> Activar asociaciones inesperadas. <strong>Duración:</strong> 2-3 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Ten a mano una bolsa con 20 objetos pequeños. Saca uno sin mirar.</li>
          <li>Piensa en un caso y pregúntate: "¿Qué me dice este objeto sobre este caso?"</li>
          <li>Escribe 3 ideas o preguntas que surjan.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-blue); margin-top: 0;">EJERCICIO 8: El Diario de 3 Líneas</h4>
        <p><strong>Propósito:</strong> Capturar insights creativos sin sobrecarga. <strong>Duración:</strong> 2 minutos post-sesión.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Línea 1: "Lo más inesperado de hoy fue..."</li>
          <li>Línea 2: "Una pregunta que no hice pero podría haber sido poderosa es..."</li>
          <li>Línea 3: "Mañana probaré..."</li>
        </ol>
        <p style="font-size: 0.9rem;"><em>Transferencia:</em> Revisa el diario semanalmente para identificar patrones.</p>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-gold); margin-top: 0;">EJERCICIO 9: El Coach de Otro Campo</h4>
        <p><strong>Propósito:</strong> Importar creatividad de otros dominios. <strong>Duración:</strong> 5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Piensa en un caso. Elige un campo diferente (ej. "un chef" o "arquitecto").</li>
          <li>Pregúntate: "¿Cómo abordaría este caso un chef?"</li>
          <li>Escribe 3 intervenciones que ese profesional haría desde su lógica.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-blue); margin-top: 0;">EJERCICIO 10: La Pregunta que No Te Permites</h4>
        <p><strong>Propósito:</strong> Identificar y cruzar límites internos. <strong>Duración:</strong> 3-5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Pregúntate: "¿Qué pregunta NO me permito hacerle a este coachee y por qué?"</li>
          <li>Durante 3 minutos, escribe esa pregunta y 3 variaciones de ella. Decide si la usarás, pero reconoce que existe.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-gold); margin-top: 0;">EJERCICIO 11: El Dibujo Ciego</h4>
        <p><strong>Propósito:</strong> Desactivar el juicio y activar el hemisferio derecho. <strong>Duración:</strong> 3-5 minutos.</p>
        <ol style="color: var(--text-muted); font-size: 0.95rem;">
          <li>Con los ojos cerrados, dibuja "cómo se siente" un caso específico.</li>
          <li>No intentes que sea "bonito". Solo deja que la mano se mueva.</li>
          <li>Abre los ojos y escribe 3 palabras que surjan de ese dibujo.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1.5rem;">
        <h4 style="color: var(--crear-blue); margin-top: 0;">EJERCICIO 12: El Ritual de Pre-Sesión</h4>
        <p><strong>Propósito:</strong> Crear un estado creativo antes de cada sesión. <strong>Duración:</strong> 2 minutos.</p>
        <ul style="color: var(--text-muted); font-size: 0.95rem;">
          <li><strong>30s:</strong> Respiración consciente (4-4-6).</li>
          <li><strong>30s:</strong> Declara: "Hoy soy creatividad. Hoy veo posibilidades."</li>
          <li><strong>30s:</strong> Visualiza al coachee desde su grandeza.</li>
          <li><strong>30s:</strong> Elige UNA intención creativa (ej. "Hoy haré una pregunta nueva").</li>
        </ul>
      </div>
    `
  },
  {
    id: "m11_l4",
    title: "11.4 Plan de 21 Días y Mantenimiento",
    content: `
      <h3>Plan de 21 Días para Desbloquear la Creatividad</h3>
      
      <div class="crear-table-wrapper" style="margin-top: 2rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Semana 1: Activación</th>
              <th>Semana 2: Flexibilización</th>
              <th>Semana 3: Integración</th>
            </tr>
          </thead>
          <tbody style="font-size: 0.9rem;">
            <tr>
              <td>D1: 30 Usos de un Objeto (5 min)</td>
              <td>D8: Abogado del Diablo Inverso (5 min)</td>
              <td>D15: Ritual de Pre-Sesión (2 min)</td>
            </tr>
            <tr>
              <td>D2: La Pregunta Estúpida (3 min)</td>
              <td>D9: Coach de Otro Campo (5 min)</td>
              <td>D16: Coach Otro Estilo en sesión (5 min)</td>
            </tr>
            <tr>
              <td>D3: Metáfora Forzada (5 min)</td>
              <td>D10: Pregunta que No Te Permites (5 min)</td>
              <td>D17: Restricción Creativa en sesión (5 min)</td>
            </tr>
            <tr>
              <td>D4: Coach de Otro Estilo (5 min)</td>
              <td>D11: Dibujo Ciego (5 min)</td>
              <td>D18: Objeto al Azar con coachee (5 min)</td>
            </tr>
            <tr>
              <td>D5: Restricción Creativa (5 min)</td>
              <td>D12: 30 Usos de una Pregunta (5 min)</td>
              <td>D19: Pregunta Estúpida en sesión (3 min)</td>
            </tr>
            <tr>
              <td>D6: Objeto al Azar (3 min)</td>
              <td>D13: Metáfora Forzada con coachee (5 min)</td>
              <td>D20: Diario de 3 Líneas revisión (5 min)</td>
            </tr>
            <tr>
              <td>D7: Diario de 3 Líneas (2 min)</td>
              <td>D14: Diario de 3 Líneas (2 min)</td>
              <td>D21: Declaración de Creatividad (2 min)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid-2-cols" style="margin-top: 3rem;">
        <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
          <h4 style="color: var(--crear-gold); margin-top: 0;">Señales de Desbloqueo</h4>
          <ul class="icon-list blue-bullets" style="font-size: 0.9rem;">
            <li>Haces preguntas que no habrías hecho antes.</li>
            <li>Usas metáforas con más naturalidad.</li>
            <li>Te sientes menos "atrapado" en un solo estilo.</li>
            <li>Tus coachees reportan insights inesperados.</li>
            <li>Las sesiones se sienten fluidas y menos guionadas.</li>
            <li>Te permites "no saber" y confiar en tu intuición.</li>
          </ul>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
          <h4 style="color: var(--crear-blue); margin-top: 0;">Consejos de Mantenimiento</h4>
          <ul class="icon-list blue-bullets" style="font-size: 0.9rem;">
            <li><strong>Practica:</strong> La creatividad es un músculo.</li>
            <li><strong>No juzgues:</strong> Florece en ausencia de juicio.</li>
            <li><strong>Juega:</strong> La creatividad es juego serio.</li>
            <li><strong>Descansa:</strong> Necesita espacio vacío para emerger.</li>
            <li><strong>Comparte:</strong> Se expande al compartirse.</li>
            <li><strong>Celebra:</strong> Cada pequeña innovación es un logro.</li>
          </ul>
        </div>
      </div>

      <div class="alert-warning" style="margin-top: 3rem; text-align: center; padding: 2rem;">
        <h2 style="color: var(--crear-gold); margin-top: 0; font-size: 1.5rem;">Llamado a la Acción 🚀</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 0;">
          Elige 3 ejercicios y practícalos durante 7 días. Un coach creativo no es un coach que "sabe más". Es un coach que <strong>ve más</strong>.
        </p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo2.js`

```javascript
export const modulo2 = [
  {
    id: "m2_l1",
    title: "2.1 Estructura Estándar de una Sesión de Coaching",
    content: `
      <div class="alert-info">
        <p><strong>Fase 1: Apertura y Evaluación del Estado Actual (5–10 min)</strong></p>
        <p>Objetivo: Instalar el espacio de presencia y evaluar las condiciones iniciales del coachee.</p>
      </div>
      <ul class="icon-list blue-bullets">
        <li><strong>Encuadre:</strong> Apertura de la sesión y clarificación del tiempo disponible.</li>
        <li><strong>Check-in emocional:</strong> Formular preguntas de exploración ("¿Cómo llegas hoy?", "¿Qué estado emocional traes?").</li>
        <li><strong>Escucha atenta sin interrupción:</strong> Identificación de patrones narrativos (quejas, justificaciones, rol de víctima).</li>
        <li><strong>Registro del coach:</strong> Detección de explicaciones limitantes recurrentes.</li>
      </ul>
      
      <div class="alert-warning" style="margin-top: 2rem;">
        <p><strong>Fase 2: Intervención y Expansión de la Visión (20 min)</strong></p>
        <p>Objetivo: Desafiar la narrativa limitante y ampliar las alternativas de acción.</p>
      </div>
      <ul class="icon-list">
        <li><span class="highlight-text">Cuestionamiento directivo:</span> Redireccionar explicaciones externas hacia la responsabilidad personal ("¿Qué parte de esto es sobre ti?", "¿Qué historia te cuentas que te mantiene en este estado?").</li>
        <li><span class="highlight-text">Reencuadre de la retroalimentación:</span> Posicionar la retroalimentación como un vector de visibilidad y no como sanción.</li>
        <li><span class="highlight-text">Desarticulación de excusas:</span> Evidenciar justificativos que bloquean el compromiso pleno.</li>
        <li><span class="highlight-text">Exploración de posibilidades:</span> Indagar escenarios de creación ("Si no hubiera restricciones, ¿qué resultaría posible aquí?").</li>
      </ul>
      
      <h3 style="margin-top: 2rem;">Fase 3: Ejercicio de Futuros Imposibles</h3>
      <p>Objetivo: Conectar con aspiraciones profundas y diseñar desde el escenario proyectado.</p>
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem;">
        <p><strong>Apertura imaginativa:</strong> Solicitar la formulación de aspiraciones sin restricciones (técnica de "carta de peticiones al universo").</p>
        <p><strong>Explicitación de metas:</strong> Declarar por escrito o de forma verbal objetivos profesionales, personales y de vida.</p>
        <p><strong>Indagación ontológica:</strong> Identificar la versión del ser necesaria para sostener dicha posibilidad ("¿Quién tendrías que ser para que esto ocurra?").</p>
      </div>
    `
  },
  {
    id: "m2_l2",
    title: "2.1 Fases Finales y Cierre Operacional",
    content: `
      <h3>Fase 4: Definición de Congruencia y Alineación (10 min)</h3>
      <p>Objetivo: Establecer la coherencia interna como requisito ontológico de liderazgo.</p>
      <ul class="icon-list blue-bullets">
        <li><strong>Clarificación conceptual:</strong> Definir la congruencia como la alineación rigurosa entre el pensamiento, la palabra y la acción.</li>
        <li><strong>Análisis de incoherencias:</strong> Identificar brechas operativas entre las declaraciones formuladas y las conductas ejecutadas.</li>
        <li><strong>Diseño de acciones:</strong> Formular compromisos tangibles para ejecutar en el corto plazo y cerrar la brecha.</li>
      </ul>
      
      <div class="alert-info" style="margin-top: 2rem;">
        <p><strong>Fase 5: Enfoque en Resultados vs. Historias (10 min)</strong></p>
        <p>Objetivo: Trasladar el eje de evaluación del nivel de esfuerzo percibido a la consecución de resultados tangibles.</p>
      </div>
      <p><strong>Desmontaje de narrativas:</strong> Cuestionar el uso del esfuerzo narrado como reemplazo del cumplimiento de metas. <br/>
      <strong>Alineación operacional:</strong> Establecer el compromiso de basar la evaluación exclusivamente en resultados medibles. <br/>
      <strong>Fijación de indicadores:</strong> Definir entregables concretos para los 7 días posteriores.</p>
      
      <h3 style="margin-top: 2rem; color: var(--crear-gold);">Fase 6: Cierre y Formalización de Compromisos (5 min)</h3>
      <p>Objetivo: Estructurar la rendición de cuentas e instalar el plan de seguimiento.</p>
      <div class="grid-2-cols" style="margin-top: 1rem;">
        <div class="glass-panel" style="padding: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">1. Sintetizar</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Sintetizar acuerdos y entregables declarados en la sesión.</p>
        </div>
        <div class="glass-panel" style="padding: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">2. Control</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Establecer puntos de control (checkpoints) diarios o periódicos.</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; grid-column: span 2;">
          <h4 style="margin-top: 0; color: var(--text-main);">3. Validación</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Validación de compromiso radical y previsión de posibles obstáculos operacionales.</p>
        </div>
      </div>
    `
  },
  {
    id: "m2_l3",
    title: "2.2 Repertorio de Técnicas Conversacionales",
    content: `
      <h3>Técnicas Clave del Coach de Alto Rendimiento</h3>
      <p>El coach de alto rendimiento integra 11 técnicas conversacionales clave durante el proceso para romper resistencias y generar saltos de posibilidad.</p>
      
      <div class="grid-2-cols" style="margin-top: 2rem;">
        <div style="border-left: 2px solid var(--crear-blue); padding-left: 1rem; margin-bottom: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">1. Empatía estratégica</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">Validación del estado afectivo sin convalidar la narrativa limitante.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-gold); padding-left: 1rem; margin-bottom: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">2. Silencio activo</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">Otorgamiento de pausas reflexivas para el procesamiento consciente.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-blue); padding-left: 1rem; margin-bottom: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">3. Concreción y reenfocado</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">Redireccionamiento del discurso disperso hacia el nodo central de trabajo.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-gold); padding-left: 1rem; margin-bottom: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">4. Apertura del conflicto</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">El "elefante en la sala". Señalamiento directo de elementos eludidos por el sistema.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-blue); padding-left: 1rem; margin-bottom: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">5. Parafraseo de verificación</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">Devolución sintética para cotejar la comprensión mutua.</p>
        </div>
        <div style="border-left: 2px solid var(--crear-gold); padding-left: 1rem; margin-bottom: 1rem;">
          <h4 style="margin-top: 0; color: var(--text-main);">6. Preguntas poderosas</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">Indagación basada en la curiosidad que estimula el cambio de observador.</p>
        </div>
      </div>
    `
  },
  {
    id: "m2_l4",
    title: "2.2 Amplificadores de Posibilidad",
    content: `
      <h3>Técnicas Conversacionales de Cierre</h3>
      
      <ul class="icon-list blue-bullets">
        <li><strong>7. Lenguaje apreciativo:</strong> Enfoque estratégico en capacidades y fortalezas demostradas previamente.</li>
        <li><strong>8. Retroalimentación expansiva:</strong> Aportación de observaciones orientadas a generar nuevas oportunidades de acción, no a castigar el error.</li>
        <li><strong>9. Generación de alternativas:</strong> Facilitación de múltiples opciones ante un mismo evento o escenario bloqueado.</li>
        <li><strong>10. Instalación de responsabilidad:</strong> Consolidación del empoderamiento del coachee sobre sus decisiones, asumiendo agencia total.</li>
        <li><strong>11. Diseño de planes ejecutivos:</strong> Traducción de comprensiones filosóficas u ontológicas en acciones secuenciadas e hiperespecíficas para ejecutar en la semana.</li>
      </ul>
      
      <div class="alert-info" style="margin-top: 2rem;">
        <p><strong>Nota del Experto:</strong> Las técnicas 10 y 11 son el núcleo de la transformación profunda. Sin responsabilidad total y sin un plan ejecutivo, el "darse cuenta" se convierte simplemente en entretenimiento intelectual, sin impacto en la realidad tangible.</p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo3.js`

```javascript
export const modulo3 = [
  {
    id: "m3_l1",
    title: "2.3 Metodología para el Diseño de Groundings",
    content: `
      <div class="alert-info">
        <p><strong>2.3.1 Pasos para Diseñar un Grounding</strong></p>
        <p style="font-size: 0.95rem;">Un Grounding es una práctica breve de atención corporal, respiración y presencia utilizada para favorecer el enfoque, disminuir distracciones y preparar al participante para una conversación o actividad. Puede apoyar la claridad mental y la gestión de estados, pero no sustituye el análisis, la evidencia objetiva ni un proceso terapéutico.</p>
        <p>El diseño de una intervención de anclaje requiere ejecutar seis pasos metodológicos estrictos para garantizar su eficacia en la gestión de estados.</p>
      </div>
      
      <div class="crear-table-wrapper" style="margin-top: 2rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Paso</th>
              <th>Acción Metodológica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-gold">Paso 1</strong></td>
              <td><strong>Identificación del objetivo:</strong> Precisar el estado emocional a regular (ansiedad, dispersión, ira) y la conducta requerida posterior.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">Paso 2</strong></td>
              <td><strong>Selección del canal de anclaje:</strong> Determinar si el enfoque será Corporal (respiración, postura), Sensorial (presión, sonidos), Cognitivo (conteo, descripción) o Verbal (frases clave).</td>
            </tr>
            <tr>
              <td><strong class="text-gold">Paso 3</strong></td>
              <td><strong>Diseño de la secuencia instructiva:</strong> Articular de 3 a 6 indicaciones breves en el orden: Postura inicial → Acción física/sensorial → Foco atencional → Transición de cierre.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">Paso 4</strong></td>
              <td><strong>Redacción del guion:</strong> Emplear imperativos suaves ("siente", "observa"), eliminando explicaciones teóricas e indicando tiempos específicos ("por 15 segundos").</td>
            </tr>
            <tr>
              <td><strong class="text-gold">Paso 5</strong></td>
              <td><strong>Calibración y pilotaje:</strong> Autopráctica y validación con un grupo reducido previo a su implementación general.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">Paso 6</strong></td>
              <td><strong>Documentación técnica:</strong> Registro formal del grounding para estandarización del equipo de coaches.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "m3_l2",
    title: "2.3 Protocolos de Groundings Listos para Aplicación",
    content: `
      <h3>Protocolo 1: "Pies en el suelo"</h3>
      <p><strong>Objetivo:</strong> Reducción de la agitación ansiosa y recuperación de la presencia corporal.</p>
      <p><strong>Canal:</strong> Corporal + Sensorial. <strong>Duración:</strong> 1 a 2 minutos.</p>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-gold);">
        <ol style="margin: 0; padding-left: 1.5rem; color: var(--text-main);">
          <li style="margin-bottom: 0.5rem;">Apoyar ambos pies de forma firme sobre el suelo, alineados con el ancho de las caderas.</li>
          <li style="margin-bottom: 0.5rem;">Mover los dedos de los pies registrando la presión percibida contra la superficie.</li>
          <li style="margin-bottom: 0.5rem;">Efectuar 3 presiones suaves del pie contra el piso de manera alterna, atendiendo la respuesta somática.</li>
          <li style="margin-bottom: 0.5rem;">Ejecutar 3 respiraciones profundas manteniendo el foco de atención en el apoyo plantar.</li>
          <li>Registrar el estado general de apoyo del cuerpo.</li>
        </ol>
      </div>
      
      <h3 style="margin-top: 2.5rem;">Protocolo 2: "Respiración 5–5"</h3>
      <p><strong>Objetivo:</strong> Desactivación simpática y restablecimiento de la claridad cognitiva (Bloqueos de pensamiento).</p>
      <p><strong>Canal:</strong> Corporal (Respiratorio). <strong>Duración:</strong> 1 minuto.</p>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-blue);">
        <ol style="margin: 0; padding-left: 1.5rem; color: var(--text-main);">
          <li style="margin-bottom: 0.5rem;">Cerrar los ojos o descender la mirada fijando un punto neutro.</li>
          <li style="margin-bottom: 0.5rem;">Inhalar vía nasal en una cuenta mental constante de 5 segundos.</li>
          <li style="margin-bottom: 0.5rem;">Exhalar vía oral en una cuenta mental de 5 segundos.</li>
          <li style="margin-bottom: 0.5rem;">Completar 5 ciclos respiratorios.</li>
          <li>Reabrir los ojos y observar la tasa de activación general.</li>
        </ol>
      </div>
    `
  },
  {
    id: "m3_l3",
    title: "2.3 Protocolos Somáticos Avanzados",
    content: `
      <h3>Protocolo 3: "Manos que se encuentran"</h3>
      <p><strong>Objetivo:</strong> Reducción de la dispersión atencional e intromisión muscular activa (Sobreecitación emocional).</p>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-gold);">
        <ul class="icon-list blue-bullets">
          <li>Unir las palmas de las manos a la altura del tórax.</li>
          <li>Ejercer presión isométrica moderada durante 10 segundos continuos.</li>
          <li>Liberar la fuerza aplicada y enfocar la atención en el choque térmico o propioceptivo residual.</li>
          <li>Repetir la secuencia 2 veces adicionales.</li>
          <li>Reposar las manos en el regazo y registrar la sensación somática resultante.</li>
        </ul>
      </div>

      <h3 style="margin-top: 2.5rem;">Protocolo 5: "Espalda en la silla"</h3>
      <p><strong>Objetivo:</strong> Reinstalación del soporte corporal y contención física.</p>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-blue);">
        <ul class="icon-list blue-bullets">
          <li>Ajustar la postura hasta que la zona dorsal descanse plenamente sobre el respaldo.</li>
          <li>Registrar conscientemente la superficie de contacto entre el cuerpo y la estructura.</li>
          <li>Ejercer una presión suave del torso contra el respaldo durante 5 segundos.</li>
          <li>Liberar la tensión y percibir la sensación de firmeza recibida.</li>
          <li>Mover la atención a la respiración durante 3 ciclos manteniéndose apoyado.</li>
        </ul>
      </div>
    `
  },
  {
    id: "m3_l4",
    title: "2.3 Integración Sensorial (5-4-3-2-1)",
    content: `
      <h3>Protocolo 4: "5 Cosas que veo"</h3>
      <p><strong>Objetivo:</strong> Desactivación de ciclos de rumiación mental y reorientación de la atención al plano perceptivo exterior (Desbordamiento cognitivo).</p>
      <p><strong>Canal:</strong> Cognitivo + Sensorial. <strong>Duración:</strong> 1 a 2 minutos.</p>
      
      <div class="grid-2-cols" style="margin-top: 2rem;">
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁️ 5</div>
          <p style="font-size: 0.9rem; color: var(--text-main);">Identificar y nombrar silenciosamente <strong>5 objetos visibles</strong> en el entorno inmediato.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🖐️ 4</div>
          <p style="font-size: 0.9rem; color: var(--text-main);">Identificar <strong>4 elementos con contacto táctil</strong> inmediato (ropa, asiento, temperatura).</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">👂 3</div>
          <p style="font-size: 0.9rem; color: var(--text-main);">Identificar y procesar <strong>3 estímulos auditivos</strong> presentes en la habitación o exterior.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">👃 2</div>
          <p style="font-size: 0.9rem; color: var(--text-main);">Identificar <strong>2 estímulos olfativos</strong> o evocaciones de aromas cercanos.</p>
        </div>
        <div class="glass-panel" style="padding: 1.5rem; text-align: center; grid-column: span 2;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">👅 1</div>
          <p style="font-size: 0.9rem; color: var(--text-main);">Identificar <strong>1 cualidad gustativa</strong> presente en la boca en este instante.</p>
        </div>
      </div>
      
      <div class="alert-warning" style="margin-top: 2rem;">
        <p><strong>Importante:</strong> Puedes practicar estas técnicas en cualquier momento a través del menú lateral en la sección <strong>"Herramientas > Groundings"</strong> de la plataforma, la cual contiene un catálogo interactivo.</p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo4.js`

```javascript
export const modulo4 = [
  {
    id: "m4_l1",
    title: "2.4 Arquitectura de Programas de Entrenamiento",
    content: `
      <div class="alert-info">
        <p><strong>2.4.1 Estructura Programática</strong></p>
        <p>El impacto transformacional de un proceso no reside únicamente en la potencia de la sesión, sino en el ecosistema o programa de acompañamiento que rodea al individuo.</p>
      </div>
      
      <p>Un programa modular formal se articula bajo la siguiente configuración estándar de alto rendimiento:</p>
      
      <ul class="icon-list blue-bullets" style="margin-top: 1.5rem;">
        <li><strong>Duración total:</strong> 4 a 6 semanas operativas. Un periodo ideal para consolidar redes neuronales de nuevos hábitos.</li>
        <li><strong>Frecuencia de sesiones:</strong> 1 encuentro grupal semanal (inducción e inteligencia colectiva) + 1 sesión individual de acompañamiento quincenal (calibración fina).</li>
        <li><strong>Puntos de control (checkpoints):</strong> Reportes periódicos de desempeño e integración ejecutiva (ej. cadencias diarias o interdiarias). El seguimiento mantiene la tensión creativa.</li>
        <li><strong>Asignaciones inter-sesión:</strong> Práctica diaria de groundings, ejercicios de visualización de futuros y auditoría de congruencia. Sin acción fuera del aula, no hay transformación.</li>
      </ul>
      
      <h3 style="margin-top: 2.5rem;">2.4.2 Indicadores de Éxito y Evaluación</h3>
      <p>La efectividad del proceso se mide mediante cuatro indicadores estandarizados y no subjetivos:</p>
      
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">1. Compromiso Operativo</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Porcentaje de asistencia a las sesiones y nivel de cumplimiento exacto de checkpoints diarios.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">2. Tasa de Congruencia</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Grado de concordancia verificado empíricamente entre los compromisos declarados y las acciones concluidas.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">3. Logro de Metas</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Porcentaje objetivo de cumplimiento de entregables asociados a los futuros proyectados e "imposibles".</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">4. Transformación Ontológica</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Cambios estructurales observables en la autorregulación emocional ante crisis y la efectividad neta del liderazgo.</p>
        </div>
      </div>
    `
  },
  {
    id: "m4_l2",
    title: "2.5 Errores Frecuentes y Protocolos de Mitigación",
    content: `
      <h3>2.5.1 Desvíos Comunes del Coach</h3>
      <p>El liderazgo transformacional requiere un estado de alerta y limpieza ontológica constante. Estos son los 4 "puntos ciegos" o desvíos más recurrentes en el profesional, y cómo neutralizarlos.</p>
      
      <div class="crear-table-wrapper" style="margin-top: 1.5rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-gold">Métricas de Proceso</strong></td>
              <td>% de asistencia, tareas completadas, puntualidad.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">Métricas de Resultado</strong></td>
              <td>% de coachees que cumplen compromisos (Meta operativa: 70%+), % de quiebres reportados.</td>
            </tr>
            <tr>
              <td><strong class="text-gold">Métricas de Impacto</strong></td>
              <td>Crecimiento en ventas, reducción de rotación, evaluaciones 360.</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; margin-top: 0.5rem;">
          * Nota: Los porcentajes indicados son metas operativas iniciales de este programa, sujetas a revisión según contexto, nivel de madurez organizacional y población.
        </p>
      </div>
    `
  },
  {
    id: "m4_l3",
    title: "2.5.2 Desvíos del Coachee y Cierre del Manual",
    content: `
      <h3>Desvíos Comunes del Participante o Coachee</h3>
      <p>Así como el facilitador enfrenta retos, el cliente exhibirá resistencias naturales al proceso de salto de posibilidad.</p>
      
      <ul class="icon-list blue-bullets">
        <li><strong>Fuga hacia el pasado:</strong> Intentar resolver traumas históricos en lugar de diseñar futuros de posibilidad. El coach debe redirigir la energía creadora hacia el futuro.</li>
        <li><strong>Intelectualización del proceso:</strong> El participante entiende todos los conceptos "en teoría" pero no ejecuta en la cancha. Exigir acciones de cierre de brecha en 24 horas.</li>
        <li><strong>Negociación de los estándares:</strong> Intentar reducir el rigor de los indicadores ("no pude hoy, lo hago mañana"). Mantener el estándar sin caer en la tiranía, usando responsabilidad radical.</li>
      </ul>
      
      <div class="alert-info" style="margin-top: 3rem; text-align: center; padding: 2rem;">
        <h4 style="margin-top: 0; color: var(--crear-gold);">Misión Cumplida</h4>
        <p>
          Has completado la asimilación del Manual Académico. A partir del siguiente módulo pasaremos a la práctica.
          Posees ahora la arquitectura conceptual y las herramientas conversacionales para acompañar sistemas humanos con mayor claridad y rigor.<br/><br/>
          Sin embargo, recuerda que ninguna herramienta garantiza resultados por sí sola. La implementación y los resultados dependen del contexto y el esfuerzo del cliente.
        </p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo5.js`

```javascript
export const modulo5 = [
  {
    id: "m5_l1",
    title: "M5: Fundamentos Filosóficos del Ser",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">Bienvenido a la Certificación Avanzada</h3>
        <p>Este programa se basa en fuentes filosóficas verificables y su aplicación contemporánea al liderazgo. Durante estas 12 semanas, nos sumergiremos en las raíces del existencialismo y la fenomenología.</p>
      </div>

      <div class="grid-2-cols" style="margin-top: 1rem;">
        <div class="glass-panel" style="padding: 1rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main">Martin Heidegger (1927)</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.5rem;">Conceptos: Dasein, ser-en-el-mundo, autenticidad vs inautenticidad.</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main">Jean-Paul Sartre (1946)</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.5rem;">Conceptos: "La existencia precede a la esencia", libertad radical y responsabilidad.</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main">Søren Kierkegaard (1843)</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.5rem;">Conceptos: Salto de fe, angustia existencial, elección auténtica.</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main">Viktor Frankl (1946)</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.5rem;">Conceptos: Búsqueda de sentido, responsabilidad ante la vida.</p>
        </div>
      </div>
    `
  },
  {
    id: "m5_l2",
    title: "Semana 1: Heidegger y el Dasein",
    content: `
      <h3>El Dasein (Ser-ahí) y el "Uno"</h3>
      <p>No estamos "en" el mundo como un objeto en una caja; <strong>habitamos</strong> el mundo. La mayor barrera del Dasein es el "Uno" (Das Man), la tiranía de las expectativas sociales.</p>
      
      <div class="crear-table-wrapper" style="margin-top: 2rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Herramienta Práctica</th>
              <th>Descripción y Propósito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-gold">1. El Espejo del Dasein</strong></td>
              <td>Llevar un diario de 7 días evaluando "Momentos Auténticos" vs "Momentos Inauténticos" (donde actuaste por presión del "Uno"). Identifica los patrones de resistencia.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">2. Preguntas del Dasein</strong></td>
              <td>Antes de cada decisión, pregunta: "¿Hago esto porque YO lo elijo o porque 'todos lo hacen'? Si nadie estuviera viendo, ¿haría lo mismo?".</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="alert-warning" style="margin-top: 2rem;">
        <p><strong>Dinámica Grupal Recomendada: "La Silla del Uno"</strong><br/>
        Usar una silla vacía que represente las expectativas sociales. Hablar desde esa silla y luego cambiar a la silla de tu Dasein auténtico.</p>
      </div>
    `
  },
  {
    id: "m5_l3",
    title: "Semana 2: Sartre y la Libertad Radical",
    content: `
      <h3>La Existencia precede a la Esencia</h3>
      <p>No hay una "naturaleza humana" fija. Estamos "condenados a ser libres". Eso conlleva a una responsabilidad total sobre todo lo que hacemos y dejamos de hacer.</p>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-gold);">
        <h4 style="margin-top: 0; color: var(--text-main);">Herramienta 3: El Contrato de Libertad</h4>
        <ol style="margin-bottom: 0; padding-left: 1.5rem; color: var(--text-main);">
          <li style="margin-bottom: 0.5rem;">Escribe: "Hasta hoy he culpado a [X] por [Y]".</li>
          <li style="margin-bottom: 0.5rem;">Luego escribe: "Pero la verdad es que YO elegí [Y] porque..."</li>
          <li>Firma el contrato asumiendo responsabilidad radical y colócalo a la vista.</li>
        </ol>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-blue);">
        <h4 style="margin-top: 0; color: var(--text-main);">Herramienta 4: La Balanza de la Responsabilidad</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Dibuja una balanza. De un lado coloca las situaciones donde asumes responsabilidad y del otro donde culpas. Elige UNA situación del lado de "culpa" y reescríbela hoy desde el empoderamiento.</p>
      </div>
    `
  },
  {
    id: "m5_l4",
    title: "Semana 3: Kierkegaard y el Salto de Fe",
    content: `
      <h3>La Angustia Existencial</h3>
      <p>La angustia no es una patología; es la señal biológica y existencial de tu libertad inminente.</p>
      
      <ul class="icon-list blue-bullets" style="margin-top: 1.5rem;">
        <li><strong>El Mapa de la Angustia (Herramienta 5):</strong> Identifica una situación angustiante y pregúntate: "¿Qué libertad estoy evitando ejercer?". Declara que esa angustia te está diciendo que eres libre de elegir distinto.</li>
        <li><strong>El Salto de Posibilidad Existencial (Herramienta 6):</strong> Define un futuro de posibilidad sin garantías. Da un paso HOY sabiendo que podrías fracasar. Aprende a vivir con la incertidumbre, ese es el "Caballero de la Fe" de Kierkegaard.</li>
      </ul>

      <div class="alert-info" style="margin-top: 2rem;">
        <p><strong>Cierre del Módulo 5:</strong> Tu tarea esta semana es dar un salto de fe físico o relacional. Incomódate a propósito y reporta en tu diario de qué manera esa angustia se transformó en liberación.</p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo6.js`

```javascript
export const modulo6 = [
  {
    id: "m6_l1",
    title: "M6: Ontología del Lenguaje y Realidad",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">El Lenguaje no describe, ¡CREA!</h3>
        <p>Entramos en la obra de Maturana, Flores y Echeverría. El lenguaje interviene la realidad, no somos observadores pasivos.</p>
      </div>

      <h3>Semana 4: El Lenguaje como Creador</h3>
      <p>El coaching ontológico postula que somos cuerpo, emoción y lenguaje. Cada vez que hablamos, estamos generando una realidad en el mundo de los negocios y en nuestra neurología.</p>
      
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">H7: Inventario del Lenguaje</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Durante 3 días graba tu propio lenguaje. ¿Cuántas quejas? ¿Cuántos juicios vs declaraciones? Toma consciencia de la matriz que estás creando.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">H8: La Declaración de Ser</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Escribe "Declaro que soy [X]" (No "me gustaría ser"). Léelo por 21 días y actúa COMO SI ya lo fueras. La declaración precede al comportamiento.</p>
        </div>
      </div>
    `
  },
  {
    id: "m6_l2",
    title: "Semana 5: Frankl y la Búsqueda de Sentido",
    content: `
      <h3>Logoterapia en el Liderazgo</h3>
      <p>El ser humano busca sentido, no placer. La falta de sentido genera vacío existencial, lo que en el trabajo se traduce en apatía y rotación.</p>
      
      <div class="crear-table-wrapper" style="margin-top: 2rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Herramienta Práctica</th>
              <th>Descripción y Propósito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-gold">H9. El Testamento de Sentido</strong></td>
              <td>Escribe tu legado: "Quiero que mi legado sea [Z]". Analiza si tus acciones de HOY están alineadas a ese testamento.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">H10. La Pregunta del Sentido</strong></td>
              <td>En crisis, no te preguntes "¿por qué a mí?". Pregúntate: "¿Qué sentido puedo encontrar aquí? ¿Cómo puedo usar esto para servir a otros?".</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="alert-warning" style="margin-top: 2rem;">
        <p><strong>Dinámica Grupal (Círculo del Sentido):</strong><br/>
        Comparte un quiebre. El grupo NO puede dar consejos, solo hacer preguntas de sentido.</p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo7.js`

```javascript
export const modulo7 = [
  {
    id: "m7_l1",
    title: "M7: Liderazgo de Transformación Profunda",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">El Salto Discontinuo</h3>
        <p>En el liderazgo, a menudo se asume que el crecimiento debe ser estrictamente secuencial y acumulativo. Usamos la analogía del "salto" para referirnos a avances que alteran radicalmente la trayectoria actual sin seguir una progresión lineal predecible.</p>
      </div>

      <div class="alert-info">
        <p><strong>Principios de Posibilidad:</strong> El líder de alto rendimiento no predice el futuro, crea posibilidades que antes no existían. Los 3 principios del líder de posibilidad son: 1) El observador crea posibilidades, 2) La transformación es discontinua, 3) El lenguaje crea realidad.</p>
      </div>

      <h3>El Observador Crea la Realidad</h3>
      <p>El líder de alto rendimiento entiende que los resultados no son lineales. Se logran a través de saltos discontinuos alterando al "observador" interno.</p>
      
      <ul class="icon-list blue-bullets" style="margin-top: 1.5rem;">
        <li><strong>H11: El Observador del Líder:</strong> Identifica un problema. Obsérvalo desde 3 perspectivas distintas (como coach externo, como cliente, como tu yo del futuro). Elige la que te otorgue agencia.</li>
        <li><strong>H12: El Salto de Posibilidad del Líder:</strong> ¿Qué creencia tendrías que SOLTAR y qué identidad ADOPTAR para llegar a ese futuro de posibilidad de un solo paso? Actúa desde esa identidad HOY.</li>
      </ul>
    `
  },
  {
    id: "m7_l2",
    title: "Semanas 8 y 9: Herramientas de Quiebre",
    content: `
      <h3>Generar Quiebres en Equipos</h3>
      <p>Un quiebre interrumpe un patrón automático o "ceguera cognitiva" del equipo. El líder es un creador de contexto.</p>
      
      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-gold);">
        <h4 style="margin-top: 0; color: var(--text-main);">H13: La Pregunta de Quiebre</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Cuando un equipo esté atrapado en quejas, pregunta: <em>"¿Qué te está costando más: quejarte o comprometerte?"</em> o <em>"¿Qué verdad estás evitando ver?"</em>.</p>
      </div>

      <div class="glass-panel" style="padding: 1.5rem; margin-top: 1rem; border-left: 3px solid var(--crear-blue);">
        <h4 style="margin-top: 0; color: var(--text-main);">H14: El Contrato de Contexto</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Diseñar acuerdos explícitos. Ej: "A partir de hoy, cuando detectemos una queja, diremos [X]". Modifica la cultura de forma quirúrgica.</p>
      </div>
    `
  },
  {
    id: "m7_l3",
    title: "Semanas 10 y 11: Enrolamiento y Expansión",
    content: `
      <h3>Ser Enrolamiento</h3>
      <p>Enrolar no es persuadir ni convencer; es invitar a otros a habitar futuros de posibilidad desde tu propia presencia y congruencia.</p>
      
      <div class="crear-table-wrapper" style="margin-top: 2rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Herramienta Práctica</th>
              <th>Descripción y Propósito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-gold">H15. Mapa de Enrolamiento</strong></td>
              <td>Dibuja tu futuro de posibilidad en el centro. Alrededor, escribe los nombres de mínimo 7 personas (idealmente 10+) que podrían vivir una vida extraordinaria. Identifica el futuro de posibilidad de ELLOS y conéctalo al tuyo. Importante: El número 7 no es tu meta. Es el reflejo de un estándar alto. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">H16. Declaración de Expansión</strong></td>
              <td>"Me comprometo a impactar al máximo de personas posible, con un estándar mínimo de 7 personas en los próximos Y días para que vivan una vida extraordinaria." Expande a otros para que ellos expandan a más. Nota: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
,
  {
    id: "m7_l4",
    title: "Distinción de Maestro Enrolador",
    content: `
<div class="alert-info" style="margin-bottom: 2rem;">
  <h3 style="margin-top: 0; color: var(--crear-gold);">¿Qué es un Maestro Enrolador?</h3>
  <p>Un <strong>Maestro Enrolador</strong> no es alguien que "hace enrolamiento". Es alguien que <strong>ES enrolamiento</strong>. Su presencia, su palabra y su acción generan un campo que invita a otros a expandirse hacia sus futuros de posibilidad.</p>
</div>

<h3>Distinciones Clave</h3>

<h4 class="text-blue">1. Hacer Enrolamiento vs. Ser Enrolamiento</h4>
<div class="crear-table-wrapper">
  <table class="crear-table">
    <thead>
      <tr><th>Hacer Enrolamiento</th><th>Ser Enrolamiento</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Técnica</strong> para convencer a otros</td><td><strong>Presencia</strong> que invita a expandirse</td></tr>
      <tr><td>Enfocado en el <strong>resultado</strong> ("que se sume")</td><td>Enfocado en la <strong>expansión del otro</strong> ("que viva su futuro")</td></tr>
      <tr><td>Desde la <strong>carencia</strong> ("necesito que te sumes")</td><td>Desde la <strong>plenitud</strong> ("te invito a crear algo juntos")</td></tr>
      <tr><td>Genera <strong>resistencia o cumplimiento</strong></td><td>Genera <strong>compromiso auténtico</strong></td></tr>
      <tr><td>Se <strong>nota</strong> que estás enrolando</td><td>Se <strong>siente</strong> que estás expandiendo</td></tr>
      <tr><td><strong>Persuades</strong> con argumentos</td><td><strong>Inspiras</strong> con presencia</td></tr>
      <tr><td>El otro se suma por <strong>lógica</strong></td><td>El otro se suma por <strong>resonancia</strong></td></tr>
    </tbody>
  </table>
</div>

<h4 class="text-gold" style="margin-top: 2rem;">2. Enrolador Novato vs. Experto vs. Maestro</h4>
<div class="crear-table-wrapper">
  <table class="crear-table">
    <thead>
      <tr><th>Dimensión</th><th>Novato</th><th>Experto</th><th>Maestro</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Enfoque</strong></td><td>"¿Cómo lo enrolo?"</td><td>"¿Cómo lo expando?"</td><td>"¿Cómo creo un campo donde él se expande solo?"</td></tr>
      <tr><td><strong>Herramienta</strong></td><td>Técnicas, scripts, argumentos</td><td>Preguntas poderosas, escucha</td><td>Presencia, ser, campo energético</td></tr>
      <tr><td><strong>Resultado</strong></td><td>El otro se suma (o no)</td><td>El otro se expande</td><td>El otro se transforma</td></tr>
      <tr><td><strong>Esfuerzo</strong></td><td>Alto (tienes que "trabajar")</td><td>Medio (fluye más)</td><td>Nulo (es natural, es quien eres)</td></tr>
      <tr><td><strong>Resistencia</strong></td><td>Frecuente</td><td>Menor</td><td>Ninguna</td></tr>
      <tr><td><strong>Legado</strong></td><td>Personas enroladas</td><td>Personas expandidas</td><td>Personas que son enrolamiento</td></tr>
    </tbody>
  </table>
</div>

<h4 class="text-blue" style="margin-top: 2rem;">3. Los 7 Niveles del Enrolador</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--color-error);">
    <h5 style="margin-top: 0;">Nivel 1: El Vendedor</h5><p><strong>Enfoque:</strong> "Tienes que sumarte."</p><p><strong>Herramienta:</strong> Argumentos.</p><p><strong>Limitación:</strong> Genera resistencia.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid #ff9100;">
    <h5 style="margin-top: 0;">Nivel 2: El Persuasor</h5><p><strong>Enfoque:</strong> "Te conviene sumarte."</p><p><strong>Herramienta:</strong> Beneficios emocionales.</p><p><strong>Limitación:</strong> Emoción temporal.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid #ffea00;">
    <h5 style="margin-top: 0;">Nivel 3: El Invitador</h5><p><strong>Enfoque:</strong> "Te invito a sumarte."</p><p><strong>Herramienta:</strong> Invitación auténtica.</p><p><strong>Limitación:</strong> Dualidad yo/tú.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid #00e676;">
    <h5 style="margin-top: 0;">Nivel 4: El Expansor</h5><p><strong>Enfoque:</strong> "¿Cuál es tu futuro de posibilidad?"</p><p><strong>Herramienta:</strong> Preguntas poderosas.</p><p><strong>Limitación:</strong> Aún hay "yo" que expande.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid #2979ff;">
    <h5 style="margin-top: 0;">Nivel 5: Creador de Contexto</h5><p><strong>Enfoque:</strong> "Creo un contexto posible."</p><p><strong>Herramienta:</strong> Diseño de espacio.</p><p><strong>Limitación:</strong> "Yo" crea, "Tú" expandes.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid #d500f9;">
    <h5 style="margin-top: 0;">Nivel 6: Ser Enrolamiento</h5><p><strong>Enfoque:</strong> "Soy enrolamiento."</p><p><strong>Herramienta:</strong> Presencia congruente.</p><p><strong>Limitación:</strong> Distinción sutil "yo/tú".</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h5 style="margin-top: 0; color: var(--crear-gold);">Nivel 7: Maestro Enrolador</h5><p><strong>Enfoque:</strong> El foco pasa de 'yo enrolo' a 'nos expandimos mutuamente'.</p><p><strong>Herramienta:</strong> La congruencia entre lo que se dice y cómo se vive.</p><p><strong>Impacto:</strong> Contribuye a que otros desarrollen su propio liderazgo.</p>
  </div>
</div>

<h3 style="margin-top: 3rem;">Las 12 Distinciones del Maestro Enrolador</h3>
<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h4 style="margin: 0 0 0.5rem 0;">1: No Enrolo, Soy Enrolamiento</h4>
    <p><strong>Novato:</strong> "¿Cómo lo enrolo?" | <strong>Maestro:</strong> "¿Cómo soy enrolamiento?"</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Pregúntate: ¿Desde dónde estoy hablando? ¿Carencia o plenitud?</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
    <h4 style="margin: 0 0 0.5rem 0;">2: No Persuado, Inspiro</h4>
    <p><strong>Novato:</strong> Usa argumentos y características. | <strong>Maestro:</strong> Usa presencia y visión.</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Deja que la visión hable por sí misma.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h4 style="margin: 0 0 0.5rem 0;">3: No Convenzo, Expando</h4>
    <p><strong>Novato:</strong> "Tienes que hacer esto." | <strong>Maestro:</strong> "¿Qué futuro de posibilidad estás evitando crear?"</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> El otro se expande no por lo que dices, sino por lo que tú ves en él.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
    <h4 style="margin: 0 0 0.5rem 0;">4: No Busco Resultados, Creo Contexto</h4>
    <p><strong>Novato:</strong> "¿Se sumó o no?" | <strong>Maestro:</strong> "¿Creé un contexto donde la expansión es posible?"</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Enfócate en crear el contexto (seguridad, posibilidad). El resultado llega solo.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h4 style="margin: 0 0 0.5rem 0;">5: No Tengo Carencia, Tengo Plenitud</h4>
    <p><strong>Novato:</strong> "Necesito que te sumes." | <strong>Maestro:</strong> "Te invito a crear algo juntos."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Conecta con tu plenitud. ¿Qué tienes para dar?</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
    <h4 style="margin: 0 0 0.5rem 0;">6: No Veo Limitaciones, Veo Posibilidades</h4>
    <p><strong>Novato:</strong> Veo lo que le falta. | <strong>Maestro:</strong> Veo su grandeza.</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Habla desde la grandeza que ves en la otra persona.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h4 style="margin: 0 0 0.5rem 0;">7: No Juzgo, Acepto</h4>
    <p><strong>Novato:</strong> "Algo está mal con él." | <strong>Maestro:</strong> "Está donde está. Lo acepto."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Acepta su elección sin juzgar. Mantén la invitación abierta.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
    <h4 style="margin: 0 0 0.5rem 0;">8: No Tengo Urgencia, Tengo Paciencia</h4>
    <p><strong>Novato:</strong> "Tiene que decidir ahora." | <strong>Maestro:</strong> "Decide cuando estés listo."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> No presiones. La presión genera resistencia, la paciencia genera confianza.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h4 style="margin: 0 0 0.5rem 0;">9: No Busco Reconocimiento, Busco Expansión</h4>
    <p><strong>Novato:</strong> "Quiero que sepan que yo lo enrolié." | <strong>Maestro:</strong> "Quiero que se expanda, sin importar quién fue."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Celebra su expansión, no tu "logro".</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
    <h4 style="margin: 0 0 0.5rem 0;">10: No Enseño, Modelo</h4>
    <p><strong>Novato:</strong> "Te enseño a ser enrolamiento." | <strong>Maestro:</strong> "Soy enrolamiento. Mírame."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> El otro aprenderá por resonancia con tu ser.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-gold);">
    <h4 style="margin: 0 0 0.5rem 0;">11: No Creo Seguidores, Creo Líderes</h4>
    <p><strong>Novato:</strong> "Quiero que me sigan." | <strong>Maestro:</strong> "Quiero que sean líderes."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> Busca crear líderes que impacten a mínimo 7 personas cada uno. Nota: El número 7 no es tu meta. Es el reflejo de un estándar alto. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo.</p>
  </div>
  <div class="glass-panel" style="padding: 1.5rem; border-left: 3px solid var(--crear-blue);">
    <h4 style="margin: 0 0 0.5rem 0;">12: No Termino, Expando</h4>
    <p><strong>Novato:</strong> "Ya lo enrolé. Listo." | <strong>Maestro:</strong> "Impacto a mínimo 7 personas. Ellas impactan a otras. Expansión infinita. Importante: El número 7 no es mi meta. Es el reflejo de mi estándar. No busco impactar 7 personas por cumplir. Busco un estándar tan alto que 7 personas sea solo el comienzo."</p>
    <p style="margin-bottom: 0;"><strong>Práctica:</strong> El efecto multiplicador es el legado.</p>
  </div>
</div>

<h3 style="margin-top: 3rem;">Las 5 Cualidades y El Camino del Maestro</h3>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1rem;">
  <div>
    <h4 class="text-gold">Cualidades</h4>
    <ul class="icon-list blue-bullets">
      <li><strong>1. Presencia Plena:</strong> 100% presente, el otro se siente visto. Cultívalo con groundings y meditación.</li>
      <li><strong>2. Claridad de Visión:</strong> Hablar con certeza. Lee tu futuro de posibilidad diariamente.</li>
      <li><strong>3. Congruencia Radical:</strong> Tu palabra, acción y ser están alineados.</li>
      <li><strong>4. Escucha Profunda:</strong> Escuchar lo que no se dice. Sin juzgar.</li>
      <li><strong>5. Amor Incondicional:</strong> Aceptación radical del estado del otro.</li>
    </ul>
  </div>
  <div>
    <h4 class="text-blue">El Camino</h4>
    <div style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 8px;">
      <p style="margin-top: 0;"><strong>Fase 1: Aprender Técnicas (Mes 1-3)</strong><br/><span style="color:var(--text-muted); font-size:0.9rem;">Limitación: Mecánico, se nota el "hacer".</span></p>
      <p><strong>Fase 2: Desarrollar Presencia (Mes 4-6)</strong><br/><span style="color:var(--text-muted); font-size:0.9rem;">Limitación: Aún hay un "yo" que enrola.</span></p>
      <p><strong>Fase 3: Ser Enrolamiento (Mes 7-12)</strong><br/><span style="color:var(--text-muted); font-size:0.9rem;">Limitación: Distinción sutil "yo/tú".</span></p>
      <p style="margin-bottom: 0;"><strong>Fase 4: Maestro Enrolador (Año 2+)</strong><br/><span style="color:var(--crear-gold); font-size:0.9rem;">Efecto multiplicador. El otro se transforma y asume su propio liderazgo.</span></p>
    </div>
  </div>
</div>

<h3 style="margin-top: 3rem;">Prácticas y Legado</h3>
<div class="glass-panel" style="padding: 2rem; border-left: 4px solid var(--crear-gold);">
  <h4 style="margin-top: 0; color: var(--text-main);">Prácticas Diarias</h4>
  <p><strong>1. Declaración (5m):</strong> "Hoy soy enrolamiento. Visualiza a mínimo 7 personas a quienes impactas hoy. Importante: El número 7 no es tu meta. Es el reflejo de tu estándar. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo."</p>
  <p><strong>2. Grounding (2m):</strong> Antes de interactuar, respira y declara presencia.</p>
  <p><strong>3. Diario (10m):</strong> "Hoy fui enrolamiento en...", "Aprendí...", "Haré diferente..."</p>
  <p><strong>4. Círculo (Semanal):</strong> "Esta semana enrolé a X, aprendí Y."</p>
  <p><strong>5. Congruencia (Semanal):</strong> Revisa tus compromisos. Ajusta.</p>
  
  <h4 style="margin-top: 2rem; color: var(--crear-blue);">El Legado</h4>
  <p style="font-size: 1.1rem; color: var(--text-muted); font-style: italic;">"Un Maestro Enrolador no se mide por: ❌ Cuántas personas enrola (el número es un indicador, no el propósito). ✅ Se mide por cuántas personas viven una vida extraordinaria (estándar mínimo 7, idealmente ilimitadas). Nota: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo."</p>
</div>
`
  }
];
```

---

### 📄 Archivo: `src/data/modulo8.js`

```javascript
export const modulo8 = [
  {
    id: "m8_l1",
    title: "M8: Integración y Legado",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">Semana 12: Integración y Legado</h3>
        <p>Has completado el viaje filosófico y de alto rendimiento. Ahora debes declarar el legado que dejas en tu equipo, tu organización y en el mundo.</p>
      </div>

      <h3>El Manifiesto y el Plan de Expansión</h3>
      <p>La transformación solo ocurre cuando la teoría se vuelve cuerpo y acción ininterrumpida.</p>
      
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">H17. El Manifiesto del Líder</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Escribe tu manifiesto: "Declaro que soy el líder que... Me comprometo a... Mi legado es...". Firma y pega en un lugar visible. Léelo en voz alta frente a tu grupo (Ceremonia del Legado).</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">H18. El Plan de Expansión Continua</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Define tus hitos para los próximos 3 meses: Cuántas personas vas a enrolar, cuántos libros vas a leer. Y lo más importante, identifica a tu RED DE APOYO.</p>
        </div>
      </div>

      <div class="alert-warning" style="margin-top: 3rem; text-align: center; padding: 2rem;">
        <h2 style="color: var(--crear-gold); margin-top: 0; font-size: 2rem;">🎓 Cierre de Certificación</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 0;">
          Para obtener la <strong>Certificación de Distinción</strong>, debes haber completado al 100% tus foros semanales, tu Manifiesto y presentar evidencia de claridad en tu visión y acciones concretas realizadas alineadas a la misma.<br/><br/>
          <em>El líder que no expande a otros se estanca. ¡Sal al mundo y CREA!</em>
        </p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/modulo9.js`

```javascript
export const modulo9 = [
  {
    id: "m9_l1",
    title: "M9: Intervención en Parálisis por Análisis",
    content: `
      <div class="alert-info" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: var(--crear-gold);">El Perfil del Cliente "Paralizado"</h3>
        <p>Este NO es un perfil "difícil". Es un perfil que necesita estrategias específicas. Suelen tener un miedo paralizante al fracaso, son sobreanalíticos y evitan riesgos.</p>
      </div>

      <h3>Principios Clave de Intervención</h3>
      
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">1. El miedo se atraviesa</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">No esperes a que "pierdan el miedo" antes de actuar. La acción valiente es actuar CON miedo, no sin él.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">2. El análisis es resistencia</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">No valides el sobreanálisis como "ser reflexivo". Es resistencia disfrazada de prudencia. Llévalos a lo concreto.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-blue);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">3. Acciones Microscópicas</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">La confianza se construye con micro-acciones exitosas, no con saltos ciegos. Diseña acciones imposibles de rechazar.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem; border-left: 3px solid var(--crear-gold);">
          <strong class="text-main" style="display: block; margin-bottom: 0.5rem;">4. El cuerpo sabe antes</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin: 0;">Conectar con el cuerpo rompe el sobreanálisis. Lleva la atención a su respiración y sensaciones.</p>
        </div>
      </div>
    `
  },
  {
    id: "m9_l2",
    title: "Estrategias de Choque y Expansión (1-5)",
    content: `
      <h3>Herramientas de Interrupción</h3>
      <p>Cómo detener la mente analítica y empujar a la acción.</p>
      
      <div class="crear-table-wrapper" style="margin-top: 2rem;">
        <table class="crear-table">
          <thead>
            <tr>
              <th>Estrategia</th>
              <th>Instrucciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-gold">1. Interrumpir el Sobreanálisis</strong></td>
              <td>Lleva el análisis al absurdo: "¿Y qué más? ¿Qué otra variable?". Tras 5 minutos pregunta: "¿Te sientes más claro o más confundido?". Te dirán "confundido". Diles: "El análisis no sirve, actúa".</td>
            </tr>
            <tr>
              <td><strong class="text-blue">2. Grounding de 30 Segundos</strong></td>
              <td>Rompe la mente conectando con el cuerpo. "Siente tus pies. Inhala 4, sostén 4, exhala 6". Pregunta: "¿Desde dónde quieres continuar, desde la tensión o desde la calma?".</td>
            </tr>
            <tr>
              <td><strong class="text-gold">3. Acciones Microscópicas</strong></td>
              <td>La acción de 2 minutos. ¿Enviar informe? No, "abrir el documento". Pide compromiso de ejecutar ESA mini-acción en 24h.</td>
            </tr>
            <tr>
              <td><strong class="text-blue">4. El Costo de No Decidir</strong></td>
              <td>Pregunta: "¿Qué te está costando NO decidir?". Lleva su foco de la pérdida por error a la pérdida por omisión.</td>
            </tr>
            <tr>
              <td><strong class="text-gold">5. Reencuadrar el Error</strong></td>
              <td>"No es un examen, es un experimento". Un experimento solo arroja datos. Pregunta: "¿Qué datos obtuviste?", jamás "¿Funcionó?".</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "m9_l3",
    title: "Estrategias de Intervención Avanzadas (6-10)",
    content: `
      <h3>Tácticas Neurológicas y Meta-Comunicación</h3>
      
      <ul class="icon-list blue-bullets" style="margin-top: 1.5rem;">
        <li><strong>6. Regla de 5 Segundos:</strong> "5-4-3-2-1, ACTÚA". El miedo tarda 5 segundos en tomar el control de la amígdala. Haz que el cliente envíe el mail en sesión.</li>
        <li><strong>7. Validar la Racionalidad ("Sí, y..."):</strong> No invalides su análisis. Di: "El análisis es un gran recurso. ¿Pero cuándo te limita? ¿Qué necesitas ahora, analizar o actuar?".</li>
        <li><strong>8. El Futuro que se Pierde:</strong> Hazle visualizar su "yo de 10 años en el futuro" mirando su miedo actual. El yo futuro siempre aconseja actuar.</li>
        <li><strong>9. Acuerdos de Ritmo y Pausa:</strong> Firma un contrato de ritmo: "10 minutos de análisis, luego pasamos a la acción. ¿Hecho?".</li>
        <li><strong>10. Nombrar el Patrón:</strong> "El elefante en la sala". Di: "Veo un patrón: analizas, te paralizas, no actúas, te sientes mal, analizas más. ¿Estás dispuesto a romperlo?".</li>
      </ul>

      <div class="alert-info" style="margin-top: 2rem;">
        <h4 style="margin-top: 0; color: var(--crear-gold);">Tips Infalibles para el Coach</h4>
        <p><strong>1. No resuelvas por el cliente.</strong> Si le das la solución, generas dependencia.<br/>
        <strong>2. No valides el sobreanálisis</strong> como "reflexión".<br/>
        <strong>3. No preguntes "¿Por qué?"</strong>. Eso solo genera más análisis. Pregunta "¿Qué?" y "¿Cómo?".<br/>
        <strong>4. Sé directo.</strong> "Veo que estás evitando".<br/>
        <strong>5. Celebra TODAS las micro-acciones.</strong></p>
      </div>
    `
  },
  {
    id: "m9_l4",
    title: "Plan Clínico de 6 Semanas y Señales de Alerta",
    content: `
      <h3>El Plan de Transformación</h3>
      <div class="grid-2-cols" style="margin-top: 1.5rem;">
        <div class="glass-panel" style="padding: 1.2rem;">
          <strong class="text-main">S1: Conciencia del Patrón</strong>
          <p class="text-muted" style="font-size: 0.85rem;">Diario de momentos de parálisis. Estrategia 10.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem;">
          <strong class="text-main">S2: Conexión al Cuerpo</strong>
          <p class="text-muted" style="font-size: 0.85rem;">Grounding 4-4-6 dos veces al día.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem;">
          <strong class="text-main">S3: Acciones Microscópicas</strong>
          <p class="text-muted" style="font-size: 0.85rem;">5 acciones de 2 minutos por semana.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem;">
          <strong class="text-main">S4: Reencuadrar el Error</strong>
          <p class="text-muted" style="font-size: 0.85rem;">3 "experimentos" a la semana para obtener datos.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem;">
          <strong class="text-main">S5: El Costo de No Actuar</strong>
          <p class="text-muted" style="font-size: 0.85rem;">Escribir y leer a diario 5 costos de no actuar.</p>
        </div>
        <div class="glass-panel" style="padding: 1.2rem;">
          <strong class="text-main">S6: Integración y Manifiesto</strong>
          <p class="text-muted" style="font-size: 0.85rem;">Firma del Manifiesto de Acción.</p>
        </div>
      </div>

      <div class="alert-warning" style="margin-top: 3rem; text-align: center; padding: 2rem;">
        <h2 style="color: var(--crear-gold); margin-top: 0; font-size: 1.5rem;">⚠️ Señales de Alerta Críticas</h2>
        <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 0;">
          Si el cliente no toma NINGUNA acción entre sesiones, la ansiedad aumenta o tú como coach te sientes frustrado, detén el proceso.<br/>
          Nombra el patrón directamente y reduce aún más la acción. Si hay trauma clínico subyacente, deriva a psicoterapia. <strong>Tu trabajo no es curar el miedo, es sostener el espacio para que actúen a través de él.</strong>
        </p>
      </div>
    `
  }
];

```

---

### 📄 Archivo: `src/data/programaEntrenamiento.js`

```javascript
export const programaTeoria = {
  vision: {
    titulo: "Visión del Programa",
    texto: "Este programa no te enseña a 'hacer' enrolamiento. Te entrena para SER enrolamiento. Entrenamos a equipos para convertirse en creadores de contexto de alto rendimiento, de modo que: 1) Vivan sus futuros de posibilidad, 2) Impacten al máximo de personas posible, con un estándar mínimo de 7 personas para que vivan una vida extraordinaria. Importante: El número 7 no es la meta. Es el reflejo de un estándar alto. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo. 3) Entrenen a otros a ser enrolamiento.",
    detalles: [
      { dimension: "Duración", detalle: "6 semanas (42 días)" },
      { dimension: "Formato", detalle: "Virtual o presencial" },
      { dimension: "Público", detalle: "Equipos de gestión, líderes, coaches, facilitadores" },
      { dimension: "Compromiso", detalle: "6 horas/semana (teoría + práctica + aplicación)" },
      { dimension: "Resultado", detalle: "Transformación personal + Expansión a otros" }
    ]
  },
  fundamentos: [
    {
      titulo: "¿Qué es el Enrolamiento?",
      definicion: "La capacidad de invitar a otros a sumarse a una visión o futuro de manera que ese futuro se vuelva posible y real. No es persuasión, venta, manipulación ni convencer. Sí es creación de contexto, invitación auténtica y expansión mutua.",
      diferencias: [
        { hacer: "Técnica para convencer a otros", ser: "Tu presencia, palabra y acción generan un campo que invita" },
        { hacer: "Enfocado en el resultado", ser: "Enfocado en la expansión del otro" },
        { hacer: "Desde la carencia ('necesito que te sumes')", ser: "Desde la plenitud ('te invito a crear algo juntos')" },
        { hacer: "Genera resistencia o cumplimiento", ser: "Genera compromiso auténtico" }
      ]
    },
    {
      titulo: "¿Qué es un Creador de Contexto?",
      definicion: "Alguien que genera las condiciones para que otros operen desde su máximo potencial. No resuelve problemas, da respuestas o dirige desde el control. Diseña el espacio, crea las condiciones y facilita la emergencia.",
      filosofiaTabla: [
        { fuente: "Heidegger", concepto: "El ser-en-el-mundo como creador de significado", aplicacion: "El líder no describe la realidad, la crea con su presencia y lenguaje" },
        { fuente: "Principios de Posibilidad", concepto: "El observador crea la realidad que observa", aplicacion: "El líder observa posibilidades, no limitaciones, y eso crea realidad" },
        { fuente: "Coaching de Alto Rendimiento", concepto: "La transformación no es lineal, es un salto desde el futuro", aplicacion: "El líder diseña desde el futuro de posibilidad, no desde el problema actual" }
      ]
    },
    {
      titulo: "Los 5 Pilares del Alto Rendimiento",
      pilaresEstructurados: [
        {
          nombre: "1. Honrar la Palabra",
          compromiso: "Cumplir los compromisos asumidos.",
          practica: ["Si lo dices, lo haces.", "Si no puedes hacerlo, no lo dices.", "Si cambias, lo comunicas a tiempo."],
          impacto: "Generas confianza y credibilidad."
        },
        {
          nombre: "2. Enrolamiento",
          compromiso: "Invitar a otros a sumarse a la visión. Impacta al máximo de personas posible, con un estándar mínimo de 7 personas para que vivan una vida extraordinaria. Nota: El número 7 no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo.",
          practica: ["Compartes tu futuro de posibilidad.", "Invitas (no presionas) a otros a crear el suyo.", "Celebras su expansión, no tu 'logro' de enrolarlos."],
          impacto: "Creas un movimiento, no un equipo."
        },
        {
          nombre: "3. Asistencia y Participación",
          compromiso: "Estar presente física y emocionalmente.",
          practica: ["Llegas a tiempo.", "Apagas distracciones.", "Participas activamente, no solo 'asistes'."],
          impacto: "Modelas presencia para otros."
        },
        {
          nombre: "4. Futuros de Posibilidad",
          compromiso: "Mantener viva la visión de lo que es posible crear.",
          practica: ["Declaras tu futuro de posibilidad (no tu meta 'realista').", "Actúas desde ese futuro, no desde tu presente.", "Inspiras a otros a declarar los suyos."],
          impacto: "Creas un campo de posibilidad, no de limitación."
        },
        {
          nombre: "5. Trabajo en Equipo",
          compromiso: "Reconocer que el alto rendimiento es colectivo.",
          practica: ["Celebras los logros del equipo, no solo los tuyos.", "Pides ayuda cuando la necesitas.", "Das feedback que expande, no que culpa."],
          impacto: "Creas un equipo de alto rendimiento, no un grupo de individuos."
        }
      ]
    },
    {
      titulo: "El Propósito: Vivir Futuros de Posibilidad",
      definicion: "Una aspiración que hoy parece inalcanzable, pero que se declara como posible de crear. No es una meta SMART ni un objetivo 'realista'. Es una declaración audaz, un salto de posibilidad, un compromiso con lo extraordinario.",
      ejemplos: [
        { realista: "'Quiero mejorar mi liderazgo'", imposible: "'Declaro que soy un líder que transforma vidas'" },
        { realista: "'Quiero vender más'", imposible: "'Declaro que mi producto llega a 1 millón de personas'" },
        { realista: "'Quiero estar más presente'", imposible: "'Declaro que soy presencia pura en cada interacción'" },
        { realista: "'Quiero entrenar coaches'", imposible: "'Declaro que entreno a 100 coaches que transforman a 1000 personas'" }
      ],
      compromisos: [
        {
          nombre: "1. Vivir tu Futuro de Posibilidad",
          descripcion: "No solo declararlo. Lo vives HOY, no 'cuando esté listo'.",
          como: ["Actúas COMO SI ya fueras esa versión.", "Tomas decisiones desde ese futuro.", "Enrolas a otros desde ese futuro."]
        },
        {
          nombre: "2. Impactar al Máximo de Personas",
          descripcion: "No solo inspirarlas. Las impactas activamente para que vivan una vida extraordinaria. Estándar mínimo: 7 personas. Importante: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de un estándar alto. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo.",
          como: ["Compartes tu futuro de posibilidad.", "Les preguntas: '¿Cuál es el TUYO?'", "Las acompañas a declararlo y vivirlo."]
        },
        {
          nombre: "3. Entrenar a Otros",
          descripcion: "No solo ser coach. Entrenas a otros a SER enrolamiento y creadores de contexto.",
          como: ["Les enseñas las herramientas de este programa.", "Las practican contigo.", "Las aplican con otros (efecto multiplicador)."]
        }
      ]
    }
  ]
};

export const programaHerramientas = [
  {
    id: 1,
    nombre: "La Brújula del Enrolamiento",
    proposito: "Evaluar si estás siendo enrolamiento o solo 'haciendo enrolamiento'.",
    uso: "Autoevaluación semanal.",
    estructura: [
      { dimension: "Presencia", descripcion: "¿Tu energía invita sin esfuerzo?" },
      { dimension: "Palabra", descripcion: "¿Tu palabra es declaración, no petición?" },
      { dimension: "Acción", descripcion: "¿Tu acción es congruente con tu visión?" },
      { dimension: "Resultado", descripcion: "¿Otros se expanden naturalmente?" }
    ]
  },
  {
    id: 2,
    nombre: "El Mapa del Contexto",
    proposito: "Diseñar conscientemente el contexto que quieres crear.",
    uso: "Sesión semanal de equipo.",
    estructuraList: [
      "1. Contexto actual: ¿Qué contexto estamos creando hoy?",
      "2. Contexto deseado: ¿Qué contexto queremos crear?",
      "3. Brecha: ¿Qué nos separa del contexto deseado?",
      "4. Acciones de diseño: ¿Qué acciones concretas crearán ese contexto?"
    ]
  },
  {
    id: 3,
    nombre: "El Contrato de Futuros de Posibilidad",
    proposito: "Declarar y sostener el futuro de posibilidad personal y del equipo.",
    uso: "Contrato firmado y visible.",
    estructuraList: [
      "1. Mi futuro de posibilidad: (describir en presente, como si ya fuera real)",
      "2. Quién tengo que ser: (qué versión de mí tiene que existir)",
      "3. Acciones diarias: (3 acciones concretas que me alinean)",
      "4. A quién impacto: (Estándar mínimo: 7 personas a quienes impactas para que vivan una vida extraordinaria. Nota: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo)",
      "5. Checkpoint: (fecha de reporte de progreso)"
    ]
  },
  {
    id: 4,
    nombre: "La Rueda del Enrolamiento",
    proposito: "Evaluar y expandir tu capacidad de enrolamiento.",
    uso: "Autoevaluación y feedback de pares semanal.",
    estructuraList: [
      "1. Claridad de visión",
      "2. Congruencia",
      "3. Presencia",
      "4. Escucha",
      "5. Persistencia",
      "6. Impacto"
    ]
  },
  {
    id: 5,
    nombre: "El Diario de Creador de Contexto",
    proposito: "Registrar y reflexionar sobre tu práctica diaria.",
    uso: "Diario personal, revisión semanal con el equipo.",
    estructuraList: [
      "1. Hoy creé este contexto: (describir)",
      "2. Hoy fui enrolamiento en esta situación: (describir)",
      "3. Hoy enrolié a esta persona: (nombre, qué futuro, qué dijo)",
      "4. Hoy aprendí esto: (insight)",
      "5. Mañana haré esto diferente: (acción)"
    ]
  }
];

export const programaSemanas = [
  {
    semana: 1,
    titulo: "Fundamentos del Enrolamiento",
    herramientasClave: "Brújula del Enrolamiento, Mapa del Contexto",
    compromiso: "Declara tu futuro de posibilidad",
    dias: [
      { dia: 1, reto: "Declara tu futuro de posibilidad por escrito. Compártelo con el equipo." },
      { dia: 2, reto: "Identifica a mínimo 7 personas a quienes impactarás esta semana." },
      { dia: 3, reto: "Practica la escucha profunda (5 minutos sin hablar, solo escuchar)." },
      { dia: 4, reto: "Evalúa tu congruencia: ¿Tu acción coincide con tu palabra hoy?" },
      { dia: 5, reto: "Enrola a tu primera persona. Reporta qué pasó." },
      { dia: 6, reto: "Reflexiona: ¿Qué te costó más esta semana?" },
      { dia: 7, reto: "Descansa. Integra." }
    ]
  },
  {
    semana: 2,
    titulo: "Ser Enrolamiento",
    herramientasClave: "Rueda del Enrolamiento, Diario de Creador",
    compromiso: "Enrola a tu primera persona",
    dias: [
      { dia: 8, reto: "Antes de enrolos, pregúntate: '¿Estoy siendo o haciendo?'" },
      { dia: 9, reto: "Practica declarar (no pedir) cuando enrolos." },
      { dia: 10, reto: "Evalúa tu presencia: ¿Tu energía invita o presiona?" },
      { dia: 11, reto: "Enrola a 2 personas. Reporta." },
      { dia: 12, reto: "Pide feedback: '¿Cómo te sientes después de que te enrolé?'" },
      { dia: 13, reto: "Ajusta tu enfoque según el feedback." },
      { dia: 14, reto: "Descansa. Integra." }
    ]
  },
  {
    semana: 3,
    titulo: "Crear Contexto de Alto Rendimiento",
    herramientasClave: "Contrato de Contexto, Semáforo de Conversaciones",
    compromiso: "Interrumpe 1 conversación tóxica",
    dias: [
      { dia: 15, reto: "Diseña el contexto de tu equipo para esta semana." },
      { dia: 16, reto: "Interrumpe UNA conversación tóxica hoy." },
      { dia: 17, reto: "Genera UNA conversación de posibilidad hoy." },
      { dia: 18, reto: "Evalúa: ¿Qué contexto creaste hoy?" },
      { dia: 19, reto: "Impacta a mínimo 7 personas. Reporta." },
      { dia: 20, reto: "Reflexiona: ¿Qué contexto te limita? ¿Cómo lo transformas?" },
      { dia: 21, reto: "Descansa. Integra." }
    ]
  },
  {
    semana: 4,
    titulo: "Vivir Futuros de Posibilidad",
    herramientasClave: "Contrato de Futuros de Posibilidad, Silla del Futuro",
    compromiso: "Actúa desde tu futuro de posibilidad",
    dias: [
      { dia: 22, reto: "Relee tu futuro de posibilidad. ¿Sigues comprometido?" },
      { dia: 23, reto: "Identifica UNA acción que te acerca a tu futuro de posibilidad. Hazla hoy." },
      { dia: 24, reto: "Enrola a alguien a vivir SU futuro de posibilidad." },
      { dia: 25, reto: "Evalúa: ¿Qué te detiene de vivir tu futuro de posibilidad?" },
      { dia: 26, reto: "Comparte tu futuro de posibilidad con alguien externo al equipo." },
      { dia: 27, reto: "Reporta: ¿Qué acción tomaste hacia tu futuro de posibilidad esta semana?" },
      { dia: 28, reto: "Descansa. Integra." }
    ]
  },
  {
    semana: 5,
    titulo: "Enrolar y Entrenar a Otros",
    herramientasClave: "Mapa de Enrolamiento, Declaración de Expansión",
    compromiso: "Entrena a 1 persona",
    dias: [
      { dia: 29, reto: "Identifica a mínimo 7 personas a quienes impactarás. Importante: El número 7 no es tu meta. Es el reflejo de un estándar alto. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo." },
      { dia: 30, reto: "Comparte con ellas el concepto de 'ser enrolamiento'." },
      { dia: 31, reto: "Entrénalas en UNA herramienta del programa." },
      { dia: 32, reto: "Pídeles que enrolen a alguien. Reporta." },
      { dia: 33, reto: "Impacta a mínimo 7 personas. Reporta. Nota: El número 7 no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo." },
      { dia: 34, reto: "Ajusta tu enfoque de entrenamiento." },
      { dia: 35, reto: "Descansa. Integra." }
    ]
  },
  {
    semana: 6,
    titulo: "Expansión y Legado",
    herramientasClave: "Manifiesto del Equipo, Plan de Expansión",
    compromiso: "Declara tu legado",
    dias: [
      { dia: 36, reto: "Declara tu legado: ¿Qué dejas en este equipo/organización?" },
      { dia: 37, reto: "Enrola a alguien a continuar tu legado." },
      { dia: 38, reto: "Evalúa: ¿A cuántas personas impactaste en total? (mínimo 7, idealmente 10+)" },
      { dia: 39, reto: "Evalúa: ¿A cuántas personas entrenaste y expandiste en total? (mínimo 7+)" },
      { dia: 40, reto: "Comparte tu transformación con el equipo." },
      { dia: 41, reto: "Celebra los logros del equipo." },
      { dia: 42, reto: "Declara: ¿Qué sigue?" }
    ]
  }
];

export const programaRecursos = {
  dinamicas: [
    { nombre: "El Check-in de la Mañana (10 min)", uso: "Diario", proposito: "Alinear el equipo al inicio del día.", instrucciones: ["1. Compartir: 'Hoy me comprometo a...'", "2. Equipo escucha sin juzgar.", "3. Al final del día: 'Hoy cumplí...'"] },
    { nombre: "El Círculo de la Expansión (30 min)", uso: "Semanal (Viernes)", proposito: "Compartir transformaciones.", instrucciones: ["1. Círculo. Compartir: 'Esta semana enrolié a...', 'Yo aprendí...'", "2. Equipo celebra cada historia."] },
    { nombre: "El Muro de los Futuros de Posibilidad", uso: "Permanente", proposito: "Mantener viva la visión.", instrucciones: ["1. Escribir futuro en post-it.", "2. Pegar en muro visible.", "3. Actualización semanal: 'Esta semana avancé en...'"] },
    { nombre: "El Contrato de Accountability", uso: "Revisión semanal", proposito: "Sostener responsabilidad.", instrucciones: ["1. Declarar compromiso.", "2. Equipo acepta/rechaza si no es claro/medible.", "3. Contrato público.", "4. Checkpoint semanal: '¿Cumpliste?'"] }
  ],
  evaluacion: {
    metricas: [
      { metrica: "Futuros imposibles declarados", meta: "100% del equipo", como: "Contrato de Futuros de Posibilidad" },
      { metrica: "Personas impactadas", meta: "Estándar mínimo 7, idealmente 10+ por participante. Importante: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de un estándar alto. No busques impactar 7 personas por cumplir. Busca un estándar tan alto que 7 personas sea solo el comienzo.", como: "Reporte semanal" },
      { metrica: "Personas entrenadas", meta: "3+ por participante", como: "Reporte de entrenamiento" },
      { metrica: "Congruencia", meta: "80%+ compromisos cumplidos", como: "Checkpoints semanales" },
      { metrica: "Expansión del equipo", meta: "30%+ crecimiento en resultados", como: "Métricas de negocio" }
    ],
    evaluacionFinal: [
      "Su futuro de posibilidad y cómo lo vivió.",
      "Las personas que impactó (estándar mínimo 7, idealmente 10+. Nota: El estándar mínimo de 7 personas no es tu meta. Es el reflejo de tu estándar. Si tu estándar es alto, 7 personas será solo el comienzo).",
      "Las personas que entrenó (mínimo 3).",
      "Su transformación personal.",
      "Su legado y próximos pasos."
    ]
  },
  peliculas: [
    { titulo: "En Busca de la Felicidad (2006)", tema: "Persistencia, futuro de posibilidad.", dinamica: "¿Cuál es tu 'oficina en el metro'?", link: "https://www.youtube.com/watch?v=0wJM21yvUqw" },
    { titulo: "Invictus (2009)", tema: "Liderazgo, creación de contexto.", dinamica: "¿Qué contexto creas tú?", link: "https://www.youtube.com/watch?v=RZY8c_a_dlQ" },
    { titulo: "El Discurso del Rey (2010)", tema: "Superación, apoyo.", dinamica: "¿Quién es tu 'Logue'?", link: "https://www.youtube.com/watch?v=pzI4D6dyp_o" },
    { titulo: "Cadena de Favores (2000)", tema: "Enrolamiento en cadena, legado.", dinamica: "¿A quiénes enrolos?", link: "https://www.youtube.com/watch?v=1b-bB1r3G4E" },
    { titulo: "Soul (2020)", tema: "Propósito, vivir plenamente.", dinamica: "¿Cuál es tu 'chispa'?", link: "https://www.youtube.com/watch?v=xOsLIiOB_SQ" },
    { titulo: "La Vida Secreta de Walter Mitty (2013)", tema: "Salto de posibilidad, vivir el futuro.", dinamica: "¿Qué salto estás evitando?", link: "https://www.youtube.com/watch?v=HddkucqSzSM" },
    { titulo: "Coach Carter (2005)", tema: "Alto rendimiento, disciplina.", dinamica: "¿Qué estándar declaras?", link: "https://www.youtube.com/watch?v=0KzUuI9o0eA" }
  ],
  podcasts: [
    { titulo: "The Tim Ferriss Show", tema: "Alto rendimiento", episodios: ["Josh Waitzkin", "Tony Robbins"] },
    { titulo: "The School of Greatness", tema: "Historias de transformación", episodios: ["Robin Sharma", "Brendon Burchard"] },
    { titulo: "The Tony Robbins Podcast", tema: "Transformación personal", episodios: ["Cómo crear un futuro compelling", "El poder de la decisión"] },
    { titulo: "Ted Talks Daily", tema: "Ideas que expanden", episodios: ["Simon Sinek", "Brené Brown"] },
    { titulo: "The Life Coach School", tema: "Coaching, creación de realidad", episodios: ["Cómo crear tu futuro", "El modelo de coaching"] }
  ],
  lecturas: [
    "Echeverría, R. (1994). Ontología del Lenguaje",
    "Flores, F. (2004). Innovaciones en Liderazgo",
    "Frankl, V. (1946). El hombre en busca de sentido",
    "Jacob, Y. (2019). Existential Coaching"
  ]
};

```

---

### 📄 Archivo: `src/data/rutaRegistry.js`

```javascript
import { curriculum } from './curriculum';

export const rutaModulos = curriculum.map(m => ({
  id: m.id,
  titulo: m.titulo,
  descripcion: m.descripcion,
  estado: m.estado,
  duracion: `${m.duracionSemanas} Semana${m.duracionSemanas > 1 ? 's' : ''}`
}));

```

---

### 📄 Archivo: `src/data/tareasQtData.js`

```javascript
/**
 * REPOSITORIO MAESTRO DE TAREAS OPERATIVAS DEL QUANTUM TEAM (CAPÍTULO 1)
 * Extraído del Sistema Operativo de Alto Rendimiento - CREAR Poder Sin Límites
 * 
 * Reglas de cálculo de fechas relativas al inicio del C1 (Viernes 09:00 AM):
 * - offsetDays: días relativos al viernes de inicio (negativo = antes, 0 = viernes, 1 = sábado, 2 = domingo, positivo = después)
 * - hour: hora exacta (formato 24h)
 * - minute: minuto
 */

export const TAREAS_QT_C1 = [
  // ==========================================
  // FASE 1: ANTES DE CAPÍTULO 1 (PRE-SALA)
  // ==========================================
  {
    id: "pre-01",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Alineación y Asignación de Roles en Sala QT",
    descripcion: "Asignar y confirmar a los líderes en cada puesto clave: Capitán QT, Audio/Luces, Registro/Puerta, Guardianes de Pasillo, Soporte Emocional, Cronometrador y Logística/Abastecimiento.",
    rol: "Capitán QT / Coordinador",
    prioridad: "ALTA",
    offsetDays: -7,
    time: "10:00",
    entregable: "Matriz de roles confirmada y publicada en grupo oficial.",
    origenManual: "Módulo 4: Desarrollo de Aliados y Matriz de Cancha"
  },
  {
    id: "pre-02",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Auditoría de Lista de Participantes y Casos Especiales",
    descripcion: "Revisar la nómina oficial de participantes inscritos. Identificar casos médicos, condiciones físicas, mujeres embarazadas o situaciones emocionales delicadas para asignación de guardián dedicado.",
    rol: "Registro & Soporte Emocional",
    prioridad: "CRÍTICA",
    offsetDays: -5,
    time: "15:00",
    entregable: "Ficha de alertas médicas/emocionales entregada al Entrenador.",
    origenManual: "Módulo 5: Protocolo de Seguridad y Casos Especiales"
  },
  {
    id: "pre-03",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Validación de Uniformes e Imagen Oficial del Staff",
    descripcion: "Garantizar que todo el Quantum Team cuente con el polo oficial de la empresa en perfecto estado, pantalón formal oscuro (sin roturas) y calzado pulcro. Cero uso de logos o accesorios no autorizados.",
    rol: "Todos los QT",
    prioridad: "MEDIA",
    offsetDays: -3,
    time: "12:00",
    entregable: "Checklist de uniforme y credenciales al 100%.",
    origenManual: "Módulo 1: Identidad, ADN & Estándar Impecable"
  },
  {
    id: "pre-04",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Confección de Kits, Gafetes y Bitácoras de Participante",
    descripcion: "Impresión de credenciales con nombres oficiales, armado de carpetas de trabajo, entrega de bolígrafos y preparación de sobres confidenciales para las dinámicas vivenciales.",
    rol: "Logística & Materiales",
    prioridad: "ALTA",
    offsetDays: -2,
    time: "18:00",
    entregable: "Cajas de material ordenadas alfabéticamente.",
    origenManual: "Módulo 5: Flujos de Trabajo Temporales"
  },
  {
    id: "pre-05",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Montaje de Sala: Alineación Milimétrica y Ergonomía",
    descripcion: "Disposición de sillas en arco/herradura con separación exacta, pasillos despejados para tránsito de staff, eliminación de puntos ciegos hacia el podio del entrenador.",
    rol: "Guardianes de Sala & Logística",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "16:00",
    entregable: "Alineación de sala verificada con cinta métrica y libre de obstáculos.",
    origenManual: "Checklist Maestro Pre-Apertura (20 Puntos Críticos)"
  },
  {
    id: "pre-06",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Calibración Acústica, Microfonía y Climatización (AC a 21°C)",
    descripcion: "Prueba de sonido (micrófono diadema y mano), ajuste de ecualización para evitar feedback, carga de playlists emocionales y ajuste del aire acondicionado entre 20°C y 22°C para mantener el estado de alerta.",
    rol: "Audio & Luces",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "18:00",
    entregable: "Sonido impecable probado y termostato fijado en 21°C.",
    origenManual: "Checklist Maestro Pre-Apertura"
  },
  {
    id: "pre-07",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Círculo Sagrado de Staff & Alineación con el Entrenador",
    descripcion: "Reunión general del Quantum Team con el Entrenador Principal (Jueves por la noche). Grounding de equipo, mente en cero, repaso del mapa de quiebres y entrega del corazón al servicio.",
    rol: "Todos los QT",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "20:00",
    entregable: "Pacto de impecabilidad y energía unificada.",
    origenManual: "Módulo 2: Cultura Crear & 12 Principios del QT"
  },

  // ==========================================
  // FASE 2: DURANTE CAPÍTULO 1 (SALA ACTIVA)
  // ==========================================
  {
    id: "dur-01",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 07:30 AM — Llegada de Staff y Grounding Matutino",
    descripcion: "Llegada puntual del 100% del staff, verificación final de baterías de micrófonos, pañuelos en puntos estratégicos y último ajuste de temperatura antes de abrir puertas.",
    rol: "Todos los QT",
    prioridad: "CRÍTICA",
    offsetDays: 0,
    time: "07:30",
    entregable: "Staff en posición y sala blindada.",
    origenManual: "Módulo 3: Mapa de Transformación Día 1"
  },
  {
    id: "dur-02",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 08:00 AM — Registro Impecable y Custodia de Distractores",
    descripcion: "Recepción cálida y firme, verificación de documento de identidad, entrega de gafete oficial y recolección segura de celulares / relojes inteligentes en sobres numerados.",
    rol: "Puerta & Registro",
    prioridad: "ALTA",
    offsetDays: 0,
    time: "08:00",
    entregable: "100% de participantes registrados sin celulares en sala.",
    origenManual: "Módulo 5: Protocolo de Puerta y Custodia"
  },
  {
    id: "dur-03",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 09:00 AM — Apertura Oficial & Postura de Guardia en Sala",
    descripcion: "Cierre hermético de puertas, postura corporal de poder y servicio en los perímetros de sala. Monitoreo visual de participantes para sostener el contexto del entrenador sin cruzar miradas distractoras.",
    rol: "Guardianes de Sala",
    prioridad: "CRÍTICA",
    offsetDays: 0,
    time: "09:00",
    entregable: "Sala en silencio absoluto y contexto sostenido.",
    origenManual: "Módulo 1: Postura del Guardián del Contexto"
  },
  {
    id: "dur-04",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes Tarde/Noche — Contención en Procesos de Quiebre Profundo",
    descripcion: "Suministro silencioso de pañuelos y agua cuando sea estrictamente requerido, sin interrumpir el proceso emocional del participante ni quitarle su quiebre. Custodia de baños y pasillos.",
    rol: "Soporte Emocional",
    prioridad: "ALTA",
    offsetDays: 0,
    time: "19:00",
    entregable: "Participantes contenidos con dignidad y respeto.",
    origenManual: "Módulo 3: Día 1 - El Quiebre"
  },
  {
    id: "dur-05",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes Cierre (23:00) — Debriefing Nocturno de Staff (Máx 20 min)",
    descripcion: "Revisión rápida con el Entrenador sobre la jornada del viernes: participantes en riesgo de abandono, ajustes de logística para el sábado, descanso inmediato.",
    rol: "Todos los QT",
    prioridad: "MEDIA",
    offsetDays: 0,
    time: "23:00",
    entregable: "Minuta de ajustes y retiro a descanso reparador.",
    origenManual: "Módulo 5: Rituales de Cierre Diario"
  },
  {
    id: "dur-06",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Sábado 07:30 AM — Puerta Estricta y Montaje de Dinámica de Espejo",
    descripcion: "Verificación de puntualidad de participantes al segundo día. Preparación de sala para los procesos vivenciales de reconstrucción y auto-observación.",
    rol: "Puerta & Logística",
    prioridad: "CRÍTICA",
    offsetDays: 1,
    time: "07:30",
    entregable: "Sala lista y participantes ingresados sin retrasos.",
    origenManual: "Módulo 3: Día 2 - El Espejo y la Reconstrucción"
  },
  {
    id: "dur-07",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Sábado Noche — El Gran Traspaso & Procesos de Perdón",
    descripcion: "Control de iluminación tenue, música ambiental envolvente, custodia perimetral absoluta durante la dinámica central del perdón y cartas.",
    rol: "Audio, Luces & Guardianes",
    prioridad: "CRÍTICA",
    offsetDays: 1,
    time: "20:00",
    entregable: "Atmósfera sagrada y proceso completado al 100%.",
    origenManual: "Módulo 3: Dinámica Central del Sábado"
  },
  {
    id: "dur-08",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Domingo 08:00 AM — Declaración de Visión & Enrolamiento al Ser",
    descripcion: "Apertura del último día con energía máxima. Preparación de mesas de información de Capítulo 2 y registro de testimonios.",
    rol: "Todos los QT",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "08:00",
    entregable: "Mesas de C2 preparadas y material listo.",
    origenManual: "Módulo 3: Día 3 - El Enrolamiento al Ser"
  },
  {
    id: "dur-09",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Domingo 16:00 PM — Protocolo de Ceremonia de Graduación & Familias",
    descripcion: "Recepción ordenada de familiares e invitados de graduación, control de aforo, entrega de pines oficiales y rosas, música triunfal sincronizada al segundo.",
    rol: "Puerta, Audio & Guardianes",
    prioridad: "CRÍTICA",
    offsetDays: 2,
    time: "16:00",
    entregable: "Ceremonia impecable y entrega de credenciales de graduado.",
    origenManual: "Módulo 5: Protocolo de Graduación y Familias"
  },

  // ==========================================
  // FASE 3: DESPUÉS DE CAPÍTULO 1 (POST-SALA)
  // ==========================================
  {
    id: "post-01",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Domingo 20:30 PM — Desmontaje Total y Devolución del Local",
    descripcion: "Recolección completa de equipos, señalética, cables, banderas y basura. Dejar el salón del hotel en estado impecable (mejor de como fue recibido).",
    rol: "Logística & Todos los QT",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "20:30",
    entregable: "Acta de entrega de local firmada sin observaciones.",
    origenManual: "Módulo 5: Protocolo de Cierre y Desmontaje"
  },
  {
    id: "post-02",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Domingo 22:00 PM — Círculo de Cierre QT & Entrega de Aprendizajes",
    descripcion: "Reunión íntima del staff con el Entrenador: agradecimiento mutuo, reconocimiento a la excelencia, retroalimentación ontológica personal y cierre formal del servicio.",
    rol: "Todos los QT",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "22:00",
    entregable: "Cierre energético y celebración del equipo.",
    origenManual: "Módulo 2: El Ritual de Agradecimiento del Staff"
  },
  {
    id: "post-03",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Lunes T+1 — Autopsia Operativa y Cálculo de Conversión (PP%)",
    descripcion: "Reunión de gerencia y capitanes: auditar métricas de graduación, porcentaje de pase a Capítulo 2 (PP%), quiebres logísticos presentados y plan de acción preventivo para la siguiente edición.",
    rol: "Capitán QT & Gerencia de Sede",
    prioridad: "CRÍTICA",
    offsetDays: 3,
    time: "18:00",
    entregable: "Informe de Autopsia Post-C1 cargado al sistema con métricas reales.",
    origenManual: "portal-content-gerencia: Calculadora de Conversión PP% y Autopsia"
  },
  {
    id: "post-04",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Miércoles T+3 — Acompañamiento a Noche de Reencuentro e Inicio C2",
    descripcion: "Seguimiento y confirmación de asistencia de los graduados a su primera sesión de seguimiento / enrolamiento activo hacia su Capítulo Dos.",
    rol: "Capitán QT & Líderes de Enrolamiento",
    prioridad: "ALTA",
    offsetDays: 5,
    time: "19:00",
    entregable: "Lista de asistencia al Reencuentro con más del 85% de presencia.",
    origenManual: "Módulo 3: La Cadena de Continuidad Transformacional"
  }
];

```

---

### 📄 Archivo: `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;600;700;800;900&display=swap');

:root {
  --crear-gold: #ffb703;
  --crear-gold-hover: #ffc933;
  --crear-gold-light: rgba(255, 183, 3, 0.15);
  
  --crear-blue: #00d4ff;
  --crear-blue-dark: #0088aa;
  
  --bg-dark: #070d1f; /* Azul índigo muy profundo que coincide con los bordes del logo */
  --bg-card: rgba(255, 255, 255, 0.02);
  --bg-card-hover: rgba(255, 255, 255, 0.04);
  
  --text-main: #f8f9fa;
  --text-muted: #9ca3af;
  
  --color-success: #34A853;
  --color-error: #ff5252;
  --color-warning: #FBBC05;
  
  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', 'Roboto', sans-serif;
  
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  margin-top: 0;
  color: #ffffff;
  letter-spacing: -0.02em;
  font-weight: 700;
}

/* Glassmorphism utility */
.glass-panel {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.05);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Holographic Logo */
.logo-holographic {
  mix-blend-mode: screen;
  filter: contrast(1.15) brightness(1.1);
  pointer-events: none;
  display: block;
}

.glass-panel:hover {
  background: var(--bg-card-hover);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 15px 50px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 212, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

/* Base button */
.btn-primary {
  background: linear-gradient(135deg, var(--crear-gold) 0%, var(--crear-gold-hover) 100%);
  color: #000000;
  border: none;
  border-radius: var(--radius-xl);
  padding: 14px 32px;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(255, 183, 3, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 25px rgba(255, 183, 3, 0.5), 0 0 20px rgba(255, 183, 3, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-main);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  padding: 12px 28px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
} 
  
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.4);
}

/* High-contrast logout button */
.btn-logout {
  background: var(--crear-gold);
  color: #000000;
  border: none;
  border-radius: var(--radius-xl);
  padding: 12px 28px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.btn-logout:hover {
  background: var(--crear-gold-hover);
}

/* App Layout */
.app-layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Content Reader */
.content-reader h3 {
  color: var(--crear-gold);
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.content-reader p {
  margin-bottom: 1.5rem;
}

.content-reader ul {
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  list-style-type: square;
}

.content-reader li {
  margin-bottom: 0.5rem;
}

/* Typography Helpers */
.text-gold { color: var(--crear-gold); }
.text-blue { color: var(--crear-blue); }
.text-muted { color: var(--text-muted); }
.uppercase { text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-dark);
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* ==========================================================================
   EDITORIAL & GRAPHIC AIDS (MODULE CONTENT)
   ========================================================================== */

/* Alert Boxes / Info Panels */
.alert-info {
  background: rgba(1, 180, 228, 0.08);
  border-left: 4px solid var(--crear-blue);
  padding: 1.2rem 1.5rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.alert-warning {
  background: rgba(255, 183, 3, 0.08);
  border-left: 4px solid var(--crear-gold);
  padding: 1.2rem 1.5rem;
  border-radius: 0 8px 8px 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Grid Layouts */
.grid-2-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

@media (min-width: 768px) {
  .grid-2-cols {
    grid-template-columns: 1fr 1fr;
  }
}

/* Custom Icon Lists */
.icon-list {
  list-style-type: none !important;
  padding-left: 0 !important;
  margin-bottom: 1.5rem;
}

.icon-list li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem !important;
  line-height: 1.6;
}

.icon-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--crear-gold);
  font-size: 1.2rem;
}

.icon-list.blue-bullets li::before {
  content: '►';
  color: var(--crear-blue);
  font-size: 1rem;
  top: 0.1rem;
}

/* Premium Table */
.crear-table-wrapper {
  overflow-x: auto;
  margin: 2rem 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.crear-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background: rgba(10, 15, 28, 0.5);
}

.crear-table th {
  background: rgba(255, 183, 3, 0.15);
  color: var(--crear-gold);
  padding: 1rem;
  font-weight: 700;
  border-bottom: 2px solid rgba(255, 183, 3, 0.3);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.crear-table td {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-main);
  vertical-align: top;
}

.crear-table tr:last-child td {
  border-bottom: none;
}

.crear-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

/* Text Highlights */
.highlight-text {
  color: var(--crear-gold);
  font-weight: 600;
}

.highlight-blue {
  color: var(--crear-blue);
  font-weight: 600;
}

/* ==========================================================================
   FOCUS MODE & IMMERSIVE DESIGN (MAESTRO PROMPT)
   ========================================================================== */

/* Fade-in Animation for smooth transitions */
.animate-fade-in {
  animation: fadeIn 0.4s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Breathing Animation for Deep Immersion */
.animate-breathe {
  animation: breathe 8s infinite ease-in-out;
}

@keyframes breathe {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; box-shadow: 0 0 40px rgba(1, 180, 228, 0.4); }
  100% { transform: scale(1); opacity: 0.8; }
}

/* Focus Mode Global Overrides */
.focus-mode-active {
  background-color: #050814; /* Even darker for pure focus */
}

.focus-mode-active .main-content {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 4rem;
  transition: all 0.5s ease;
}

.focus-mode-active .content-reader {
  font-size: 1.25rem; /* Larger font for easy reading */
  line-height: 1.9;
  letter-spacing: 0.02em;
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;
}

/* Floating Exit Focus Button */
.focus-exit-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(10, 17, 40, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  border-radius: 30px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}

.focus-exit-btn:hover {
  background: rgba(255, 183, 3, 0.1);
  color: var(--crear-gold);
  border-color: var(--crear-gold);
  transform: scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* Global HUD Widget */
.global-hud-widget {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(10, 20, 35, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.4rem 1rem;
  border-radius: 40px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.05);
  transition: all 0.3s ease;
}

.global-hud-widget:hover {
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.2);
}

.hud-music-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hud-music-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--crear-gold);
}

.hud-music-btn.playing {
  color: var(--crear-blue);
  border-color: var(--crear-blue);
  box-shadow: 0 0 10px rgba(0, 230, 118, 0.2);
}

.hud-avatar-container {
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.hud-progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
}

.hud-progress-ring-fill {
  transition: stroke-dashoffset 0.8s ease-in-out;
}

.hud-avatar-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.hud-avatar-placeholder {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--crear-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.hud-avatar-container:hover .hud-avatar-img {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.gods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.god-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.god-card:hover {
  background: rgba(255, 215, 0, 0.1);
  border-color: var(--crear-gold);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba(255,215,0,0.2);
}

.god-card img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.8rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.god-card:hover img {
  border-color: var(--crear-gold);
}

.god-card p {
  font-size: 0.9rem;
  margin: 0;
  color: var(--text-main);
  font-weight: 500;
}

```

---

### 📄 Archivo: `src/lib/firebase.js`

```javascript
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

```

---

### 📄 Archivo: `src/main.jsx`

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { AuthProvider } from './context/AuthContext'
import { UIProvider } from './context/UIContext'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)

```

---

### 📄 Archivo: `src/pages/AdminDashboard.jsx`

```javascript
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAllUsers, getUserSessions } from '../services/db';
import { generarDiagnosticoAlumno } from '../services/ai';
import DOMPurify from 'dompurify';
import { curriculum } from '../data/curriculum';

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userSessions, setUserSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [aiReport, setAiReport] = useState(null);
  const [generatingAi, setGeneratingAi] = useState(false);

  // Helper para mostrar nombres reales en lugar de URLs
  const formatModuleName = (route) => {
    if (!route) return 'Sin actividad';
    if (route.includes('evaluacion/')) {
      const modId = route.split('evaluacion/')[1]?.split('/')[0];
      const match = curriculum.find(m => m.id === modId);
      return match ? `Evaluación ${match.titulo}` : `Evaluación ${modId}`;
    }
    if (route.includes('modulo/')) {
      const modId = route.split('modulo/')[1]?.split('/')[0];
      const match = curriculum.find(m => m.id === modId);
      return match ? match.titulo : `Módulo ${modId}`;
    }
    if (route.includes('glosario')) return 'Glosario Central';
    if (route.includes('dashboard')) return 'Dashboard Principal';
    if (route.includes('ruta')) return 'Ruta de Formación';
    if (route.includes('admin')) return 'Panel CEO / Dirección';
    return route;
  };

  // isAdmin ya viene de AuthContext, que valida por Custom Claim y un fallback configurado

  useEffect(() => {
    if (isAdmin) {
      getAllUsers().then(data => {
        setUsers(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [isAdmin]);

  const handleViewHistory = async (uid, name) => {
    setSelectedUser({ uid, name });
    setLoadingSessions(true);
    const sessions = await getUserSessions(uid);
    setUserSessions(sessions);
    setLoadingSessions(false);
  };

  const closeHistory = () => {
    setSelectedUser(null);
    setUserSessions([]);
    setAiReport(null);
  };

  const handleGenerarDiagnostico = async () => {
    try {
      setGeneratingAi(true);
      const userMetrics = users.find(u => u.uid === selectedUser.uid)?.progress || {};
      const report = await generarDiagnosticoAlumno(selectedUser.name, userMetrics, userSessions);
      setAiReport(report);
    } catch (error) {
      console.error(error);
      setAiReport("⚠️ Error al conectar con la IA: " + error.message + "\n\nSi acabas de añadir la clave en .env.local, intenta detener y reiniciar la consola ejecutando 'npm run dev' nuevamente.");
    } finally {
      setGeneratingAi(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gold">Cargando métricas...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-gold" style={{fontSize: '2rem'}}>Acceso Denegado</h2>
        <p className="text-muted">No tienes permisos de Administrador para ver esta página.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in p-8">
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>CENTRO DE COMANDO</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem' }}>Monitoreo en tiempo real de los estudiantes de la Academia.</p>
      </header>

      <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 215, 0, 0.3)' }}>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Estudiante</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Progreso</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Lecciones</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Última Actividad</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Tiempo Total</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Auditoría</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.uid} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {u.photoURL && <img src={u.photoURL} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />}
                    <div>
                      <div>{u.displayName}</div>
                      <div className="text-muted" style={{ fontSize: '0.8rem' }}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div 
                      role="progressbar" 
                      aria-valuenow={u.progress?.globalPercentage || 0} 
                      aria-valuemin="0" 
                      aria-valuemax="100" 
                      style={{ width: '100px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}
                    >
                      <div style={{ width: `${u.progress?.globalPercentage || 0}%`, height: '100%', background: 'var(--crear-gold)', borderRadius: '4px' }}></div>
                    </div>
                    <span>{u.progress?.globalPercentage || 0}%</span>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>{u.progress?.completedLessons?.length || 0}</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem' }} className="text-muted">
                  {new Date(u.lastLogin).toLocaleString()}<br/>
                  <span style={{ color: 'var(--crear-gold)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {formatModuleName(u.progress?.lastVisitedModule)}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  {u.progress?.totalTimeSpent ? `${u.progress.totalTimeSpent} min` : '0 min'}
                </td>
                <td style={{ padding: '1rem' }}>
                  <button 
                    onClick={() => handleViewHistory(u.uid, u.displayName)}
                    style={{ background: 'transparent', border: '1px solid var(--crear-gold)', color: 'var(--crear-gold)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Ver Historial
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" style={{ padding: '2rem', textAlign: 'center' }} className="text-muted">
                  Aún no hay estudiantes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de Historial de Auditoría */}
      {selectedUser && (
        <div 
          onClick={(e) => { if (e.target === e.currentTarget) closeHistory(); }}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        >
          <div 
            className="glass-panel animate-fade-in relative w-full max-w-4xl p-8" 
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button 
              onClick={closeHistory}
              aria-label="Cerrar historial"
              className="absolute top-6 right-6 text-gold text-2xl hover:text-white transition-colors"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              &times;
            </button>
            <h2 id="modal-title" className="text-gold" style={{ marginTop: 0, marginBottom: '0.5rem' }}>Libro de Auditoría</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <p className="text-muted" style={{ margin: 0 }}>Historial de Conexiones de: <strong>{selectedUser.name}</strong></p>
              <button 
                onClick={handleGenerarDiagnostico} 
                disabled={generatingAi || loadingSessions}
                className="btn-primary" 
                style={{ background: 'var(--crear-blue)', borderColor: 'var(--crear-blue)', display: 'flex', gap: '8px', alignItems: 'center', opacity: (generatingAi || loadingSessions) ? 0.5 : 1 }}
              >
                {generatingAi ? '⏳ Procesando...' : '🧠 Generar Diagnóstico de Alto Rendimiento'}
              </button>
            </div>

            {aiReport && (
              <div className="glass-panel animate-fade-in" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--crear-gold)' }}>
                <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🤖 Diagnóstico de IA
                </h3>
                <div 
                  style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(aiReport.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--crear-gold);">$1</strong>')) }}
                />
              </div>
            )}

            {loadingSessions ? (
              <div className="text-center text-gold" style={{ padding: '2rem' }}>Cargando bitácora...</div>
            ) : userSessions.length === 0 ? (
              <div className="text-center text-muted" style={{ padding: '2rem' }}>No hay registros detallados para este estudiante.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {userSessions.map((session, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Ingreso:</div>
                        <div className="text-muted">{new Date(session.startedAt).toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Salida:</div>
                        <div className="text-muted">{new Date(session.lastActiveAt).toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Duración:</div>
                        <div className="text-muted">{session.durationMinutes || 0} min</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Dispositivo:</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={session.device}>
                          {session.device}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Auditoría de Acciones y Recorrido:</div>
                      <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#adb5bd', fontSize: '0.9rem' }}>
                        {session.history && session.history.length > 0 ? (
                          session.history.map((h, i) => {
                            const time = new Date(h.timestamp).toLocaleTimeString();
                            if (h.type === 'action') {
                              return (
                                <li key={i} style={{ marginBottom: '0.5rem', color: '#fff' }}>
                                  <span style={{ color: 'var(--crear-gold)' }}>[{time}]</span>
                                  <strong style={{ marginLeft: '8px', color: 'var(--crear-blue)' }}>⚡ {h.action}</strong>
                                  {h.details && <span style={{ marginLeft: '4px', opacity: 0.8 }}>({h.details})</span>}
                                </li>
                              );
                            } else {
                              // Es una ruta antigua o tipo 'route'
                              return (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>
                                  <span style={{ color: '#adb5bd' }}>[{time}]</span>
                                  <span style={{ marginLeft: '8px' }}>🧭 Visitó: {formatModuleName(h.path)}</span>
                                </li>
                              );
                            }
                          })
                        ) : (
                          <li>Ningún evento detectado (Sesión inactiva o error de red)</li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/AutoevaluacionCoach.jsx`

```javascript
import { useState } from 'react';
import { dimensionesAutoevaluacion, checklistCoach } from '../data/autoevaluacionCoach';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';

export default function AutoevaluacionCoach() {
  const [dimensionActiva, setDimensionActiva] = useState(null);
  const [tabActivo, setTabActivo] = useState('dimensiones'); // 'dimensiones' | 'checklists'
  const [checkedDiario, setCheckedDiario] = useState({});
  const [respuestasSemanal, setRespuestasSemanal] = useState({});

  const { user, sessionId } = useAuth();

  const handleCheck = (index) => {
    setCheckedDiario(prev => {
      const isChecking = !prev[index];
      if (isChecking && user) {
        logUserAction(user.uid, sessionId, 'Marcó Checkbox', `Checklist: ${checklistCoach.diario[index]}`);
      }
      return {...prev, [index]: isChecking};
    });
  };

  const handleInputChange = (index, value) => {
    setRespuestasSemanal(prev => ({...prev, [index]: value}));
  };

  const renderDimensiones = () => (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
      {dimensionesAutoevaluacion.map(dim => (
        <div key={dim.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', border: dimensionActiva === dim.id ? '1px solid var(--crear-gold)' : '1px solid rgba(255,255,255,0.05)' }}>
          <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            {dim.id}. {dim.titulo}
          </h3>

          {dimensionActiva === dim.id ? (
            <div className="animate-fade-in" style={{ flexGrow: 1 }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong className="text-blue" style={{ display: 'block', marginBottom: '0.5rem' }}>Preguntas de Autoevaluación (1-10):</strong>
                <ul className="text-muted" style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
                  {dim.preguntas.map((p, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{p}</li>)}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flex: 1, background: 'rgba(76, 175, 80, 0.1)', borderLeft: '2px solid #4caf50', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#4caf50', display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem' }}>SEÑALES DE PRESENCIA</strong>
                  <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-main)', fontSize: '0.8rem' }}>
                    {dim.senales_positivas.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div style={{ flex: 1, background: 'rgba(255, 82, 82, 0.1)', borderLeft: '2px solid var(--color-error)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: 'var(--color-error)', display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem' }}>SEÑALES DE AUSENCIA</strong>
                  <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-main)', fontSize: '0.8rem' }}>
                    {dim.senales_negativas.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>

              <div className="alert-info" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <strong className="text-main" style={{ display: 'block', marginBottom: '0.5rem' }}>🎯 Acciones de Mejora:</strong>
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                  {dim.accion_mejora.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>

              <button className="btn-secondary" style={{ width: '100%', padding: '8px' }} onClick={() => setDimensionActiva(null)}>
                Ocultar Detalles
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <ul className="text-muted" style={{ paddingLeft: '1.2rem', margin: '0 0 1.5rem 0', fontSize: '0.9rem' }}>
                {dim.preguntas.slice(0, 2).map((p, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{p}</li>)}
                <li>...</li>
              </ul>
              <button className="btn-primary" style={{ padding: '8px' }} onClick={() => {
                setDimensionActiva(dim.id);
                if (user) {
                  logUserAction(user.uid, sessionId, 'Auditó Dimensión', dim.titulo);
                }
              }}>
                Auditar Dimensión
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderChecklists = () => (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 className="text-blue" style={{ marginTop: 0, borderBottom: '1px solid var(--crear-blue)', paddingBottom: '0.5rem' }}>Checklist Post-Sesión</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Responde esto inmediatamente después de cada sesión de coaching.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {checklistCoach.diario.map((item, i) => (
            <label htmlFor={`diario-${i}`} key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', cursor: 'pointer', opacity: checkedDiario[i] ? 0.6 : 1, transition: 'opacity 0.2s' }}>
              <input 
                id={`diario-${i}`}
                type="checkbox" 
                checked={checkedDiario[i] || false}
                onChange={() => handleCheck(i)}
                style={{ marginTop: '0.2rem', accentColor: 'var(--crear-gold)' }} 
              />
              <span className="text-main" style={{ fontSize: '0.95rem', textDecoration: checkedDiario[i] ? 'line-through' : 'none' }}>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 className="text-gold" style={{ marginTop: 0, borderBottom: '1px solid var(--crear-gold)', paddingBottom: '0.5rem' }}>Auditoría Semanal</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Tu espacio de reflexión al cerrar la semana operativa.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {checklistCoach.semanal.map((item, i) => (
            <div key={i}>
              <label htmlFor={`semanal-${i}`} className="text-main" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{item}</label>
              <input 
                id={`semanal-${i}`}
                type="text" 
                value={respuestasSemanal[i] || ''}
                onChange={(e) => handleInputChange(i, e.target.value)}
                placeholder="Reflexiona aquí..." 
                style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 className="text-main" style={{ marginTop: 0, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>Evaluación de Impacto (Q)</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Métricas duras para evaluar cada trimestre.</p>
        <ul className="text-muted" style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem' }}>
          {checklistCoach.trimestral.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.8rem' }}>{item}</li>
          ))}
        </ul>
        <div className="alert-warning" style={{ marginTop: '1.5rem' }}>
          <strong>Llamado a la Acción:</strong> Revisa tu Plan de Desarrollo Personal si no estás alcanzando el 80% de coachees con quiebres reales.
        </div>
      </div>

    </div>
  );

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Autoevaluación Coach 🧭</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Herramienta de auditoría profunda para evaluar tu propia efectividad, congruencia y capacidad para generar quiebres reales. No es sobre qué tan bueno eres, sino <strong>qué impacto estás generando</strong>.
        </p>
      </header>

      {/* Navegación por Pestañas Internas */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <button
          onClick={() => setTabActivo('dimensiones')}
          style={{
            background: tabActivo === 'dimensiones' ? 'var(--crear-blue)' : 'rgba(255,255,255,0.05)',
            color: tabActivo === 'dimensiones' ? '#fff' : 'var(--text-main)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 24px',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
        >
          Las 8 Dimensiones
        </button>
        <button
          onClick={() => setTabActivo('checklists')}
          style={{
            background: tabActivo === 'checklists' ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
            color: tabActivo === 'checklists' ? '#000' : 'var(--text-main)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 24px',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
        >
          Checklists & Métricas
        </button>
      </div>

      {tabActivo === 'dimensiones' ? renderDimensiones() : renderChecklists()}

    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/Dashboard.jsx`

```javascript
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then((data) => {
        if (data) setProgress(data);
      });
    }
  }, [user]);

  return (
    <>
      <header className="dashboard-header" aria-label="Cabecera del Dashboard">
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          {user?.photoURL && <img src={user.photoURL} alt="Foto de perfil del estudiante" style={{width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--crear-gold)'}} />}
          <div>
            <h2 style={{fontSize: '2.5rem'}}>Hola, <span className="text-gold">{user?.displayName ? user.displayName.split(' ')[0] : 'Estudiante'}</span></h2>
            <p className="text-muted" style={{fontSize: '1.25rem'}}>Continúa tu entrenamiento.</p>
          </div>
        </div>
        <button className="btn-logout" onClick={logout} aria-label="Cerrar sesión de tu cuenta">Cerrar sesión</button>
      </header>

      <section aria-label="Grounding de Preparación" style={{ marginBottom: '2rem' }}>
        <article className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--crear-blue)', background: 'rgba(23, 42, 69, 0.4)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ flex: 1 }}>
            <h3 className="text-blue" style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>

              Preparación y Presencia (Grounding)
            </h3>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem' }}>
              Antes de continuar tu aprendizaje, realiza un ciclo <strong>5-5</strong> para optimizar tu receptividad cognitiva.
              Inhala por la nariz durante 5 segundos y exhala por la boca durante 5 segundos. Repite 3 veces.
            </p>
          </div>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/groundings')}
            aria-label="Ir a la sección de Groundings completos"
            style={{ padding: '0.6rem 1.2rem', whiteSpace: 'nowrap' }}
          >
            Ir a Groundings
          </button>
        </article>
      </section>

      <section className="dashboard-grid" aria-label="Resumen de Progreso">
        <article className="glass-panel p-6">
          <h3 className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '1rem'}}>Progreso Global</h3>
          <div className="progress-bar-container" aria-label={`Progreso global al ${progress?.globalPercentage || 0} por ciento`}>
            <div className="progress-bar-fill" style={{width: `${progress?.globalPercentage || 0}%`}}></div>
          </div>
          <p className="text-muted" style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>{progress?.globalPercentage || 0}% completado</p>
        </article>

        <article className="glass-panel p-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <h3 className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '1rem'}}>Última Actividad</h3>
            <h4 style={{fontSize: '1.5rem', margin: '0 0 0.5rem 0'}}>{progress?.lastVisitedModule === '/modulo/modulo1' ? 'Fundamentos Teóricos' : 
                 progress?.lastVisitedModule?.includes('evaluacion') ? 'Evaluación Completada' : 
                 'Módulos Avanzados'}</h4>
            <p className="text-muted" style={{marginBottom: '1.5rem'}}>
              {progress?.lastVisitedModule?.includes('evaluacion') 
                ? 'Elige tu siguiente paso en la Ruta de Formación.' 
                : 'Bases del Coaching, Principios de Posibilidad y Ontología.'}
            </p>
          </div>
          <button 
            className="btn-primary"
            aria-label="Continuar donde dejaste el entrenamiento"
            onClick={() => {
              const route = progress?.lastVisitedModule;
              if (route && route.includes('evaluacion')) {
                navigate('/ruta');
              } else {
                navigate(route && route !== '/dashboard' ? route : '/modulo/modulo1');
              }
            }}
          >
            Continuar donde lo dejé
          </button>
        </article>
      </section>

      {/* SECCIÓN OFICIAL: TAREAS & RETOS EN CONJUNTO DEL EQUIPO (DEADLINES C1) */}
      <section aria-label="Tareas y Retos de Equipo" style={{ marginTop: '2rem' }}>
        <article className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(0, 210, 255, 0.3)', borderRadius: '1.25rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.4)', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', letterSpacing: '1px' }}>⚡ RETOS EN CONJUNTO & DEADLINES C1</span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
                Tareas y Retos Sincronizados de Equipo
              </h3>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', maxWidth: '650px' }}>
                Organiza las metas grupales antes, durante y después de Capítulo 1. Deadlines vivos calculados en tiempo real según la fecha de entrenamiento de tu sede.
              </p>
            </div>

            {/* BOTÓN + TAREA / RETO DE ALTO CONTRASTE Y MÁXIMA VISIBILIDAD */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/tareas-qt')}
                style={{
                  background: 'linear-gradient(135deg, #00d2ff 0%, #1a75bc 100%)',
                  color: '#030712',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 25px rgba(0, 210, 255, 0.6), inset 0 1px 1px rgba(255,255,255,0.8)',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 210, 255, 0.9)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 210, 255, 0.6), inset 0 1px 1px rgba(255,255,255,0.8)';
                }}
              >
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>+</span>
                <span>TAREAS & RETOS QT</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

```

---

### 📄 Archivo: `src/pages/Dinamicas.jsx`

```javascript
import { useState } from 'react';
import { dinamicas } from '../data/dinamicas';
import { useUI } from '../context/UIContext';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';

export default function Dinamicas() {
  const [filtro, setFiltro] = useState('Todos');
  const [dinamicaActiva, setDinamicaActiva] = useState(null);
  
  const { isFocusMode, toggleFocusMode } = useUI();
  const { user, sessionId } = useAuth();

  // Obtener la lista única de escenarios para el filtro
  const escenarios = ['Todos', ...new Set(dinamicas.map(d => d.escenario))];

  // Filtrar las dinámicas según la selección
  const dinamicasFiltradas = filtro === 'Todos' 
    ? dinamicas 
    : dinamicas.filter(d => d.escenario === filtro);

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div></div>
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: 0 }}>Máquina de Dinámicas</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Intervenciones diseñadas para quebrar patrones limitantes. No es lo que dices, es el espacio que creas.
        </p>
        
        <div className="alert-warning" style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0 auto', textAlign: 'left' }}>
          <strong>⚠️ Disclaimer de Seguridad:</strong> Participar en dinámicas emocionales o de quiebre debe ser voluntario. Cada intervención debe incluir la opción de detenerse o no participar. Asegúrate de ofrecer una alternativa silenciosa. Estas prácticas NO sustituyen atención médica o psicológica; no utilices dinámicas intensas con personas en crisis activa o trauma reciente.
        </div>
      </header>

      {/* Buscador / Filtro */}
      <section className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1rem', marginTop: 0 }}>¿Qué le pasa a tu equipo?</h3>
        <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Selecciona el síntoma principal para encontrar la dinámica adecuada:</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {escenarios.map(esc => (
            <button 
              key={esc}
              onClick={() => {
                setFiltro(esc);
                setDinamicaActiva(null);
              }}
              aria-pressed={filtro === esc}
              style={{
                background: filtro === esc ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
                color: filtro === esc ? '#000' : 'var(--text-main)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: filtro === esc ? 'bold' : 'normal',
                transition: 'all 0.2s',
                fontSize: '0.9rem'
              }}
            >
              {esc}
            </button>
          ))}
        </div>
      </section>

      {/* Guía si está en "Todos" */}
      {filtro === 'Todos' && (
        <div className="alert-info" style={{ marginBottom: '2rem' }}>
          <p><strong>Guía Rápida:</strong> Cada dinámica genera un quiebre. No son ejercicios "agradables"; están diseñadas para incomodar y desplazar. Selecciona un escenario arriba o explora la lista completa a continuación.</p>
        </div>
      )}

      {/* Resultados */}
      <div className="grid-2-cols">
        {dinamicasFiltradas.map((dinamica) => (
          <div key={dinamica.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 className="text-gold" style={{ margin: 0 }}>{dinamica.id}. {dinamica.nombre}</h3>
              <span style={{ 
                background: 'rgba(1, 180, 228, 0.1)', 
                color: 'var(--crear-blue)', 
                padding: '4px 10px', 
                borderRadius: '12px', 
                fontSize: '0.75rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                ⏱️ {dinamica.tiempo}
              </span>
            </div>
            
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              <strong>Escenario:</strong> {dinamica.descripcion_escenario}
            </p>
            <p className="highlight-blue" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              🎯 <strong>Objetivo:</strong> {dinamica.objetivo}
            </p>

            {dinamicaActiva === dinamica.id ? (
              <div className="animate-fade-in">
                <h4 className="text-main" style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Instrucciones:</h4>
                <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {dinamica.instrucciones.map((inst, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{inst}</li>
                  ))}
                </ol>

                <h4 className="text-main" style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Preguntas de Cierre:</h4>
                <ul className="icon-list blue-bullets" style={{ marginBottom: '1.5rem' }}>
                  {dinamica.preguntas_cierre.map((preg, idx) => (
                    <li key={idx} style={{ color: 'var(--crear-gold)', fontWeight: 'bold', fontSize: '0.9rem' }}>{preg}</li>
                  ))}
                </ul>

                <button 
                  className="btn-secondary" 
                  style={{ width: '100%', padding: '8px' }}
                  onClick={() => setDinamicaActiva(null)}
                >
                  Ocultar Detalles
                </button>
              </div>
            ) : (
              <button 
                className="btn-primary" 
                style={{ marginTop: 'auto', padding: '10px' }}
                onClick={() => {
                  setDinamicaActiva(dinamica.id);
                  if (user) {
                    logUserAction(user.uid, sessionId, 'Abrió Dinámica', dinamica.nombre);
                  }
                }}
              >
                Ver Instrucciones
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/EvaluacionContainer.jsx`

```javascript
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { evaluacionesRegistry } from '../data/evaluacionesRegistry';
import { saveEvaluationResult, updateLastVisited, logUserAction } from '../services/db';
import { evaluarRespuestaAlumno } from '../services/ai';
import DOMPurify from 'dompurify';
import { curriculum } from '../data/curriculum';
import { getUserProgress } from '../services/db';

export default function EvaluacionContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, sessionId } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  
  const evalData = evaluacionesRegistry[id];

  const [studentAnswer, setStudentAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [aiFeedback, setAiFeedback] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (user) {
      updateLastVisited(user.uid, `/evaluacion/${id}`);
      
      getUserProgress(user.uid).then(progress => {
        const prog = progress || {};
        const moduleIndex = curriculum.findIndex(m => m.id === id);
        if (moduleIndex > 0) {
          const prevMod = curriculum[moduleIndex - 1];
          const isPrevCompleted = prevMod.tieneEvaluacion 
            ? prog.evaluationsPassed?.includes(prevMod.id)
            : prevMod.lecciones?.every(l => prog.completedLessons?.includes(l.id));
            
          if (!isPrevCompleted) {
            navigate('/ruta');
          }
        }
      });
    }
  }, [user, id, navigate]);

  if (!evalData) {
    return (
      <div className="module-container" style={{maxWidth: '800px', margin: '4rem auto', textAlign: 'center'}}>
        <h2 className="text-gold">Evaluación no encontrada</h2>
        <p className="text-muted">La evaluación para este módulo aún no está disponible.</p>
        <button className="btn-primary" onClick={() => navigate('/dashboard')}>Volver al inicio</button>
      </div>
    );
  }

  const handleEvaluate = async () => {
    if (!studentAnswer.trim() || isEvaluating) return;
    
    setIsEvaluating(true);
    if (user) logUserAction(user.uid, sessionId, 'Envió Respuesta a IA', `Módulo: ${evalData.title}`);
    
    try {
      const result = await evaluarRespuestaAlumno(evalData.title, evalData.caseStudy, studentAnswer);
      setAiFeedback(result.feedback);
      setPassed(result.passed);
      setIsFinished(true);
      
      if (user) {
        logUserAction(user.uid, sessionId, 'Finalizó Evaluación IA', `Aprobó: ${result.passed ? 'Sí' : 'No'}`);
        // Consider a "score" of 100 if passed, 0 if not passed for the DB layer
        const percentage = result.passed ? 100 : 0;
        await saveEvaluationResult(user.uid, id, percentage, result.passed);
      }
    } catch (error) {
      console.error(error);
      setAiFeedback("Hubo un error de conexión con nuestro Master Coach IA. Por favor, intenta de nuevo o avisa a soporte técnico.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatFeedback = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--crear-gold);">$1</strong>');
  };

  if (isFinished) {
    return (
      <div className="module-container animate-fade-in" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
        <div className="glass-panel p-6" style={{marginTop: '4rem', borderLeft: `4px solid ${passed ? 'var(--color-success)' : 'var(--color-error)'}`}}>
          <h1 style={{fontSize: '3rem', color: passed ? 'var(--color-success)' : 'var(--color-error)'}}>
            {passed ? '¡Aprobado por el Master Coach!' : 'Requiere Refinamiento'}
          </h1>
          
          <div style={{ textAlign: 'left', marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🤖 Feedback de la IA
            </h3>
            <div 
              style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(formatFeedback(aiFeedback))}}
            />
          </div>

          <div className="alert-info" style={{marginTop: '2rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
            <strong>Nota sobre la IA:</strong> El feedback de nuestro Master Coach IA tiene un propósito estrictamente formativo preliminar. La IA evaluará tu capacidad para identificar el problema central, tu no-directividad y la claridad de tu intervención práctica. Las decisiones de certificación importantes están sujetas a revisión humana.
          </div>

          <p className="text-muted" style={{marginTop: '2rem', marginBottom: '3rem'}}>
            {passed 
              ? 'Has demostrado una aplicación profunda de la metodología. Tu avance ha sido registrado en tu expediente.' 
              : 'La maestría toma tiempo. Revisa el feedback, vuelve a estudiar el módulo y perfecciona tu respuesta.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {!passed && (
              <button className="btn-secondary" onClick={() => { setIsFinished(false); setAiFeedback(null); }}>
                Intentar de nuevo
              </button>
            )}
            <button className="btn-primary" onClick={() => navigate('/dashboard')}>
              Volver al Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="module-container animate-fade-in" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>{evalData.title}</p>
          
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        
        <h1 style={{fontSize: '2.2rem', margin: 0}}>Evaluación Práctica (IA)</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>{evalData.description}</p>
      </header>

      <div className="glass-panel p-6" style={{marginBottom: '2rem', borderLeft: '4px solid var(--crear-gold)'}}>
        <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem' }}>Caso de Estudio</h3>
        <p style={{fontSize: '1.25rem', lineHeight: '1.8', whiteSpace: 'pre-wrap'}}>{evalData.caseStudy}</p>
      </div>

      <div className="glass-panel p-6" style={{marginBottom: '2rem', borderLeft: '4px solid var(--crear-blue)', background: 'rgba(52, 168, 83, 0.05)'}}>
        <h4 className="text-blue" style={{ marginTop: 0, marginBottom: '1rem' }}>📋 Rúbrica de Evaluación IA</h4>
        <ul className="icon-list blue-bullets" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <li><strong>Identificación del problema:</strong> ¿Reconoces el desvío central (ej. parálisis por análisis, victimización)?</li>
          <li><strong>Calidad de Intervención:</strong> ¿Tu propuesta es coherente con el modelo (grounding, reencuadre, confrontación compasiva)?</li>
          <li><strong>No-directividad:</strong> ¿Usas preguntas e indagación en lugar de dar consejos técnicos?</li>
          <li><strong>Acción y Límites:</strong> ¿Llevas al cliente a una acción concreta y verificable, respetando los límites profesionales?</li>
        </ul>
      </div>

      <div className="glass-panel p-6" style={{marginBottom: '2rem'}}>
        <label htmlFor="studentAnswer" style={{ display: 'block', marginBottom: '1rem', color: 'var(--crear-gold)', fontWeight: 'bold' }}>
          Tu Intervención (Respuesta):
        </label>
        <textarea
          id="studentAnswer"
          value={studentAnswer}
          onChange={(e) => setStudentAnswer(e.target.value)}
          placeholder="Escribe tu razonamiento aquí. Demuestra que puedes aplicar la distinción en el mundo real..."
          style={{
            width: '100%',
            minHeight: '200px',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '1rem',
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <footer style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button 
          className="btn-primary" 
          onClick={handleEvaluate}
          disabled={!studentAnswer.trim() || isEvaluating}
          style={{
            opacity: (!studentAnswer.trim() || isEvaluating) ? 0.5 : 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {isEvaluating ? '🧠 IA Evaluando...' : 'Enviar para Evaluación Mestra'}
        </button>
      </footer>
    </div>
  )
}

```

---

### 📄 Archivo: `src/pages/Evaluaciones.jsx`

```javascript
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';
import { curriculum } from '../data/curriculum';

export default function Evaluaciones() {
  const { user } = useAuth();
  const [evaluationsPassed, setEvaluationsPassed] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchProgress = async () => {
      const progress = await getUserProgress(user.uid) || {};
      setEvaluationsPassed(progress.evaluationsPassed || []);
    };
    fetchProgress();
  }, [user]);

  const evaluaciones = curriculum
    .filter(mod => mod.tieneEvaluacion)
    .map(mod => ({
      id: mod.id,
      titulo: `Evaluación: ${mod.titulo.replace(/Módulo \d+: /, '')}`,
      modulo: mod.titulo.split(':')[0],
      estado: 'disponible',
      pasado: evaluationsPassed.includes(mod.id)
    }));

  return (
    <div className="fade-in">
      <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Centro de Evaluaciones</h1>
      <p className="text-muted" style={{marginBottom: '3rem', fontSize: '1.1rem'}}>
        Demuestra tu dominio de los conceptos. Recuerda que la retroalimentación es parte del aprendizaje.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {evaluaciones.map(ev => (
          <div key={ev.id} className="glass-panel" style={{padding: '2rem', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
              <span style={{color: 'var(--crear-blue)', fontWeight: 'bold', fontSize: '0.9rem'}}>{ev.modulo}</span>
              {ev.pasado && <span style={{fontSize: '0.8rem', background: 'rgba(52, 168, 83, 0.2)', color: 'var(--color-success)', padding: '2px 8px', borderRadius: '10px'}}>Aprobado</span>}
            </div>
            
            <h2 style={{fontSize: '1.4rem', marginBottom: '1rem'}} className="text-main">
              {ev.titulo}
            </h2>
            
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.6)', flex: 1}}>
              <li style={{marginBottom: '0.5rem'}}>🤖 Simulación de caso con Master Coach IA</li>
              <li>🎯 Criterio: Calidad de la distinción</li>
            </ul>

            <Link to={`/evaluacion/${ev.id}`} className={ev.pasado ? "btn-secondary" : "btn-primary"} style={{textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box'}}>
              {ev.pasado ? 'Repasar Evaluación' : 'Comenzar Evaluación'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/Glosario.jsx`

```javascript
import React from 'react';
import { useUI } from '../context/UIContext';

export default function Glosario() {
  const { isFocusMode, toggleFocusMode } = useUI();

  const terminos = [
    {
      termino: "Grounding",
      definicion: "Práctica breve de atención corporal, respiración y presencia utilizada para favorecer el enfoque, disminuir distracciones y preparar al participante para una conversación o actividad. Ayuda a recuperar la claridad, pero no sustituye el proceso analítico ni constituye una intervención psicoterapéutica profunda."
    },
    {
      termino: "Quiebre (Ontológico)",
      definicion: "Declaración consciente de que el flujo de transparencia (la rutina automática) se ha interrumpido. No es algo negativo per se, sino un espacio de diseño donde una nueva posibilidad puede ser declarada. Un quiebre siempre vive en la interpretación del observador, no en el hecho biológico o físico."
    },
    {
      termino: "Futuro de Posibilidad",
      definicion: "Declaración de una aspiración que amplía el marco habitual de acción y exige nuevas decisiones, capacidades y compromisos. Funciona como un faro de dirección, no como un KPI rígido o una métrica operativa de éxito."
    },
    {
      termino: "El Observador",
      definicion: "La manera particular en la que una persona (o sistema) percibe el mundo, condicionada por sus creencias, biología, historia y lenguaje. Alterar al observador significa cambiar el rango de acciones posibles que esa persona puede ver y ejecutar."
    },
    {
      termino: "Responsabilidad Radical",
      definicion: "Postura de liderazgo donde se asume agencia total sobre las propias respuestas, interpretaciones y acciones. NO significa que la persona sea culpable de lo que le ocurre, ni ignora la existencia de barreras sistémicas o clínicas; significa adueñarse de la capacidad de respuesta (habilidad para responder)."
    },
    {
      termino: "Enrolamiento",
      definicion: "El proceso de invitar a otros a participar en un futuro de posibilidad de manera libre y comprometida. No es persuadir, convencer ni manipular desde la carencia, sino crear un contexto compartido donde el otro elige expandirse."
    },
    {
      termino: "Coaching de Alto Rendimiento",
      definicion: "Marco metodológico del programa que utiliza principios de filosofía, liderazgo y ontología del lenguaje para generar resultados extraordinarios a través de la expansión de las posibilidades de acción del observador."
    }
  ];

  return (
    <div className="module-container animate-fade-in" style={{maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>
            Referencia
          </p>
          
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              aria-label="Activar Modo Enfoque"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px'}}
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        
        <h1 style={{fontSize: '2.5rem', margin: 0}}>Glosario de Conceptos Centrales</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          Definiciones estandarizadas para mantener la coherencia ontológica y la precisión ética a lo largo de todo el programa de formación.
        </p>
      </header>

      <div className="grid-1-col" style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {terminos.map((item, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--crear-gold)' }}>
            <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1.3rem' }}>
              {item.termino}
            </h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
              {item.definicion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/Groundings.jsx`

```javascript
import { useState, useEffect } from 'react';
import { groundings, groundingEmergencia } from '../data/groundings';
import { useUI } from '../context/UIContext';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';

export default function Groundings() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('Inhala'); // Inhala, Mantén, Exhala
  const [timeLeft, setTimeLeft] = useState(4);


  const [filtro, setFiltro] = useState('Todos');
  const [groundingActivo, setGroundingActivo] = useState(null);
  
  const { isFocusMode, toggleFocusMode } = useUI();
  const { user, sessionId } = useAuth();

  // Obtener escenarios para el filtro
  const escenarios = ['Todos', ...new Set(groundings.map(g => g.escenario))];
  const groundingsFiltrados = filtro === 'Todos' 
    ? groundings 
    : groundings.filter(g => g.escenario === filtro);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (phase === 'Inhala') {
              setPhase('Mantén');
              return 7;
            } else if (phase === 'Mantén') {
              setPhase('Exhala');
              return 8;
            } else {
              setPhase('Inhala');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
      setPhase('Inhala');
      setTimeLeft(4);
    }
    return () => clearInterval(interval);
  }, [isActive, phase]);

  const getCircleSize = () => {
    if (!isActive) return 150;
    if (phase === 'Inhala') return 250;
    if (phase === 'Mantén') return 250;
    if (phase === 'Exhala') return 150;
    return 150;
  };

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div></div>
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: 0 }}>Herramienta Maestra: Groundings</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Un <strong>grounding</strong> NO es meditación ni relajación. Es una intervención breve diseñada para generar un <strong>quiebre</strong> y prepararte para la acción.
        </p>
      </header>

      {/* Herramienta Auxiliar: Respiración */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
        <h3 className="text-main" style={{ marginBottom: '1rem', zIndex: 2 }}>Herramienta Auxiliar: Regulación 4-7-8</h3>
        <p className="text-muted" style={{ marginBottom: '2rem', zIndex: 2, textAlign: 'center', maxWidth: '600px' }}>Usa esta técnica para reducir la activación emocional antes de aplicar un grounding de quiebre.</p>
        
        <div style={{
          width: `${getCircleSize()}px`,
          height: `${getCircleSize()}px`,
          borderRadius: '50%',
          background: phase === 'Exhala' ? 'rgba(1, 180, 228, 0.2)' : 'rgba(255, 183, 3, 0.2)',
          border: `2px solid ${phase === 'Exhala' ? 'var(--crear-blue)' : 'var(--crear-gold)'}`,
          transition: phase === 'Inhala' ? 'all 4s linear' : phase === 'Exhala' ? 'all 8s linear' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isActive ? '0 0 40px rgba(255,183,3,0.1)' : 'none',
          marginBottom: '2rem',
          zIndex: 2
        }}>
          <h2 style={{fontSize: '2rem', margin: 0}}>{isActive ? timeLeft : '4-7-8'}</h2>
          <p style={{fontSize: '0.9rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase'}}>{isActive ? phase : 'Respiración'}</p>
        </div>

        <button className={isActive ? "btn-secondary" : "btn-primary"} onClick={() => setIsActive(!isActive)} style={{zIndex: 2}}>
          {isActive ? 'Detener' : 'Comenzar'}
        </button>
      </div>

      {/* Grounding de Emergencia */}
      <div className="alert-warning" style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🚨 {groundingEmergencia.nombre} ({groundingEmergencia.duracion})</h3>
        <p style={{ marginBottom: '1rem' }}>Úsalo cuando el grupo esté completamente disperso o en resistencia severa.</p>
        <ol style={{ paddingLeft: '1.2rem', margin: 0 }}>
          {groundingEmergencia.instrucciones.map((inst, idx) => (
            <li key={idx} style={{ marginBottom: '0.3rem' }}>{inst}</li>
          ))}
        </ol>
      </div>

      {/* Buscador / Filtro */}
      <section className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1rem', marginTop: 0 }}>Catálogo de Groundings de Quiebre</h3>
        <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Selecciona el estado actual de los participantes para encontrar el grounding adecuado:</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {escenarios.map(esc => (
            <button 
              key={esc}
              onClick={() => {
                setFiltro(esc);
                setGroundingActivo(null);
              }}
              aria-pressed={filtro === esc}
              style={{
                background: filtro === esc ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
                color: filtro === esc ? '#000' : 'var(--text-main)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: filtro === esc ? 'bold' : 'normal',
                transition: 'all 0.2s',
                fontSize: '0.9rem'
              }}
            >
              {esc}
            </button>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <div className="grid-2-cols">
        {groundingsFiltrados.map((g) => (
          <div key={g.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 className="text-gold" style={{ margin: 0 }}>{g.id}. {g.nombre}</h3>
              <span style={{ background: 'rgba(1, 180, 228, 0.1)', color: 'var(--crear-blue)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                ⏱️ {g.duracion}
              </span>
            </div>
            
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <strong>Escenario:</strong> {g.escenario}
            </p>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <strong>Formato:</strong> {g.formato}
            </p>

            {groundingActivo === g.id ? (
              <div className="animate-fade-in">
                <h4 className="text-main" style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Instrucciones:</h4>
                <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {g.instrucciones.map((inst, idx) => {
                    const [step, desc] = inst.split(': ');
                    return (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <strong className="text-main">{step}:</strong> {desc}
                      </li>
                    );
                  })}
                </ol>

                <div className="highlight-blue" style={{ marginBottom: '1.5rem' }}>
                  <strong>Pregunta de Cierre:</strong><br/> {g.pregunta_cierre}
                </div>

                <button className="btn-secondary" style={{ width: '100%', padding: '8px' }} onClick={() => setGroundingActivo(null)}>
                  Ocultar Detalles
                </button>
              </div>
            ) : (
              <button 
                className="btn-primary" 
                style={{ marginTop: 'auto', padding: '10px' }} 
                onClick={() => {
                  setGroundingActivo(g.id);
                  if (user) {
                    logUserAction(user.uid, sessionId, 'Abrió Grounding', g.nombre);
                  }
                }}
              >
                Ver Grounding
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/MaquinaQuiebres.jsx`

```javascript
import { useState } from 'react';
import { maquinaQuiebres } from '../data/maquinaQuiebres';
import { useUI } from '../context/UIContext';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';

export default function MaquinaQuiebres() {
  const [patronActivo, setPatronActivo] = useState(null);
  const { isFocusMode, toggleFocusMode } = useUI();
  const { user, sessionId } = useAuth();

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div></div>
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: 0 }}>Máquina de Quiebres ⚡</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Genera intervenciones quirúrgicas para romper patrones limitantes en tiempo real.
        </p>

        <div className="alert-warning" style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0 auto', textAlign: 'left' }}>
          <strong>⚠️ Disclaimer de Seguridad:</strong> Participar en intervenciones de quiebre debe ser voluntario. Cada intervención debe incluir la opción de detenerse o no participar. Asegúrate de ofrecer una alternativa silenciosa. Estas prácticas NO sustituyen atención médica o psicológica; no utilices intervenciones intensas con personas en crisis activa o trauma reciente.
        </div>
      </header>

      {/* Arquitectura Teórica */}
      <section className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1.5rem', marginTop: 0 }}>Arquitectura: Las 4 Fases del Quiebre</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>1. Interrupción</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Rompe la inercia del patrón con Groundings o preguntas disruptivas.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>2. Desplazamiento</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Mueve a la persona de su posición fija a la posibilidad usando Dinámicas.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>3. Declaración</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Compromisos públicos, contratos o manifiestos del equipo.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>4. Acción</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Traducir el quiebre en resultados con planes y Checkpoints.</p>
          </div>
        </div>
      </section>

      {/* Selector de Patrones Limitantes */}
      <h3 className="text-main" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Los 12 Patrones Limitantes</h3>
      <p className="text-muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>Haz clic en el patrón que identifica a tu equipo para desplegar su receta de quiebre.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {maquinaQuiebres.map((mq) => (
          <button 
            key={mq.id}
            onClick={() => {
              const isOpening = patronActivo !== mq.id;
              setPatronActivo(isOpening ? mq.id : null);
              if (isOpening && user) {
                logUserAction(user.uid, sessionId, 'Diseñó Quiebre', mq.patron);
              }
            }}
            aria-pressed={patronActivo === mq.id}
            style={{
              background: patronActivo === mq.id ? 'var(--crear-blue)' : 'rgba(255,255,255,0.03)',
              color: patronActivo === mq.id ? '#fff' : 'var(--text-main)',
              border: `1px solid ${patronActivo === mq.id ? 'var(--crear-blue)' : 'rgba(255,255,255,0.1)'}`,
              padding: '1.2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <strong style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'block' }}>{mq.id}. {mq.patron}</strong>
            <span style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.4 }}>{mq.descripcion}</span>
          </button>
        ))}
      </div>

      {/* Visualizador de la Receta (Aparece al seleccionar un patrón) */}
      {patronActivo && (
        <div className="glass-panel animate-fade-in" style={{ padding: '2rem', border: '1px solid var(--crear-gold)' }}>
          {maquinaQuiebres.filter(m => m.id === patronActivo).map(mq => (
            <div key={mq.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <h2 className="text-gold" style={{ margin: 0 }}>Receta: {mq.patron}</h2>
                <button 
                  onClick={() => setPatronActivo(null)}
                  aria-label="Cerrar receta"
                  style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
                >
                  &times;
                </button>
              </div>

              <div className="alert-info" style={{ marginBottom: '2rem' }}>
                <strong className="text-blue">Quiebre Necesario:</strong> {mq.quiebre_necesario}
              </div>

              {/* Receta Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {mq.receta.map((paso, idx) => (
                  <div key={idx} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '150px 1fr', 
                    gap: '1rem', 
                    background: 'rgba(0,0,0,0.2)', 
                    padding: '1rem', 
                    borderRadius: '8px',
                    borderLeft: `4px solid ${idx === 0 ? 'var(--color-error)' : idx === 1 ? '#ffb703' : idx === 2 ? '#01b4e4' : 'var(--color-success)'}` 
                  }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)', fontSize: '0.9rem' }}>{paso.fase}</div>
                    <div>
                      <strong style={{ color: 'var(--crear-gold)', display: 'block', marginBottom: '0.2rem' }}>{paso.herramienta}</strong>
                      <span className="text-muted" style={{ fontSize: '0.9rem' }}>{paso.instrucciones}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="highlight-blue" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '0.5rem', color: 'var(--crear-blue)' }}>Pregunta de Quiebre</span>
                <strong style={{ fontSize: '1.2rem', color: '#fff' }}>"{mq.pregunta_quiebre}"</strong>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/ModuloContainer.jsx`

```javascript
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { modulesRegistry } from '../data/modulesRegistry';
import { updateLastVisited, markLessonCompleted, getUserProgress } from '../services/db';
import DOMPurify from 'dompurify';
import { curriculum } from '../data/curriculum';

export default function ModuloContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    setCurrentLessonIndex(0);
    if (user) {
      updateLastVisited(user.uid, `/modulo/${id}`);
      getUserProgress(user.uid).then(progress => {
        const prog = progress || {};
        setCompletedLessons(prog.completedLessons || []);
        
        // Verificación de bloqueo secuencial
        const moduleIndex = curriculum.findIndex(m => m.id === id);
        if (moduleIndex > 0) {
          const prevMod = curriculum[moduleIndex - 1];
          const isPrevCompleted = prevMod.tieneEvaluacion 
            ? prog.evaluationsPassed?.includes(prevMod.id)
            : prevMod.lecciones?.every(l => prog.completedLessons?.includes(l.id));
            
            if (!isPrevCompleted) {
            navigate('/ruta');
            return;
          }
        }
        setIsVerifying(false);
      });
    } else {
      setIsVerifying(false);
    }
  }, [user, id, navigate]);

  const currentModuleData = modulesRegistry[id] || modulesRegistry['modulo1'];
  const currentLesson = currentModuleData[currentLessonIndex];

  const handleNext = async () => {
    if (user) {
      try {
        await markLessonCompleted(user.uid, currentLesson.id);
        if (!completedLessons.includes(currentLesson.id)) {
          setCompletedLessons([...completedLessons, currentLesson.id]);
        }
      } catch (error) {
        console.error("Error al guardar progreso (posible error de permisos Firestore):", error);
        // Continuamos de todos modos para que la plataforma no se trabe
      }
    }
    
    if (currentLessonIndex < currentModuleData.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      window.scrollTo(0, 0);
    } else {
      // Modulo terminado, ir a evaluación o ruta
      const currentModInfo = curriculum.find(m => m.id === id);
      if (currentModInfo && !currentModInfo.tieneEvaluacion) {
        navigate('/ruta');
      } else {
        navigate(`/evaluacion/${id}`);
      }
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isVerifying) {
    return (
      <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem', paddingTop: '4rem', textAlign: 'center'}}>
        <div className="text-gold" style={{fontSize: '1.2rem', opacity: 0.8}}>Verificando acceso...</div>
      </div>
    );
  }

  return (
    <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>
            Módulo {id.replace('modulo', '')} • Lección {currentLessonIndex + 1} de {currentModuleData.length}
          </p>
          
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              aria-label="Activar Modo Enfoque para lectura sin distracciones"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px'}}
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        
        <h1 style={{fontSize: '2.5rem', margin: 0}}>{currentLesson.title}</h1>
        
        <div className="progress-bar-container" style={{height: '4px', marginTop: '0.5rem'}}>
          <div className="progress-bar-fill" style={{width: `${((currentLessonIndex) / currentModuleData.length) * 100}%`}}></div>
        </div>
      </header>

      <article className="glass-panel p-6 content-reader" style={{lineHeight: '1.8', fontSize: '1.1rem'}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentLesson.content)}}>
      </article>

      <footer style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
        <button 
          className="btn-secondary" 
          onClick={handlePrevious}
          disabled={currentLessonIndex === 0}
          aria-disabled={currentLessonIndex === 0 ? "true" : "false"}
          aria-label="Ir a la lección anterior"
          style={{opacity: currentLessonIndex === 0 ? 0.5 : 1}}
        >
          Anterior
        </button>
        <button 
          className="btn-primary" 
          onClick={handleNext}
          aria-label={currentLessonIndex === currentModuleData.length - 1 ? 'Ir a la Evaluación del módulo' : 'Completar esta lección y continuar a la siguiente'}
        >
          {currentLessonIndex === currentModuleData.length - 1 ? 'Ir a la Evaluación' : 'Completar y Siguiente'}
        </button>
      </footer>
    </div>
  )
}

```

---

### 📄 Archivo: `src/pages/NotFound.jsx`

```javascript
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="fade-in p-8 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
      <h1 className="text-gold" style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>No encontramos esta página</h2>
      <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '400px' }}>
        Parece que te has desviado de tu ruta de entrenamiento. La página que buscas no existe o ha sido movida.
      </p>
      <Link to="/dashboard" className="btn-primary" style={{ textDecoration: 'none' }}>
        Volver al Dashboard
      </Link>
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/ProgramaEntrenamiento.jsx`

```javascript
import { useState } from 'react';
import { programaTeoria, programaHerramientas, programaSemanas, programaRecursos } from '../data/programaEntrenamiento';

export default function ProgramaEntrenamiento() {
  const [tabActivo, setTabActivo] = useState('fundamentos');
  const [semanaActiva, setSemanaActiva] = useState(null);

  const renderFundamentos = () => (
    <div className="animate-fade-in">
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid var(--crear-gold)' }}>
        <h2 className="text-gold" style={{ marginTop: 0 }}>{programaTeoria.vision.titulo}</h2>
        <p className="text-main" style={{ fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
          "{programaTeoria.vision.texto}"
        </p>
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {programaTeoria.vision.detalles.map((d, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--crear-gold)' }}>
              <strong className="text-gold" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{d.dimension}</strong>
              <span className="text-muted" style={{ fontSize: '0.95rem' }}>{d.detalle}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {programaTeoria.fundamentos.map((f, i) => (
          <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="text-blue" style={{ marginTop: 0, fontSize: '1.5rem', marginBottom: '1rem' }}>{f.titulo}</h3>
            {f.definicion && <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{f.definicion}</p>}
            
            {f.diferencias && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-error)', color: 'var(--color-error)' }}>Hacer Enrolamiento</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--crear-gold)', color: 'var(--crear-gold)' }}>Ser Enrolamiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.diferencias.map((dif, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{dif.hacer}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{dif.ser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {f.filosofiaTabla && (
              <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-blue)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Fuente</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Concepto</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-gold)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Aplicación al Liderazgo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.filosofiaTabla.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>{row.fuente}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{row.concepto}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-main)' }}>{row.aplicacion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {f.pilaresEstructurados && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
                {f.pilaresEstructurados.map((pilar, idx) => (
                  <div key={idx} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--crear-gold)' }}>
                    <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{pilar.nombre}</h4>
                    <p style={{ margin: '0 0 1rem 0' }}><strong>Compromiso:</strong> <span className="text-muted">{pilar.compromiso}</span></p>
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Práctica:</strong>
                      <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                        {pilar.practica.map((prac, i) => <li key={i}>{prac}</li>)}
                      </ul>
                    </div>
                    <p style={{ margin: 0 }}><strong>Impacto:</strong> <span className="text-blue">{pilar.impacto}</span></p>
                  </div>
                ))}
              </div>
            )}

            {f.ejemplos && (
              <div style={{ overflowX: 'auto', marginTop: '1rem', marginBottom: '2rem' }}>
                <h4 className="text-gold" style={{ marginBottom: '1rem' }}>Ejemplos de Futuros Imposibles</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-error)', color: 'var(--color-error)' }}>Futuro "Realista"</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--crear-gold)', color: 'var(--crear-gold)' }}>Futuro de Posibilidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.ejemplos.map((ej, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{ej.realista}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{ej.imposible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {f.compromisos && (
              <div style={{ marginTop: '1rem' }}>
                <h4 className="text-blue" style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Los 3 Compromisos del Programa</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {f.compromisos.map((comp, idx) => (
                    <div key={idx} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px' }}>
                      <h5 className="text-gold" style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{comp.nombre}</h5>
                      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{comp.descripcion}</p>
                      <strong>Cómo:</strong>
                      <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {comp.como.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );

  const renderHerramientas = () => (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
      {programaHerramientas.map(h => (
        <div key={h.id} className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 className="text-gold" style={{ margin: 0 }}>{h.id}. {h.nombre}</h3>
            <span style={{ background: 'rgba(1, 180, 228, 0.1)', color: 'var(--crear-blue)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem' }}>{h.uso}</span>
          </div>
          <p className="text-main" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{h.proposito}"</p>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
            {h.estructuraList && (
              <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {h.estructuraList.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
              </ul>
            )}
            
            {h.estructura && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {h.estructura.map((item, i) => (
                  <div key={i} style={{ fontSize: '0.85rem' }}>
                    <strong className="text-blue" style={{ display: 'block', marginBottom: '0.2rem' }}>{item.dimension}</strong>
                    <div style={{ color: 'var(--text-muted)', paddingLeft: '0.5rem', borderLeft: '2px solid var(--crear-gold)' }}>
                      {item.descripcion}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderSemanas = () => (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p className="text-muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>Despliega cada semana para ver los llamados a la acción diarios (Daily Calls).</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {programaSemanas.map(s => (
          <div key={s.semana} className="glass-panel" style={{ overflow: 'hidden' }}>
            <button 
              onClick={() => setSemanaActiva(semanaActiva === s.semana ? null : s.semana)}
              aria-expanded={semanaActiva === s.semana}
              aria-controls={`semana-panel-${s.semana}`}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: semanaActiva === s.semana ? 'rgba(1, 180, 228, 0.1)' : 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', textAlign: 'left' }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', marginBottom: '0.3rem' }}>Semana {s.semana}: <span className="text-gold">{s.titulo}</span></h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--crear-blue)' }}>Herramientas: {s.herramientasClave}</p>
              </div>
              <span aria-hidden="true" style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: semanaActiva === s.semana ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            
            {semanaActiva === s.semana && (
              <div id={`semana-panel-${s.semana}`} style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--crear-gold)', padding: '1rem', borderRadius: '8px', marginTop: '1.5rem', textAlign: 'center' }}>
                  <strong className="text-gold">Compromiso de Acción Semanal:</strong> {s.compromiso}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {s.dias.map(d => (
                    <div key={d.dia} style={{ display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.8rem 1rem', borderRadius: '8px', alignItems: 'center' }}>
                      <div style={{ background: 'var(--crear-blue)', color: '#fff', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', minWidth: '60px', textAlign: 'center', fontSize: '0.85rem' }}>Día {d.dia}</div>
                      <div className="text-muted" style={{ fontSize: '0.95rem' }}>{d.reto}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecursos = () => (
    <div className="animate-fade-in">
      
      <div style={{ marginBottom: '4rem' }}>
        <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Rituales del Programa</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {programaRecursos.dinamicas.map((d, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 className="text-main" style={{ margin: '0 0 0.5rem 0' }}>{d.nombre}</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--crear-blue)', display: 'block', marginBottom: '1rem' }}>Cuándo: {d.uso}</span>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>{d.proposito}</p>
              <strong style={{ fontSize: '0.9rem' }}>Cómo:</strong>
              <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {d.instrucciones.map((inst, idx) => <li key={idx}>{inst}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1.5rem' }}>Métricas y Evaluación</h3>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Métrica</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-gold)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Meta</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-blue)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Cómo medir</th>
              </tr>
            </thead>
            <tbody>
              {programaRecursos.evaluacion.metricas.map((m, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{m.metrica}</td>
                  <td style={{ padding: '1rem', color: 'var(--crear-gold)' }}>{m.meta}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{m.como}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <h4 className="text-gold" style={{ marginBottom: '1rem' }}>Evaluación Final (Día 42)</h4>
          <p className="text-muted" style={{ marginBottom: '1rem' }}>Cada participante presenta:</p>
          <ol style={{ paddingLeft: '1.5rem', margin: 0, color: 'var(--text-main)', lineHeight: 1.8 }}>
            {programaRecursos.evaluacion.evaluacionFinal.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Películas Inspiradoras</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {programaRecursos.peliculas.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-blue)' }}>
                <h4 className="text-main" style={{ margin: '0 0 0.3rem 0' }}>{p.titulo}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Tema:</strong> {p.tema}</div>
                <div className="highlight-blue" style={{ fontSize: '0.85rem', padding: '0.5rem', marginBottom: '0.8rem' }}><strong>Dinámica:</strong> "{p.dinamica}"</div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-block', fontSize: '0.8rem', padding: '6px 12px', textAlign: 'center', textDecoration: 'none' }}>
                    🎬 Ver Tráiler / Escena
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Podcasts y Lecturas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {programaRecursos.podcasts.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-gold)' }}>
                <h4 className="text-main" style={{ margin: '0 0 0.3rem 0' }}>{p.titulo}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Tema:</strong> {p.tema}</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {p.episodios.map((ep, idx) => (
                    <li key={idx} style={{ marginBottom: '0.4rem' }}>
                      {typeof ep === 'string' ? ep : ep.nombre}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-blue)', marginTop: '1rem' }}>
              <h4 className="text-main" style={{ margin: '0 0 1rem 0' }}>Lecturas Fundamentales</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {programaRecursos.lecturas.map((l, idx) => <li key={idx}>{l}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="text-blue" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Programa 6 Semanas 🚀</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Ser Enrolamiento y Creadores de Contexto de Alto Rendimiento.
        </p>
      </header>

      {/* Navegación por Pestañas */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {[
          { id: 'fundamentos', label: 'Fundamentos' },
          { id: 'herramientas', label: 'Herramientas' },
          { id: 'semanas', label: 'El Viaje (6 Semanas)' },
          { id: 'recursos', label: 'Recursos & Rituales' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setTabActivo(tab.id)}
            style={{
              background: tabActivo === tab.id ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
              color: tabActivo === tab.id ? '#000' : 'var(--text-main)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '10px 24px',
              borderRadius: '24px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s',
              fontSize: '0.95rem'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      {tabActivo === 'fundamentos' && renderFundamentos()}
      {tabActivo === 'herramientas' && renderHerramientas()}
      {tabActivo === 'semanas' && renderSemanas()}
      {tabActivo === 'recursos' && renderRecursos()}

    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/RutaFormacion.jsx`

```javascript
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { curriculum } from '../data/curriculum';
import { getUserProgress } from '../services/db';

export default function RutaFormacion() {
  const { user } = useAuth();
  const [progress, setProgress] = useState({ completedLessons: [], evaluationsPassed: [] });

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then(p => setProgress(p || { completedLessons: [], evaluationsPassed: [] }));
    }
  }, [user]);

  const isModuleCompleted = (mod) => {
    // Si tiene evaluación, debe estar aprobada
    if (mod.tieneEvaluacion) {
      return progress.evaluationsPassed?.includes(mod.id);
    }
    // Si no tiene evaluación, todas sus lecciones deben estar completadas
    return mod.lecciones.every(l => progress.completedLessons?.includes(l.id));
  };

  const getModuleStatus = (mod, index) => {
    if (isModuleCompleted(mod)) return 'completado';
    if (index === 0) return 'disponible';
    
    // Desbloqueado si el anterior está completado
    const prevMod = curriculum[index - 1];
    if (isModuleCompleted(prevMod)) return 'disponible';
    
    return 'bloqueado';
  };
  return (
    <div className="fade-in">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '2.5rem', margin: 0}}>Ruta de Formación</h1>
      </div>
      
      <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '3rem'}}>
        Este es el mapa de tu viaje de aprendizaje. Completa cada módulo para desbloquear el siguiente.
      </p>

      <div className="timeline" style={{position: 'relative', paddingLeft: '2rem'}}>
        {/* Línea vertical conectora */}
        <div style={{position: 'absolute', left: '0', top: '10px', bottom: '0', width: '4px', background: 'rgba(255,183,3,0.2)', borderRadius: '2px'}}></div>

        {curriculum.map((mod, index) => {
          const status = getModuleStatus(mod, index);
          return (
          <article key={mod.id} style={{position: 'relative', marginBottom: '3rem'}} aria-labelledby={`title-${mod.id}`}>
            {/* Punto en la línea */}
            <div style={{
              position: 'absolute',
              left: '-2.55rem',
              top: '5px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: status === 'bloqueado' ? 'var(--bg-card)' : 'var(--crear-gold)',
              border: `4px solid ${status === 'bloqueado' ? 'rgba(255,255,255,0.2)' : 'var(--bg-dark)'}`,
              boxShadow: status === 'bloqueado' ? 'none' : '0 0 10px rgba(255,183,3,0.5)',
              zIndex: 2
            }}></div>

            <div className={`glass-panel p-6 ${status === 'bloqueado' ? 'opacity-50' : ''}`} style={{
              opacity: status === 'bloqueado' ? 0.6 : 1,
              transition: 'all 0.3s ease',
              borderLeft: status === 'disponible' ? '4px solid var(--crear-gold)' : ''
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem'}}>
                    <h2 id={`title-${mod.id}`} style={{margin: 0}} className={status === 'bloqueado' ? 'text-muted' : 'text-gold'}>
                      {mod.titulo}
                    </h2>
                    {status === 'bloqueado' && (
                      <span aria-label="Módulo Bloqueado" style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>Bloqueado</span>
                    )}
                  </div>
                  <p className="text-muted" style={{marginBottom: '1.5rem'}}>{mod.descripcion}</p>
                </div>

                {status === 'disponible' ? (
                  <Link to={`/modulo/${mod.id}`} className="btn-primary" style={{textDecoration: 'none'}} aria-label={`Iniciar ${mod.titulo}`}>
                    Iniciar Módulo
                  </Link>
                ) : status === 'bloqueado' ? (
                  <button className="btn-secondary" disabled aria-disabled="true" style={{opacity: 0.5, cursor: 'not-allowed'}} aria-label={`${mod.titulo} está bloqueado`}>
                    Bloqueado
                  </button>
                ) : (
                  <Link to={`/modulo/${mod.id}`} className="btn-secondary" style={{color: 'var(--color-success)', borderColor: 'var(--color-success)', textDecoration: 'none'}} aria-label={`${mod.titulo} completado. Repasar.`}>
                    Completado ✓
                  </Link>
                )}
              </div>
            </div>
          </article>
        )})}
      </div>
    </div>
  );
}

```

---

### 📄 Archivo: `src/pages/TareasQuantumTeam.jsx`

```javascript
import { useState, useEffect, useMemo } from 'react';
import { TAREAS_QT_C1 } from '../data/tareasQtData';
import calendarioC1 from '../data/calendario_c1.json';

// RETOS EN CONJUNTO PREDETERMINADOS (METAS COLECTIVAS DE EQUIPO SINCRONIZADAS AL C1)
const RETOS_CONJUNTO_DEFAULT = [
  {
    id: "reto-01",
    tipo: "RETO_EQUIPO",
    fase: "ANTES",
    faseTitulo: "Pre-C1: Blindaje y Convocatoria",
    titulo: "🔥 Reto Colectivo: 100% de Confirmación y Llamadas de Alineación",
    descripcion: "Todo el equipo de Aliados y QT debe contactar al 100% de sus participantes asignados antes del jueves a las 18:00 para garantizar cero ausencias en sala.",
    metaColectiva: "100% Asistencia confirmada",
    offsetDays: -1,
    time: "18:00",
    puntosXP: "+500 XP Equipo",
    origen: "Regla de Convocatoria Masiva"
  },
  {
    id: "reto-02",
    tipo: "RETO_EQUIPO",
    fase: "DURANTE",
    faseTitulo: "Día 1 Viernes: El Quiebre",
    titulo: "⚡ Reto Colectivo: Cero Tardanzas y Retiro Hermético de Celulares",
    descripcion: "Ningún participante ni miembro del equipo ingresa después de las 09:00 AM. Registro al 100% con celulares resguardados en sobres sellados.",
    metaColectiva: "0 minutos de tardanza en todo el grupo",
    offsetDays: 0,
    time: "09:00",
    puntosXP: "+350 XP Equipo",
    origen: "Estándar de Impecabilidad"
  },
  {
    id: "reto-03",
    tipo: "RETO_EQUIPO",
    fase: "DURANTE",
    faseTitulo: "Día 2 Sábado: El Espejo",
    titulo: "🛡️ Reto Colectivo: Sostenimiento de Cartas & Cero Abandono en Procesos",
    descripcion: "Garantizar la recolección y entrega impecable del 100% de cartas confidenciales de familiares y sostenimiento perimetral sin fugas en sala.",
    metaColectiva: "100% de cartas procesadas",
    offsetDays: 1,
    time: "20:00",
    puntosXP: "+600 XP Equipo",
    origen: "Módulo 3: El Gran Traspaso"
  },
  {
    id: "reto-04",
    tipo: "RETO_EQUIPO",
    fase: "DURANTE",
    faseTitulo: "Día 3 Domingo: Graduación & Enrolamiento",
    titulo: "🏆 Reto Colectivo: Conversión Superior al 85% a Capítulo Dos (PP%)",
    descripcion: "Acompañar y enrolar a los participantes hacia su siguiente nivel de liderazgo y transformación en Capítulo 2.",
    metaColectiva: "PP% > 85% de graduados enrolados a C2",
    offsetDays: 2,
    time: "18:00",
    puntosXP: "+1000 XP Equipo Máximo",
    origen: "Métricas de Expansión Global"
  },
  {
    id: "reto-05",
    tipo: "RETO_EQUIPO",
    fase: "DESPUÉS",
    faseTitulo: "Post-C1: Continuidad & Reencuentro",
    titulo: "🤝 Reto Colectivo: 100% de Graduados en la Noche de Reencuentro",
    descripcion: "Llamada de seguimiento y presencia total de la hermandad del equipo en el primer taller de seguimiento post-C1.",
    metaColectiva: "85%+ de presencia en Reencuentro",
    offsetDays: 5,
    time: "19:00",
    puntosXP: "+400 XP Equipo",
    origen: "Cadena de Continuidad"
  }
];

export default function TareasQuantumTeam() {
  const sedes = [
    { code: 'UIO1', label: 'Quito (UIO)', flag: '🇪🇨' },
    { code: 'GYE', label: 'Guayaquil (GYE)', flag: '🇪🇨' },
    { code: 'LIM', label: 'Lima (LIM)', flag: '🇵🇪' },
    { code: 'CUE', label: 'Cuenca (CUE)', flag: '🇪🇨' },
    { code: 'MED', label: 'Medellín (MED)', flag: '🇨🇴' },
    { code: 'MEX', label: 'CDMX (MEX)', flag: '🇲🇽' }
  ];

  const [selectedSede, setSelectedSede] = useState('LIM');
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL', 'TAREAS', 'RETOS'
  const [filterFase, setFilterFase] = useState('TODAS');
  const [filterRol, setFilterRol] = useState('TODOS');
  const [now, setNow] = useState(new Date());
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  // Tareas personalizadas creadas por el usuario
  const [customItems, setCustomItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpsl_custom_qt_items_v1') || '[]');
    } catch {
      return [];
    }
  });

  // Estado del formulario de nueva tarea/reto
  const [newItemForm, setNewItemForm] = useState({
    tipo: 'TAREA',
    titulo: '',
    descripcion: '',
    fase: 'ANTES',
    offsetDays: 0,
    time: '12:00',
    rol: 'Todos los QT',
    entregable: '',
    metaColectiva: '',
    puntosXP: '+150 XP'
  });

  // Progreso completado
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpsl_qt_completed_tasks_v1') || '{}');
    } catch {
      return {};
    }
  });

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Lista de eventos C1 de la sede seleccionada
  const sedeEvents = useMemo(() => {
    const list = calendarioC1[selectedSede] || [];
    return [...list].sort((a, b) => new Date(a.start) - new Date(b.start));
  }, [selectedSede]);

  // Seleccionar automáticamente el próximo evento futuro
  useEffect(() => {
    if (sedeEvents.length > 0) {
      const nowTime = now.getTime();
      const nextIdx = sedeEvents.findIndex(ev => new Date(ev.start).getTime() >= nowTime);
      setSelectedEventIndex(nextIdx !== -1 ? nextIdx : sedeEvents.length - 1);
    }
  }, [selectedSede, sedeEvents]);

  const activeEvent = sedeEvents[selectedEventIndex] || sedeEvents[0] || { start: '2026-09-11T09:00:00', equipo: '1' };
  const eventStartDate = useMemo(() => new Date(activeEvent.start), [activeEvent]);

  // Clave de almacenamiento
  const eventStorageKey = `${selectedSede}_EQ${activeEvent.equipo || selectedEventIndex}_${activeEvent.start}`;

  const toggleTask = (taskId) => {
    const updated = {
      ...completedTasks,
      [eventStorageKey]: {
        ...(completedTasks[eventStorageKey] || {}),
        [taskId]: !(completedTasks[eventStorageKey] && completedTasks[eventStorageKey][taskId])
      }
    };
    setCompletedTasks(updated);
    try {
      localStorage.setItem('cpsl_qt_completed_tasks_v1', JSON.stringify(updated));
    } catch (e) {
      console.warn("Storage warning:", e);
    }
  };

  // Guardar nueva tarea o reto creado
  const handleCreateNewItem = (e) => {
    e.preventDefault();
    if (!newItemForm.titulo) return;

    const newItem = {
      id: 'custom-' + Date.now(),
      ...newItemForm,
      offsetDays: Number(newItemForm.offsetDays),
      origenManual: 'Creado por el Equipo',
      origen: 'Reto Creado por el Equipo'
    };

    const updated = [...customItems, newItem];
    setCustomItems(updated);
    try {
      localStorage.setItem('cpsl_custom_qt_items_v1', JSON.stringify(updated));
    } catch (err) {
      console.warn("Storage error:", err);
    }

    setShowNewTaskModal(false);
    setNewItemForm({
      tipo: 'TAREA',
      titulo: '',
      descripcion: '',
      fase: 'ANTES',
      offsetDays: 0,
      time: '12:00',
      rol: 'Todos los QT',
      entregable: '',
      metaColectiva: '',
      puntosXP: '+150 XP'
    });
  };

  // Unión de tareas maestras + retos en conjunto + personalizadas
  const allMasterItems = useMemo(() => {
    const combined = [
      ...TAREAS_QT_C1.map(t => ({ ...t, tipo: 'TAREA' })),
      ...RETOS_CONJUNTO_DEFAULT,
      ...customItems
    ];
    return combined;
  }, [customItems]);

  // Cálculo de fechas y deadlines en tiempo real
  const computedItems = useMemo(() => {
    return allMasterItems.map(item => {
      const itemDate = new Date(eventStartDate);
      itemDate.setDate(itemDate.getDate() + item.offsetDays);
      const [h, m] = (item.time || "12:00").split(':').map(Number);
      itemDate.setHours(h || 12, m || 0, 0, 0);

      const isCompleted = !!(completedTasks[eventStorageKey] && completedTasks[eventStorageKey][item.id]);
      const diffMs = itemDate.getTime() - now.getTime();
      const isPast = diffMs < 0;
      const isToday = itemDate.toDateString() === now.toDateString();

      let status = 'UPCOMING';
      if (isCompleted) status = 'DONE';
      else if (isPast) status = 'OVERDUE';
      else if (isToday) status = 'TODAY';

      return {
        ...item,
        deadlineDate: itemDate,
        diffMs,
        isCompleted,
        status
      };
    });
  }, [allMasterItems, eventStartDate, now, completedTasks, eventStorageKey]);

  // Filtros de pestaña, fase y rol
  const filteredItems = useMemo(() => {
    return computedItems.filter(item => {
      if (activeTab === 'TAREAS' && item.tipo !== 'TAREA') return false;
      if (activeTab === 'RETOS' && item.tipo !== 'RETO_EQUIPO') return false;
      if (filterFase !== 'TODAS' && item.fase !== filterFase) return false;
      if (filterRol !== 'TODOS' && item.rol && !item.rol.toLowerCase().includes(filterRol.toLowerCase()) && !item.rol.includes('Todos')) return false;
      return true;
    });
  }, [computedItems, activeTab, filterFase, filterRol]);

  // Estadísticas
  const totalCount = computedItems.length;
  const completedCount = computedItems.filter(t => t.isCompleted).length;
  const progressPct = Math.round((completedCount / totalCount) * 100) || 0;

  // Cuenta regresiva
  const eventDiffMs = eventStartDate.getTime() - now.getTime();
  const isEventPast = eventDiffMs < 0;
  const countdownDays = Math.abs(Math.floor(eventDiffMs / (1000 * 60 * 60 * 24)));
  const countdownHours = Math.abs(Math.floor((eventDiffMs / (1000 * 60 * 60)) % 24));
  const countdownMinutes = Math.abs(Math.floor((eventDiffMs / (1000 * 60)) % 60));
  const countdownSeconds = Math.abs(Math.floor((eventDiffMs / 1000) % 60));

  const formatFechaLarga = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="tareas-qt-page" style={{ padding: '2rem 1.5rem', maxWidth: '1280px', margin: '0 auto', color: '#f3f4f6' }}>
      
      {/* HEADER DE IMPACTO */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem', border: '1px solid rgba(0, 210, 255, 0.35)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.12)', border: '1px solid rgba(0, 210, 255, 0.4)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '0.75rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d2ff', boxShadow: '0 0 8px #00d2ff' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.5px', color: '#00d2ff', textTransform: 'uppercase' }}>Sistema Operativo QT — Tareas & Retos Vivos</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>
              Tareas & Retos de Equipo en Vivo
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#9ca3af', fontSize: '0.95rem', maxWidth: '650px' }}>
              Metas colectivas y cronograma operacional sincronizado al minuto con el calendario oficial de Capítulo 1.
            </p>
          </div>

          {/* CUENTA REGRESIVA VIVA & BOTÓN + TAREA/RETO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
            
            {/* BOTÓN + TAREA / RETO DE ALTO CONTRASTE */}
            <button
              onClick={() => setShowNewTaskModal(true)}
              style={{
                background: 'linear-gradient(135deg, #00d2ff 0%, #1a75bc 100%)',
                color: '#030712',
                border: '2px solid #ffffff',
                boxShadow: '0 0 25px rgba(0, 210, 255, 0.7), inset 0 1px 1px rgba(255,255,255,0.9)',
                padding: '0.8rem 1.6rem',
                borderRadius: '9999px',
                fontWeight: 900,
                fontSize: '0.85rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 210, 255, 0.95)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 210, 255, 0.7), inset 0 1px 1px rgba(255,255,255,0.9)';
              }}
            >
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>+</span>
              <span>CREAR TAREA O RETO DE EQUIPO</span>
            </button>

            {/* Contador de Tiempo */}
            <div style={{ background: 'rgba(3, 7, 18, 0.85)', border: '1px solid rgba(212, 175, 55, 0.45)', borderRadius: '1rem', padding: '0.85rem 1.4rem', textAlign: 'center', minWidth: '260px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.25rem' }}>
                {isEventPast ? '⚡ ENTRENAMIENTO EN CURSO / FINALIZADO' : '⏳ CUENTA REGRESIVA AL INICIO C1'}
              </span>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>
                <div><span>{String(countdownDays).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>DÍAS</span></div>
                <span>:</span>
                <div><span>{String(countdownHours).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>HRS</span></div>
                <span>:</span>
                <div><span>{String(countdownMinutes).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>MIN</span></div>
                <span>:</span>
                <div><span style={{ color: '#00d2ff' }}>{String(countdownSeconds).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>SEG</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SELECTOR DE SEDE Y EDICIÓN */}
      <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: '1rem', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Píldoras de Sedes */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9ca3af', marginRight: '0.25rem' }}>SEDE:</span>
          {sedes.map(s => (
            <button
              key={s.code}
              onClick={() => setSelectedSede(s.code)}
              style={{
                background: selectedSede === s.code ? 'linear-gradient(135deg, rgba(0, 210, 255, 0.25), rgba(26, 117, 188, 0.4))' : 'rgba(255, 255, 255, 0.05)',
                border: selectedSede === s.code ? '1px solid #00d2ff' : '1px solid rgba(255, 255, 255, 0.1)',
                color: selectedSede === s.code ? '#00d2ff' : '#e5e7eb',
                padding: '0.45rem 0.85rem',
                borderRadius: '0.6rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>{s.flag}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Selector de Edición / Fecha de C1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9ca3af' }}>EDICIÓN C1:</span>
          <select
            value={selectedEventIndex}
            onChange={(e) => setSelectedEventIndex(Number(e.target.value))}
            style={{
              background: '#0a0f1c',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              color: '#ffffff',
              padding: '0.45rem 0.75rem',
              borderRadius: '0.6rem',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            {sedeEvents.map((ev, idx) => {
              const d = new Date(ev.start);
              return (
                <option key={idx} value={idx}>
                  {`Equipo #${ev.equipo || (idx + 1)} — ${d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })} ${ev.entrenador ? `(${ev.entrenador})` : ''}`}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* PESTAÑAS: TODOS / TAREAS OPERATIVAS / RETOS COLECTIVOS */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
        <button
          onClick={() => setActiveTab('ALL')}
          style={{
            background: activeTab === 'ALL' ? 'rgba(0, 210, 255, 0.2)' : 'transparent',
            border: activeTab === 'ALL' ? '1px solid #00d2ff' : '1px solid transparent',
            color: activeTab === 'ALL' ? '#00d2ff' : '#9ca3af',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          📋 TODAS ({computedItems.length})
        </button>
        <button
          onClick={() => setActiveTab('RETOS')}
          style={{
            background: activeTab === 'RETOS' ? 'rgba(255, 183, 3, 0.2)' : 'transparent',
            border: activeTab === 'RETOS' ? '1px solid #ffb703' : '1px solid transparent',
            color: activeTab === 'RETOS' ? '#ffb703' : '#9ca3af',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          🏆 RETOS EN CONJUNTO DEL EQUIPO ({computedItems.filter(i => i.tipo === 'RETO_EQUIPO').length})
        </button>
        <button
          onClick={() => setActiveTab('TAREAS')}
          style={{
            background: activeTab === 'TAREAS' ? 'rgba(0, 210, 255, 0.2)' : 'transparent',
            border: activeTab === 'TAREAS' ? '1px solid #00d2ff' : '1px solid transparent',
            color: activeTab === 'TAREAS' ? '#00d2ff' : '#9ca3af',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          ⚙️ TAREAS DE SALA ({computedItems.filter(i => i.tipo === 'TAREA').length})
        </button>
      </div>

      {/* BARRA DE PROGRESO GLOBAL */}
      <div className="glass-panel" style={{ padding: '1rem 1.5rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#e5e7eb' }}>
            Progreso del Equipo: <span style={{ color: '#00d2ff' }}>{completedCount} de {totalCount} completadas</span>
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 900, color: progressPct === 100 ? '#4ade80' : 'var(--crear-gold, #ffb703)' }}>
            {progressPct}%
          </span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg, #1a75bc, #00d2ff, #ffb703)', transition: 'width 0.4s ease' }}></div>
        </div>
      </div>

      {/* FILTROS DE FASE */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {['TODAS', 'ANTES', 'DURANTE', 'DESPUÉS'].map(f => (
          <button
            key={f}
            onClick={() => setFilterFase(f)}
            style={{
              background: filterFase === f ? '#00d2ff' : 'rgba(255,255,255,0.06)',
              color: filterFase === f ? '#030712' : '#d1d5db',
              border: 'none',
              padding: '0.35rem 0.75rem',
              borderRadius: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            {f === 'TODAS' ? 'TODAS LAS FASES' : f === 'ANTES' ? '🔵 PRE-C1' : f === 'DURANTE' ? '⚡ DURANTE C1' : '🟢 POST-C1'}
          </button>
        ))}
      </div>

      {/* LISTA DINÁMICA DE TAREAS Y RETOS */}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredItems.map((item) => {
          const isReto = item.tipo === 'RETO_EQUIPO';
          return (
            <div
              key={item.id}
              onClick={() => toggleTask(item.id)}
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '1rem',
                border: item.isCompleted
                  ? '1px solid rgba(74, 222, 128, 0.4)'
                  : isReto
                  ? '1px solid rgba(255, 183, 3, 0.45)'
                  : item.status === 'OVERDUE'
                  ? '1px solid rgba(239, 68, 68, 0.45)'
                  : item.status === 'TODAY'
                  ? '1px solid rgba(255, 183, 3, 0.55)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: item.isCompleted
                  ? 'rgba(74, 222, 128, 0.04)'
                  : isReto
                  ? 'rgba(255, 183, 3, 0.04)'
                  : 'rgba(11, 19, 41, 0.65)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ paddingTop: '0.2rem' }}>
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => {}}
                  style={{ width: '20px', height: '20px', accentColor: '#00d2ff', cursor: 'pointer' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.35rem',
                        textTransform: 'uppercase',
                        background: isReto ? 'rgba(255, 183, 3, 0.2)' : 'rgba(0, 210, 255, 0.15)',
                        color: isReto ? '#ffb703' : '#00d2ff',
                        border: isReto ? '1px solid rgba(255,183,3,0.4)' : '1px solid rgba(0,210,255,0.3)'
                      }}
                    >
                      {isReto ? '🏆 RETO COLECTIVO' : item.fase}
                    </span>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      margin: 0,
                      color: item.isCompleted ? '#9ca3af' : '#ffffff',
                      textDecoration: item.isCompleted ? 'line-through' : 'none'
                    }}>
                      {item.titulo}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: item.isCompleted ? 'rgba(74, 222, 128, 0.15)' : item.status === 'OVERDUE' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      color: item.isCompleted ? '#4ade80' : item.status === 'OVERDUE' ? '#f87171' : '#9ca3af'
                    }}>
                      {item.isCompleted ? '✓ COMPLETADO' : item.status === 'OVERDUE' ? '⚠️ VENCIDO' : 'PRÓXIMO'}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00d2ff', fontFamily: 'monospace' }}>
                      🕒 {formatFechaLarga(item.deadlineDate)}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.3rem 0 0.6rem', lineHeight: '1.5' }}>
                  {item.descripcion}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                  {item.metaColectiva && (
                    <span style={{ background: 'rgba(255, 183, 3, 0.1)', color: '#ffb703', padding: '0.15rem 0.5rem', borderRadius: '0.3rem', border: '1px solid rgba(255, 183, 3, 0.25)' }}>
                      🎯 <strong>Meta de Equipo:</strong> {item.metaColectiva}
                    </span>
                  )}
                  {item.puntosXP && (
                    <span style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', padding: '0.15rem 0.5rem', borderRadius: '0.3rem' }}>
                      ⚡ {item.puntosXP}
                    </span>
                  )}
                  {item.rol && (
                    <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '0.3rem' }}>
                      👤 {item.rol}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL PARA CREAR NUEVA TAREA / RETO DE EQUIPO */}
      {showNewTaskModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="glass-panel" style={{ maxWidth: '550px', width: '100%', padding: '2rem', borderRadius: '1.5rem', border: '1px solid #00d2ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
                🚀 Crear Tarea o Reto de Equipo
              </h2>
              <button onClick={() => setShowNewTaskModal(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>

            <form onSubmit={handleCreateNewItem} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>TIPO:</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setNewItemForm({ ...newItemForm, tipo: 'RETO_EQUIPO' })}
                    style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', background: newItemForm.tipo === 'RETO_EQUIPO' ? '#ffb703' : 'rgba(255,255,255,0.05)', color: newItemForm.tipo === 'RETO_EQUIPO' ? '#000' : '#fff', fontWeight: 800, border: 'none', cursor: 'pointer' }}
                  >
                    🏆 RETO COLECTIVO
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewItemForm({ ...newItemForm, tipo: 'TAREA' })}
                    style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', background: newItemForm.tipo === 'TAREA' ? '#00d2ff' : 'rgba(255,255,255,0.05)', color: newItemForm.tipo === 'TAREA' ? '#000' : '#fff', fontWeight: 800, border: 'none', cursor: 'pointer' }}
                  >
                    ⚙️ TAREA OPERATIVA
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>TÍTULO DE LA META O TAREA:</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Reto de Confirmación de Asistencia al 100%"
                  value={newItemForm.titulo}
                  onChange={e => setNewItemForm({ ...newItemForm, titulo: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>DESCRIPCIÓN / PROPÓSITO:</label>
                <textarea
                  rows="2"
                  placeholder="Explica el acuerdo o la meta que debe cumplir el equipo..."
                  value={newItemForm.descripcion}
                  onChange={e => setNewItemForm({ ...newItemForm, descripcion: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', resize: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>MOMENTO / FASE:</label>
                  <select
                    value={newItemForm.fase}
                    onChange={e => {
                      const f = e.target.value;
                      setNewItemForm({ ...newItemForm, fase: f, offsetDays: f === 'ANTES' ? -1 : f === 'DURANTE' ? 0 : 3 });
                    }}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                  >
                    <option value="ANTES">Pre-C1 (Antes del Viernes)</option>
                    <option value="DURANTE">Durante C1 (Viernes/Sábado/Domingo)</option>
                    <option value="DESPUÉS">Post-C1 (Reencuentro / Cierre)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>HORA DEADLINE:</label>
                  <input
                    type="time"
                    value={newItemForm.time}
                    onChange={e => setNewItemForm({ ...newItemForm, time: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                  />
                </div>
              </div>

              {newItemForm.tipo === 'RETO_EQUIPO' ? (
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#ffb703', marginBottom: '0.3rem' }}>META CUANTIFICABLE DE EQUIPO:</label>
                  <input
                    type="text"
                    placeholder="Ej: 100% de llamadas realizadas"
                    value={newItemForm.metaColectiva}
                    onChange={e => setNewItemForm({ ...newItemForm, metaColectiva: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,183,3,0.3)', color: '#fff' }}
                  />
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#00d2ff', marginBottom: '0.3rem' }}>ENTREGABLE / RESULTADO:</label>
                  <input
                    type="text"
                    placeholder="Ej: Acta de sala firmada"
                    value={newItemForm.entregable}
                    onChange={e => setNewItemForm({ ...newItemForm, entregable: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(0,210,255,0.3)', color: '#fff' }}
                  />
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setShowNewTaskModal(false)}
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '0.6rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '0.6rem', background: '#00d2ff', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 900 }}
                >
                  GUARDAR META
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

```

---

### 📄 Archivo: `src/services/ai.js`

```javascript
import { auth } from '../lib/firebase';

export const generarDiagnosticoAlumno = async (studentName, metrics, sessionsHistory) => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken() : '';

  // Preprocesar el historial para que la IA lo entienda fácilmente sin tokens innecesarios
  const historialResumido = sessionsHistory.map(s => {
    const fecha = new Date(s.startedAt).toLocaleDateString();
    const duracion = s.durationMinutes || 0;
    const mods = s.history ? s.history.length : 0;
    return 'Sesion (' + fecha + '): Duracion ' + duracion + ' min. Dispositivo: ' + s.device + '. Modulos: ' + mods;
  }).join('\n');

  const systemPrompt = `Eres un Master Coach de Alto Rendimiento y Analista de Comportamiento Humano de Alto Nivel.
Tu tarea es auditar la data biométrica y de conexión de un alumno en una plataforma e-learning y dar un diagnóstico de su nivel de compromiso.
Tienen que detectar si el alumno procrastina, si tiene un progreso congruente, o si "intelectualiza" (pasa horas conectándose sin completar tareas).

REGLAS DE FORMATO:
- Sé directo, quirúrgico y profesional. No saludes.
- Utiliza lenguaje de Neuro-Comunicación y Alto Rendimiento (ej. "estado de flujo", "fricción cognitiva", "locus de control", "congruencia operacional").
- Tu diagnóstico no debe exceder los 3 párrafos.
- Párrafo 1: Análisis del patrón de conexión.
- Párrafo 2: Posible estado mental/emocional o barrera del alumno.
- Párrafo 3: Recomendación ejecutiva para el coach titular.`;

  const userPrompt = `Analiza a este alumno:
Nombre: ${studentName}
Tiempo Total en Campus: ${metrics.totalTimeSpent || 0} minutos.
Lecciones Completadas: ${metrics.completedLessons ? metrics.completedLessons.length : 0}

Historial Reciente de Conexiones:
${historialResumido || 'No hay conexiones detalladas en el radar.'}
`;

  try {
    const response = await fetch('/api/evaluator', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.3,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("GROQ API ERROR:", errText);
      throw new Error(`Error en la respuesta de Groq API: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error al generar diagnóstico con IA:", error);
    return "Error al generar el diagnóstico: " + error.message;
  }
};

export const evaluarRespuestaAlumno = async (moduleTitle, question, studentAnswer) => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken() : '';

  const systemPrompt = `Eres un Master Coach Evaluador. Tu tarea es evaluar la respuesta de un alumno a un caso práctico.
El módulo evaluado es: ${moduleTitle}.
La pregunta fue: "${question}".

Criterios de Aprobación:
- El alumno debe demostrar comprensión profunda, no solo repetir teoría.
- Debe aplicar las distinciones de forma pragmática.
- Debe tener una longitud razonable (al menos unas cuantas oraciones con sentido).

Responde ÚNICAMENTE con un objeto JSON (sin texto adicional, sin bloques de código tipo \`\`\`json) que tenga esta estructura exacta:
{
  "passed": true o false,
  "feedback": "Tu feedback directo y constructivo (máximo 2 párrafos) al alumno, hablándole directamente."
}`;

  const userPrompt = `Respuesta del alumno:
"${studentAnswer}"

Genera el JSON de evaluación:`;

  try {
    const response = await fetch('/api/evaluator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.1,
        max_tokens: 500,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Error en la respuesta de Groq API: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    const resultContent = data.choices[0].message.content;
    return JSON.parse(resultContent);
  } catch (error) {
    console.error("Error al evaluar respuesta con IA:", error);
    throw error;
  }
};

```

---

### 📄 Archivo: `src/services/db.js`

```javascript
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, increment, arrayUnion, query, orderBy } from 'firebase/firestore';
import { getTotalLessonsCount, getTotalEvaluationsCount } from '../data/curriculum';

export const initializeUser = async (user) => {
  if (!user) return;
  const userRef = doc(db, 'users', user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      role: 'student',
      progress: {
        globalPercentage: 0,
        lastVisitedModule: '/modulo/modulo1',
        completedModules: [],
        completedLessons: [],
        evaluationsPassed: []
      }
    });
  } else {
    // Update last login
    await updateDoc(userRef, {
      lastLogin: new Date().toISOString()
    });
  }
};

export const getUserProgress = async (uid) => {
  let progress = null;
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      progress = snap.data().progress;
    }
  } catch (error) {
    console.warn("Firebase falló, recuperando de localStorage", error);
  }

  // Fallback a localStorage
  const localProgress = localStorage.getItem(`progress_${uid}`);
  if (localProgress) {
    const parsedLocal = JSON.parse(localProgress);
    // Merge preferenciando localStorage si tiene más avance
    if (!progress || (parsedLocal.globalPercentage > (progress.globalPercentage || 0))) {
      progress = parsedLocal;
    }
  }

  return progress;
};

export const updateLastVisited = async (uid, route) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.lastVisitedModule': route
    });
  } catch (error) {
    console.warn("Firebase falló, guardando ruta en localStorage", error);
  }
  
  // Guardar en localStorage
  const localData = JSON.parse(localStorage.getItem(`progress_${uid}`) || '{}');
  localData.lastVisitedModule = route;
  localStorage.setItem(`progress_${uid}`, JSON.stringify(localData));
};

const calculateGlobalPercentage = (completedLessons, evaluationsPassed) => {
  const totalMilestones = getTotalLessonsCount() + getTotalEvaluationsCount(); 
  const currentMilestones = (completedLessons?.length || 0) + (evaluationsPassed?.length || 0);
  let globalPercentage = Math.round((currentMilestones / totalMilestones) * 100);
  return globalPercentage > 100 ? 100 : globalPercentage;
};

export const markLessonCompleted = async (uid, lessonId) => {
  const progress = await getUserProgress(uid) || {};
  let completedLessons = progress.completedLessons || [];
  let evaluationsPassed = progress.evaluationsPassed || [];
  
  if (completedLessons.includes(lessonId)) return;
  completedLessons.push(lessonId);
  
  const globalPercentage = calculateGlobalPercentage(completedLessons, evaluationsPassed);

  // Intentar guardar en Firebase
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.completedLessons': completedLessons,
      'progress.globalPercentage': globalPercentage
    });
  } catch (error) {
    console.warn("Firebase falló al guardar, progreso seguro en localStorage", error);
  }

  // Backup Inquebrantable en LocalStorage
  const newProgress = { completedLessons, evaluationsPassed, globalPercentage };
  const existingLocal = JSON.parse(localStorage.getItem(`progress_${uid}`) || '{}');
  localStorage.setItem(`progress_${uid}`, JSON.stringify({ ...existingLocal, ...newProgress }));
};

export const saveEvaluationResult = async (uid, moduleId, score, passed) => {
  const progress = await getUserProgress(uid) || {};
  let evaluationsPassed = progress.evaluationsPassed || [];
  let completedLessons = progress.completedLessons || [];

  if (passed && !evaluationsPassed.includes(moduleId)) {
    evaluationsPassed.push(moduleId);
  }
  
  const globalPercentage = calculateGlobalPercentage(completedLessons, evaluationsPassed);

  // Intentar guardar en Firebase
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.evaluationsPassed': evaluationsPassed,
      'progress.globalPercentage': globalPercentage
    });
  } catch (error) {
    console.warn("Firebase falló al guardar evaluación, guardando en localStorage", error);
  }

  // Backup Inquebrantable en LocalStorage
  const newProgress = { completedLessons, evaluationsPassed, globalPercentage };
  const existingLocal = JSON.parse(localStorage.getItem(`progress_${uid}`) || '{}');
  localStorage.setItem(`progress_${uid}`, JSON.stringify({ ...existingLocal, ...newProgress }));
};

export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
};



// --- AUDITORÍA DE SESIONES ---

export const startSession = async (uid, deviceInfo) => {
  try {
    const sessionsCol = collection(db, 'users', uid, 'sessions');
    const sessionRef = doc(sessionsCol);
    const now = new Date().toISOString();
    await setDoc(sessionRef, {
      sessionId: sessionRef.id,
      startedAt: now,
      lastActiveAt: now,
      device: deviceInfo || navigator.userAgent,
      durationMinutes: 0,
      history: []
    });
    return sessionRef.id;
  } catch (error) {
    console.warn("Error al iniciar sesión de auditoría", error);
    return null;
  }
};

export const logSessionRoute = async (uid, sessionId, currentRoute) => {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'users', uid, 'sessions', sessionId);
    const now = new Date().toISOString();
    const historyEntry = { type: 'route', path: currentRoute, timestamp: now };
    
    await updateDoc(sessionRef, {
      lastActiveAt: now,
      history: arrayUnion(historyEntry)
    });
  } catch (error) {
    console.warn("Error logueando ruta de sesión", error);
  }
};

export const logUserAction = async (uid, sessionId, action, details = "") => {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'users', uid, 'sessions', sessionId);
    const now = new Date().toISOString();
    const historyEntry = { type: 'action', action, details, timestamp: now };
    
    await updateDoc(sessionRef, {
      lastActiveAt: now,
      history: arrayUnion(historyEntry)
    });
  } catch (error) {
    console.warn("Error logueando acción del usuario", error);
  }
};

export const updateSessionHeartbeat = async (uid, sessionId) => {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'users', uid, 'sessions', sessionId);
    const now = new Date().toISOString();
    
    await updateDoc(sessionRef, {
      lastActiveAt: now,
      durationMinutes: increment(5)
    });
    
    // Mantenemos el acumulado global funcionando
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.totalTimeSpent': increment(5)
    });
  } catch (error) {
    console.warn("Error actualizando latido de sesión", error);
  }
};

export const getUserSessions = async (uid) => {
  try {
    const q = query(collection(db, 'users', uid, 'sessions'), orderBy('startedAt', 'desc'));
    const snap = await getDocs(q);
    const sessions = [];
    snap.forEach(docSnap => sessions.push(docSnap.data()));
    return sessions;
  } catch (error) {
    console.error("Error obteniendo el historial de sesiones:", error);
    return [];
  }
};

```

---

### 📄 Archivo: `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

```

---

### 📄 Archivo: `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

---

