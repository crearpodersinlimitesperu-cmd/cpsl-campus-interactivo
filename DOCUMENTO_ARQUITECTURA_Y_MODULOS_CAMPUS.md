# DOCUMENTO MAESTRO: ARQUITECTURA, MÓDULOS Y FUNCIONALIDADES
## CPSL CAMPUS INTERACTIVO (SISTEMA INTERRUPCIÓN)
**Plataforma de Formación, Rigor Operativo y Simulación de Liderazgo**  
**Organización:** CREAR Poder Sin Límites  
**Versión:** 3.0.0 (Producción / Vercel: `cpsl-campus-interactivo.vercel.app`)  
**Fecha de Emisión:** 09 de Noviembre de 2026  
**Responsable Técnico y Académico:** Dirección de Operaciones & Gerencia de Sede  

---

## 1. MISIÓN Y PROPÓSITO DEL CAMPUS

### 1.1. ¿Qué es el Campus Interactivo (Sistema Interrupción)?
El **Campus Interactivo** es el ecosistema digital de autoentrenamiento, calibración y evaluación de competencias para el staff, coordinadores, entrenadores y líderes de **CREAR Poder Sin Límites**. Está diseñado bajo el marco de **Agencia Radical** (Responsabilidad Incondicional), Neurociencia Cognitiva y Ontología del Lenguaje.

### 1.2. Delimitación Estricta: Campus Interactivo vs Causa OS
Para preservar el rigor operativo y evitar duplicidades, las responsabilidades entre plataformas están estrictamente separadas:
* **Causa OS (`SO-AR`):** Plataforma administrativa, operativa y CRM. Gestiona vuelos internacionales, traslados, cartas de migración, contratos, bases de datos de Nodus, asistencias de participantes y balances contables de sede.
* **Campus Interactivo (`cpsl-campus-interactivo`):** Plataforma académica y vivencial. Gestiona el plan curricular de 11 módulos, simuladores de retos de sala (*El Crisol*), calibración pre-evento (*Grounding*), teoría sintérgica, glosario ontológico y la auditoría socrática de rigor/empatía de los líderes.

---

## 2. ARQUITECTURA TÉCNICA Y STACK TECNOLÓGICO

* **Frontend:** React 18 SPA con Vite 8 y React Router v6.
* **Diseño y Estilos:** CSS Variables reactivas con soporte multi-tema (Oscuro Neón, Claro Corporativo y Dorado Crear), Glassmorphism y animaciones de micro-interacción.
* **Autenticación:** Firebase Authentication (@crearpsl.net) con control de roles (`student`, `coach`, `admin`, `superadmin`).
* **Persistencia y Telemetría:** Cloud Firestore para sincronización en tiempo real de sesiones, marcas de tiempo, rutas navegadas y eventos de usuario. Sistema resiliente de respaldo en `localStorage` en caso de pérdida de conexión.
* **Motor de IA Socrática:** Integración con modelos de lenguaje vía Groq / Llama 3 para diagnósticos conductuales bidimensionales en tiempo real.

---

## 3. PLAN CURRICULAR: LOS 11 MÓDULOS OFICIALES DE FORMACIÓN

El plan de estudios central consta de **11 módulos** que combinan fundamentos teóricos, ejercicios prácticos de aplicación en sala y evaluaciones socráticas:

