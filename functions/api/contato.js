/* =====================================================================
   Cloudflare Pages Function: POST /api/contato
   Recebe o formulário do contato.html e envia o e-mail pelo Resend.

   Variáveis no painel do Cloudflare Pages (Settings > Variables and Secrets):
     RESEND_API_KEY  (secret)  chave da API do Resend, começa com "re_"
     CONTACT_TO                e-mail que recebe as mensagens
     CONTACT_FROM   (opcional) remetente; padrão "Portfólio <onboarding@resend.dev>"
                               (troque quando verificar um domínio no Resend)
   ===================================================================== */

const LIMITES = { nome: 100, email: 200, assunto: 150, mensagem: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status, body) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json; charset=utf-8" }
    });
}

function escapar(texto) {
    return texto.replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
}

export async function onRequestPost({ request, env }) {
    if (!env.RESEND_API_KEY || !env.CONTACT_TO) {
        console.error("Faltam variáveis RESEND_API_KEY ou CONTACT_TO");
        return json(500, { ok: false, erro: "config" });
    }

    let dados;
    try {
        dados = await request.json();
    } catch {
        return json(400, { ok: false, erro: "json" });
    }

    // campo invisível: humanos deixam vazio, robôs preenchem
    if (dados.site) return json(200, { ok: true });

    const campos = {};
    for (const [chave, max] of Object.entries(LIMITES)) {
        const valor = typeof dados[chave] === "string" ? dados[chave].trim() : "";
        if (!valor || valor.length > max) return json(400, { ok: false, erro: chave });
        campos[chave] = valor;
    }
    if (!EMAIL_RE.test(campos.email)) return json(400, { ok: false, erro: "email" });

    const html = `
        <h2 style="margin:0 0 16px">Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${escapar(campos.nome)}</p>
        <p><strong>E-mail:</strong> ${escapar(campos.email)}</p>
        <p><strong>Assunto:</strong> ${escapar(campos.assunto)}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space:pre-wrap">${escapar(campos.mensagem)}</p>`;

    const texto =
        `Nome: ${campos.nome}\nE-mail: ${campos.email}\nAssunto: ${campos.assunto}\n\n${campos.mensagem}`;

    const resposta = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from: env.CONTACT_FROM || "Portfólio <onboarding@resend.dev>",
            to: [env.CONTACT_TO],
            reply_to: campos.email,
            subject: `[Portfólio] ${campos.assunto}`,
            html,
            text: texto
        })
    });

    if (!resposta.ok) {
        console.error("Resend recusou:", resposta.status, await resposta.text());
        return json(502, { ok: false, erro: "envio" });
    }
    return json(200, { ok: true });
}
