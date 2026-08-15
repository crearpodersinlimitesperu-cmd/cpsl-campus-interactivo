const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const generarDiagnosticoAlumno = async (studentName, metrics, sessionsHistory) => {
  if (!GROQ_API_KEY) {
    throw new Error("No se encontró la llave de API de Groq en las variables de entorno.");
  }

  // Preprocesar el historial para que la IA lo entienda fácilmente sin tokens innecesarios
  const historialResumido = sessionsHistory.map(s => {
    return `Sesión (${new Date(s.startedAt).toLocaleDateString()}): Duración ${s.durationMinutes || 0} min. Dispositivo: ${s.device}. Módulos visitados: ${s.history ? s.history.length : 0}`;
  }).join('\n');

  const systemPrompt = `Eres un Master Coach Cuántico y Analista de Comportamiento Humano de Alto Nivel.
Tu tarea es auditar la data biométrica y de conexión de un alumno en una plataforma e-learning y dar un diagnóstico de su nivel de compromiso.
Tienes que detectar si el alumno procrastina, si tiene un progreso congruente, o si "intelectualiza" (pasa horas conectándose sin completar tareas).

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
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
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
  if (!GROQ_API_KEY) {
    throw new Error("No se encontró la llave de API de Groq en las variables de entorno.");
  }

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
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
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