| Módulo | Título Oficial | Enfoque y Contenido Central | Evaluación Práctica |
| :--- | :--- | :--- | :---: |
| **M01** | **Fundamentos Teóricos** | Bases conceptuales del Coaching de Alto Rendimiento, observador y sistemas. | Sí |
| **M02** | **Arquitectura de Intervenciones** | Estructura estándar de sesiones, repertorio conversacional y diseño de quiebres. | Sí |
| **M03** | **Calibración de Estado y Dominio Somático** | Neurobiología de la presencia, respiración diafragmática y *State Calibration*. | Sí |
| **M04** | **Diseño de Programas y Prevención** | Estructura del ciclo de 90 días (*90-Day Performance Cycle*) y mitigación de desvíos. | Sí |
| **M05** | **Fundamentos Filosóficos del Ser** | Filosofía existencial aplicada (Heidegger, Sartre, Frankl) y autenticidad del líder. | Sí |
| **M06** | **Ontología del Lenguaje y Realidad** | Actos lingüísticos (afirmaciones, declaraciones, juicios, promesas) y logoterapia. | Sí |
| **M07** | **Liderazgo de Transformación Profunda** | Salto de posibilidad ontológica, enrolamiento masivo y cruce de umbrales cognitivos. | Sí |
| **M08** | **Integración y Legado Existencial** | Manifiesto personal del líder de alto rendimiento y plan de expansión continua. | Reflexiva |
| **M09** | **Parálisis, Sobreanálisis y Acción** | Eliminación de procrastinación intelectual, sesgos defensivos y acción masiva. | Sí |
| **M10** | **Alcance, Límites y Ética** | Código deontológico, confidencialidad, límites de coaching y derivación clínica. | No |
| **M11** | **Desbloquear la Propia Creatividad** | Deconstrucción de rigidez mental del facilitador, plasticidad y rituales de innovación. | No |

---

## 4. SIMULADORES Y HERRAMIENTAS INTERACTIVAS DE ALTO IMPACTO

### 4.1. El Crisol del Día (Simulador de Retos Situacionales)
* **Rutas:** `/crisol` · `/simulador`
* **Función:** Simulador interactivo basado en escenarios reales del manual maestro (*ESC-001*, *ESC-002*, etc.).
* **Mecánica:** Presenta una situación de alta tensión en sala (ej. quejas por reportes, desviaciones de vestimenta del staff, participantes secuestrados por el miedo).
* **Avatar Reactivo:** Un avatar gráfico cambia de expresión emocional en tiempo real según la opción elegida por el líder (receptivo, defensivo, molesto, etc.).
* **Cálculo de Cuadrante:** Califica la decisión en dos ejes simultáneos:
  * **Puntos de Rigor (-100 a +100):** Mantenimiento de acuerdos y cero drama.
  * **Puntos de Empatía (-100 a +100):** Desactivación del cerebro reptiliano y conexión humana.
  * **Objetivo:** Alcanzar el cuadrante de **Liderazgo Adaptativo (Alto Rigor + Alta Empatía)**.

### 4.2. Máquina de Quiebres Ontológicos
* **Ruta:** `/quiebres`
* **Función:** Herramienta interactiva para deconstruir juicios automáticos, conversaciones internas limitantes y transformarlos en declaraciones operativas y compromisos medibles.

### 4.3. Groundings y State Calibration
* **Ruta:** `/groundings`
* **Función:** Guía de calibración de estado psicofísico para entrenadores y coordinadores previa a su ingreso al salón de entrenamiento.
* **Componentes:** Técnicas de anclaje somático, enfoque atencional, neutralidad de observador y protocolos de emergencia emocional.

### 4.4. Laboratorio Sintérgico (Neurociencia Aplicada)
* **Ruta:** `/laboratorio-sintergico` · `/sintergia`
* **Función:** Explora la Teoría Sintérgica y Neuroalgorítmica de Jacobo Grinberg aplicada a la unificación de campos atencionales en sala, coherencia interhemisférica y liderazgo cuántico.

### 4.5. Glosario de Distinciones Ontológicas
* **Ruta:** `/glosario`
* **Función:** Diccionario interactivo que estandariza el vocabulario de CREAR PSL. Proporciona búsquedas instantáneas y componentes flotantes (`GlossaryTerm`) con definiciones de términos técnicos en cualquier pantalla del campus.

### 4.6. Masterclass de Distinciones
* **Ruta:** `/masterclass` · `/masterclass-distinciones`
* **Función:** Compendio audiovisual y conceptual de las distinciones clave impartidas por los entrenadores máster de la organización.

