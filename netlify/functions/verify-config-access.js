function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload)
  };
}

function createVerifyConfigAccessHandler(dependencies = {}) {
  const env = dependencies.env || process.env;

  return async function handler(event) {
    if (event.httpMethod === "OPTIONS") {
      return jsonResponse(204, {});
    }

    if (event.httpMethod !== "POST") {
      return jsonResponse(405, { error: "Metodo no permitido." });
    }

    const expectedCode = String(env.CONFIG_ACCESS_CODE || "").trim();

    if (!expectedCode) {
      return jsonResponse(500, {
        error: "La variable de entorno CONFIG_ACCESS_CODE no esta configurada."
      });
    }

    try {
      const body = JSON.parse(event.body || "{}");
      const providedCode = String(body.code || "").trim();

      if (!providedCode) {
        return jsonResponse(400, { error: "El codigo de acceso es obligatorio." });
      }

      if (providedCode !== expectedCode) {
        return jsonResponse(401, { error: "Codigo incorrecto." });
      }

      return jsonResponse(200, { ok: true });
    } catch (error) {
      return jsonResponse(500, {
        error: "No fue posible validar el acceso.",
        detail: error.message
      });
    }
  };
}

module.exports = {
  createVerifyConfigAccessHandler,
  handler: createVerifyConfigAccessHandler()
};
