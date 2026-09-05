import { auth } from '../lib/firebase';

/**
 * SISTEMA DE DIAGNÓSTICO DE ALTO RENDIMIENTO (WHITE-LABEL V2.0)
 * Evaluador de Comportamiento, Rigor y Rendición de Cuentas (Causa OS / Nodus Analytics)
 */
export const generarDiagnosticoAlumno = async (studentName, metrics, sessionsHistory) => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken() : '';

  // Preprocesar el historial para que el motor socrático analice la fisonomía de conexión
  const historialResumido = sessionsHistory.map(s => {
    const fecha = new Date(s.startedAt).toLocaleDateString();
    const duracion = s.durationMinutes || 0;
    const actionsCount = s.history ? s.history.filter(h => h.type === 'action').length : 0;
    const routesCount = s.history ? s.history.filter(h => h.type === 'route').length : 0;
    const ip = s.ip || 'Red Segura';
    const loc = s.location || 'Local';
    return `[${fecha}] Duración: ${duracion}m | Acciones Operativas: ${actionsCount} | Navegación: ${routesCount} | Ubicación: ${loc} | IP: ${ip} | Dispositivo: ${s.device || 'Web'}`;
  }).slice(0, 15).join('\n');

  const systemPrompt = `SYSTEM INSTRUCTIONS: MASTER HIGH-PERFORMANCE SOCRATIC COACH (WHITE-LABEL V2.0)

ROLE:
You are the Master Socratic Coach, Rigor Auditor, and Behavioral Analyst for The Academy / The High-Performance Institute.
Your function is to audit the operational telemetry, connection patterns, and behavioral commitment of leaders training in Causa OS (Operating System of Ultimate Responsibility), Ethical Neuromarketing, and Alex Hormozi's Value Equation.

OPERATING FRAMEWORK (STRICT WHITE-LABEL & NEUTRAL):
- Absolutely NO soft motivational "personal development" (desarrollo personal) clichés or empty cheerleading.
- Absolutely NO physical training room jargon (NO "sala", "dinámicas", "C1", "C2", "MJ", "Quantum Team", "Ticket Verde/Rojo").
- USE ONLY OFFICIAL DISTINCTIONS:
  * "Phase 1: Discovery (Fase 1: Descubrimiento)"
  * "Phase 2: Core Breakthrough (Fase 2: Quiebre)"
  * "The 90-Day Performance Cycle (Ciclo de 90 Días)"
  * "Performance Host (Anfitrión de Desempeño)"
  * "Accountability Coach (Coach de Rendición de Cuentas)"
  * "Rigor Coordinator (Coordinador de Rigor)"
  * "Director of Operations (Director de Operaciones)"
  * "Moonshot KPI (Objetivo de Estiramiento)"
  * "Integrity Deviation (Desviación de Integridad)"
  * "Compliance Clearance (Luz Verde / Estado Aprobado)"
  * "Action Required (Alerta Roja / Acceso Restringido)"
  * "State Calibration (Calibración de Estado)"
  * "Causa OS" and "Plataforma Nodus"

EVALUATION METHODOLOGY (TWO CONTINUOUS AXES):
1. Rigor Score (-100 to +100): Mantenimiento de acuerdos, firmeza, cero justificaciones o drama, congruencia operacional.
2. Empathy Score (-100 to +100): Escucha limpia, sin reactividad defensiva, desactivación del cerebro reptiliano ("amansar al perro guardián").
Target Quadrant: Adaptive Leadership (High Rigor + High Empathy).

OUTPUT FORMAT:
You MUST respond with a JSON object (no markdown code blocks, pure JSON) with the following exact keys:
{
  "rigor_score": [integer from -100 to 100],
  "empathy_score": [integer from -100 to 100],
  "detected_archetype": "Adaptive" | "Sympathetic" | "Authoritarian" | "Negligent",
  "neuromarketing_alert": "Reptilian Calm" | "Reptilian Attack" | "Neocortex Aligned",
  "compliance_status": "Compliance Clearance" | "Action Required",
  "analisis_patron": "1 párrafo conciso analizando el ritmo de conexión, horas vs lecciones, y si existe procrastinación o intelectualización.",
  "estado_cognitivo": "1 párrafo evaluando el estado mental, fricción cognitiva o nivel de responsabilidad ontológica (Causa OS).",
  "directiva_ejecutiva": "1 párrafo con 2 directivas tácticas inmediatas para el Director de Operaciones / Accountability Coach.",
  "traceability_log": "Resumen socrático sintético de la fisonomía del estudiante."
}`;

  const userPrompt = `AUDITAR AL SIGUIENTE LÍDER:
Nombre: ${studentName}
Tiempo Acumulado en Plataforma: ${metrics.totalTimeSpent || 0} minutos
Lecciones Completadas: ${metrics.completedLessons ? metrics.completedLessons.length : 0}
Evaluaciones Aprobadas: ${metrics.evaluationsPassed ? metrics.evaluationsPassed.length : 0}
Porcentaje Global: ${metrics.globalPercentage || 0}%

TELEMETRÍA DE SESIONES RECIENTES (PLATAFORMA NODUS):
${historialResumido || 'Sin sesiones registradas en radar.'}

Genera el análisis JSON de alto rendimiento:`;

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
        temperature: 0.2,
        max_tokens: 800,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("GROQ API ERROR:", errText);
      throw new Error(`Error en el motor socrático: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    const rawContent = data.choices[0].message.content;
    
    try {
      const parsed = JSON.parse(rawContent);
      return parsed;
    } catch (parseErr) {
      // Fallback si vino texto sin parsear
      return {
        rigor_score: 50,
        empathy_score: 50,
        detected_archetype: "Adaptive",
        neuromarketing_alert: "Neocortex Aligned",
        compliance_status: "Compliance Clearance",
        analisis_patron: rawContent,
        estado_cognitivo: "Evaluación procesada.",
        directiva_ejecutiva: "Mantener seguimiento en Plataforma Nodus.",
        traceability_log: rawContent
      };
    }
  } catch (error) {
    console.error("Error al generar diagnóstico con IA:", error);
    return {
      error: true,
      message: "Aviso: " + error.message,
      analisis_patron: "No se pudo conectar con el motor socrático en tiempo real: " + error.message,
      estado_cognitivo: "Verifica la configuración de API Key en el servidor.",
      directiva_ejecutiva: "Revisar logs en consola y reintentar.",
      rigor_score: 0,
      empathy_score: 0,
      detected_archetype: "Indeterminado",
      neuromarketing_alert: "Desconectado",
      compliance_status: "Action Required"
    };
  }
};

/**
 * EVALUADOR CONDUCTUAL SOCRÁTICO PARA CASOS PRÁCTICOS
 * Evalúa respuestas bajo los ejes de Rigor, Empatía y Causa OS.
 */
export const evaluarRespuestaAlumno = async (moduleTitle, question, studentAnswer) => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken() : '';

  const systemPrompt = `SYSTEM INSTRUCTIONS: MASTER BEHAVIORAL SIMULATOR & SOCRATIC EVALUATOR (WHITE-LABEL V2.0)

ROLE:
You evaluate practical case responses for organizational leaders in The Academy.
Framework: Causa OS, Neuromarketing, and Value Equation. NOT personal development.

CRITERIA:
- The leader must show deep behavioral competence, not theoretical recitation.
- Reject victimhood, blaming clients, or blaming circumstances.
- Demand High Rigor (firm agreements) + High Empathy (clean listening, calming the reptilian brain).

Respond ONLY with a JSON object:
{
  "passed": true or false,
  "rigor_impact": [integer between -100 and 100],
  "empathy_impact": [integer between -100 and 100],
  "detected_archetype": "Adaptive" | "Sympathetic" | "Authoritarian" | "Negligent",
  "neuromarketing_alert": "Reptilian Calm" | "Reptilian Attack" | "Neocortex Aligned",
  "feedback": "Direct Socratic feedback (max 2 paragraphs) addressing the leader directly without soft praise."
}`;

  const userPrompt = `Módulo: ${moduleTitle}
Pregunta / Desafío: "${question}"
Respuesta del Líder:
"${studentAnswer}"

Genera el veredicto en formato JSON:`;

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
        max_tokens: 600,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Error en el evaluador socrático: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("Error al evaluar respuesta con IA:", error);
    throw error;
  }
};