### 4.7. Brandscript y Guiones de Maestría del Juego
* **Ruta:** `/brandscript-mj` · `/guiones-mj`
* **Función:** Guiones estructurados, arcos narrativos y pautas conversacionales para los tres fines de semana de Maestría del Juego (**Creación**, **Relación** y **Gratitud**).

### 4.8. Metodología "Vende Sin Vender"
* **Ruta:** `/vende-sin-vender` · `/causa`
* **Función:** Sistema de enrolamiento ético y transformacional. Enseña a coordinadores y líderes a inspirar acción sin recurrir a la manipulación ni a la presión tradicional de ventas.

### 4.9. Retos de Autoentrenamiento para Quantum Team (QT)
* **Ruta:** `/retos` · `/tareas-qt`
* **Función:** Tablero de desafíos prácticos semanales para el equipo de staff y líderes de apoyo, con verificación de entregables y evidencias.

### 4.10. Biblioteca de Recursos y Blueprints
* **Ruta:** `/recursos` · `/blueprint` · `/documentos`
* **Función:** Repositorio oficial de manuales operativos, plantillas de checklists, rúbricas de retroalimentación y acuerdos firmados.

---

## 5. SISTEMA DE GAMIFICACIÓN, MEDALLAS Y NIVELES DE RIGOR

### 5.1. Medallas Oficiales de Maestría
El campus otorga insignias basadas en desempeño y rigor ontológico verificable:
1. **Compliance Master (`MED-COMPLIANCE-MASTER`):** Requiere sostener Rigor > 80 y Empatía > 80 (+600 XP).
2. **Arquitecto de Visión Cuántica (`MED-ARQUITECTO-VISION`):** Dominio de la orientación en 8 pasos (+500 XP).
3. **Mente de Aprendiz (`MED-MENTE-APRENDIZ`):** Calibración de los 3 cerebros y perro guardián (+150 XP).
4. **Arquitecto de Valor (`MED-ARQUITECTO-VALOR`):** Dominio de la Ecuación de Alex Hormozi (+250 XP).
5. **Sombra Impecable (`MED-SOMBRA-IMPECABLE`):** Presencia neutral y escucha de vasija vacía (+400 XP).
6. **Guardián de la Integridad (`MED-GUARDIAN-RIGOR`):** Resolución de desvíos de rigor y acuerdos (+350 XP).

### 5.2. Niveles de Fisonomía de Conexión
* **Nivel 1:** Aprendiz Consciente (Fundamentos y Biología Decisional).
* **Nivel 2:** Arquitecto de Relaciones (Ecuación de Valor y Escucha Empática).
* **Nivel 3:** Guardián del Rigor (Gestión de Quiebres y Protocolos Operativos).
* **Nivel 4:** Liderazgo Adaptativo & Agencia Radical (Dominio integral del cuadrante de alto desempeño).

---

## 6. CENTRO DE COMANDO Y AUDITORÍA (MÓDULO DE TELEMETRÍA Y SUPERADMIN)

* **Rutas:** `/admin` · `/superadmin` (Acceso restringido a Gerencia y Directores).
* **Propósito:** Supervisión inmutable de avance, fisonomía de conexión y congruencia de los líderes.

### 6.1. Telemetría de Sesiones en Tiempo Real
* Monitoreo por líder: último acceso, duración acumulada, cantidad de lecciones completadas y porcentaje global.
* Rastreo de red: IP pública detectada y ubicación geográfica aproximada para trazabilidad de acceso.
* Clasificación de Rigor:
  * **🟢 Compliance Clearance:** Líder con avance sostenido y sin desviaciones.
  * **🔴 Action Required:** Líder con más de 3 sesiones inactivas o con retraso en módulos obligatorios.

### 6.2. Motor de Diagnóstico Socrático con Inteligencia Artificial
* Analiza la fisonomía de navegación del alumno mediante el motor Groq / Llama 3.
* Grafica al líder en el **Plano Cartesiano de Liderazgo:**
  * **Liderazgo Adaptativo:** Alto Rigor + Alta Empatía *(Estándar Oro)*.
  * **Liderazgo Complaciente:** Baja Firmeza + Alta Simpatía *(Riesgo de complicidad)*.
  * **Liderazgo Autoritario:** Alto Rigor + Baja Empatía *(Riesgo de reactividad)*.
  * **Liderazgo Negligente:** Bajo Rigor + Baja Empatía *(Riesgo crítico)*.
* Emite **Directivas Tácticas Innegociables** para el Director de Operaciones.

### 6.3. Exportación Inmutable de Bitácora
* Descarga de bitácoras completas de sesiones y eventos en formato **CSV estructurado** para cumplimiento normativo y respaldos institucionales.

---

## 7. MAPA COMPLETO DE RUTAS DEL CAMPUS INTERACTIVO (SITEMAP)

| Ruta URL | Componente React | Nivel de Acceso | Descripción del Módulo |
| :--- | :--- | :--- | :--- |
| `/` | `Navigate` ➔ `/dashboard` | Público | Redirección automática al tablero principal. |
| `/dashboard` | `Dashboard.jsx` | Protegido | Tablero de bienvenida, métricas personales y acceso al Crisol. |
| `/ruta` | `RutaFormacion.jsx` | Protegido | Mapa de viaje y árbol curricular de los 11 módulos. |
| `/modulo/:id` | `ModuloContainer.jsx` | Protegido | Contenedor dinámico de lecciones teóricas y lecturas. |
| `/evaluacion/:id`| `EvaluacionContainer.jsx`| Protegido | Cuestionario interactivo del módulo correspondiente. |
| `/evaluaciones` | `Evaluaciones.jsx` | Protegido | Vista consolidada del estado de evaluaciones aprobadas. |
| `/groundings` | `Groundings.jsx` | Protegido | Herramienta de calibración y anclaje somático pre-sala. |
| `/dinamicas` | `Dinamicas.jsx` | Protegido | Repositorio de dinámicas vivenciales con fichas de tiempos. |
| `/quiebres` | `MaquinaQuiebres.jsx` | Protegido | Simulador para deconstrucción y solución de quiebres. |
| `/laboratorio-sintergico` | `LaboratorioSintergico.jsx` | Protegido | Teoría sintérgica y neuroalgoritmos de liderazgo cuántico. |
| `/glosario` | `Glosario.jsx` | Protegido | Catálogo de definiciones y distinciones ontológicas oficiales. |
| `/masterclass` | `MasterclassDistinciones.jsx`| Protegido | Clases magistrales de lenguaje y distinciones clave. |
| `/recursos` | `BibliotecaRecursos.jsx` | Protegido | Descargas de blueprints, manuales y acuerdos institucionales. |
| `/crisol` | `GamificacionStaff.jsx` | Protegido | Simulador situacional del reto del día (pestaña simulador). |
| `/liderazgo` | `GamificacionStaff.jsx` | Protegido | Perfil gamificado, vitrina de medallas y gráfico cartesiano. |
| `/guiones-mj` | `BrandscriptGuionesMJ.jsx` | Protegido | Guiones oficiales para Maestría del Juego (C, R, G). |
| `/vende-sin-vender` | `VendeSinVender.jsx` | Protegido | Filosofía y entrenamiento en enrolamiento transformacional. |
| `/retos` | `TareasQuantumTeam.jsx` | Protegido | Asignación y cumplimiento de tareas de autoentrenamiento QT. |
| `/autoevaluacion`| `AutoevaluacionCoach.jsx` | Protegido | Matriz reflexiva de desempeño para coaches y facilitadores. |
| `/entrenamiento` | `ProgramaEntrenamiento.jsx`| Protegido | Visión general del programa y cronograma formativo. |
| `/admin` | `AdminDashboard.jsx` | Administrador | Centro de Comando, Telemetría y Diagnóstico Socrático IA. |
| `*` | `NotFound.jsx` | Público | Pantalla estándar de ruta inexistente (404). |
